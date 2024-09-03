# clase-04
## Encargo 4 

Tras las correcciones de la clase pasada, tuvimos una conversación para definir con mayor claridad el objeto. Queríamos que tuviera un enfoque más absurdista y comedido, más allá de replicar el funcionamiento de la Magic 8-Ball, buscamos crear un maquina la cual respondiera a la voz y te dijera algo inesperado. Mientras avanzó la conversación, se mencionaron las maquinas del amor, las cuales miden los sentimientos románticos del usuario hacia alguien, y la idea de una versión de estas en donde solo responda de manera absurda e incluso la máquina se insinúa hacia al usuario, lo cual nos hizo gracia y dio el giro que buscábamos para el objeto.

## Avances del codigo

Posterior a esto, estuvimos trabajando el código para lograr que el objeto tuviera una respuesta visual a la interacción de ruido del usuario. Dado que el sensor solo reconoce la intensidad de un ruido, estuvimos configurando y probando distintos valores, esto para encontrar un punto en donde el dispositivo no reaccione al ruido de ambiente y/o externo y solo responda a la voz del usuario.

Hacia el final de la clase, logramos nuestro objetivo con el siguiente código:
```ino
// incluir las librerias para trabajar con la matriz de leds
#include "ArduinoGraphics.h"
#include "Arduino_LED_Matrix.h"

ArduinoLEDMatrix matrix;

// definir el pin al q el sensor de sonido ta conectado
int analogVal;  
int analogPin = A0;
const int sensorAlto = 48;
int valorSensor = 0;

// variable q guarda el valor leido desde el sensor
int micValue;

void setup() {
  Serial.begin(115200); // inica la coenccion serial
  matrix.begin(); // Inicia la matriz de leds
  // define el sensor de sonido como un INPUT
  pinMode(analogPin, INPUT);
  Serial.begin(9600);
}

void loop() {

    valorSensor =
  analogRead (analogPin);

  Serial.println(valorSensor);

  if (valorSensor > sensorAlto) {
    // comenzar a dibujar en la matrix
    matrix.beginDraw(); 

    // establecer las propiedades del texto
    matrix.stroke(0xFFFFFFFF); // Set the stroke color a blanco
    matrix.textScrollSpeed(100); // velocidad de scroll

    // Define el texto que quieres mosatrar en el display
    const char text[] = "    Si    ";
    matrix.textFont(Font_5x7); // set la fuente y el estilo
    
    // Begin drawing text
    matrix.beginText(0, 1, 0xFFFFFF); // set la posicion de inicio del texto y el color
    matrix.println(text); // print el texto en la matrix
    matrix.endText(SCROLL_LEFT); // scroll el texto hacia la izquierda confrome se va generando

    // termina de dibujar en la matrix
    matrix.endDraw();
   // completa el dibujo
  
  } else {
    // limpia la matriz si es que no detecta sonido
    matrix.clear(); // limpia el display
   // delay para mantener la estabilidad del texto
  delay(100);
 }
}
```

Si bien el objeto ya reaccionaba al ruido del usuario, solo mostraba una respuesta al usuario; por lo que tuvimos que primero, escribir una serie de mensajes los cuales fueran respuestas para la interacción del usuario, hacer que la respuesta que muestre al usuario sea aleatoria (o al menos, no predefinida) y después incorporar esto al objeto, lo cual hicimos con el siguiente código:

```ino
// indica el numero de respuestas a guardar
const byte RESPUESTA_CANTIDAD = 10;
// guarda las diferentes respuestas a mostrar
char* mensajes[RESPUESTA_CANTIDAD] = {
"NICA",
"ahora no, preguntame despues",
"zero match",
"que mal gusto tienes tu",
"ahi no es",
"jamas",
"toi hinchado, preguntame de nuevo",
"¯\_('-')_/¯ es que no creo en el amor ",
"no, pero yo si te amo :3 :3 :3",
"...y a mi no me quieres??? .·°(TnT)°·."
};
```
```ino
void loop() {

  matrix.beginDraw();

  matrix.textFont(Font_5x7);
  matrix.beginText(0, 1, 0xFFFFFF);
// selecciona uno de los mensajes guardados al azar y lo va a mostrar en la pantalla
  matrix.println(mensajes[random(0,RESPUESTA_CANTIDAD)]);
  matrix.endText(SCROLL_LEFT);

  matrix.endDraw();
}
```

Finalmente, implementamos el mensaje que se va a mostrar en la pantalla mientras el objeto no esta siendo usado por el usuario (una pantalla de stand-by con intrucciones de su uso) 

```ino
  } else {
    matrix.clear();
    matrix.beginDraw(); 


    matrix.stroke(0xFFFFFFFF);
    matrix.textScrollSpeed(100);

    const char text[] = "Acercate, cuentame quien te gusta y te dire si son compatibles";
    matrix.textFont(Font_5x7);
    

    matrix.beginText(0, 1, 0xFFFFFF); 
    matrix.println(text);
    matrix.endText(SCROLL_LEFT);

    matrix.endDraw();
}
```

## Avances de la materialidad

Dado que la finalidad del objeto tuvo un giro, también lo tuvo que dar la forma del objeto, esto también para poder dar una idea al usuario sobre lo que hace la máquina previo a siquiera interactuar con ella, por lo que decidimos darle una forma de corazón. Se mantuvo trabajar con el plástico como material, por un tema de tiempo y comodidad de fabricación (vía impresora 3D) dado la ventana de tiempo que teníamos y aparte, dada la finalidad del objeto, que es algo recreativa, muchos objetos con esta finalidad tienden a recurrir a plástico, por lo que también el usuario va a tener una idea previa de la finalidad del objeto sin siquiera usarlo.  el diseño del objeto fuera estacionario y no den ganas de tomarlo a quien está interactuando, así para no obstruir el micrófono y mover la placa.

![imagen_2024-09-03_101553469](https://github.com/user-attachments/assets/4e711c3f-159c-4ec7-82e5-6f871c3f321b)
> Imagen del modelado del objeto previo a la impresión.

![IMG_7324](https://github.com/user-attachments/assets/b94cb54b-bc9c-4ae8-b02f-3d0f0e65f4eb)
> Imagen del objeto durante la impresión.
