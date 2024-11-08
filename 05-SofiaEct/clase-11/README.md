## "NO ESTAS SOLO" 

Proyecto con @Mosswhosmoss y @valechavezalb

## 01 - PREGUNTAS FUNDAMENTALES

__¿Qué? (Descripción del proyecto)__
- Proyecto de recopilación y visualización de datos sobre la salud mental en los estudiantes y docentes de la UDP.

__¿Quién? (Usuarios objetivo y stakeholders)__
- Estudiantes de la UDP.
- Personas interesadas en su salud mental.
- Personas que ven afectada su salud mental. 
- Docentes UDP.
- Departamento de salud mental UDP.

__¿Cuándo? (Timeline del proyecto)__
- Final de semestre, diseño abierto.

__¿Dónde? (Contexto de uso)__
- Una sala de la facultad de Salvador Sanfuentes.

__¿Cómo? (Metodología y herramientas)__
- Para el proyecto nos inspiramos basándonos en el video _“Do All Suicide Survivors Think The Same?”_, que consistirá de una encuesta de 7 preguntas para grupos de máximo cuatro personas, conteniendo preguntas relacionadas a la salud mental que deberá de responderse con ciertos gestos establecidos con la mano, utilizando la webcam del computador como lo muestra The Coding Train en su video de _“ml5.js: Clasificación de poses con PoseNet and ml5.neuralNetwork()_”, después de cada respuesta se elegirá de forma aleatoria a un participante para comunicar lo que piensa respecto a la pregunta, al finalizar las 7 preguntas y se hayan respondido en su totalidad se les mostrará la visualización de datos creada con base en sus respuestas y las de los grupos que participaron previamente. 

__¿Por qué? (Objetivos y justificación del proyecto)__
- Según UNICEF “la salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.” Nosotros como grupo queremos generar un momento de conversación libre de prejuicios y estigma para ver si como facultad se logra ese estado; según el _paper “Understanding and Addressing Mental Health Stigma Across Cultures for Improving Psychiatric Care: A Narrative Review”_ habla de cómo estas instancias de conversación en un espacio seguro, pueden influir en un individuo a recibir la ayuda que necesita.

## 1.1 - REFERENTES

  Jubille: referente de experiencia y comunicación con el cuerpo.
