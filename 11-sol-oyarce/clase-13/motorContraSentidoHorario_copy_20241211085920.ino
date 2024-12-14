// incluir biblioteca
#include <Stepper.h>

// definir movimiento
// int pasosPorVuelta = 2048;
int pasosPorVuelta = 2048 * 1;

// conectar motor
// Stepper MotorUno(pasosPorVuelta, 8, 9, 10, 11);
// Stepper MotorDos(pasosPorVuelta, 4, 5, 6, 7);


Stepper MotorUno(pasosPorVuelta, 8, 10, 9, 11);
Stepper MotorDos(pasosPorVuelta, 4, 6, 5, 7);

bool motorUnoSentidoHorario = false;
bool motorDosSentidoHorario = false;

unsigned long lastSent = 0;

String uno = "u";

String dos = "d";

void setup() {
  Serial.begin(9600);
  // definir velocidad del motor
  MotorUno.setSpeed(50);
  MotorDos.setSpeed(50);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    if (input.length() > 0) {

      if (input.equals(uno)) {
        // girar motor1

        if (motorUnoSentidoHorario) {
          for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
            MotorUno.step(1);
            delay(5);
          }
        } else {

          for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
            MotorUno.step(-1);
            delay(5);
          }
        }


      } else if (input.equals(dos)) {
        // girar motor2
        if (motorDosSentidoHorario) {
          for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
            MotorDos.step(1);
            delay(5);
          }
        } else {

          for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
            MotorDos.step(-1);
            delay(5);
          }
        }
      }
    }
  }

  unsigned long now = millis();
  if (now - lastSent > 2000) {
    lastSent = now;
  }
}