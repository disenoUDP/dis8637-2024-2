# clase-06
*24 de septiembre de 2024*

## Internet de las cosas

*Dispositivos conectados*

- Interfaces digitales para cambiar dimensiones físicas.
- ¿Cómo hacer que las cosas salgan de la pantalla? (mirar más allá / fuera de la norma)
- El diseño de interacción no está limitado a la interfaz del dispositivo.
- Formato físico, objetos que aprenden.
- Juego, narrativa, atención e interés.
- Diseño de servicio ( https://eldefinido.cl/actualidad/pais/8556/Oliber-la-ortesis-creada-por-estudiantes-chilenas-que-la-rompio-en-Silicon-Valley/ )
  
## ¿Hacia que dirección quiero ir?

*Anotar preguntas que nos van surgiendo* 

- Aprenderemos a programar el puerto inalámbrico del Arduino uno R4 wifi.
- Basta que haya un medio transmisor (el aire) para compartir una señal wifi.
- Este arduino dice Arduino cloud a diferencia del arduino R4 mínima
  
1. Entrar en la documentación de arduino uno R4.
2. Ir a Hardware
3. Arduino uno R4 wifi
4. Ir a especificaciones
5. Ir a tutorials
6. instalar en arduino el board manager arduino uno r4 board
7. ir a ejemplos y navegarlos
8. ir a wifi s3
9. ir a ScanNetworks (Imprimer la dirección mac y luego escanea las red wifi disponibles usando nina
    
Prenderá el puerto serial que permite que el arduino reciba señal 

#include = a lo que se incluye 
   
*¿Cómo transmitir mensajes desde un arduino a otro?*

ESP32 uso wifi y bluetooth antes de arduino

## Glosarios terminos de Arduino 

- https://practicas-arduino-palafox.blogspot.com/2017/10/glosario-de-terminos-de-arduino.html
- https://www.arduino.cc/reference/es/
  
*wifiwebclient*

while = mientras no esta conectado se tratará de coonectar 

El estatus dice el estado de la red y asigna una direccion ip a cada arduino

Cada servidor puede responder en la misma direccion ip a multiples solicitudes simultaneamente

Un anexo puede ser el cambio en un codigo en base a subconjuntos de codigos

80 es la definicion estandar de un servidor web

get es decir escribe la dirección en la barra de busqueda y preciona enter.

read_response

! indica lo contrario

Osi model https://anamul-haque.medium.com/what-is-the-osi-model-66758c44c896

Sirve a los programadores para trabajar en diversas capas que aseguran el correcto funcionamiento de las demás

1. *Bits/Physical* digitaliza las señales del cableado y sus velocidades
2. *Frames/data links* conjuntos de información
3. *packets/Network* 
4. *Segments/Transport*
5. *Data/Session*
6. *Data/Presentation*
7. *Data/Aplication*

Cada vez que conectamos algo a internet el dispositivo debe tener un protocolo de red

existen multiples protocolos para poder conectar dispositivos electronicos 

Nosotros usamos en el ejemplo http, el cual se diseño para incluir ipertextos 

Protocolo http debe estar completo para que no hayan colapsos

Protocolo mqtt programo un dispositivo para que escuche un canal y solo reacciona cuando hay información

Hacer que el arduino sea un servidor para poder hacerle preguntas atraves de wifi.

*AP_SimpleWebServer*

    int led =  LED_BUILTIN; // conectado al pin 13

El wifi será ofrecido y manejado por arduino (el chip de arduino brinda wifia a lo que lo rodea, pero no internet)

cada vez que se conecte algo externo al arduino debemos definir si es una entrada o una salida

El arduino funciona como routter y servidor (no maneja multiples conexiones a menos que se programe para hacerlo)

Un Chrome integra la barra de navegación y la barra de busqueda

## configurar un nuevo arduino que se conecte a la red de arduino servidor

Con codigo wifi web client en donde en arduino secret introducimos el nombre de la ret y el pin 

El otro arduino estara esperando la L o la H 

PWM tecnica para curvar una señal segun el pulso 

## 

Página de arduino cloud es un editor online para hacer scketches e interfaces para dispositivos con internet de las cosas

Nos muestra el estado de informacion

Las cosas son los proyectos

S ettup se añaden variables de la nuve que pueden actuar en el codigo sin modificarlo conectar a aurduino y wiffi a elección 

Crea automaticamente las conexiones a wifi 

El codigo incluye las propiedades de la cosa, bibliotecas del motor en este caso

Se pueden definir propiedades de la cosa y dar la orden para que se conecte a arduino cloud

Tratar de no tocar configuraciones por defecto para evitar errores

mapeo de variables que no se encuentran el el codigo u en el arduino

Dashboard nos deja añadir distintos controladores, a los que se les pueden editar las variables por ejemplo de 0 a 100

Si esto se abre con la cuenta de arduino cloud en el telefono se puede controlar desde ahí





