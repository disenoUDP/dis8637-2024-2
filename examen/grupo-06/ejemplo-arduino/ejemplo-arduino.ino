
// incluir biblioteca
#include <Stepper.h>

// definir movimiento
int pasosPorVuelta = 2048;

// conectar motor
Stepper MotorUno(pasosPorVuelta, 8, 9, 10, 11);
Stepper MotorDos(pasosPorVuelta, 7, 6, 5, 4);

int lines = 0;
unsigned long lastSent = 0;

String uno = "u";
String dos = "d";

void setup() {
  Serial.begin(9600);

  // definir velocidad del motor
  MotorUno.setSpeed(10);
  MotorDos.setSpeed(10);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    if (input.length() > 0) {

      // this would be the place to parse,
      // and act upon the message from the
      // computer

      lines++;


      if (input.equals(uno)) {
        // girar motor1

        for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
        MotorUno.step(1);
        delay(1);
      }


      } else if (input.equals(dos)) {
        // girar motor2
         for (int pasito = 0; pasito < pasosPorVuelta; pasito++) {
        MotorDos.step(1);
        delay(1);
      }
      }
    }
  }

  unsigned long now = millis();
  if (now - lastSent > 2000) {
    Serial.print("Hello! I heard you ");
    Serial.print(lines);
    Serial.println(" times");
    lastSent = now;
  }
}
