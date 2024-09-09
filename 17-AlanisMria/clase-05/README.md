# clase-05

10 de septiembre de 2024

## Retroalimentación y ayuda entre pares

- Ayudamos al grupo de Morgan y Sofía, compartiendoles el archivo de nuestro visor, ayudándoles a adaptar la pieza a su objeto y finalmente pusimos su objeto a imprimir en la impresora 3d, mencionando también que hicimos una pequeña introducción a Morgan en Rhino.

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

Primeros bocetos y lluvia de ideas que hicimos en un moodboard de nuestro Figjam colaborativo

<img width="570" alt="Captura de pantalla 2024-09-08 a la(s) 21 31 59" src="https://github.com/user-attachments/assets/12577980-0607-450e-8abc-729be99b69f8">

Después de la corrección comenzó la etapa de modelado 3D y prototipado, para ver posibles dimensiones, formas y disposición de los elementos.

![IMG_2696](https://github.com/user-attachments/assets/ca27ee2c-dec3-492a-98d9-13925ae4cffa)

Este fue el primer modelo realizado en clase, algunos elementos fueron cambiados, como que en vez de modelar un botón que se adaptara a las dimensiones del pulsador disponible en sala decidimos comprar un pulsador de arcade, también el tamaño del speaker fue redefinido. Todo lo anterior nos llevó a variar su forma. Andrés nos sugirió que cambiáramos la forma de los agujeros para el speaker, por lo que se decidió que fuera con la forma de la mascota para incluirla de forma más natural en el diseño físico.

**Imagen del primer modelo previo a los cambios mencionados anteriormente**
![Primer_acercamiento_formal](https://github.com/user-attachments/assets/43528323-b057-482c-9261-75206b473a61)

Este primer modelo, contaba con un visor, cuyo principal elemento sería una lupa, esto tomando en cuenta la idea del proyecto de Santiago e Ivo para "agrandar/acercar la pantalla led" a la visión del usuario. Estaba compuesto por un soporte desmontable, que permitía ubicar la lupa en la parte superior de la carcasa. Este visor fue descartado por la alta probabilidad de distorsión de la pantalla que podía provocar dependiendo del ángulo en que fuera visto, además de que pensamos que no era muy sensato con respecto al tiempo que teníamos que construirlo. Fue por eso que decidimos hacer una pieza de color negra que centrara, aislara y resaltara la luz de la Matriz LED (esta misma pieza fue la que le dimos al grupo de Moss y Sofi).

**Pieza visor primer prototipo**
![Pieza_visor_primer_prototipo](https://github.com/user-attachments/assets/7bde45f9-fbc8-4a63-99e0-d9af7ac2826c)

**Pieza nueva visor aislante**
![Captura de pantalla 2024-09-09 104057](https://github.com/user-attachments/assets/d7229d48-ca1b-4502-8052-b57ad357efbd)
![Captura de pantalla 2024-09-09 104154](https://github.com/user-attachments/assets/0a311c72-58c0-4baa-9b67-9bd7d05fa91c)


También comenzamos a hacer experimentaciones con las animaciones de la LED en <https://ledmatrix-editor.arduino.cc/>


https://github.com/user-attachments/assets/9075fb73-d20f-4405-bf96-9e03a68bdeac


**Materiales**
- Botón arcade con led de 12v (compra por mercado libre)
- Speaker de 4 ohm (se lo compramos a la Paula)

**Partes del pulsador LED Arcade que armamos según el tutorial de youtube:**
<https://m.youtube.com/watch?v=sRhLCAXLlMc>

![Botón](https://github.com/user-attachments/assets/f715aa49-fc03-4bf9-86e1-6cd7b3c27d1f)
![IMG_2698](https://github.com/user-attachments/assets/0f3bac0f-37b7-4554-bfd2-0f819a90a8c9)
![Speaker](https://github.com/user-attachments/assets/cbdf7ac3-661e-41b1-89c8-b4cc89b9a143)

**Carcasa de prototipo armada para la entrega del 3**

![prototipo](https://github.com/user-attachments/assets/ceedf951-1fe8-44d8-8551-3bb5ac90e240)

<https://github.com/user-attachments/assets/9c6cbb66-ea07-461d-8140-be1caa0b029b>

Después de la corrección, se decidió centrar la morsa para que el objeto fuera completamente simétrico, no quisimos cambiar el botón ya que el que sea un único botón y grande te tienta a apretarlo, por lo que definimos la formalidad final del prototipo y la ubicación de sus componentes

![disposición_interna](https://github.com/user-attachments/assets/84af1df8-c4e1-4ca1-a6e8-18296ee6ae8e)

Hicimos pruebas para ver que nuestros componentes funcionaran, con ayuda del Arduino, del multímetro y Aaron.

<https://github.com/user-attachments/assets/926fe974-6d12-47e7-9c0a-9a0f67151f40>

Mediante ayuda del profesor, tutoriales y códigos de arduino, logramos descubrir los pines más convenientes, donde conectar ambos componentes.

Fuentes:
- <https://docs.arduino.cc/built-in-examples/digital/toneMelody/>
- <https://gist.github.com/mikeputnam/2820675#file-pitches-h>
- <https://docs.arduino.cc/built-in-examples/digital/Button/>

![Conexión_componentes (1)](https://github.com/user-attachments/assets/84702961-b32f-4690-adf6-3bb1e5a6e194)

Luego de descubrir y confirmar donde van las conexiones negativas y positivas, cortamos los cables y luego los soldamos a sus respectivos componentes.

https://github.com/user-attachments/assets/6ba302c7-f9ce-47a3-a28b-e3b3d07060a4
![soldandoo](https://github.com/user-attachments/assets/d13386ef-7704-4a90-ada1-dcc255533d56)

Logramos hacer funcionar el speaker y el botón con los códigos de arduino mencionados arriba ;)

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



## Orden del código

## *Código prueba pulsador* 

  /*
  Button

  Turns on and off a light emitting diode(LED) connected to digital pin 13,
  
  when pressing a pushbutton attached to pin 2.

  The circuit:
  - LED attached from pin 13 to ground through 220 ohm resistor
  - pushbutton attached to pin 2 from +5V
  - 10K resistor attached to pin 2 from ground

  - Note: on most Arduinos there is already an LED on the board
    attached to pin 13.

  created 2005
  
  by DojoDave <http://www.0j0.org>
  
  modified 30 Aug 2011
  
  by Tom Igoe

  This example code is in the public domain.

  https://www.arduino.cc/en/Tutorial/BuiltInExamples/Button

 */

    // constants won't change. They're used here to set pin numbers:

    const int buttonPin = 2;  // the number of the pushbutton pin

    const int ledPin = 13;    // the number of the LED pin

    // variables will change:

    int buttonState = 0;  // variable for reading the pushbutton status

    void setup() {

    // initialize the LED pin as an output:
  
    pinMode(ledPin, OUTPUT);
  
    // initialize the pushbutton pin as an input:
  
    pinMode(buttonPin, INPUT);

    }

    void loop() {

    // read the state of the pushbutton value:
  
    buttonState = digitalRead(buttonPin);

    // check if the pushbutton is pressed. If it is, the buttonState is HIGH:
  
    if (buttonState == HIGH) {
  
    // turn LED on:
    
    digitalWrite(ledPin, HIGH);
  
    } else {
  
    // turn LED off:
    
    digitalWrite(ledPin, LOW);
  
    }

    }


## *Código prueba Speaker*

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

## *Código animación hola morse y español*

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

-  https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/toneMelody​/
  
-  pitches.h. GitHub Gist: instantly share code, notes, and snippets. gist.github.com

-  https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/Button​/

-  programar un pulsador en Arduino para animación LED - Search Videos Videos bing.com

-  https://www.profetolocka.com.ar/2024/07/22/tutorial-usando-la-matriz-led-del-arduino-uno-r4-parte-1/ 

Al realizar el código, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los códigos que debíamos usar, ya que estas se encontraban disponibles, pero no en todas las ocasiones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiese abrirla.

(Acabamos de descubrir que discord funciona con lenguaje markdown y documentos de Google igual :o)

Por alguna razón al utilizar el codigo de prueba del pulsador, sucedio que al acercar nustra mano o un objeto, la luz del arduino reaccionaba como si estuvieramos pulsando el botón, no sabemos si el imán del speaker interfirió o si es algo relacionado a la conexión.


https://github.com/user-attachments/assets/d36848d5-d107-4345-9b57-94f9a4a42a05




## Resultado Final



