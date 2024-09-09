#include "Arduino_LED_Matrix.h"
#include "gallery.h"
#include "PushButton.h"
#include "Nivel4.h"

// Código de referencia del repositorio de la Sofi Etchepare
// lenguaje de c++ para detectar posibles errores en el código y valores
//por lo que lo usamos ahora para definir los estados de nuestro dispopsitivo
enum State {
  // estado de reposo
  STANDBY,
  // primer nivel introductorio
  NIVEL_PUNTO,
  //  segundo nivel introductorio
  NIVEL_LINEA,
  // en este nivel el usuario debera mantener presionado o clikear el boton, respectivamente para escribir una letra M en morse
  NIVEL1,
  // en este nivel el usuario debera mantener presionado o clikear el boton, respectivamente para escribir una letra O en morse
  NIVEL2,
  // en este nivel el usuario debera mantener presionado o clikear el boton, respectivamente para escribir una letra R en morse
  NIVEL3,
  // en este nivel el usuario debera mantener presionado o clikear el boton, respectivamente para escribir una letra s en morse
  NIVEL4,
  // en este nivel el usuario debera mantener presionado o clikear el boton, respectivamente para escribir una letra A en morse
  NIVEL5,
  // al lograr pasar todos los niveles, el usuario visualizara una pequeña morsa guiñando el ojo en felicitación
  NIVEL_FINAL
};


// el pin es donde se conecta el botón al arduino, en este casi en la ranura número 2
const int BOTON_ENTRADA = 2;


//estado actual en espera
State currentState = STANDBY;


// comandos utilizados de edgar pon para usar botones en arduino con if-else https://edgarpons.com/botones-en-arduino-y-comandos-if-else/


void setup() {
  // configurar las entradas
  pinMode(BOTON_ENTRADA, INPUT_PULLUP);
  Serial.begin(9600);
}
// aqui se ponen todos los comandos que el ardino debe de ejecutar haciandolos que esten en continua funcionamiento, que pase mas de una vez
void loop() {
  //sirve para leer un valor (o poner en un estado) un pin digital.
  switch (currentState) {
    // en este estado esperamos la accion del usuario
    // 'presionar cualquie boton para que empiece el juego' y asi cambie a un estado activo
    case STANDBY:
      {
        Serial.println("En estado STANDBY");
        int lecturaA = digitalRead(BOTON_ENTRADA);

        // presiona cualquier boton para salir del estado standby y pasa a estado NIVEL4
        if (!lecturaA) {
          currentState = NIVEL4;
        }
        break;
      }
    case NIVEL4:
      {
        Serial.println("En estado NIVEL4");
        //if (animacionA) aparece en la pantalla{
         //se presiona lecturaA
     //}
        BOTON_ENTRADA.update(2);

        if bool(BOTON_ENTRADA.isClicked(3);)
        
          matrix.loadFrame(Nivel4);
      };
      //if (animacionA) aparece en la pantalla{
      //se presiona lecturaA
      //}
      //}else{} (quizas) si no lo hace en el tiempo establecido pierde vida
      break;
  }
};

