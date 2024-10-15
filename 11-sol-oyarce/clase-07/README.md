# clase-07
## Conexión Arduino Cloud

- Intentos conexion-codigo fallidos  (tutoriales youtube)
https://www.youtube.com/watch?v=qJfKHCKDpLk
https://www.youtube.com/watch?v=wl-UI_ZSAB0&t=259s
https://youtu.be/FNYvxArghLw?si=Qz8cHOeqwCZkGIj0

- Intento de conexion (tutorial web)
https://docs.arduino.cc/built-in-examples/communication/Dimmer/

- Codigo solo permitio encender el led 
 https://create.arduino.cc/cloud/things/4b378ecd-a7d9-4a8a-9e22-0f3f95b06b5f

- Tutorial que funciona la creacio de un dimmer con un LED con Arduino Cloud 09-pixelitaa
  
- Diagrama de flujo 
Diagrama de flujo distinto al de estado
(Diagrama de estado)

1. ingresamos al arduino cloud 
2. Nos creamos una cuenta gratis(en nuestro caso la vinculamos al github)
3. Despues de eso conectamos nuestra placa
4. La primera vez que ingresas te sale una ventana emergente que te permite como primer paso vincular tu placa de arduino a cloud
5. Para la vinculaciuon necesita un nombre y puedes poner manualmente o te detecta altiro el modelo de la placa que estas usando
6. Despues de eso te permite conectarlo a la red wifi (la misma con la cual funciona el cloud)
7. Luego de eso creamos una variable que se hace en la pestaña “thing” y esa variable la vinculamos al arduino
8. Nos vamos sketch y vemos el codigo (que lo hizo paula muchas gracias)
9. Por ultimo creamos el slider en el dashborard en lazandolo a la variable creada anteriormente
10. Cargamos el codigo y a probar el dashboard
11. Listo exito!

- Proceso 

1. buscamos tutoriales de dimmer, pero no entendiamos el contenido y/o el idioma para familiarizarnos con el concepto (de dimmer)
2. la interfaz de arduino cloud fue confusa en un principio, no distinguiamos los things, de sketches o los devices
3. despues reconocimos lo navegacion que tiene arduino cloud y desde ahi nos creamos una cuenta gratis, enlazada con github y nuestro correo institucional, luego de eso nos llevo automaticamente a un tutorial que nos saltamos, y ahi pudimos recien ver la biblioteca de arduino cloud.
4. en “devices” es donde conectamos nuestro arduino a traves de un clable de carga usb-c  y es donde reconoce la placa que usamos donde podemos nombrarla para quede registrada en nuestra cuenta, hay algunos casos donde daba la opcion automatica de poder conectar a wifi y en otros casos no, y es debido a eso que nuestros arduinos aparecian en modo “offline”  y eso lo interpretamos como que no lo reconocia o conectaba (tampopco lo buscamos)
5. despues de varios intentos y darnos cuenta que a no todos les dio la opcion de conectar a red wifi asumimos que el “offline” era por no estar en la misma red que arduino cloud, aunque creiamos que eso influia en la carga de nuestro codigo (y no es asi)
6. despues paula nos aclaro que eso no esta relacionado por lo que, el que diga “offline” esta bien (“offline” se relaciona al tener un codigo ya cargado y no al proceso de carga)
7. inicalmente empezamos a probar tutortiales donde se realizaba una accion por “switch” por separado sin ningun exito, y alanis despues de varios intentos en el codigo logro prender un led
8. despues de eso nos enfocamos en los “dashboards” y ahi fue donde incluimos el “switch” pero eso no es un dimmer,  asi que los cambiamos a un slider (sin exito ya que no reconocia la variable que habiamos hecho ya que era una booleana)
9. luego buscamos tutoriales que usaran el “sliders” pero la mayoria usaban distintas placas a la de arduino r4 wifi por lo que el proceso era un poco distinto, muchos codigos estaban caducados, no incluian bibliotecas obsoletas o no usaban los led a aparte sino con otros componentes (fue dificil la busqueda)
10. despues paula nos explico la importancia de la resistencia sino se nos quema el led, nos ofrecio ayuda con el codigo, explicandonos donde colocar las patitas y los compopnentes para una buena conexcion del “protoboard” con el arduino.
11. nos especifico un orden, ya que era muy importante para que todo funcionara
12. exito!

    
## Presentacion y referentes para nuevo proyecto

- Video de como crear código y su relación con la acción “Unity 2021 animator controller tutorial (Animatro cntroller unity character)
- Any status (cualquier estado)-  para iniciar y ver cual es el primer estado
- Setup - es el primer estado que solo se inicia una vez
- Loop- se repite constantemente, solo una acción lo puede sacar del bucle (reiniciar la placa en nuestro caso )
- 3 sesiones para crear el proyecto  (Diseño -Conceptualización- Planificación)
- Encontrar oportunidades de encuesta para crear conexión remota
- [xxx.tiri.xxx](http://xxx.tiri.xxx) video de artista de interacciones
- Gabe bc artista
- Hacerlo grande- Muchas - Rojo : ARTE
- ideas para el proyecto encuesta :
    1. Encuesta de satisfacción con x política controversial actual donde las personas manifiesten su satisfacción con esta. Donde mediante la voz una de las 2 opciones SI o NO se proyecten imágenes o sonidos de las personas diciendo SI o NO.
    2. Medir la capacidad de los usuarios de seguir instrucciones cortas . Donde esto se manifestara mediante un sensor de acercamiento y un botón rojo.
    3. Saber como se sienten las personas a nivel de contacto físico mediante el tiempo de interacción con un objeto (apretar o abrazar algo)
    4. Mediante un nivel de sonido variable las personas deben golpear constante mente un botón donde su presión debe detenerse cuando ya no se escuche este.
    5. Mediante una encuesta de preguntas random se ingresan preguntas sobre gustos y en estas detectar sobre afinidad con animales y su consumo y en base a este cuestionar el consumo de estos.
