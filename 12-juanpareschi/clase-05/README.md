# clase-05 - Solemne 1
## SOBRE EL OBJETO:

Este objeto, la maquina del amor, está diseñado para ofrecerte información sobre la compatibilidad amorosa con la persona que te interesa. Tiene una apariencia en forma de corazón y está fabricado en plástico. En uno de sus lados, la cara frontal, cuenta con un micrófono que permite captar tu voz y escuchar lo que tienes que decir. Y en el centro de esta cara, se encuentra una pantalla que muestra los resultados y detalles sobre la compatibilidad entre tú y tu pareja potencial.

## COMO FUNCIONA EL OBJETO

**ANTES DE EMPEZAR:** Verifique que la maquina esté conectada a una fuente de energía y que la pantalla se encuentre encendida.

- Si la pantalla está encendida, acerque su boca al orificio situado al inferior de la pantalla.
- Formule su pregunta sobre la compatibilidad entre las personas de interés en un tono fuerte y constante.
- Si el dispositivo entiende su pregunta, la pantalla mostrará una animación de procesamiento de datos y, posteriormente, proporcionará los resultados.
- Si la pantalla continúa mostrando corazones, repita la pregunta asegurándose de estar cerca del micrófono y de hablar en un tono fuerte y constante.
- Observe nuevamente la pantalla y lea la respuesta proporcionada.

## AVANCES DEL CÓDIGO / DOCUMENTACIÓN.
Dado que ya estaban implementadas las funciones principales dentro del código, lo último que queda por hacer es pulir la experiencia de uso y mejorar la visibilidad de estados para el usuario. Esto significa incorporar animaciones en la estructura de código y que el usuario pueda entender lo que está sucediendo (y si está siendo reconocido su input).

La primera parte de este desafío fue lograr que las animaciones y el texto pudieran generarse una después de otra, cosa que inicialmente probé con diferentes secuencias de animaciones que vienen parte de la librería de Arduino LED Matrix. Tras distintas pruebas, ninguna terminó funcionando, ya que siempre las secuencias se sobre dibujaban por el texto, o sino, durante el primer loop se dibujaban ambos correctamente, en el segundo dejaba de dibujar la secuencia y tras un serie de loops más, el texto también dejaba de dibujar. Dado los resultados, decidí probar solamente con los frames, para ver si era posible crear una animación y mostrar texto a través de esta forma, lo cual finalmente dio resultado, por lo que opté por seguir escribiendo y diseñando las animaciones a través de esta manera.

Tras lograr la manera de poder implementar animaciones al código, ahora tocaba diseñar estas. En nuestro caso, hay que implementar 2 animaciones: una que funcione como pantalla de stand-by, que está en espera a ser usada y otra que funcione como que se detectó un input del usuario y que fue reconocido como tal por el código. 

### Animación 1
Para la primera animación, era importante que llamara y atraiga la atención del usuario a la vez que remitiera a la forma del objeto de alguna forma, por lo que bocetee los siguientes frames para la animación:

![1725927519529](https://github.com/user-attachments/assets/e0ffe822-22a5-4291-ac2e-633280491591)

Luego traspase estos dibujos a binario para poder usarlos en código:
```ino
byte cora1[8][12] = {
{ 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0 },
{ 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0 },
{ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0 },
{ 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 },
{ 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0 },
{ 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 }
}

byte cora2[8][12] = {
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 },
{ 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0 },
{ 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0 },
{ 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
}

byte cora3[8][12] = {
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 },
{ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 }
}
```

Durante este proceso, me di cuenta que era mucho código ya, y dado que iba a tener que crear varios frames más, decidí pasar la información de decimal a hexadecimal, para usar menos código y simplificar el proceso. Esto lo logre gracias a:

- [Josh Goh - Tutorial de uso del LED Matrix](https://github.com/Patapom/Arduino/blob/master/Doc/Datasheets/Elegoo%20Devices/Arduino%20KY-037%20Sensitive%20microphone%20sensor%20module.pdf)
- [MasterPLC - Convertir Decimal a Hexadecimal](https://www.github.com/rmorenojr/ElegooTutorial/tree/master/Lesson%2020%20-%20Sound%20Sensor%20Module/SoundSensor)

Con esto pude crear el siguiente código de prueba de la animación:
```ino
//incluye bibliotecas de anima
#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

ArduinoLEDMatrix matrix;

//guarda la informacion de los frames de la animacion standby del objeto
uint32_t cora1[3] = {0xFFFCE7C4, 0x7C07E0FF, 0x1FFBFFFF};
uint32_t cora2[3] = {0x3184A444, 0x44042081, 0x100A0040};
uint32_t cora3[3] = {0x0001102A, 0x82481100, 0xA0040000};
uint32_t cora4[3] = {0x0000000A, 0x01F00E00, 0x40000000};
uint32_t cora5[3] = {0x00000000, 0x00E00400, 0x00000000};
uint32_t blank[3] = {0x00000000, 0x00000000, 0x00000000};

void setup() {
   matrix.begin();
}
  
void loop(){
//dibuja el frame
   matrix.loadFrame(cora5);
   delay(90);
   matrix.loadFrame(cora4);
   delay(90);
   matrix.loadFrame(cora3);
   delay(90);
   matrix.loadFrame(cora2);
   delay(90);
   matrix.loadFrame(cora1);
   delay(90);
   matrix.loadFrame(blank);
   delay(175);
   matrix.textFont(Font_5x7);
   matrix.textScrollSpeed(60);
   matrix.stroke(0xFF, 0, 0);
   matrix.beginText(0, 1, 0xFF, 0, 0);
   //matrix.print("  test!!! :))");
   matrix.endText(SCROLL_LEFT);
   delay(100);
}
```

### Animación 2
Tras comprobar que efectivamente funcionaba el código, empecé a trabajar en la segunda animación, la cual tiene por finalidad informar al usuario que el dispositivo recibe el input efectivamente del usuario y le va a dar una respuesta en la pantalla. Para esto, decidí simular una pantalla de carga / procesamiento para que no solo el usuario se de cuenta que el dispositivo lo escuchó, sino que también que tiene que estar pendiente a la pantalla, ya que esta va a mostrar algo distinto al mensaje de stand-by.

Buscando tipos de formas de visualizar una pantalla de carga (que también fueran traducibles a un array de 12x8) llegue a la animación de carga de Discord, la cual inspiró la forma de la pantalla de carga final.


![gif](https://cdn3.emoji.gg/emojis/9237-loading.gif)
> Animación de carga de Discord

En base a esto, hice un boceto de manera digital la pantalla de carga del dispositivo, la cual contiene 10 frames, la pase a código binario el cual transforme a hexadecimal antes de finalmente probarlo en el siguiente código:

```ino
#include <ArduinoGraphics.h>
#include <Arduino_LED_Matrix.h>

ArduinoLEDMatrix matrix;

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

void setup() {
   matrix.begin();
}
  
void loop(){
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
}
```
### Resultados finales:


![GIF_20240909_231725_293](https://github.com/user-attachments/assets/7c36993c-106e-4269-bb93-ae1097bc6e58)
> Animacion 1: Pantalla de stand-by


![GIF_20240909_232108_135](https://github.com/user-attachments/assets/c3311ebf-70af-4f13-8b6d-3890598111cc)
> Animacion 2: Pantalla de "carga"
