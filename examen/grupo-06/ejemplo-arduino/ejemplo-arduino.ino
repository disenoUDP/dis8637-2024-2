

// incluir biblioteca
#include <Stepper.h>

// definir movimiento
int pasosPorVuelta = 2480;

// conectar motor
Stepper MotorUno(pasosPorVuelta, 8, 9, 10, 11);

int lines = 0;
unsigned long lastSent = 0;

void setup() {
  Serial.begin(57600);


  // definir velocidad del motor
  MotorUno.setSpeed(10);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\n');
    if (input.length() > 0) {

      // this would be the place to parse,
      // and act upon the message from the
      // computer

      lines++;


      if (input == "girar1") {
        // girar motor1

        MotorUno.step(pasosPorVuelta);

      } else if (input == "girar2") {
        // girar motor2
      }
    }
  }

  unsigned long now = millis();
  if (now - lastSent > 2000) {
    // Serial.print("Hello! I heard you ");
    // Serial.print(lines);
    // Serial.println(" times");
    // lastSent = now;
  }
}