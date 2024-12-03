# Control de Mouse desde Arduino

Este código les permitirá controlar el mouse de un PC  / Mac usando el joystick y un arduino.
  - El joystick funciona con dos controles análogos, que van en A0 y A1
  - El "click izquierdo" del mouse va en el pin digital 8
  - Se requiere un botón de activación, que va en el pin digital 2. Puede reemplazarse por un cable a tierra.

## Hardware
### Shield (no ideal)
En la prueba usamos un [shield completo](https://afel.cl/products/shield-joystick-analogo-con-botonera) comprado en Afel, pero ese shield no nos permitía usar el código de las librerías o de los ejemplos. Por eso, tuvimos que conectar sólo los componenbtes que utilizaríamos: el joystick y el botón.
![Shield Joystick](https://http2.mlstatic.com/D_NQ_NP_846932-MLU78959121756_092024-O.webp)


### Componente (ideal)
El módulo joystick por sí solo se ve [algo así](https://altronics.cl/ard-joystick-ps2)
![Joystick](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGECcvyvXuKpTw3etvJdT-rV6yuOWgGzIbcQ&s)

## Código
````cpp
#include <Mouse.h>

int ejeX = A0; // eje horizontal
int ejeY = A1; // eje vertical
int distX = 0;
int distY = 0;

int mouseActivePin = 2;
int mouseButtonPin = 8;

// Parametros del Joystick
int range = 10;             // rango de movimiento
int responseDelay = 10;     // pausa en ms después de mover el mouse
int threshold = range / 4;  // umbral de pausa de movimiento
int center = range / 2;     // posición de pausa

bool mouseWasEnabled = false;

void setup() {
  Serial.begin(115200);

  pinMode(mouseActivePin, INPUT_PULLUP);
  pinMode(mouseButtonPin, INPUT_PULLUP);
}

void loop() {

  int distX = readAxis(ejeX);
  int distY = -readAxis(ejeY);

  // Cuando está LOW
  if (!digitalRead(mouseActivePin)) {  
    
    // Sólo la primera vez que se activa el modo mouse
    if (!mouseWasEnabled) {
      Mouse.begin();
      mouseWasEnabled = true;
      Serial.println("Modo Mouse habilitado");
    }

    // Todo el tiempo en modo mouse
    Mouse.move(distX, distY, 0);

    // Al presionar el botón físico (pin 8)
    if (!digitalRead(mouseButtonPin)) {
      // Si no está presionado el mouse virtual, envia el comando
      if (!Mouse.isPressed(MOUSE_LEFT)) {
        Mouse.press(MOUSE_LEFT);
        Serial.println("CLick");
      }
    }
    else {
      // Si ya estaba apretado el virtual, suéltalo virtualmente
      if (Mouse.isPressed(MOUSE_LEFT)) {
        Mouse.release(MOUSE_LEFT);
        Serial.println("Release");
      }
    }

  } else if (mouseWasEnabled) {
    // Cuando desconectas el pin 2
    Mouse.end();
    mouseWasEnabled = false;
    Serial.println("Fin modo Mouse");
  }

  delay(responseDelay);
}

// Esta función tomada del ejemplo, permite calibrar y evitar que el mouse vaya a la deriva

int readAxis(int thisAxis) {
  // read the analog input:
  int reading = analogRead(thisAxis);

  // map the reading from the analog input range to the output range:
  reading = map(reading, 0, 1024, 0, range);

  // if the output reading is outside from the rest position threshold, use it:
  int distance = reading - center;

  if (abs(distance) < threshold) {
    distance = 0;
  }

  // return the distance for this axis:
  return distance;
}
````cpp
