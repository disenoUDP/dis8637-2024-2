# clase-04 


# modelado Heroe guitarra  ////// Decisiones de diseño.


![texto](./CUBICACION1.jpg).

# IDEA PARA PEGAR PIEZAS
esta era una idea dada la condicion de que partieramos en 4 nuestro prototipo para luego pegarlo sin problema y que no se mueva mucho.

![texto](./INTENTODEENCAJE.jpg).

# DATO!!!  
En cualquier encaje es necesario dar tolerancias de al menos 2 mm o 3mm, para que el factor impresion no provoque fallos en nuestro encaje.

![texto](./rectificandotolerancias.jpg).

# SE DEFINIO PARTIR EL PROTOTIPO EN 4
Para mejorar el tiempo de impresion, reducir fallos y ensamblar todo el sistema electronico

![texto](./PARTICIONEN4.jpg).

# CONTENEDORES DEL ARDUINO
Se pensaron estan paredes para limitar el movimiento del arduino dentro del sistema de izquierda a derecha pero aun se seguia moviendo en el eje z. funciono! y se incorporo
![texto](./limitesparaarduino.jpg).

 # Avance de como logramos que segun la ubicacion del potenciometro, se cambie el frame que deseamos.
 
/*
  Single Frame
  
  Displays single frames using matrix.loadFrame
  
  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix
*/

#include "Arduino_LED_Matrix.h"  // Include the LED_Matrix library
#include "frames.h"              // Include a header file containing some custom icons
int potPin = A0;
ArduinoLEDMatrix matrix;  // Create an instance of the ArduinoLEDMatrix class

void setup() {
  Serial.begin(115200);  // Initialize serial communication at a baud rate of 115200
  matrix.begin();        // Initialize the LED matrix
}

void loop() {

  int potValue = analogRead(potPin);
  // Load and display the "chip" frame on the LED matrix

  int carril = map(potValue, 0, 1023, 0, 2);

  if (potValue > 140 && potValue < 401) {
    matrix.loadFrame(frame1);

  }

  // Load and display the "danger" frame on the LED matrix
  else if (potValue > 400 && potValue < 639) {
    matrix.loadFrame(frame2);
  }

  // Load and display the "happy" frame on the LED matrix
  else if (potValue > 638 && potValue < 890) {
    matrix.loadFrame(frame3);

    // Print the current value of millis() to the serial monitor
    Serial.println(millis());
  }
}


![texto](./slider.jpg).

