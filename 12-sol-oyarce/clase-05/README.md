# clase-05
## LABERINTO

¿QUE ES?

Un juego que busca alcanzar completar un circuito en un tiempo definido (tiempo mostrado por los led del arduino), donde  el jugador que logre llegar al final del juego antes de que finalice el tiempo ganara el juego

¿COMO ES?

Archivo de corte de la base de madera 
CorteLaserlaberinto.ai  (archivo en la carpeta)
![texto](./cortelaser.png)
![texto](./laberinto.JPG)
![texto](./ConexionesLaberinto.jpeg)

## Diagrama de flujo laberinto

tarea: quiero empezar a jugar 


casos límites:
que la pelotita no esté en el tablero.
que el tiempo empiece a correr y no esté la pelotita.
que el tiempo no corra.


 1. tomar el tablero con ambas manos, de manera horizontal.
 2. asegurarse de que la pelotita este en el tablero. Si la pelotita no está, buscarla dentro de la base.
 3. verificar que el tiempo en pantalla no esté corriendo.
 4. Tomar la pelotita y ubicarla en el inicio del laberinto.
 5. al momento de dejar la pelotita al inicio del laberinto, comienza el juego y empieza a correr el tiempo.
 6. verificar que el tiempo esté corriendo.
 7. comenzará a parpadear la pantalla, indicando que se agotará el tiempo límite.
 8. en 40 segundos, se deberá llegar al final del laberinto, terminando el juego.
 9. al llegar al fnal del laberinto, se mostrará una animación indicando que ganaste o perdiste.

## INTENTOS PROGRAMACION 

No nos funciono la biblioteca del sensor CapacitiveSensor.h
1. Sensor tactil capacitivo por Rincon Ingenieril Youtube https://www.youtube.com/watch?v=V3l2Vj3lXZU
   https://www.rinconingenieril.es/sensor-capacitivo/
   codigo :

          //Sensor Tactil capacitivo por Rincon Ingenieril
       //Uso de la libreria CapacitiveSensor.h de Paul Stroffregen
       
       #include <CapacitiveSensor.h>
       
       CapacitiveSensor sensor = CapacitiveSensor(4,3);
       
       void setup() 
       {
         // put your setup code here, to run once:
       pinMode(12,OUTPUT);
       }
       
       void loop() 
       {
         // put your main code here, to run repeatedly:
       long lectura = sensor.capacitiveSensor(30);
       
       if(lectura>1)
       digitalWrite(12,HIGH);
       else
       digitalWrite(12,LOW);
       
       delay(10);
       }


CONEXION DEL ARDUINO
![texto](./intento1sensor.jpg)

2. Sensor de toque capacitivo como interruptor, no se logro adecuar para nuestro sensor ya que este ya tenia un sensor de toque capacitivo TTP2233B https://www.squids.com.br/arduino/projetos-arduino/projetos-squids/basico/257-projeto-77-sensor-de-toque-capacitivo-como-interruptor-liga-e-desliga

3. Creando un sensor capacitivo con Arduino por Xukyo https://www.aranacorp.com/es/creando-un-sensor-capacitivo-con-arduino/
   codigo:

   
           //Libraries
       #include <CapacitiveSensor.h>//https://github.com/PaulStoffregen/CapacitiveSensor
       //Parameters
       bool autocal 	= 0;
       const int numReadings 	= 10;
       long readings [numReadings];
       int readIndex 	= 0;
       long total 	= 0;
       const int sensitivity 	= 1000;
       const int thresh 	= 200;
       const int csStep 	= 10000;
       CapacitiveSensor cs 	= CapacitiveSensor(2, 3);
       void setup() {
        	//Init Serial USB
        	Serial.begin(9600);
        	Serial.println(F("Initialize System"));
        	//Init cs
        	if (autocal == 0) {
        			{
        					cs.set_CS_AutocaL_Millis(0xFFFFFFFF);
        			}
        	}
       }
       void loop() {
        	Serial.println(smooth());
       }
       long smooth() { /* function smooth */
        	////Perform average on sensor readings
        	long average;
        	// subtract the last reading:
        	total = total - readings[readIndex];
        	// read the sensor:
        	readings[readIndex] = cs.capacitiveSensor(sensitivity);
        	// add value to total:
        	total = total + readings[readIndex];
        	// handle index
        	readIndex = readIndex + 1;
        	if (readIndex >= numReadings) {
        			readIndex = 0;
        	}
        	// calculate the average:
        	average = total / numReadings;
        	return average;
       }

## CODIGO UTILIZADO 


    #include "Arduino_LED_Matrix.h"   //Include the LED_Matrix library
    #include "animation.h"            //Include animation.h header file

    // Create an instance of the ArduinoLEDMatrix class
    ArduinoLEDMatrix matrix;  
    
    void setup() {
      pinMode(2, INPUT);
      pinMode(3, OUTPUT);
    }
    
    void loop() {
      if (digitalRead(2) == HIGH) {
        digitalWrite(3, HIGH);
        matrix.loadSequence(animation);
        matrix.begin();
        matrix.play(true);
        delay(10000);
      }
      else {
        digitalWrite(3, LOW);
        matrix.play(false);
        delay(1000);
      }
    }



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
