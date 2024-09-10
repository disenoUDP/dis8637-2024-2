# clase-05

##### 9 de septiembre de 2024

Entrega de proyecto: Laberinto

¿QUÉ ES?
Un juego que busca alcanzar completar un circuito en un tiempo definido (tiempo mostrado por los led del arduino), donde el jugador que logre llegar al final del juego antes de que finalise el tiempo ganara el juego.

¿CÓMO ES?
Se alimenta de una batería externa para su funcionamiento.
![texto](./laberintoterminado.JPG)

![texto](./conexioneslaberinto.JPG)


## DIAGRAMA DE FLUJO DEL LABERINTO
- TAREA: quiero empezar a jugar
- CASOS LÍMITES: que la pelotita no esté en el tablero. que el tiempo empiece a correr y no esté la pelotita. que el tiempo no corra.

1. Tomar el tablero con ambas manos, de manera horizontal.
2. Asegurarse de que la pelotita este en el tablero. Si la pelotita no está, buscarla dentro de la base.
3. Verificar que el tiempo en pantalla no esté corriendo.
4. Tomar la pelotita y ubicarla en el inicio del laberinto.
5. Al momento de dejar la pelotita al inicio del laberinto, comienza el juego y empieza a correr el tiempo.
6. Verificar que el tiempo esté corriendo.
7. Comenzará a parpadear la pantalla, indicando que se agotará el tiempo límite.
8. En 40 segundos, se deberá llegar al final del laberinto, terminando el juego.
9. Al llegar al fnal del laberinto, se mostrará una animación indicando que ganaste o perdiste.

## INTENTOS PROGRAMACIÓN
No nos funcionó la biblioteca del sensor CapacitiveSensor.h

Sensor tactil capacitivo por Rincon Ingenieril Youtube https://www.youtube.com/watch?v=V3l2Vj3lXZU https://www.rinconingenieril.es/sensor-capacitivo/ codigo :

//Sensor Tactil capacitivo por Rincon Ingenieril //Uso de la libreria CapacitiveSensor.h de Paul Stroffregen

#include <CapacitiveSensor.h>

CapacitiveSensor sensor = CapacitiveSensor(4,3);

void setup() { // put your setup code here, to run once: pinMode(12,OUTPUT); }

void loop() { // put your main code here, to run repeatedly: long lectura = sensor.capacitiveSensor(30);

if(lectura>1) digitalWrite(12,HIGH); else digitalWrite(12,LOW);

delay(10); }

## CONEXIONES ARDUINO
 - Pin 2: Input
 - Pin 3: Output
 - Uso del sensor por contacto, usando la pelotita de acero como pulsador.

*Al momento de empezar a correr el tiempo, las leds parpadean en un loop de 2 veces y luego se apga y queda en stand by.

![texto](./intento1sensor.JPG)

2. Sensor de toque capacitivo como interruptor, no se logro adecuar para nuestro sensor ya que este ya tenia un sensor de toque capacitivo TTP2233B https://www.squids.com.br/arduino/projetos-arduino/projetos-squids/basico/257-projeto-77-sensor-de-toque-capacitivo-como-interruptor-liga-e-desliga
3. Creando un sensor capacitivo con Arduino por Xukyo https://www.aranacorp.com/es/creando-un-sensor-capacitivo-con-arduino/ código:

//Libraries #include <CapacitiveSensor.h>//https://github.com/PaulStoffregen/CapacitiveSensor //Parameters bool autocal = 0; const int numReadings = 10; long readings [numReadings]; int readIndex = 0; long total = 0; const int sensitivity = 1000; const int thresh = 200; const int csStep = 10000; CapacitiveSensor cs = CapacitiveSensor(2, 3); void setup() { //Init Serial USB Serial.begin(9600); Serial.println(F("Initialize System")); //Init cs if (autocal == 0) { { cs.set_CS_AutocaL_Millis(0xFFFFFFFF); } } } void loop() { Serial.println(smooth()); } long smooth() { /* function smooth */ ////Perform average on sensor readings long average; // subtract the last reading: total = total - readings[readIndex]; // read the sensor: readings[readIndex] = cs.capacitiveSensor(sensitivity); // add value to total: total = total + readings[readIndex]; // handle index readIndex = readIndex + 1; if (readIndex >= numReadings) { readIndex = 0; } // calculate the average: average = total / numReadings; return average; }

## CÓDIGO UTILIZADO
**timer**
#include "Arduino_LED_Matrix.h" //Include the LED_Matrix library #include "animation.h" //Include animation.h header file

// Create an instance of the ArduinoLEDMatrix class ArduinoLEDMatrix matrix;

void setup() { pinMode(2, INPUT); pinMode(3, OUTPUT); matrix.loadSequence(animation); matrix.begin(); matrix.play(true); }

void loop() { if (digitalRead(2) == HIGH) { digitalWrite(3, HIGH); matrix.loadSequence(animation); matrix.play(true); delay(10000); } else { digitalWrite(3, LOW); matrix.play(false); delay(1000); } }

**animation.h** --> animación que sale en los leds.
{
0x36c29,
0x41081082,
0x9436c000,
50
},

{
0x30c20,
0x43fc3fc2,
0x430c000,
50
},

{
0x0,
0x0,
0x0,
66,
},
};


