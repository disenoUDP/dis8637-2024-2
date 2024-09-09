
https://github.com/user-attachments/assets/646359c1-f907-4201-9201-39cc2cefaaa2
# clase-05

10 de septiembre de 2024

## Retroalimentación y ayuda entre pares

Ayudamos al grupo de Morgan y Sofía, compartiendoles el archivo de nuestro visor, ayudándoles a adaptar la pieza a su objeto y finalmente pusimos su objeto a imprimir en la impresora 3d, mencionando también que hicimos una pequeña introducción a Morgan en Rhino.

![IMG_2650](https://github.com/user-attachments/assets/3c6372e4-7ca7-4cd1-a118-e5f344e84487)

![IMG_2657](https://github.com/user-attachments/assets/313a4652-a228-4987-bc4c-3733af3ddbec)


Emilia intentó ayudarnos a solucionar un problema con el código del speaker pero no funcionó :(

También ayudamos a Emi haciéndole una breve intro al slicer Ultimaker cura, para que ella pudiera ayudar a las personas que irían al laboratorio el día sábado. 

Hicimos pequeñas "cápsulas" tutoriales que fuimos grabando a lo largo de nuestro proceso y las compartimos.

Explicamos a Santiago y Tiare como habiamos hecho la division de nuestra pieza 3D, porque nos preguntaron en que tolerancia habiamos hecho el encaje.

![consejo_tiare_stgo](https://github.com/user-attachments/assets/3b80b1fb-43d7-4918-a4bf-79dffaeab209) 

## Explicación textual

Lo que queremos que sea
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

En cuanto a su dimensión física, proyectamos que este objeto podría tener una forma más orgánica en la parte inferior, para lograr una mejor ergonomía con las manos y un agarre más cómodo. Su materialidad será de madera e impresión 3D. Tendrá a la vista un botón, una matriz led y unos orificios hacia su interior que permiten la salida del sonido. En el interior se encontrarán escondidos el arduino, un parlante y las demás conexiones. 

Lo que es
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

## Documentación audiovisual

- Medimos los elementos de los componentes, para poder ubicarlos dentro de la proporción del objeto y priorizar el buen funcionamiento y comodidad del usuario.

![Ubicación_componentes](https://github.com/user-attachments/assets/26c63777-e0a3-4f30-8c81-035a3050efca)

- Primer modelo realizado en clase, algunos elementos fueron cambiados, como el boton y el tamaño del speaker lo que nos llevo a variar en su forma.

![Primer_acercamiento_formal](https://github.com/user-attachments/assets/43528323-b057-482c-9261-75206b473a61)

- Este primer modelo, contaba con un visor, cuyo principal elemento sería una lupa, esto con el fin de acercar la pantalla led a la visión del usuario.
Estaba compuesto por un soporte desmontable, que permitiera ubicar la lupa en la parte superior de la carcasa, este visor fue descartado por la alta probabilidad de distorsion de la pantalla que podía provocar dependiendo del ángulo en que fuera visto. 

![Pieza_visor_primer_prototipo](https://github.com/user-attachments/assets/7bde45f9-fbc8-4a63-99e0-d9af7ac2826c)

- Definimos la formalidad final del prototipo y la ubicación de sus componentes

- Carcasa de prototipo armada.

![prototipo](https://github.com/user-attachments/assets/ceedf951-1fe8-44d8-8551-3bb5ac90e240)


https://github.com/user-attachments/assets/9c6cbb66-ea07-461d-8140-be1caa0b029b


- Usamos un speaker de 4 ohm

![Speaker](https://github.com/user-attachments/assets/cbdf7ac3-661e-41b1-89c8-b4cc89b9a143)

- Usamos un botón arcade con led de 12v

![Botón](https://github.com/user-attachments/assets/f715aa49-fc03-4bf9-86e1-6cd7b3c27d1f)

- Mediante ayuda del profesor, tutoriales y códigos de arduino, logramos descubrir los pines mas convenientes, donde conectar ambos componentes.



![Conexión_componentes (1)](https://github.com/user-attachments/assets/84702961-b32f-4690-adf6-3bb1e5a6e194)

- Luego de descubrir donde van las conexiones negativas y positivas soldamos los cables a los componentes.


- Logramos hacer funcionar el speaker y el botón mediante codigos de arduino ;)

https://github.com/user-attachments/assets/2fdbcc98-151c-4b4e-977c-5c91b9a841e2






## Manual de uso textual

### Caso hipotético terminado

1. Conectar el objeto interactivo "MarcaMorsa" a una fuente de alimentación para encenderlo.

2. La pantalla te va a recibir con un “Hola” escrito en español seguido de un hola en clave morse (escrito y sonoro).

3. La pantalla mostrará un punto con su respectivo sonido (**C1**) para que el usuario lo recree presionando el botón, al hacer el click sonará el sonido 1 también. 

4. Si lo consigue, aparecerá una animación de logro con el sonido **C1** y pasará a la siguiente fase, sino, aparecerá una animación de una cruz (X) con un sonido **C4** y deberá repetirlo.

5. En la siguiente fase la pantalla mostrará una línea con su respectivo sonido (**C2**) y para que el usuario lo recree manteniendo presionado el botón, al hacer el hold sonará el sonido 2.

6. Si lo consigue, aparecerá una animación de logro con el sonido **C2** y pasará a la siguiente fase, sino, aparecerá la animación de la cruz y deberá repetirlo.

7. En la siguiente fase se reproducirá un sonido en clave morse de la letra M ( - - ), para que el usuario lo recree. Si lo logra, aparecerá la letra M en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación de cruz y su sonido de fallo.

8.  En la siguiente fase se reproducirá otro sonido en clave morse de la letra O ( - - - ), para que el usuario lo recree. Si lo logra aparecerá la letra O en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación de cruz y su sonido de fallo.
  
9.   En la siguiente fase se reproducirá otro sonido en clave morse, la letra R (. - .), para que el usuario lo recree. Si lo logra aparecerá la letra R en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y sonido de fallo.

10. En la siguiente fase se reproducirá otro sonido en clave morse, la letra S (. . .), para que el usuario lo recree. Si lo logra aparecerá la letra S en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y un sonido de fallo.

11. En la siguiente fase se reproducirá otro sonido en clave morse, la letra A (. -), para que el usuario lo recree. Si lo logra aparecerá la letra A en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y sonido de fallo.

12. Al lograr superar todos los niveles mencionados anteriormente, aparecerá una animación de la mascota del juego, una morsa que te guiñará el ojo en señal de felicitación por escribir su nombre.

13. Finalmente el juego se reiniciará.

### Lo quequ


## Orden del código

## Código prueba pulsador ## 

#include "LedControl.h"
/*

LedControl lc=LedControl(12,11,10,1);
int button =2;
/* we always wait a bit between updates of the display */
unsigned long delaytime=500;
  byte six[8]={B00000000,B11011011,B11011011,B00000000,B00000000,B11011011,B11011011,B00000000};
  byte five[8]={B00000000,B01100110,B01100110,B00011000,B00011000,B01100110,B01100110,B00000000};
  byte four[8]={B00000000,B01100110,B01100110,B00000000,B00000000,B01100110,B01100110,B00000000};
  byte three[8]={B11000000,B11000000,B00000000,B00011000,B00011000,B00000000,B00000011,B00000011};
  byte two[8]={B00000000,B00000000,B00000000,B01100110,B01100110,B00000000,B00000000,B00000000};
  byte one[8]={B00000000,B00000000,B00000000,B00011000,B00011000,B00000000,B00000000,B00000000};

void setup() {
  /*
   The MAX72XX is in power-saving mode on startup,
   we have to do a wakeup call
   */
  
  pinMode(button,INPUT);
  lc.shutdown(0,false);
  /* Set the brightness to a medium values */
  lc.setIntensity(0,14);
  /* and clear the display */
  lc.clearDisplay(0);
}

/*
 This method will display the characters
 (you need at least 7x7 leds to see the whole chars)
 */
void one1() {
  /* here is the data for the characters */
  
  /* now display them one by one with a small delay */
  lc.setRow(0,0,one[0]);
  lc.setRow(0,1,one[1]);
  lc.setRow(0,2,one[2]);
  lc.setRow(0,3,one[3]);
  lc.setRow(0,4,one[4]);
  lc.setRow(0,5,one[5]);
  lc.setRow(0,6,one[6]);
  lc.setRow(0,7,one[7]);
  
  delay(delaytime);
}
void two2() {
  /* here is the data for the characters */
  
  /* now display them one by one with a small delay */
  lc.setRow(0,0,two[0]);
  lc.setRow(0,1,two[1]);
  lc.setRow(0,2,two[2]);
  lc.setRow(0,3,two[3]);
  lc.setRow(0,4,two[4]);
  lc.setRow(0,5,two[5]);
  lc.setRow(0,6,two[6]);
  lc.setRow(0,7,two[7]);
  
  delay(delaytime);
}
void three3() {
  /* here is the data for the characters */
  
  /* now display them one by one with a small delay */
  lc.setRow(0,0,three[0]);
  lc.setRow(0,1,three[1]);
  lc.setRow(0,2,three[2]);
  lc.setRow(0,3,three[3]);
  lc.setRow(0,4,three[4]);
  lc.setRow(0,5,three[5]);
  lc.setRow(0,6,three[6]);
  lc.setRow(0,7,three[7]);
  
  delay(delaytime);
}
void four4() {
  /* here is the data for the characters */
  
  /* now display them four by four with a small delay */
  lc.setRow(0,0,four[0]);
  lc.setRow(0,1,four[1]);
  lc.setRow(0,2,four[2]);
  lc.setRow(0,3,four[3]);
  lc.setRow(0,4,four[4]);
  lc.setRow(0,5,four[5]);
  lc.setRow(0,6,four[6]);
  lc.setRow(0,7,four[7]);
 
  delay(delaytime);
}
void five5() {
  /* here is the data for the characters */
  
  /* now display them five by five with a small delay */
  lc.setRow(0,0,five[0]);
  lc.setRow(0,1,five[1]);
  lc.setRow(0,2,five[2]);
  lc.setRow(0,3,five[3]);
  lc.setRow(0,4,five[4]);
  lc.setRow(0,5,five[5]);
  lc.setRow(0,6,five[6]);
  lc.setRow(0,7,five[7]);

  delay(delaytime);
}
void six6() {
  /* here is the data for the characters */
  
  /* now display them six by six with a small delay */
  lc.setRow(0,0,six[0]);
  lc.setRow(0,1,six[1]);
  lc.setRow(0,2,six[2]);
  lc.setRow(0,3,six[3]);
  lc.setRow(0,4,six[4]);
  lc.setRow(0,5,six[5]);
  lc.setRow(0,6,six[6]);
  lc.setRow(0,7,six[7]);
  
  delay(delaytime);
}


void loop() { 
  int x ;
  if(digitalRead(button)== HIGH )
{
 x = random(1,7);

switch(x){
case 1 : one1();
break;
case 2 : two2();
break;
case 3 : three3();
break;
case 4 : four4();
break;
case 5 : five5();
break;
case 6 : six6();
break;}
}
}


## Código prueba Speaker ##

/*

  Melody

  Plays a melody

  circuit:

  - 8 ohm speaker on digital pin 8

  created 21 Jan 2010

  modified 30 Aug 2011

  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/Tone

*/

#include "pitches.h"

// notes in the melody:
int melody[] = {

  NOTE_C6
};

// note durations: 3 = quarter note, 8 = eighth note, etc.:
int noteDurations[] = {

3
};

void setup() {

  // iterate over the notes of the melody:

  for (int thisNote = 0; thisNote < 8; thisNote++) {

    // to calculate the note duration, take one second divided by the note type.

    //e.g. quarter note = 1000 / 4, eighth note = 1000/8, etc.

    int noteDuration = 1000 / noteDurations[thisNote];

    tone(8, melody[thisNote], noteDuration);

    // to distinguish the notes, set a minimum time between them.

    // the note's duration + 30% seems to work well:

    int pauseBetweenNotes = noteDuration * 1;

    delay(pauseBetweenNotes);

    // stop the tone playing:

    noTone(8);

  }
}

void loop() {

  // no need to repeat the melody.
}

## Código animación hola morse y español ##

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
const int BUTTON_PIN = 2;

void setup() {

  if (BUTTON_PIN, IMPUT, PULLUP);
  digitalread (2);
}
else  {
  Serial.begin(115200);
  // you can also load frames at runtime, without stopping the refresh
  matrix.loadSequence(animation);
  matrix.begin();
  // turn on autoscroll to avoid calling next() to show the next frame; the paramenter is in milliseconds
  // matrix.autoscroll(300);
  matrix.play(true);
}

void loop() {
  delay(500);
  Serial.println(millis());
}


const uint32_t animation[][4] = {
	{
		0x30c30c30,
		0xc3fc3fc3,
		0xc30c30c,
		600
	},
	{
		0x3fc3fc30,
		0xc30c30c3,
		0xc3fc3fc,
		600
	},
	{
		0xc00c00c,
		0xc00c00,
		0xc00f80f8,
		600
	},
	{
		0x3fc3fc30,
		0xc30c3fc3,
		0xfc30c30c,
		600
	},
	{
		0x0,
		0x1540,
		0x0,
		600
	},
	{
		0x0,
		0x36c0,
		0x0,
		600
	},
	{
		0x0,
		0x5a80,
		0x0,
		600
	},
	{
		0x0,
		0xb00,
		0x0,
		600
	}
};

**Links Visitados**

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/toneMelody​/
  
- pitches.h
pitches.h. GitHub Gist: instantly share code, notes, and snippets.
gist.github.com

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/Button​/

- programar un pulsador en Arduino para animación LED - Search Videos Videos
bing.com

- https://www.profetolocka.com.ar/2024/07/22/tutorial-usando-la-matriz-led-del-arduino-uno-r4-parte-1/ 

Al realizar el código, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los códigos que debíamos usar, ya que estas se encontraban disponibles, pero no en todas las ocasiones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiese abrirla.

(Acabamos de descubrir que discord funciona con lenguaje markdown y documentos de Google igual :o)

## Resultado Final



