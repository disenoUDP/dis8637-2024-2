#include "Arduino_LED_Matrix.h"
#include "globito.h"
#include "animation.h"

ArduinoLEDMatrix Pantalla;

enum State {
  STANDBY,
  ACTIVO
};
// configuración del sensor
const int ledPin = 13;
const int pin_trig = 2;
const int pin_echo = 4;
int distance;

// Configuración de distancias para activar el LED
const int noHayNadie = 21;  // Encender el LED 13 desde los 21 cm
const int noHayNadie2 = 100; // Seguir encendido el LED hasta los 100 cm
const int hayAlguien = 20;  // Apagar el LED y comenzar la animación de la matriz desde los 20 cm
const int hayAlguien2 = 40; // Seguir encendida la pantalla hasta los 40 cm
// cuando no hay nadie esta prendido el led rojo y al detectar distancia se apaga

State currentState = STANDBY;

void setup() {
  Pantalla.begin();
  pinMode(pin_trig, OUTPUT);
  pinMode(pin_echo, INPUT);
  pinMode(ledPin, OUTPUT);

  Serial.begin(115200);
}

void loop() {
  readDistance();  // Leer la distancia del sensor

  switch (currentState) {
    case STANDBY:
      Serial.println("En estado STANDBY");

      if (distance >= noHayNadie && distance <= noHayNadie2) {
        digitalWrite(ledPin, HIGH);
        Pantalla.loadSequence(globito);
        Pantalla.play(true);
        currentState = STANDBY;
      } else {
        currentState = ACTIVO;
      }
      break;

    case ACTIVO:
      Serial.println("En estado ACTIVO");

      if (distance >= hayAlguien && distance <= hayAlguien2) {
        digitalWrite(ledPin, LOW);
        Pantalla.loadSequence(animation);
        Pantalla.play(true);
        currentState = ACTIVO;
      } else {
        currentState = STANDBY;
      }
      break;
  }
}

void readDistance() {
  // Enviar un pulso al pin TRIG
  digitalWrite(pin_trig, LOW);
  delayMicroseconds(2);
  digitalWrite(pin_trig, HIGH);
  delayMicroseconds(10);
  digitalWrite(pin_trig, LOW);

  long duration = pulseIn(pin_echo, HIGH);
  distance = duration * 0.034 / 2;  // Convertir a cm
}