- [_Do All Suicide Survivors Think The Same? | Spectrum_](https://youtu.be/djU7rduvo6s?si=njpzflTRPxmsTaH2&t=29)
- ![_Do All Suicide Survivors Think The Same? | Spectrum_](https://github.com/user-attachments/assets/769b8421-a660-4a88-98eb-f136a2176917)
- ![_Do All Suicide Survivors Think The Same? | Spectrum_](https://github.com/user-attachments/assets/84bd8dee-2910-4e30-8758-2f770fcc817d)

  Aaron Koblin - "Flight patterns": referente para visualizaciín de datos y un decaedro de competencias.
- ![Flight patterns](https://github.com/user-attachments/assets/8b4e0c48-3582-4e37-96ce-2ddb8f4f1c7d)
- ![Decaedro de competencias](https://github.com/user-attachments/assets/8b82ddfd-ab0b-4e25-bc5a-4f90e4920463)

  The coding train - ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork(): referente para código de reconocimiento de gestos.
- [ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork()](https://youtu.be/FYgYyq-xqAw?si=LONKUtLMa7sUuCbb)
- ![image](https://github.com/user-attachments/assets/a04bc344-a9b2-499d-a678-682e25f56ee9)
  
## 02 - EXPERIENCIA DE USUARIO

__Recorrido del usuario__
- Entra a la sala.
- Se posiciona frente al proyecto, alza la mano con el gesto indicado en la pantalla y empezarán las instrucciones de la encuesta.
-  Después de las instrucciones, el usuario empezará a ver las respectivas preguntas (que son siete) y deberá responder con el gesto indicado.
- Luego de responder cada pregunta, habrá un periodo de tiempo de un minuto y medio donde, de forma aleatoria, se elegía un número de fila y la persona que se encuentre ahí debe opinar respecto a su respuesta.
- Al finalizar la encuesta, se recopilarán las respuestas y se mostrarán en la pantalla en una visualización de datos los resultados de cada grupo que ha participado.
  
__Punto de inicio de la experiencia__
- Se solicitará que 4 usuarios se posicionen frente a la webcam y que accionen el siguiente gesto ✋ para que la experiencia empiece con las instrucciones y subsiguientes.

__Punto final de la experiencia__
- se muestran los datos de todos los participantes en la pantalla segun la respuesta  sera el color  representado en la grafica, llendo de amarillo que es leve hasta rojo que es grave

__Touchpoints clave__
- La visualización final de datos.

__Preguntas planteada en la experiencia__

1. ¿Crees que tu salud mental se ha visto afectada estas últimas semanas? 
  - Si - Tal vez - No - No se
      
2. ¿Sientes que tu salud mental se toma en serio en la u?
  -  Si - Tal vez - No - No se
    
3. ¿Crees tener las herramientas necesarias para afrontar tu salud mental?
  - Si - Tal vez - No - No se
    
4. ¿La universidad te permite tener hobbies o actividades que permitan desconectarte,  relajarte o distraerte?
  - Bien - No se - Mas o menos - Mal
    
5. ¿Has experimentado síntomas físicos relacionados con el estrés, como dolores de cabeza, dificultad para concentrarte o problemas digestivos? 
- Si - Tal vez - No - No sé
      
6. ¿Has considerado buscar ayuda profesional sobre algún problema de salud mental o para manejar el estrés?
  - Si - Tal vez - No - No sé
    
7. ¿Te sientes igual que al principio después de la experiencia?
  - Si - Tal vez - No - No sé
    
## 03 - ASPECTOS PHYGITAL

__Elementos fisicos__
- Cámara.
- Parlantes.
- Pantalla.
- Arduino.
  
__Elementos digitales involucrados__
- processing.
- p5.js.
- figma (wireframes).

__Integracion entre lo fisico y digital__
- El uso de Arduino para generar las gráficas de visualización de datos, cámara web para capturar gestos físicos de las manos.

## 04 - COMPONENTES

__Lista de componentes (BOM - Bill of Materials)__
- Cables DuPont.
- PC con webcam (Asus zenbook 14, $10.000.000).
- Masking tape.
- Arduino r4 Wi-Fi.

__Especificaciones tecnicas de los componentes__

__Cables dupont (En MCI Electronics las 10 unidades estan a $5.290)__

 - Material: Cobre / Plástico ABS.
 - Longitud: 10 centímetros.Cantidad: 40 Piezas por paquete.
 - Colores variados en el arnés.
 - Excelente conductividad eléctrica.
 - Espaciado estándar 0.1″ (10 milésimas de pulgada) entre conexiones)
 - Cable flexible.
 - Calibre 26 AWG.
   
__Computador con webcam (en Asus se encuentra a $1.319.990)__

 - PANTALLA	LED de 14 pulgadas NanoEdge FullHD (1.080 x 1.920 px)
 - PROCESADOR	Intel Core i7-1165G7
 - Intel Core i5-1135G7
 - Intel Core i3-1115G4
 - MEMORIA PRINCIPAL	Hasta 32 GB LPDDR4X de 4266 MHz (modelos Intel Core i5/i7)
 - Hasta 32 GB LPDDR4X de 3733 MHz (modelos Intel Core i3)
 - GRÁFICOS	Intel Iris Xe (modelos Intel Core i5/i7)
 - Intel UHD (modelo Intel Core i3)
 - ALMACENAMIENTO SECUNDARIO	Hasta 1 TB SSD PCIe 3.0 x2
 - CONECTIVIDAD	2 x Thunderbolt 4 USB-C, 1 x USB 3.2 Gen 1 de tipo A, 1 x HDMI 2.0 y 1 x micro-SD
 - CONECTIVIDAD INALÁMBRICA	Wi-Fi 6 y Bluetooth 5.0
 - AUTONOMÍA	67 Wh, polímeros de litio, hasta 21 h de autonomía
 - DIMENSIONES Y PESO	319 x 208 x 13,9 mm 1,13 kg
   
__Masking tape (En artemery está a $1.200)__

 - Color: Crema
 - Adhesivo: Caucho.
 - Espesor: 130 micras ± 10 micras.
 - Adhesión al acero: 5 N/in.
 - Adhesión inicial (tack): 5.0 (cm).
 - Resistencia a la tracción: 60 N/in.
 - Máxima resistencia x 30 min: 60ºC.
 - Elongación: 6% - 12%
   
__Arduino r4 wifi (En Arduino sería $31.182,90)__

 - Tabla
  - Nombre	Arduino® UNO R4 WiFi
  - SKU	ABX00087
 - Microcontrolador
  - Renesas RA4M1 (Arm® Cortex®-M4)
 - USB
  - USB-C® Puerto de programación
 - Pines
  - Pines de E/S digitales	14
  - Pines de entrada analógica	6
  - DAC	1
  - Pines PWM	6
 - Comunicación
  - UART	Sí, 4x
  - I2C	Sí, 1x
  - SPI	Sí, 1x
  - CAN	Sí 1 CAN Bus
 - Poder
  - Voltaje de funcionamiento del circuito	5 V (ESP32-S3 es 3,3 V)
  - Voltaje de entrada (VIN)	6-24 V
  - Corriente DC por pin de E/S	8 mA
 - Velocidad de reloj
  - Núcleo principal	48 MHz
  - ESP32-S3	hasta 240 MHz
 - Memoria
  - RA4M1	256 kB Flash, 32 kB RAM
  - ESP32-S3	384 kB ROM, 512 kB SRAM
 - Dimensiones
  - Ancho	68,85 mm
 - Largo
  - 53,34 mm
  
## 05 - DISEÑO DE INTERACCION

__Wireframes y prototipos__

![Adobe Scan 29 oct 2024_2](https://github.com/user-attachments/assets/09f56628-3b13-49ff-8cf3-3d03ceefcb30)
![Adobe Scan 29 oct 2024 (1)_1](https://github.com/user-attachments/assets/5b99b8fe-55bb-4b75-8544-dd4b9471ce74)
![Adobe Scan 29 oct 2024_1](https://github.com/user-attachments/assets/f3c4e982-3762-4543-9bc1-7c1a0e27c868)

__Flujos de interacción__

- [Flujo de interacción](https://www.figma.com/board/Ai1nkMEXpdXMuGIio6sb1j/Diagrama-de-flujo?node-id=0-1&t=YHUcX8sb87e2HhDS-1)

__Feedback y respuestas de sistema__
- El primer feedback aparece al momento de pasar de estados entre reposo a activo a través del gesto preestablecido para iniciar la encuestas, para saber si se lee correctamente los gestos en el periodo de respuesta, en la pantalla aparecerá un icono que se irá rellenando acorde a si lee o no los gestos de los participantes.
- En el periodo de conversación luego de cada pregunta, en la pantalla aparecerá un temporizador que durará 1:30 min.
- El último feedback sería la visualización de los datos con base en las respuestas de la encuesta.
  
![Adobe Scan 29 oct 2024 (3)_1 (1)](https://github.com/user-attachments/assets/458b6d5e-ecf2-4009-956a-969f20dd93b1)

## 06 - PLANIFICACION Y GESTION DEL PROYECTO

__Calendario detallado__
- [Cronograma: Grupo - 01 "No estas solo"](https://docs.google.com/spreadsheets/d/1gn78PgsDTkO6gHtaVM2D2_JULJietnCU3_7DKCvRut0/edit?usp=sharing)

__Casos limites:__
- Que se corte la luz.
- Que se corte la conexión entre la encuesta y la visualización de datos.
- Una persona con problemas motores.
- Que no haya suficiente luz para reconocer los gestos.
- Que el usuario no ejecute bien el gesto.
- Que la cámara este desactivada y no pueda ver a los usuarios.
  
![Adobe Scan 29 oct 2024 (2)_1](https://github.com/user-attachments/assets/a5d2f69e-c972-4ee6-9838-7ee131c1fb6d)

gracias por su atención :D
