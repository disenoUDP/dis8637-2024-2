# clase-06

## Tutorial Paulita 2: "Dimmer Led con Arduino Cloud en placa Arduino R4 wifi"

El primer paso para este proyecto es entender bien que es lo que estamos intentando realizar, ¿Como funciona modificar el brillo de un led?
Hasta el momento hemos trabajado con leds en pins digitales, Que nos permiten dos estados HIGH o LOW, osea el led esta prendido o apagado
¿Como se puede entonces, bajar o subir la intensidad del led? Bueno para esto hay que entender que HIGH y LOW significan envio el maximo 
de voltaje o el minimo, pero tambien podemos enviar otros niveles de voltaje, que se encuentren entre el minimo del led (0) o su maximo (255)
y para esto debemos usar un pin PWM ~ que nos permita movernos en otros estados y el interfaz que queremos utilizar para movernos entre esas
variables es el SLIDER.

Esta es la conexión al led que yo estoy utilizando 

![Captura de pantalla 2024-09-29 203130](https://github.com/user-attachments/assets/c5b83d8d-930b-4ebd-bfe0-7fc6747f0230)


El segundo paso es crear una **THING** (cosa) y vamos a nombrarla **DIMMER LED**, Luego vamos a en el lado derecho de la pantalla asociarle una placa,
en este caso la **Arduino R4 Wifi** y vamos a asociar tambien la **RED WIFI** a la que estamos conecatando el proyecto (y la placa).

![tuto2](https://github.com/user-attachments/assets/e7c492fd-47a9-42f3-9d6e-380397808d82)

Una vez listo esto en la misma pestaña de setup crearemos una **VARIABLE** que sera la que controlara el slider osea la que determinara cuanto voltaje
recibe el led y por tanto su brillo, yo la nombre **ledBrillo** y DEBE ser una variable de tipo **Integer number** osea que deberia aparecer abajo
como **int ledBrillo;** debemos dejar las otras configuraciones tal y como estan, permitirle **READ AND WRITE**.

![Captura de pantalla 2024-09-29 202247](https://github.com/user-attachments/assets/624d26e0-a45b-487c-b7c5-d43d8b63226c)



Luego pasamos al codigo en la barra de arriba a la derecha de nuestra **THING** dira **SKETCH** que es el siguiente

```
#include "thingProperties.h"

// Definan el pin al que conectar el led, este tiene que ser un pin PWM osea que tenga ~ 
const int ledPin = 11;

void setup() {
  // iniciar puerto serial
  Serial.begin(9600);

  // delay para el serial monitor
  delay(1500);

  // añadir lo definido en propiedades
  initProperties();

  // conectar a la cloud
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);

  // LedPin es un output
  pinMode(ledPin, OUTPUT);
}

void loop() {
  // esto es para que se sincronize continuamente con la nube
  ArduinoCloud.update();
}

// esta es la funcion que se genero de manera automatica cuando creamos la variable ledBrillo en setup y define que pasa cuando cambiamos el valor de esa variable
void onLedBrilloChange() {

  // aca escribe osea muestra el valor que este llegando del slider que esta conectado a int ledBrillo;  y se lo aplica al led
  analogWrite(ledPin, ledBrillo);
}


```

Una vez creado el codigo llegamos al tecer paso, iremos a la ventana llamada dashboards, Crearemos un nuevo dashboard CON EL MISMO NOMBRE DEL PROYECTO
:) ORDEN PORFAVOR ES FUNDAMENTAL y dentro del dashboard crearemos un slider, al crearlo veremos que podemos **Linkear una variable** y alli debemos linkearlo
a la variable **ledBrillo** que creamos previamente, luego bajar donde se encuentra la configuracion del rango del slider **RANGE** y definirlo en **Min = 0** y
**Max = 255**.

![dashboard](https://github.com/user-attachments/assets/6b340b3e-6931-4608-8cec-615b5a938752)

![dashhh](https://github.com/user-attachments/assets/0f556818-bc02-463c-ac06-2b3249cd1d77)

Una vez listo este paso volveremos a nuestra **THING** iremos a la ventana **SKETCH** y subiremos el codigo a la placa presionando **UPLOAD**, si el codigo se
sube a la placa y luego al ir a los dashboards y mover nuestro slider, si **NO** funciona, lo mas probable es que la red wifi sea inestable, probar otra, al hacer 
**upload** nuestra placa debe aparecer como **ONLINE** si no es asi reconectar la placa a la red o probar con otra red wifi.

Espero haya sido de su ayuda :) si tienen problemas, dudas de cualquier tipo haganmelo saber 


















## **MARK 3: Iteración con IOT Arduino**

Proyecto Mark 3 nace de la idea de poder mostrarles un proyecto mas didactico y terminado para motivar y aprender haciendo sobre la Arduino Cloud
este casco en particular es uno de los makes con Arduino mas iterados ya que es simple, pero muy bello en presentación y es un proyecto muy deivertido
para iterar muchisimas veces añadiendo distintos cambios al casco, su motorización y su interfaz.

Para esta ocación yo me propongo hacer el casco con lo siguiente:

- Motorizado del face plate mediante servomotores.
- Añadir leds a los ojos del casco.
- Controlar ambas funciónes sin ningun actuador fisico, solo utilizando la Arduino Cloud.

  ![IMG_7615](https://github.com/user-attachments/assets/9045a542-c125-4bd1-8d94-5d859098d9d8)


Para inicar el proyecto busco algun tutorial de Mark 3 que detalle bien el proceso de motorizar el casco mediante arduino
elijo este, que tiene todo lo que me interesa:
- Incluye las piezas STL.
- Tiene un instructivo PDF y videos
- Detalla paso a paso el armado de los componentes.
- Detalla paso a paso el enamble del casco.
- Reviso su pagina de thingiverse y cuenta con varios makes y buenas reviews.

  [Tutorial](https://youtu.be/9uIXtODioGM?si=D6TZqk6rJ-r9uaVb)

Luego veo **TODO** el tutorial y **LEO** el PDF para comprender encima de que estoy trabajando sobre todo el codigo y me pregunto:

- Este codigo corre en las placas IOT que tengo?
- Que librerias utiliza y son compatibles con mi placa? ServoEasing

  Verifico esto y elijo la mejor placa para el proyecto: Arduino Nano 33 IOT

Luego analizo el codigo y defino cual es la variable que esta siendo controlada por un boton y como convertirla
en una varibale digital en la nube, Para esto debo preguntarme que esta haciendo el boton, En este caso estaba activando
o desactivando variables que definian dos estados para el casco: Faceplate abierta o Faceplate cerrada.


```
#include "ServoEasing.h"
ServoEasing servoTop;
ServoEasing servoBottom;
const int action_pin = 2;
int location = 31;
int bottom_closed = 107;
int top_closed = 167;
int bottom_open = 20;
int top_open = 20;
void setup()
{
 pinMode(action_pin, INPUT_PULLUP);
 servoTop.attach(9);
 servoBottom.attach(10);
 setSpeedForAllServos(190);
 servoTop.setEasingType(EASE_CUBIC_IN_OUT);
 servoBottom.setEasingType(EASE_CUBIC_IN_OUT);
 synchronizeAllServosStartAndWaitForAllServosToStop();
}
void loop()
{
 int proximity = digitalRead(action_pin);
 if (proximity == LOW)
 {
 if (location > bottom_open) {
 servoTop.setEaseTo(top_open);
 servoBottom.setEaseTo(bottom_open);
 synchronizeAllServosStartAndWaitForAllServosToStop();
 location = bottom_open;
 delay(600);
 } else {
 servoTop.setEaseTo(top_closed);
 servoBottom.setEaseTo(bottom_closed);
 synchronizeAllServosStartAndWaitForAllServosToStop();
 location = bottom_closed;
 delay(600);
 }
 }
}

```
La variable que yo creo en la nube tiene el fin de remplazar a **const int action_pin = 2;** y la nombro 
**servoPosition** esta variable es de tipo boleana, porque activa o desactiva una acción.

![var](https://github.com/user-attachments/assets/c9b7de6c-103c-4ee9-9acc-ac7314b92694)

Luego incorporo en el sketch, sin borrar nada de lo que se creo tras añadir la variable el resto del codigo
menos el action_pin, pero en vez de añadir las acciones que quiero que realice al void loop las añado
al void que creo que tiene el nombre de la variable **void onServoPositionChange()**

```
void onServoPositionChange() {
  if (servoPosition == 1) {  // Casco abierto
    servoTop.setEaseTo(top_open);
    servoBottom.setEaseTo(bottom_open);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_open;

  } else if (servoPosition == 0) {  // Casco cerrado
    servoTop.setEaseTo(top_closed);
    servoBottom.setEaseTo(bottom_closed);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_closed;
  }
}
```
Una vez listo el codigo, creo el dashboard y asocio un Switch con la función **ServoPosition**

![dashi](https://github.com/user-attachments/assets/0fe6b759-195c-40ab-8eca-9e2f453f0b12)

Ahora recien, hago upload del codigo a la placa y conecto los servomotores para verificar que funcionen

Funcionan!

Voy al siguiente paso, Como añado los leds, para esto simplemente añado los leds como en el ejercicio del swith pero en vez de asociarle
una variable en la nube, la añado en el codigo, ya que quiero que sean controlados tambien dentro de los dos estados del casco.

```
const int ledLeft = 5;
const int ledRight = 6;

```
Y para asociarlo a los estados que definimos en el codigo, simplemente los añado mediante digitalWrite
```
void onServoPositionChange() {
  if (servoPosition == 1) {  // Casco Abierto
    digitalWrite(ledLeft, HIGH);
    digitalWrite(ledRight, HIGH);
    servoTop.setEaseTo(top_open);
    servoBottom.setEaseTo(bottom_open);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_open;


    digitalWrite(ledLeft, LOW);
    digitalWrite(ledRight, LOW);
  } else if (servoPosition == 0) {  // Casco Cerrado
    servoTop.setEaseTo(top_closed);
    servoBottom.setEaseTo(bottom_closed);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_closed;

```
Luego me nace otra inquietud, Me gustaria hacer que los leds parpadeen un par de segundos cuando se cierra el casco
asi como que se esta iniciando el sistema.

Para esto busco como puedo añadir **Blinking** sin usar delay ya que usar delay entorpezco el funcionamiento de los servos
y es mas probable que experimente errores debido a que detiene el codigo, etc.

Utilizo la pagina en arduino documentation de **Blink without delay** y la adapto a mi codigo ya existente resultando asi en el codigo final.

```
#include "ServoEasing.hpp" //Este texto trabaja con la libreria servo easing, 
#include "thingProperties.h"  // Include Arduino Cloud properties

// crear los objetos servoEasing
ServoEasing servoTop;
ServoEasing servoBottom;

// ubicación inicial servo
int location = 31;

// Definir la ubicación del servo en todos sus estados
int bottom_closed = 107;
int top_closed = 167;
int bottom_open = 20;
int top_open = 20;

// definir los pins para los ojitos
const int ledLeft = 5;
const int ledRight = 6;

// settings para el blinking
const unsigned long blinkInterval = 10; // tiempo entre parpadeos
const unsigned long blinkDuration = 1000; // Tiempo total de la acción de parpadear
unsigned long previousMillis = 0; 
unsigned long blinkStartMillis = 0; 
bool isBlinking = false;  
bool ledState = LOW; // si el blinking no esta encendido los leds se encuentran apagados.

void setup() {
  // Initialize properties defined in the Arduino Cloud
  initProperties();

  // Start Arduino IoT Cloud connection
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);

  // Pines a los que estan conectados los servos
  servoTop.attach(9);
  servoBottom.attach(10);

  // determina velocidad y suavidad del movimiento de los servos
  setSpeedForAllServos(190);
  servoTop.setEasingType(EASE_CUBIC_IN_OUT);
  servoBottom.setEasingType(EASE_CUBIC_IN_OUT);

  // Sincroniza los servos
  synchronizeAllServosStartAndWaitForAllServosToStop();

  // define los leds como outputs
  pinMode(ledLeft, OUTPUT);
  pinMode(ledRight, OUTPUT);

  // Inicia con los leds apagados
  digitalWrite(ledLeft, LOW);
  digitalWrite(ledRight, LOW);
}

void loop() {
  // Continuously synchronize with the Arduino Cloud
  ArduinoCloud.update();

  if (isBlinking) {
    unsigned long currentMillis = millis();

    // revisar el estado de las posiciones del casco para determinar si hay que activar blink o no
    if (currentMillis - previousMillis >= blinkInterval) {
      previousMillis = currentMillis;
      //checar el estado de los leds 
      ledState = !ledState;
      digitalWrite(ledLeft, ledState);
      digitalWrite(ledRight, ledState);
    }

    // Checar si ya terminaron de parpadear los leds
    if (currentMillis - blinkStartMillis >= blinkDuration) {
      isBlinking = false;
      // Si terminaron, manten los leds encendidos
      digitalWrite(ledLeft, HIGH);
      digitalWrite(ledRight, HIGH);
    }
  }
}

// Function that is called whenever servoPosition changes in the cloud
void onServoPositionChange() {
  if (servoPosition == 1) {  // Casco abierto
    servoTop.setEaseTo(top_open);
    servoBottom.setEaseTo(bottom_open);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_open;

    // Apaga los leds si es que el casco no esta abierto
    digitalWrite(ledLeft, LOW);
    digitalWrite(ledRight, LOW);
  } else if (servoPosition == 0) {  // Casco cerrado
    servoTop.setEaseTo(top_closed);
    servoBottom.setEaseTo(bottom_closed);
    synchronizeAllServosStartAndWaitForAllServosToStop();
    location = bottom_closed;

    // comenzar a parpadear
    isBlinking = true;
    blinkStartMillis = millis();  // grabar cuando comienza a parpadear
    previousMillis = blinkStartMillis;  // iniciar el timer
    ledState = LOW; // inicar con los leds apagados
  }
}
```

Una vez tengo revisado el codigo y los componentes funcionan en protoboard, comienzo a ensamblar tanto componentes como casco:

- aqui va el video 
