# clase-04


## APUNTES 

- Referente Camila remirez (creadora de juegos)
- Hacer un botón en base a lamina de cobre o aluminio en la esquina donde al hacer contacto la bolita con la pared inicie el tiempo.
- estado de espera: se debe realizar una accion para sacarlo de este estado
- stack overflow pag de codigos

const (comando que no varia a través del tiempo)

estado del botón 0 estado natural de las cosas 

setup (condición inicial)  termina la etapa cuando aparece }

Loop  repetir, programaciones que se iniciaran después del setup

High= verdadero  

´´´ (para citar en gibhub) - revisar gibhub profes clases profe

ctrl +f  - buscar una palabra y remplazar una palabra

Standby = quieto 

const (proteger una parte del codigo)

*BUTTON_PIN =numero - modificar el numero y se modificara en todo el codigo 

En el loop se usa switch modifica el estado - Switch (Standby)

if (revisaboton) - estadoActual= ACTIVO   esa accion dice que cada vez que se precione el boton realiza esa accion 

case TRABAJANDO:

Serial.println

Variable- boolean - true/false

ctrol+t- ordenar código

Umbrales-

*libreria adafrut es recomendada 

&& es para condicionar ej: if (distancia > Umbral - 15  &&  distancia  < Umbral){
}

> =o
> 
- estado s (No esta la bolita, esta la bolita y esta el tiempo, esta la bolita finalizo el tiempo)

CuentaRegresiva ()

case ACTIVO, 

CuentaRegresiva ()

if  (sensorFin ()  | |  cuentaRegresiv ( ) )

estadoActual = Trabajando

## LABERINTO

![texto](./laberinto.JPG)

¿QUE ES?
Es un juego de un laberinto donde se busca alcanzar completar un circuito en el minimo tiempo posible, donde se dipondra de un tiempo maximo para intentar lograr llegar a la meta, el jugador que logre llegar al final del juego antes de que finalice el tiepo designado (mostrado por los led del arduino) ganara el juego.

Diagrama de flijo
tarea: quiero empezar a jugar 

casos límites:
que la pelotita no esté en el tablero.
que el tiempo empiece a correr y no esté la pelotita.
que el tiempo no corra.

 1. tomar el tablero con ambas manos, de manera horizontal.
 2. asegurarse de que la pelotita este en el tablero. Si la pelotita no está, buscarla dentro de la base.
 3. verificar que el tiempo en pantalla no esté corriendo.
 4. Tomar la pelotita y ubicarla en el inicio del laberinto.
 5. al momento de dejar la pelotita al inicio del laberinto, comienza el juego y empieza a correr el tiempo.
 6. verificar que el tiempo esté corriendo.
 7. comenzará a parpadear la pantalla, indicando que se agotará el tiempo límite.
 8. en 40 segundos, se deberá llegar al final del laberinto, terminando el juego.
 9. al llegar al fnal del laberinto, se mostrará una animación indicando que ganaste o perdiste.
