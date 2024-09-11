// TODO aqui va el encabezado
// autores
// fecha
// tecnologia
// etc

// incluir biblioteca para pantalla de Arduino Uno R4 Wifi
#include "Arduino_LED_Matrix.h"

// TODO que es esto
// #include "gallery.h"

// TODO de donde salio esta biblioteca?
// no esta completa en el codigo, no la usaria
// es suficiente con usar los metodos de debounce button
// que estan explicados en la referencia de arduino
// https://docs.arduino.cc/built-in-examples/digital/Debounce/
// #include "PushButton.h"

// TODO incluir todas las animaciones aqui?
#include "Nivel4.h"

// codigo de referencia del repositorio de la Sofia Etchepare
// TODO agregar enlace a ese repositorio
// lenguaje de c++ para detectar posibles errores en el código y valores
//por lo que lo usamos ahora para definir los estados de nuestro dispopsitivo
enum State {

  // estado de reposo
  REPOSO,

  // primer nivel introductorio
  // para aprender como hacer un punto
  NIVEL_PUNTO,

  //  segundo nivel introductorio
  // para aprender como hacer una linea
  NIVEL_LINEA,


  // en los niveles numerados
  // el usuario debe clickear o mantener presionado el boton
  // para escribir las letras en morse
  // y ojo en computacion contamos desde 0, no desde 1

  // letra M
  NIVEL_1,
  // letra O
  NIVEL_2,
  // letra R
  NIVEL_3,
  // letra S
  NIVEL_4,
  // letra A
  NIVEL_5,

  // al lograr pasar todos los niveles,
  // el usuario visualizara una pequeña morsa guinando el ojo para felicitarle
  NIVEL_FINAL
};

// boton conectado al pin 2 para lectura
const int BOTON_ENTRADA = 2;

// estado inicial en reposo
State currentState = REPOSO;

// crear objeto matrix para controlar la pantalla
ArduinoLEDMatrix matrix;

// comandos utilizados de edgar pon
// para usar botones en arduino con if-else
// https://edgarpons.com/botones-en-arduino-y-comandos-if-else/

void setup() {
  // configurar las entradas
  pinMode(BOTON_ENTRADA, INPUT_PULLUP);

  // inicializar la pantalla
  matrix.begin();

  // abrir comunicacion serial
  Serial.begin(9600);
}

void loop() {


  switch (currentState) {
    // en este estado esperamos la accion del usuario
    // 'presionar cualquie boton para que empiece el juego' y asi cambie a un estado activo
    case REPOSO:
      {
        Serial.println("En estado STANDBY");
        int lecturaA = digitalRead(BOTON_ENTRADA);

        // presiona cualquier boton para salir del estado standby y pasa a estado NIVEL_4
        if (!lecturaA) {
          currentState = NIVEL_4;
        }
        break;
      }

    case NIVEL_PUNTO:
      {
        Serial.println("NIVEL_PUNTO");
        break;
      }

    case NIVEL_LINEA:
      {
        Serial.println("NIVEL_LINEA");
        break;
      }

    case NIVEL_1:
      {
        Serial.println("NIVEL_1");
        break;
      }

    case NIVEL_2:
      {
        Serial.println("NIVEL_2");
        break;
      }

    case NIVEL_3:
      {
        Serial.println("NIVEL_3");
        break;
      }

    case NIVEL_4:
      {
        Serial.println("NIVEL_4");

        // TODO no entiendo esto
        //if (animacionA) aparece en la pantalla{
        //se presiona lecturaA
        //}
        //}else{} (quizas) si no lo hace en el tiempo establecido pierde vida

        // TODO esta linea creo que es por la biblioteca pushbutton
        // que quieren usar, pero recomiendo hacer con debounce no mas
        // BOTON_ENTRADA.update(2);

        // TODO lo mismo con esto
        // if bool(BOTON_ENTRADA.isClicked(3);)

        // TODO antes de inicializar la matrix, tienes que declararla
        // ya lo hice arriba antes de setup()
        // y luego la inicialize en setup()
        // ojo con https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix/
        // ahi dice como crear tus frames, use uno que viene en la biblioteca
        matrix.loadFrame(LEDMATRIX_EMOJI_BASIC);
        
        break;
      }

    case NIVEL_5:
      {
        Serial.println("NIVEL_5");
        break;
      }

    case NIVEL_FINAL:
      {
        Serial.println("NIVEL_FINAL");
        break;
      }
  }
}
