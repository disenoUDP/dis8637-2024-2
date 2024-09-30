# clase-08

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





