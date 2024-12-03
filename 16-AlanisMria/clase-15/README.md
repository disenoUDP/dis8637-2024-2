# clase-15

*3 de Diciembre de 2024*

## Código de giro en 360 en un sentido
link: https://www.youtube.com/watch?v=wLdFx4Kgc4M 
```ino

       #include <Stepper.h>
int pasosPorVuelta = 2480;
Stepper Motor(pasosPorVuelta, 8, 9, 10, 11);

void setup() {
  // put your setup code here, to run once:

  Serial.begin(9600);
  Motor.setSpeed(10);
}

void loop() {
  // put your main code here, to run repeatedly:
  if (Serial.available()) {
    int grados = Serial.parseInt();
    int pasos = map(grados, 0, 360, 0, pasosPorVuelta);
    Motor.step(pasos);
    Serial.println(String (grados) + "->" + String (pasos));
  }
}
```
##Código de giro con devuelta
link: https://www.youtube.com/watch?v=XixNg9DGxgo
```ino
#include <Stepper.h>
int stepsPerRevolution = 2048;
int motSpeed = 12;
Stepper myStepper(stepsPerRevolution,8,10,9,11);
int dt = 1500;

void setup() {
  // put your setup code here, to run once:
  myStepper.setSpeed(motSpeed);
  
}

void loop() {
  // put your main code here, to run repeatedly:
  myStepper.step(stepsPerRevolution);
  delay(dt);
  
}
```



