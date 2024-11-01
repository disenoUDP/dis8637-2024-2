# clase-11
## Proyecto: Cajita de la conciencia 

- Descripción del proyecto

 ¿Qué? 
Es un proyecto artístico-académico sin fines de lucro para concientizar a las personas de cómo su consumo de productos de grandes corporaciones contribuye al genocidio y la ocupación ilegal en pueblo palestino.

¿Quién?
Asistentes de diseño abierto 2024: alumnos, profesores, visitantes y funcionarios.

¿Cuándo? 
Semana del 9-15 de Diciembre.

¿Dónde? 
En la sede de la faad de Salvador Sanfuentes sala 333 o pasillo del tercer piso. 
       
¿Cómo?
Crearemos una aplicación web que emulará la aplicación de pedidos de MacDonald’s mediante un totem de autoservicio que invitará al usuario a consumir y según su desición, recibirá 2 output diferentes. 

- Justificación y relevancia

El Estado de Israel actualmente está cometiendo crímenes de guerra contra el pueblo de Palestina, crímenes que incluyen la hambruna, la detención arbitraria, el asesinato indiscriminado de la población civil, exterminio, mutilación de decenas de miles de niños y traslado forzoso de la población. El informe de la ONU que publicó en junio de este año, también los acusa de generar un "Asedio total" en Gaza, limitando la energía, los alimentos y el agua hacia los civiles, lo que, según la investigación, equivale a un "castigo colectivo".   Es por estas razones que movimientos como la BDS, boicot, desinversión y sanciones, trabajan para acabar con el apoyo internacional hacia el genocidio Palestino y presionar a Israel de cumplir con las leyes Internacionales.   La presión de la BDS es considerada una forma de solidaridad internacional efectiva hacia Palestina y de construir un poder popular para poner fin a la complicidad. El Domingo pasado, 27 de Octubre, la BDS hizo un nuevo llamado para continuar con el Boicot, haciendo énfasis en ciertas marcas, entre las cuales se encontraban McDonalds.   McDonalds ha sido muy polémico en el conflicto cuando su franquicia en Israel, Alonyala, ofreció descuentos y miles de comidas gratis a las fuerzas coloniales/militares Israelíes. Gracias al Boicot, ha presentado bajas en sus ventas, pero en vez de romper relaciones con Israel, a decidido invertir y llegar a un acuerdo con la franquicia Alonyal para la devolución de 225 establecimientos en todo el país. 

Invirtieron aproximadamente  2.250 millones de dolares (considerando que cada franquicia cuesta entre 1.000.000 y los 2.000.000 dolares). Lo que equivale a 225 millones de gramos de filamento = 225.000 kilos de PLA, con el cual se pueden imprimir 75 millones de balas de PLA.

Otra razón por la cuál queremos elegir Mcdonalds es por el gran consumo de la marca que vemos dentro de la comunidad universitaria de la Diego Portales. Y también porque declararon que “en 2024 tenemos un plan de inversiones agresivos: queremos duplicar la presencia de McDonald's en Chile”.

- Mapa de flujo

![texto](./Mapadeflujo.png)

- Journeymap

![texto](./Journeymap.png)

- Referentes
  
Totems y logo autoservicio McDonal's

![texto](./totem.jpg)

![texto](./mc.png)

Municion de iwi, rifles de asalto utilizados en israel

![texto](./7621.jpg)

Dumb Starbucks (conceptual)

![texto](./Dumb.jpg)

![texto](./Dumb2.jpg)

![texto](./Dumb3.jpg)

Maquina expendedora 

![texto](./images.jpg)

- Ideas de pryecto descartadas

Interaccion mediante sensores de acercamiento + videos + audios  

![texto](./Propuesta1.png)

![texto](./intento1.png)

Cajas de dispensadoras de 3 marcas distintas 

![texto](./intento4.png)

![texto](./intento5.png)

Interaccion con botellas, al accionarlas emitiran sonidos 

![texto](./intento3.png)

Totem de autoservicio y sus variantes 

![texto](./boceto.jpg)

![texto](./totem1.png)

![texto](./totem2.png)

![texto](./totem3.png)

Diseño de interfaz: Bocetos para representar la interaccion proyecto-usuario

![texto](./totemFinal.png)

bocetos interaccion 

![texto](./interaccion.png)

![texto](./interaccion2.png)

Prototipo bala

![texto](./balas.png)

![texto](./Balascompletas.png)

![texto](./Prototipobala.png)

