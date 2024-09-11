# *Clase.03*(˶˃ ᵕ ˂˶) .ᐟ.ᐟ

Presentamos nuestro proyecto con Juan y recibimos los siguientes feedbacks

𖹭 Definir de manera muy acotada la función del dispotivo, ¿Que se le pregunta? ¿Como responde?

𖹭 Utilizar el sensor de sonido y que funcione detectando el nivel de ruido de la voz acotando los valores para 
q no se interrumpa

## Avances de codigo y hardware

Para construir nuestro codigo iniciamos recopilando codigos que manejaban los componenetes
que queremos utilizar, para de esta manera familiarizarnos con la estructura y variables
que ocupa tanto en sensor y la matriz led de manera mas didactica :)

**𖹭Codigo control panel led𖹭**

*De este codigo utilizamos la estructura principal, incluye las librerias que nos ayudan a manejar la matriz de led 
Luego en el **void setup** nos quedamos con la parte que inicia la matríz y en el **void loop** encontramos las
funciones que necesitamos para que la matríz led nos muestre texto y haga scroll, así el tamaño reducido de 12x8 leds
no resulta un problema.*

**𖹭Codigo para medir el nivel de entrada analogico del sensor𖹭**

*Este codigo lo extraimos de la pagina **arduinomodules.info** que tiene una amplia recopilación de especificaciónes y posibles
usos de modulos de arduino, con ejercicios de codigo y diagramas de conexion. Este codigo tiene como funcion utilizar la entrada
digital del sensor para definir si hay sonido o no (HIGH or LOW) y de ser asi encender un led convencional conectado al pin 13
utilizando la estructura de control **if...else**, ademas de esto (y la principal razon por la que lo utilizamos) da la instrucción al 
serial plotter de la arduino IDE de entregarnos la información del pin analogico, Osea el ruido es detectado por el sensor (digital) y
luego esa señal pasa por el amplificador que lo traduce como una cantidad corriente electrica y le asigna un valor numerico (analogo) que nos 
permite evitar que el aparato se encienda con el ruido ambiente y solo ejecute una acción si el valor de el ruido es equivalente al
que determianamos es el que produce una voz hablandole de manera directa.*

*𖹭Codigo del aparato𖹭*

*Luego de entender mediante de estos dos codigos como hacer lo que queriamos hacer, con que función y con cuales valores estructuramos
el codigo del aparato utilizando variables,una variable que determine en que pin analogico estamos trabajando **A0*,  variables que midan el pin analogico y una variable que represente el valor por sobre el cual queremos trabajar *48*, para luego en la función **loop ()** activar el texto en la matríz de leds mediante la estructura **if...else**, **si (if)** el valor es mayor a 48, vemos el texto, **si no (else)** la matríz se encontrara en blanco*

*Como misión posterior tenemos definir que es lo que dira el texto o si incluira alguna otra aniamación, añadir una función que seleccióne
alguno de los textos de manera aleatoria cada vez que detecte alguna voz y los muestre en la pantalla*

## Avances conceptuales

**𖹭Nombre:**

**𖹭Descripción:**

**𖹭Instructivo:**

