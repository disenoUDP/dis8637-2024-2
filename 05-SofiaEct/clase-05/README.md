# clase-05

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

## DIAGRAMA DE FLUJO: ¡VOCAL HUNT!

1. conecta al juego a una fuente de energía a través de un cable usb
2. el juego queda en un estado de espera hasta que el jugador inicie el juego apretando cualquier tecla/botón
3. las letras que apareceran en el arduino corresponderan a la vocales, debes de apretar el botón con la letra que se muestra en la pantalla
4. gradualmente aumenta la complejidad de este juego, disminuyendo los intervalos en los que se muestra la vocal y agregado a eso a animaciones que indiquen que se acaba el tiempo de reacción, hay un margen de error de 2 intentos, al equivocarse una tercera vez el juego vuelve al modo de espera, y para volver a empezar hay que presionar cualquier botón
5. una vez acabadas las 2 vidas el juego volvera  a un modo de espera o despues de un tiempo considerable de no interaccion
  
## CODIGO A USAR

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
