
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