![texto](./Balafinal.png)

Stencil

![texto](./estampadopintura.png)

![texto](./estampado1.png)

![texto](./bolsaMc.png)

Estampado usando molde de gma eva gruesa

![texto](./timbre.png)

![texto](./estampadotimbre.png)

Prototipo- funcionamiento

![texto](./prototipointerior.png)

![texto](./prototipo.png)

Lista componentes con especificaciones técnicas y justificación de selección.

   Servo motor 
  
   Espiral metalico
  
   Arduino uno R4 wifi 
  
   Monitor tactil
  
   Rapsberry Pi 4 modelo B

Raspberry Pi 

Esta placa actua como un mini pc que nos ayudará a cargar la app web en el monitor táctil, esto para logral enviar señales hacia el arduino y hacer funcionar el servo motor

   suelen contar con 2 a 4 gb de ram
   
   Puede ejecutar imagenes en 4k
   
   Cuenta con redes inalambricas

![texto](./placaRaspberryPi.png)   

Servo motor

Se implementara un servo motor de 5 volts que oermitira generar giros en 360 en el espiral metalico que dejara caer los paquetitos.
A diferencia de un motor stepper podemos variar en velocidad y dinamismo de movimiento.
son mas precisos

![texto](./servomotor.png)   

Monitor tactil 24 pulgadas

Queremos usar la pantalla para establecer una familiaridad al usuario con la experiencia de usuario de un totem de autoservicio de McDonald´s y así no sospeche del output del proyecto.

![texto](./pantalla.png)

Arduino R4 Wifi

![texto](./arduino.png)

- Arquitectura de sistemas

  El sistema funcionará mediante una web que emule aplicación de auto servicio de Mc donnalds 
donde dará la opción a los usuarios de escoger sus productos favoritos, luego de que el usuario confirme su elección, dara la señal al arduino para activar un  motor que gire un espiral (parecido a las maquinas expendedoras) el cual dejara caer una bolsita de papel emulando las bolsas de papas, que contendra una bala que dice abreme, en su interior encontraremos un mensaje y datos duros respecto a la influencia de la marca en el conflicto.

![texto](./arquitectura.png)

- Casos limites

Que el usuario no toque bien la pantalla, como por ejemplo que la toque con la uña y la pantalla no detecte el tap.

Que varios usuarios toquen la pantalla al mismo tiempo.

Que el usuario no toque dentro del margen de la opción y esta no se seleccione.

Que el usuario no note el indicador para abrir la bala.

Que el usuario presente algún impedimento físico que no le permita interactuar con el totem.

Que el totem se quede sin balas y no de tiempo de hacer el “refill” entre visitantantes. 

- Casos error

El usuario no interactua con el totem

La señal de elección no llega a tiempo al arduino

La bolsita se tranca en el espiral

- Cronograma

https://docs.google.com/spreadsheets/d/1GsmZs8tHKS1zdt9uzhNaWK4lO4lV48R3tZTh1J2fXeY/edit?gid=0#gid=0

![texto](./crnograma.png)


-Bibliografia justificacion 

https://www.emol.com/Fotos/28881/#1272848/Cafeter%C3%ADa-que-parodia-a-Starbucks-genera-pol%C3%A9mica-en-EE.UU-por-copia

https://boycott-israel.org/boycott.html

https://investigate.afsc.org/all-companies?page=0

https://www.whoprofits.org/companies/find?Text=&Name=coca+cola&Category=&Sector=&Headquarter=&Revenue=&Traded=&Presence=&Settlement=&Type=Table

https://www.aarp.org/espanol/trabajo/pequenos-negocios/info-2021/comprar-franquicia-de-McDonalds.html

https://letrasvolumetricas.com/franquicia-mcdonalds-chile-algunos-datos/#:~:text=Si%20bien%20el%20monto%20puede,y%201.000.000%20de%20d%C3%B3lares.

https://www.rtve.es/noticias/20240405/mcdonalds-compra-restaurantes-franquiciado-israel-tras-boicot/16047727.shtml#:~:text=McDonald's%20ha%20confirmado%20un%20acuerdo,la%20situaci%C3%B3n%20en%20la%20regi%C3%B3n.

https://www.americaeconomia.com/negocios-e-industrias/mcdonalds-duplicara-su-presencia-en-chile-esta-decada

https://www.bbc.com/mundo/articles/ckvv100pzx2o

https://bdsmovement.net/news/palestinian-trade-unions-professional-syndicates-call-for-escalating-bds-pressure




