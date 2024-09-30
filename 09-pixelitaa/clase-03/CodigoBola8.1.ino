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