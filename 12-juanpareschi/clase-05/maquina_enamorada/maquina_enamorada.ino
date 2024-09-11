// incluir las librerias para trabajar con la matriz de leds
#include "ArduinoGraphics.h"
#include "Arduino_LED_Matrix.h"

ArduinoLEDMatrix matrix;

//precarga el numero de las respuesta aleatoreas que va a responder el objeto
const byte RESPUESTA_CANTIDAD = 10;
//guarda el texto de las respuesta aleatoreas que va a responder el objeto
char* mensajes[RESPUESTA_CANTIDAD] = {
"  en ningun universo van a funcionar",
"  ahora no, quizas despues te digo",
"  zero match",
"  que mal gusto tienes tu",
"  ahi no es",
"  jamas",
"  estoy hinchado, preguntame mas rato",
"  ¯\_('-')_/¯ es que no creo en el amor ",
"  no, pero yo si te amo :3 :3 :3",
"  ...y a mi no me quieres??? .·°(TnT)°·."
};

//frames de la animacion standby del objeto
uint32_t cora1[3] = {0xFFFCE7C4, 0x7C07E0FF, 0x1FFBFFFF};
uint32_t cora2[3] = {0x3184A444, 0x44042081, 0x100A0040};
uint32_t cora3[3] = {0x0001102A, 0x82481100, 0xA0040000};
uint32_t cora4[3] = {0x0000000A, 0x01F00E00, 0x40000000};
uint32_t cora5[3] = {0x00000000, 0x00E00400, 0x00000000};
uint32_t blank[3] = {0x00000000, 0x00000000, 0x00000000};

//frames de la animacion de carga del objeto
uint32_t load1[3] = {0x00000006, 0x00600F00, 0xF0000000};
uint32_t load2[3] = {0x0000000C, 0x00C00F00, 0xF0000000};
uint32_t load3[3] = {0x0000000C, 0x00C00F00, 0xF0000000};
uint32_t load4[3] = {0x0000000C, 0x00F00F00, 0xC0000000};
uint32_t load5[3] = {0x0000000C, 0x00F00F00, 0xC0000000};
uint32_t load6[3] = {0x0000000F, 0x00F00C00, 0xC0000000};
uint32_t load7[3] = {0x0000000F, 0x00F00600, 0x60000000};
uint32_t load8[3] = {0x0000000F, 0x00F00300, 0x30000000};
uint32_t load9[3] = {0x00000003, 0x00F00F00, 0x30000000};
uint32_t load10[3] = {0x00000003, 0x00300F00, 0xF0000000};


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

    // dibuja la animacion de espera / deteccion de audio
    matrix.loadFrame(load1);
    delay(75);
    matrix.loadFrame(load2);
    delay(75);
    matrix.loadFrame(load3);
    delay(75);
    matrix.loadFrame(load4);
    delay(75);
    matrix.loadFrame(load5);
    delay(75);
    matrix.loadFrame(load6);
    delay(75);
    matrix.loadFrame(load7);
    delay(75);
    matrix.loadFrame(load8);
    delay(75);
    matrix.loadFrame(load9);
    delay(75);
    matrix.loadFrame(load10);
    delay(75);
    matrix.loadFrame(load1);
    delay(75);
    matrix.loadFrame(load2);
    delay(75);
    matrix.loadFrame(load3);
    delay(75);
    matrix.loadFrame(load4);
    delay(75);
    matrix.loadFrame(load5);
    delay(75);
    matrix.loadFrame(load6);
    delay(75);
    matrix.loadFrame(load7);
    delay(75);
    matrix.loadFrame(load8);
    delay(75);
    matrix.loadFrame(load9);
    delay(75);
    matrix.loadFrame(load10);
    delay(75);
    matrix.loadFrame(load1);
    delay(75);
    matrix.loadFrame(load2);
    delay(75);
    matrix.loadFrame(load3);
    delay(75);
    matrix.loadFrame(load4);
    delay(75);
    matrix.loadFrame(load5);
    delay(75);
    matrix.loadFrame(load6);
    delay(75);
    matrix.loadFrame(load7);
    delay(75);
    matrix.loadFrame(load8);
    delay(75);
    matrix.loadFrame(load9);
    delay(75);
    matrix.loadFrame(load10);
    delay(75);    

    // establecer las propiedades del texto
    matrix.stroke(0xFFFFFFFF); // Set the stroke color a blanco
    matrix.textScrollSpeed(100); // velocidad de scroll

    // Define el texto que quieres mosatrar en el display
    matrix.textFont(Font_5x7); // set la fuente y el estilo
    
    // Begin drawing text
    matrix.beginText(0, 1, 0xFFFFFF); // set la posicion de inicio del texto y el color
    matrix.println(mensajes[random(0,RESPUESTA_CANTIDAD)]);; // print el texto de respuesta en la matrix
    matrix.endText(SCROLL_LEFT); // scroll el texto hacia la izquierda confrome se va generando

    // termina de dibujar en la matrix
    matrix.endDraw();
   // completa el dibujo
  
  } else {
    // limpia la matriz si es que no detecta sonido
    matrix.clear(); // limpia el display
    matrix.beginDraw(); 

    //carga los diferentes frames para la animacion del stand-by
    matrix.loadFrame(cora5);
    delay(90);
    matrix.loadFrame(cora4);
    delay(90);
    matrix.loadFrame(cora3);
    delay(90);
    matrix.loadFrame(cora2);
    delay(90);
    matrix.loadFrame(cora1);
    delay(110);
    matrix.loadFrame(cora1);
    delay(110);
    matrix.loadFrame(cora2);
    delay(90);
    matrix.loadFrame(cora3);
    delay(90);
    matrix.loadFrame(cora4);
    delay(90);
    matrix.loadFrame(cora5);
    delay(90);
    matrix.loadFrame(blank);
    delay(175);
    // establecer las propiedades del texto
    matrix.stroke(0xFFFFFFFF); // Set the stroke color a blanco
    matrix.textScrollSpeed(60); // velocidad de scroll

    // Define el texto que quieres mosatrar en el display
    const char text[] = "CUENTAME!";
    matrix.textFont(Font_5x7); // set la fuente y el estilo
    
    // empieza a dibujar el texto
    matrix.beginText(0, 1, 0xFFFFFF); // set la posicion de inicio del texto y el color
    matrix.println (text);// print un texto al azar en la matrix
    matrix.endText(SCROLL_LEFT); // scroll el texto hacia la izquierda confrome se va generando

    // termina de dibujar en la matrix
    matrix.endDraw();
   // delay para mantener la estabilidad del texto
  delay(100);
 }
}