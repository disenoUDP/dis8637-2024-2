# clase-05

## VOCAL HUNT 

Con [@Mosswhosmoss](https://github.com/Mosswhosmoss/dis8637-2024-2)  ideamos el proyecto __"VOCAL HUNT"__, juego interactivo, inspirado en "whack-a-mole" y "pop it", desafía al jugador a reaccionar rápidamente al presionar vocales dentro de un tiempo límite. El objetivo es mantener la calma mientras se enfrenta a secuencias de mayor dificultad, mientras mantiene sus vidas.

"VOCAL HUNT" tiene como objetivo mejorar las habilidades motoras finas y reflejos, especialmente en niños y adultos mayores. A través de ejercicios de velocidad de reacción y coordinación ojo-mano, el juego proporciona un entrenamiento cognitivo y físico divertido y accesible.

## REFERENTES

***Ejemplo del juego whack-a-mole***

![***Ejemplo whack-a-mole*** ](./whackamole.png)

***Ejemplo del juego pop it***

https://github.com/user-attachments/assets/cc712618-53b4-4c0d-a535-d1b04aa49962

***Ejemplo de virtual sports play dance mat, referente brindado por [@clifford1one](https://github.com/clifford1one/dis8637-2024-2)***

![***Ejemplo virtual sports mat*** ](./virtual_sport_mat.png)

## DISEÑO Y MATERIALES

Ideamos el diseño del dispositivo como una caja de madera, en la cual tendría sus respectivas instrucciones y guías gráficas para el uso del mismo.

***Boceto de "VOCAL HUNT"***

![Boceto Vocal Hunt](./bocetoproyecto.jpeg)

***Imagen de [@brandnewnoise](https://www.instagram.com/brandnewnoise)***

<img width="422" alt="image" src="https://github.com/user-attachments/assets/52393c02-7d55-47f8-8ff8-1a245522591a">

***Materiales***

1. Madera mdf
2. Botones / pulsadores led Arcade
3. Arduino
4. Cables de conexión

***jugabilidad***

El jugador se enfrenta a un panel con 5 botones, cada uno representando una vocal (A, E, I, O, U). En la pantalla central se mostrará una secuencia de vocales que deberá seguir al pie de la letra. Cada vocal aparecerá con un temporizador que marca el tiempo límite para reaccionar. El jugador debe concentrarse y actuar con rapidez, presionando el botón correcto antes de que se agote el tiempo.

El jugador cuenta con 2 vidas, y perderá una cada vez que cometa un error o no presione el botón a tiempo. A medida que el juego avanza, las secuencias se vuelven más rápidas y complicadas, aumentando la presión. El reto consiste en mantener la calma y reaccionar con precisión, pues cuando las 2 vidas se agoten, el juego terminará.

## CONSTRUCCIÓN DEL OBJETO

Al principio intentamos hacer una estructura transportable, es decir pequeña. Primero lo intentamos hacer con impresión 3d donde [@AlanisMria](https://github.com/AlanisMria/dis8637-2024-2) me ayudo a modelar, con un tiempo de espera de 12 hrs y que terminó fallando

![Modelado_3D](./Modelado_3D.jpg).
![Fallo_modelado_3D](./Fallo_modelado_3D.jpg)
Descubrimos que falló porque confundimos un filamento ABS por uno PLA

Luego siguiendo con la idea de la transportabilidad hicimos una caja chiquita con la ayuda de mi papá

![cortandoMadera](./cortandoMadera.jpg)
![maderaCortada](./maderaCortada.jpg)
![piezasCaja](./piezasCaja.jpeg)
![cajaArmada](./cajaArmada.jpeg)

Al final no cabía ningún circuito en la caja así que se hizo una mas grande

![cajaGrande](./cajaGrande.jpeg)
![cajaLijadaArriba](./cajaLijadaArriba.jpeg)
![cajaLijada](./cajaLijada.jpeg)

Para hacerle los agujeros requerimos de ayuda nuevamente

![hoyosBotones](./hoyosBotones.jpg)
![hoyosBotonesProblemas](./hoyosBotonesProblemas.jpg)

El problema de hacer los agujeros era que el MDF se quemaba y se pegaba en la broca demorandonos más en hacer todos los agujeros

https://github.com/user-attachments/assets/67e6b9ee-4b94-49aa-abf2-10c8dd6cbc03

Si bien al momento de hacer los agujeros para los botones no quedaron muchas imperfecciones, cuando finalmente hicimos el agujero por donde entraría el cable usb-c para conectar con el arduino, al ser primera vez que trabajamos con mdf, no teniamos contemplado o más bien, no sabiamos que por el lado interior se pelaría

Es algo importante a tener en cuenta al momento de perforar el mdf

![image](https://github.com/user-attachments/assets/bf35f052-28d1-4a57-a288-cb0476820df5)

## PRIMEROS ACERCAMIENTOS

En la clase 4 junto a morgan no teniamos muy definido aun el rumbo de nuestro proyecto, por lo que no avanzamos mucho en proyectar físicamente las dimensiones interiores y exteriores de la caja, aun así exploramos bastante el area del circuito (aun que no funciono TT)

Principalmente teniammos contemplados el uso de leds, resistores y hasta protoboards, lo que se simplificó y no fueron necesarios actualmente en nuestro trabajo

![image](https://github.com/user-attachments/assets/8a2e804a-c755-4a36-877b-e2728d8f2931)
Aaun que no todo es fallo, seguimos intentando poder usar el pulsador junto al led, y tuvimos pruebas exitosas!

![image](https://github.com/user-attachments/assets/dd73a054-d855-4ac9-9896-20bc76502131)

## DIAGRAMA DE FLUJO

tarea: quiero jugar al juego de secuencia

casos limites: que no este conectado, que el conector se eche a perder

1. Conecta al juego a una fuente de energía a través de un cable usb-c
2. El juego queda en un estado de espera hasta que el jugador aprete cualquier botón/"vocal" para iniciar
3. Las letras que aparecerán en el arduino corresponderá a la vocales, debes de apretar el botón con la letra que se muestra en la pantalla
4. gradualmente aumenta la complejidad de este juego, disminuyendo los intervalos en los que se muestra la vocal y agregado a eso a animaciones que indiquen que se acaba el tiempo de reacción, hay un margen de error de 2 intentos, al equivocarse una tercera vez el juego vuelve al modo de espera, y para volver a empezar hay que presionar cualquier botón
5. Una vez acabadas las 2 vidas el juego volverá a un modo de espera o después de un tiempo considerable de no interacción

## CÓDIGO BASE DE SERGIO

El código que nos dió Sergio fue una excelente base para trabajar, y no solo por hacer el código sino que me dió la noció de que palabras, comandos, variables usaría en el código y poder definirlas para mi entendimiento!

 ```c++
enum State {
  STANDBY,
  ACTIVO,
  TRABAJANDO
};

const int BUTTON_PIN = 2;

State currentState = STANDBY;

void setup() {
  pinMode(BUTTON_PIN, INPUT_PULLUP);
  Serial.begin(115200);
}

void loop() {
  switch (currentState) {
    case STANDBY:
      Serial.println("En estado STANDBY");
      if (checkButtonPress()) {
        currentState = ACTIVO;
      }
      break;

    case ACTIVO:
      // En ACTIVO podemos hacer la intro, o las instrucciones
      Serial.println("En estado ACTIVO");

      // acá entramos a jugarshh
      if (checkDistanceSensor()) {
        currentState = TRABAJANDO;
      }
      break;

    case TRABAJANDO:
      Serial.println("En estado TRABAJANDO");

      // Cuando terminamos, volvemos a standby
      currentState = STANDBY;
      break;
  }

}

bool checkButtonPress(){}
bool checkDistanceSensor(){}
```

## CÓDIGO (DEFINICIONES Y OTRAS COSAS) :b

**definiciones de los códigos que utilizamossacadas de google + clases**

- ___const int___: significa constante. Es un calificador variable que modifica el comportamiento de la variable, haciendo que sea una variable de "sólo lectura". No es modificable.
- ___int___: variable modificable.
- ___pinMode___: sirve para configurar el modo de trabajo de un pin pudiendo ser INPUT (entrada) u OUTPUT (salida).
- ___digitalWrite___: sirve para establecer un valor de HIGH o LOW en un pin digital de Arduino siempre y cuando se haya configurado como salida (OUTPUT).
- ___switch___: evalúa una expresión de una lista de posibles coincidencias (los ___int___), cuando encuentra una correspondencia se ejecuta un bloque de instrucciones.
- ___break___: finaliza la ejecución de la instrucción do , for , ___switch o while___ más próxima que la incluya.
- ___Serial.println___: (estado) es el que nos permite enviar datos por comunicación serial.
- ___bool___:  Las variables de este tipo solo pueden tener dos valores: verdadero o falso, por ejemplo 0 o 1.
- ___Serial.begin___:  establece la velocidad de transmisión en baudios y se utiliza para indicar a la placa Arduino que está lista para enviar y recibir datos. No necesitamos más de 9600.
- ___void loop___: es la función principal, el punto de entrada a nuestro programa, es el lugar donde tenemos que poner los comandos que se ejecutarán mientras la placa Arduino esté habilitada.
- ___enum___: es una herramienta que nos proporciona el C++ para ayudarnos a detectar posibles errores en el código.
- ___false___: se define como 0 (cero), hay que tener en cuenta que las constantes true y false se escriben en minúsculas, a diferencia de HIGH, LOW, INPUT y OUTPUT.
- ___true___: comunmente se define como 1, lo cual es correcto, pero true tiene una definicion mas amplia, cualquier entero que no es cero es true.
- ___digitalRead___: sirve para leer un valor (o poner en un estado) un pin digital.
  
## CóDIGO PRINCIPAL CON ERRORES

 ```c++
// lenguaje de c++ para detectar posibles errores en el código y valores, por lo que lo usamos ahora para definir los estados de nuestro dispopsitivo
enum State {
  STANDBY,    // en espera
  ACTIVO,     // una vez se inicia el juego
  TRABAJANDO  // mientras el usuario juega con con 'vocal hunt' (mientras que este dentro del rango de vidas)
};

// el pin es donde se conecta el botón al arduino, en este casi en la ranura número 2
const int BUTTON_PIN = 2;

//estado actual en espera
State currentState = STANDBY;

void setup() {
  // comandos utilizados de edgar pon para usar botones en arduino con if-else https://edgarpons.com/botones-en-arduino-y-comandos-if-else/
  pinMode(2, OUTPUT);
  pinMode(13, INPUT);
  Serial.begin(9600);
}
// aqui se ponen todos los comandos que el ardino debe de ejecutar haciandolos que esten en continua funcionamiento, que pase mas de una vez
// comandos utilizados de edgar pon para usar botones en arduino con if-else https://edgarpons.com/botones-en-arduino-y-comandos-if-else/
void loop() {
  //irve para leer un valor (o poner en un estado) un pin digital.
  switch (currentState) {
    // en este estado esperamos la accion del usuario que seria 'presionar cualquie boton para que empiece el juego' y asi cambie a un estado activo
    case STANDBY:
      Serial.println("En estado STANDBY");
      int BUTTON_PIN = digitalRead(2);
      // si el valor de el boton es igual a 1
      // una vez accionado un boton salimos del estado standby
      if (BUTTON_PIN == 1) {
        digitalWrite(13, HIGH);
      } else {
        digitalWrite(13, LOW);
        break;
      }
  }
}
 ```
En base a este código hice unas pruebas con los pulsadores que teniamos, aun que este escrito a la "mala" fue un buen punto de partida para mí ya que desde ahí pude aclarar mejor el rumbo del código

Estas son unas de las cuantas reacciones que tuvo el arduino y el pulsador con el código anterior

https://github.com/user-attachments/assets/7f890011-af67-45cb-8d76-e40f6c789dff

https://github.com/user-attachments/assets/ea7ec7df-d4af-47a9-a52a-33e079bea672


## CÓDIGO ACTUAL

Primero para corregir el codigo anterior tuvimos una reunión con [@montoyamoraga](https://github.com/montoyamoraga?tab=repositories&q=&type=&language=&sort=) donde pudimos darnos cuenta de algunas cosas, algo importante fue lo siguiente:

Para que quien no tenga un pulsador o tenga problemas para conectarlo/hacerlo funcionar (siempre y cuando este trabajando con pinMode(INPUT_PULLUP)) pueden conectar uno de estos cablecitos corto a GND y al número de pin que tengan en su codigo (en mi caso 2) esto reemplazaria al pulsador

![image](https://github.com/user-attachments/assets/b4b9688c-c1cf-419b-8a3e-4f943cf69729)

# CÓDIGO
```c++
#include "Arduino_LED_Matrix.h"

// lenguaje de c++ para detectar posibles errores en el código y valores
//por lo que lo usamos ahora para definir los estados de nuestro dispopsitivo
enum State {
  // en espera
  STANDBY,
  // mientras el usuario juega con con 'vocal hunt' (mientras que este dentro del rango de vidas)
  TRABAJANDO
};

// el pin es donde se conecta el botón al arduino, en este casi en la ranura número 2
const int BOTON_ENTRADA_A = 2;
const int BOTON_ENTRADA_E = 3;
const int BOTON_ENTRADA_I = 4;
const int BOTON_ENTRADA_O = 5;
const int BOTON_ENTRADA_U = 6;

//estado actual en espera
State currentState = STANDBY;

// comandos utilizados de edgar pon para usar botones en arduino con if-else https://edgarpons.com/botones-en-arduino-y-comandos-if-else/

void setup() {
  // configurar las entradas
  pinMode(BOTON_ENTRADA_A, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_E, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_I, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_O, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_U, INPUT_PULLUP);



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
        int lecturaA = digitalRead(BOTON_ENTRADA_A);
        int lecturaE = digitalRead(BOTON_ENTRADA_E);
        int lecturaI = digitalRead(BOTON_ENTRADA_I);
        int lecturaO = digitalRead(BOTON_ENTRADA_O);
        int lecturaU = digitalRead(BOTON_ENTRADA_U);

        // presiona cualquier boton para salir del estado standby y pasa a estado trabajando
        if (!lecturaA || !lecturaE || !lecturaI || !lecturaO || !lecturaU) {
          currentState = TRABAJANDO;
        }
        break;
      }
    case TRABAJANDO:
      {
        Serial.println("En estado TRABAJANDO");
        //if (animacionA) aparece en la pantalla{
          //se presiona lecturaA
      //}
        //}else{} (quizas) si no lo hace en el tiempo establecido pierde vida
          break;
      }
  }
}
```

## ANIMACIONES

Después de haber resuelto la primera parte que era definir el estado standby, procedí a ver como era hacer animaciones en arduino (que dolor de cabeza), fue bastante complicado ya que no entendia ninguno de los metodos utilizados en las referencias de arduino, hasta que llegué a esta video [Probando el nuevo Arduino uno R4 Wifi de @MCI Electronics](https://www.youtube.com/watch?v=6A_xKy1qANw&t=196s) me salvo la vida!

probe animaciones ya hecha tanto por el creador del video anterior o de arduino

https://github.com/user-attachments/assets/67c3d389-0400-437b-af70-0d28a7c88996

Ya después me aventuré a crear mis propias animaciones

https://github.com/user-attachments/assets/d404d697-cdfa-417c-ac7e-42698ebf0cb7

Estas animaciones se crean en un archivo aparte, como mencioné anterioremente no es .ino sino que es .h ahi es donde se almacena el código de la animación exportado del editor

https://github.com/user-attachments/assets/1e989e2d-a3e6-4a93-88e4-6e1facd35d96

El código que marque es el que llama al archivo .h lo lee y lo reproduce en la pantalla led del arduino

```c++
/*
  Play Animation

  Sketch shows animation defined in animation.h

  See the full documentation here:
  https://docs.arduino.cc/tutorials/uno-r4-wifi/led-matrix
*/


// este es el código solo directo desde archivo>ejemplos>LED_Matrix>PlayAnimation
#include "Arduino_LED_Matrix.h"   //Include the LED_Matrix library
#include "animation.h"            //Include animation.h header file

// Create an instance of the ArduinoLEDMatrix class
ArduinoLEDMatrix matrix;  

void setup() {
  Serial.begin(115200);
  // you can also load frames at runtime, without stopping the refresh
  matrix.loadSequence(animation);
  matrix.begin();
  // turn on autoscroll to avoid calling next() to show the next frame; the paramenter is in milliseconds
  // matrix.autoscroll(300);
  matrix.play(true);
}

void loop() {
  delay(500);
  Serial.println(millis());
}

```

Y este es el código en la pestaña de _animation.h_ que contiene un código de animacion default de la biblioteca de arduino (editable)

```c++
const uint32_t animation[][4] = {
	{
		0x30c20,
		0x43fc3fc2,
		0x430c000,
		66
	},
	{
		0x30c29,
		0x436c36c2,
		0x9430c000,
		66
	},
	{
		0x30c2f,
		0x430c30c2,
		0xf430c000,
		66
	},
	{
		0x36c29,
		0x41081082,
		0x9436c000,
		66
	},
	{
		0x3fc30,
		0xc1081083,
		0xc3fc000,
		66
	},
	{
		0x3fc20,
		0x42042042,
		0x43fc000,
		66
	},
	{
		0x3f,
		0xc2042043,
		0xfc000000,
		66
	},
	{
		0x0,
		0x3fc3fc0,
		0x0,
		66
	},
	{
		0x0,
		0x1f81f80,
		0x0,
		66
	},
	{
		0x0,
		0xf00f00,
		0x0,
		66
	},
	{
		0x0,
		0x600600,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	}
};
```
Agregando todo lo anterior tenemos el código actual que estamos utilizando 
```c++
#include "Arduino_LED_Matrix.h"   //Include the LED_Matrix library
#include "animation.h"            //Include animation.h header file
#include <LedControl.h>

// lenguaje de c++ para detectar posibles errores en el código y valores
//por lo que lo usamos ahora para definir los estados de nuestro dispopsitivo
enum State {
  // en espera
  STANDBY,
  // mientras el usuario juega con con 'vocal hunt' (mientras que este dentro del rango de vidas)
  TRABAJANDO
};

// el pin es donde se conecta el botón al arduino, en este casi en la ranura número 2
const int BOTON_ENTRADA_A = 2;
const int BOTON_ENTRADA_E = 3;
const int BOTON_ENTRADA_I = 4;
const int BOTON_ENTRADA_O = 5;
const int BOTON_ENTRADA_U = 6;

// variable globales
//estado actual en espera
State currentState = STANDBY;
// Create an instance of the ArduinoLEDMatrix class
ArduinoLEDMatrix matrix;

// comandos utilizados de edgar pon para usar botones en arduino con if-else https://edgarpons.com/botones-en-arduino-y-comandos-if-else/

void setup() {
  // configurar las entradas
  pinMode(BOTON_ENTRADA_A, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_E, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_I, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_O, INPUT_PULLUP);
  pinMode(BOTON_ENTRADA_U, INPUT_PULLUP);

  Serial.begin(115200);
  // you can also load frames at runtime, without stopping the refresh
  matrix.loadSequence(uncorazon);
  matrix.loadSequence(doscorazones);
  matrix.loadSequence(A);
  matrix.loadSequence(E);
  matrix.loadSequence(I);
  matrix.loadSequence(O);
  matrix.loadSequence(U);

 

  matrix.begin();
  // turn on autoscroll to avoid calling next() to show the next frame; the paramenter is in milliseconds
  // matrix.autoscroll(300);
  matrix.play(true);

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
          int lecturaA = digitalRead(BOTON_ENTRADA_A);
          int lecturaE = digitalRead(BOTON_ENTRADA_E);
          int lecturaI = digitalRead(BOTON_ENTRADA_I);
          int lecturaO = digitalRead(BOTON_ENTRADA_O);
          int lecturaU = digitalRead(BOTON_ENTRADA_U);

          // presiona cualquier boton para salir del estado standby y pasa a estado trabajando
          if (!lecturaA || !lecturaE || !lecturaI || !lecturaO || !lecturaU) {
            currentState = TRABAJANDO;
          }
          break;
        }
      case TRABAJANDO:
        {
          Serial.println("En estado TRABAJANDO");
          

          

            
          //se presiona lecturaA
          //}
          //}else{} (quizas) si no lo hace en el tiempo establecido pierde vida
          break;
        }
    }
  }

```

Código de la animación

```c++
const uint32_t uncorazon[][4] = {
	{
		0x0,
		0xa01f00e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa01f00e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa0040,
		0x0,
		66
	},
	{
		0x0,
		0xa0040,
		0x0,
		66
	},
	{
		0x0,
		0x40,
		0x0,
		66
	},
	{
		0x0,
		0x40,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	},
	{
		0x0,
		0xa0040,
		0xa000000,
		66
	},
	{
		0x0,
		0xa0040,
		0xa000000,
		66
	},
	{
		0x1,
		0x100a0000,
		0xa011000,
		66
	},
	{
		0x1,
		0x100a0000,
		0xa011000,
		66
	},
	{
		0x2001,
		0x10000000,
		0x11020,
		66
	},
	{
		0x2001,
		0x10000000,
		0x11020,
		66
	},
	{
		0x4002000,
		0x0,
		0x20,
		66
	},
	{
		0x4002000,
		0x0,
		0x20,
		66
	},
	{
		0x4000000,
		0x0,
		0x0,
		66
	},
	{
		0x4000000,
		0x0,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	},
	{
		0x0,
		0x0,
		0x0,
		66
	}
};

const uint32_t doscorazones[][4] = {
	{
		0x50,
		0xaf9f70e2,
		0x4000000,
		66
	},
	{
		0x50,
		0xaf9f70e2,
		0x4000000,
		66
	},
	{
		0x0,
		0xa71f20e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa71f20e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa21f00e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa21f00e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa01f00e0,
		0x4000000,
		66
	},
	{
		0x0,
		0xa01f00e0,
		0x4000000,
		66
	},
	{
		0x48,
		0xa31f30e4,
		0x84000000,
		66
	},
	{
		0x48,
		0xa31f30e4,
		0x84000000,
		66
	},
	{
		0x84048,
		0xa01f00e4,
		0x84840000,
		66
	},
	{
		0x84048,
		0xa01f00e4,
		0x84840000,
		66
	},
	{
		0x2084000,
		0xa01f00e0,
		0x4840020,
		66
	},
	{
		0x2084000,
		0xa01f00e0,
		0x4840020,
		66
	},
	{
		0x2000000,
		0xa01f00e0,
		0x4000020,
		66
	},
	{
		0x2000000,
		0xa01f00e0,
		0x4000020,
		66
	},
	{
		0x0,
		0xa01f00e0,
		0x4000000,
		66
	}
};

//animacion letra 'A'
const uint32_t A[][4] = {
	{
		0x6009010,
		0x81081081,
		0xf8108108,
		66
	}
};

//animacion letra 'E'
const uint32_t E[][4] = {
	{
		0x1f810010,
		0x1f01001,
		0x1001f8,
		66
	}
};

//animacion letra 'I'
const uint32_t I[][4] = {
	{
		0x1f806006,
		0x600600,
		0x600601f8,
		66
	}
};

//animacion letra 'O'
const uint32_t O[][4] = {
	{
		0x1f810810,
		0x81081081,
		0x81081f8,
		66
	}
};

//animacion letra 'U'
const uint32_t U[][4] = {
	{
		0x10810810,
		0x81081081,
		0x81081f8,
		66
	}
};


```

## PRODUCTO FINAL

Al momento de la instalación hubieron problemas en los botones, donde no de unian las piezas, dificultando el poderpresionarlas

https://github.com/user-attachments/assets/d025c5bc-33d6-4890-8f7c-b5f8733bbb07

No avanzamaos mas en el código por tiempo, la intención era hacer que funcionara totalmente pero el proceso que llevamos culmino en un resultado satisfactorio

![image](https://github.com/user-attachments/assets/1490638a-35d6-49f6-a09f-13df4593e468)

![image](https://github.com/user-attachments/assets/deb5ddc2-dd47-49db-b9f2-c086367c496a)

![image](https://github.com/user-attachments/assets/3b68eb83-8b94-4d25-9b07-c1e8b14d83a6)

![image](https://github.com/user-attachments/assets/b849331f-c5bc-4bf1-a4cd-43e5d9f42995)

![image](https://github.com/user-attachments/assets/9ef91406-c7d2-4b9e-9621-8b86ecc84c16)
