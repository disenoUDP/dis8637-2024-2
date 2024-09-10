# clase-04

Presentamos el objeto:

#Feedback


1. Sensación Emocional
2. Lo bueno / Bien logrado
3. Lo malo / Poco claro
4. Referentes


I. Alanis.maria:
1. Sale de lo común
2. Ideación bien desarrollada, en cuanto la función
3. El tamaño


II. cata pinto:
1. Intrigante, no es algo común de vers y llama la atención su forma
2. Está bien pensado en cuanto a forma y angulación
3. siento que el tamaño es muy grande
4. no se me le ocurren referentes


III. morgan
1. Amo la forma, es como la cabeza de una guitarra :0000
2. amo como se hizo la ideación y la estructura esta muy interesante (enseñenme a usar rhino :333
3. No sabria como iria la pantalla y eso me confunde un poquito


IV. AbnerV
1. Me dan ganas de jugar.
2. Me encanta la forma curva  y la función de éste. 
3. Un poco más pequeño sería ideal


V. nori
1. creo que sorpresa y felicidad, me gusta mucho ver el proceso y que muestren tantas cosas, y me gusta mucho el guitar hero tambien 
2. me encanta que lo hayan hecho inspirado en el guitar hero, y la impresion se ve buena
3. no entendí como va a funcionar con botones o algo asi, y como se va a sostener el arduino en la impresión
4. aun no se me ocurren referentes :D


VI. paulita
1. vivo el objeto es muy ergonómico y tiene mucho movimiento 
2. el angulo del objeto me parece aporta mucho al juego hay super buena comprensión del referente 
3. me gustaría que implementaran de alguna forma un código de color como el que propone el juego en los gatillos
4. guitar hero para nintendo ds


VII. Karen
1. Emoción: “woaa”  una forma extraña pero bacan!
2. Lo bueno: encuentro genial que se pueda  sostener en las manos
3. Lo malo/poco claro: quizas falta pulir algunas partes 


VIII. T1ar3
1. Ya estoy emocionada de poder utilizarlo 
2. Destaco su forma y lo fácil de manipular 
3. Todavía no estoy muy clara como va la pantalla


IX. emjesus
1. me dan ganas de jugar
2. la forma está bien resuelta respecto al usuario, buen tamaño
3.  el color no me llama a jugar, usamos los pulgares? "descansan" en algún lado?


X. Sol Oyarce
1. Diferente, es distinto a las consolas comunes del mercado
2. El tamaño es adecuado para ambas manos 
3. La base esta un poco recta, se vería mejor un poco mas diagonal 
4. No tengo ningún referente que pueda aportar


XI. vale
1. objeto ergonómico, facil de usar
2. la forma es muy interesante, tiene coherencia con lo que comentan
3. ser mas cuidadosos con las terminaciones, quizas lijar.


XII. sofi olivares
me gusta la forma que le dieron, tiene mucho sentido a lo que quieren llegar
2. la forma es muy ergonómica y permite un buen uso del objeto, es comodo
3. la parte donde van los switch tiene unos bordes que molestan un poco a la hora de posicionar la mano


XIII. Belén🪼 
1. curiosidad
2. La forma está espectacular y el tamaño está muy bueno.
3. Eso si me lo imagino jugando más apoyado en una mesa
4. no tengo referente : (


XIV. juan pareschi. 
1. Interesado y emocionado, dado como resolvieron su proyecto y el tema que están trabajando
2. Se ve mucho avance y pensamiento detrás del objeto, rescato harto todo el detalle que se pudo ver del proceso y la multifuncionalidad del modulo actual
3. Falta definir mas claro como se interactua con el objeto (es estacionario o no, como  con el código los inputs), redefinir el input del carril del medio (al funcionar con los 2 botones, puede haber problemas de que el código lea bien los inputs por lo mismo)
4. Juegos de arcade de ritmo (buscar Pop'n'Music, Taiko no Tatsujin o japanese rhythm games arcade en google) o controles de juego en general, pensar sobre todo como el usuario toma e interactúa con el objeto


![texto](./procesoHG-v2.png).

El modelo avanzó hacia una morfología más ergonómica, la cual permite un mejor agarre gracias a su tamaño disminuido respecto a la versión anterior.

Imprimí este prototpo de la forma para comprobar su comodidad y tamaño. Posteriormente utilicé un cuchillo cartonero, el cual calenté usando una mecha, para perforar el prototipo y ver en qué partes podrían ir los componentes. 

El objeto final se compondrá de:
-Carcasa impresa en 3D
-Arduino UNO r4 wifi
-Pushbutton(x2)
-Potenciómetro deslizante

Los cambios realizados responden a la nueva mecánica del juego. La versión actual del juego (v1.1.0) consiste en una mecánica de coordinación entre ambas manos. (como en el guitar hero original) Además, con la nueva morfología de heroeGuitarra se ahorra es materiales, costos, y tiempo de fabricación.

![texto](./croquisHG-5.jpeg).

En el caso de Heroe Guitarra 1.1.0 el "strum bar" y los "fret buttons" son emulados por el potenciómetro y pushbutton respectivamente. De esta forma, el usuario, con el dedo pulgar de una mano debe seleccionar el carril donde se ejecutará la acción(con el potenciómetro) y con el dedo índice de la otra mano deberá ejecutar la acción(con el pushbutton). 

Estos cambios fueron inspirados por los comentarios e ideas de Paula y Juan (pixelitaa y starbrowser).

![texto](./HGmedida1.jpeg).
Medidas de la renura por la cual se asome la "perilla" del potenciómetro


![texto](./HGmedida2.jpeg).
Medida de donde va el pushbutton. (Si se traza una linea vertical desde donde termine la curva hasta efinal del objeto, es justo al medio)


![texto](./HGmedida3.jpeg).
Medidas grosores pushbutton


![texto](./HGmedida4.jpeg).
Medidas potenciómetro slicer(comprado en MCI electronics a 5.290 CLP
https://mcielectronics.cl/shop/product/potenciometro-lineal-de-10kohm-10242/


![texto](./HGmedida5.jpeg).
Imagen explicativa de donde iria el arduino, y la pantalla.

MÁS AVANCES

https://roboticsbackend.com/arduino-control-led-brightness-with-a-potentiometer/
Con ayuda de este ejemplo, aprendí como se usa el potenciómetro.

https://roboticsbackend.com/arduino-potentiometer-with-multiple-leds-tutorial/#:~:text=To%20select%20the%20LED%2C%20you,2%2C%20and%20then%20all%20LEDs.
Con ayuda de este ejemplo, aprendí cómo, con el potenciómetro, seleccionar diferentes LEDs dependiendo del valor del pot.


Estos links me ayudaron a entender como relaciona la pantalla con los componentes, y cómo hacer que una animación sea interactuable
https://www.instructables.com/Arduino-LCD-Game/
https://www.youtube.com/watch?v=TURzbXTNaA0
https://www.youtube.com/shorts/ssNbqmXvPnQ

Este documento me ayudó a entender la relación entre los pixeles y el lenguaje binario.
https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix/

Utilicé este editor para hacer los frames.
https://ledmatrix-editor.arduino.cc

Estos links me ayudaron a entender la sintaxis del código.
https://www.arduino.cc/reference/es/language/functions/digital-io/pinmode/
https://www.w3schools.com/js/js_if_else.asp


#CÓDIGO
Fue un proceso bastante complicado, el cual se compuso por varias fases, en las que iba aprendiendo distintas cosas del funcionamiento general, tanto de los botones como del arduino, y sus actuadores y sensores.

```ino 
int ledPin = 11;
int potPin = A1;

void setup() {
  // put your setup code here, to run once:
pinMode (ledPin, OUTPUT);
}
/*Aquí definí que el LED está en modo "recibo info", el potenciómetro no lo defino, porque automáticamente viene en modo "doi info" */


void loop() {
  // put your main code here, to run repeatedly:

int potValue = analogRead(potPin);
/* Aquí, entiendo que significa que: defino una nueva variable, llamada potValue, y esta variable va a leer al potenciómetro(potPin), y "acordarse" de el valor que lea*/

int brillo   = map(potValue, 0, 1023, 0, 255);
/*El potenciómetro funciona con valores de 10 bits(0-1023), pero al usar la variable "Analog.Write, ésta lee valores de 1 byte(0-255). La variablec"map" me permite transformar estos valores proporcionalmente. Aquí le estoy diciendo que una varibale "brillo" almacenará valores , y que la variable map los escala.*/

analogWrite(ledPin, brillo);
}
```
En el código anterior aprendí cómo usar un potenciómetro, y como cambiar el brillo de los pines con él.



``` ino
#define LED_1_PIN 11
#define LED_2_PIN 10
#define LED_3_PIN 9
#define POTENTIOMETER_PIN A0

#define LED_NUMBER 3

void setup()
{
  pinMode(LED_1_PIN, OUTPUT);
  pinMode(LED_2_PIN, OUTPUT);
  pinMode(LED_3_PIN, OUTPUT);
}

void loop()
{
  int potentiometerValue = analogRead(POTENTIOMETER_PIN);
  int ledChoice = potentiometerValue / (1024 / LED_NUMBER);
  
  if (ledChoice > LED_NUMBER - 1) {
    ledChoice = LED_NUMBER - 1;
  }
  
  if (ledChoice == 0) {
    digitalWrite(LED_1_PIN, HIGH);
    digitalWrite(LED_2_PIN, LOW);
    digitalWrite(LED_3_PIN, LOW);
  }
  else if (ledChoice == 1) {
    digitalWrite(LED_1_PIN, LOW);
    digitalWrite(LED_2_PIN, HIGH);
    digitalWrite(LED_3_PIN, LOW);
  }
  else {
    digitalWrite(LED_1_PIN, LOW);
    digitalWrite(LED_2_PIN, LOW);
    digitalWrite(LED_3_PIN, HIGH);
  }
}
```
En el código anterior seguí con el proceso de entender cómo funcion un potenciómetro, esta vez, lo utilicé para alternar entre qué LEDs están encendidos.


```ino
/*
  Play Animation

  Sketch shows animation defined in animation.h

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix
*/



#include "Arduino_LED_Matrix.h"   //Include the LED_Matrix library
#include "animation.h"            //Include animation.h header file



// Create an instance of the ArduinoLEDMatrix class
ArduinoLEDMatrix matrix;  

void setup() {
  Serial.begin(115200);
  // you can also load frames at runtime, without stopping the refresh
  matrix.loadSequence(KKK);
  matrix.begin();
  // turn on autoscroll to avoid calling next() to show the next frame; the paramenter is in milliseconds
  // matrix.autoscroll(300);
  matrix.play(true);
}

void loop() {
  delay(500);
  Serial.println(millis());
}
const uint32_t KKK[][4] = {
	{
		0x8108100,
		0x122b22b0,
		0x1801801,
		66
	},
	{
		0x8308300,
		0x12292290,
		0x1801801,
		66
	},
	{
		0x8108100,
		0x12292290,
		0x1803803,
		66
	}
};
```
En el código anterior se presenta el primer avance importante respecto al uso del display de la plca Arduino UNO r4 Wifi. En este caso, se ejecuta una animación, la cual corre en loop.  


```ino
/*
  Single Frame
  
  Displays single frames using matrix.loadFrame
  
  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix
*/

#include "Arduino_LED_Matrix.h"  // Include the LED_Matrix library
#include "framesv2.h"              // Include a header file containing some custom icons
int potPin = A0;
ArduinoLEDMatrix matrix;  // Create an instance of the ArduinoLEDMatrix class
int botonWeno = 2;
int botonValue;

void setup() {
  Serial.begin(115200);  // Initialize serial communication at a baud rate of 115200
  matrix.begin();        // Initialize the LED matrix
  pinMode(botonWeno, INPUT);

}

void loop() {

  int potValue = analogRead(potPin);
  // Load and display the "chip" frame on the LED matrix

  int carril = map(potValue, 0, 1023, 0, 2);

  if (potValue > 140 && potValue < 401) {
    matrix.loadFrame(ogIzq);

  }

  // Load and display the "danger" frame on the LED matrix
  else if (potValue > 400 && potValue < 639) {
    matrix.loadFrame(ogMed);
  }

  // Load and display the "happy" frame on the LED matrix
  else if (potValue > 638 && potValue < 890) {
    matrix.loadFrame(ogDer);

  }

int botonValue = digitalRead(botonWeno);

 if(botonWeno == HIGH) {
   matrix.loadFrame(finFase1);
}

}
```
En este còdigo, con el slider puedo seleccionar el carril. El paso siguiente es que al apretar el boton en el carril ocrrecto, se apague el led.


 



