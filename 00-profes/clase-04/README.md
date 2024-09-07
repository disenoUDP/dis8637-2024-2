# clase-04

03 de septiembre de 2024

```cpp
#include "Adafruit_VL53L1X.h"
#define IRQ_PIN 2
#define XSHUT_PIN 3

Adafruit_VL53L1X vl53 = Adafruit_VL53L1X(XSHUT_PIN, IRQ_PIN);

STANDBY,
ACTIVO,
TRABAJANDO,
MALUSO
};

const int BUTTON_PIN = 3;
int umbral = 200;

State estadoActual = STANDBY;

bool revisaBoton() {
  return digitalRead(BUTTON_PIN);
}

bool usuarioCerca() {
  int16_t distancia;

  if (vl53.dataReady()) {
    // new measurement for the taking!
    distancia = vl53.distance();
  }
  if (distancia > umbral - 15 && distancia < umbral) {
    return true;
  } else {
    return false;
  }
}

int mideDistancia() {
  return 0;
}

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  switch (estadoActual) {
    case STANDBY:
      Serial.println("En estado STANDBY");
      if (usuarioCerca()) {
        estadoActual = ACTIVO;
      }
      break;

    case ACTIVO:
      // En ACTIVO podemos hacer la intro, o las instrucciones
      Serial.println("En estado ACTIVO");
      // verificar que estemos superCerca
      //encenderPantalla();
      // acá entramos a jugarshh
     
      if (sensorFin() || cuentaRegresiva()) {
        estadoActual = TRABAJANDO;
      }
      break;

    case TRABAJANDO:
      Serial.println("En estado TRABAJANDO");
      if (mideDistancia() > umbral) {
        umbral = 300;
        //animaPantalla();
      }
      // Cuando terminamos, volvemos a standby
      estadoActual = STANDBY;
      break;
  }

}
```
