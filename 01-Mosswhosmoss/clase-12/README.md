# clase-12
## Acercamientos a la comunicación serial entre Arduino y Processing
### Investigación
Buscando como poder generar la visualización de datos me encontré como se puede hacer esto con Arduino y Processing en [esta pág.](https://www.arduino.cc/education/visualization-with-arduino-and-processing) 
También encontré que se puede utilizar Processing con Raspberry Pi, donde aproveche la oportunidad de informarle a @BelenVeAg, ya que su grupo se encuentra trabajando con ese computador.
Para poder entender como se produce la comunicación serial entre ambos programas estuve analizando esta [lista de reproducción que es un curso de Arduino y Processing](https://youtube.com/playlist?list=PLWQQswW6kqpWWXMK3idgfBS8N2GaCaZFM&si=FXIc5awTDnAJKz8m). Como mi forma de aprendizaje es haciendo las cosas, mientras lo veo, intento replicar lo que puedo, como no tengo botones me enfoque en hacer que se prendiera y apagara el Led y que el monitor serial fuera capaz de decirme si el led estaba prendido o apagado
#### Código de Arduino
```C++
//Hago la variable constante del Led, que en este caso usaré el led integrado del Arduino que se encuentra en el pin 13
const int ledPin = LED_BUILTIN;
//Genero la variable de prendido y apagado
int Prendido;
int Apagado;
//Variable que genera el led a un estado bajo
int ledState = LOW;
//"unsigned long" es recomendada usar para variables que mantienen el tiempo
//El valor de esta variable va a aumentar mucho para que la pueda mantener una variable "int"
//Va a mantener la última vez que se actualizó el led
unsigned long previousMillis = 0;

const long interval = 1000;

void setup() {
  //Comando para la comunicación serial
  Serial.begin(9600);

  pinMode(ledPin, OUTPUT);
}
```
En este punto me compliqué porque se me había olvidado como funcionaba el comando millis(), así que con [este video](https://youtu.be/12SN7hnC7Lk?si=3gmiMG1Iqnv6ir0J) que explica paso a paso como se hace este proceso, y con la explicación de Arduino, logre seguir adelante con el código.
```C++
void loop() {
  unsigned long currentMillis = millis();
  
    if (currentMillis - previousMillis >= interval) {
    //Guarda el último momento que el led parpadeo
    previousMillis = currentMillis;

    //Si el led está apagado lo prende y viceversa
    if (ledState == LOW) {
      ledState = HIGH;
      //Muestra en mi monitor serial cuando el led este prendido
      Serial.print("Prendido");

    } else {
      ledState = LOW;
      //Muestra en mi monitor serial cuando el led está apagado
      Serial.print("Apagado");
    }

    //Deja el led con el estado de la variable
    digitalWrite(ledPin, ledState);
  }
}
```
Ahora me encuentro estancado viendo como hacer que se puedan graficar estos datos (Prendido, Apagado) en Processing
```java
// Example by Tom Igoe

import processing.serial.*;

// Puerto serial:
Serial Arduino;

// con este código se revisan los puertos disponibles
//printArray(Serial.list());

Arduino = new Serial(this, "COM8", 9600);


void setup() {
  size(1000, 1000);
  stroke(255);
  noFill();
  
}
```
