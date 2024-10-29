# clase-11

## "NO ESTAS SOLO" (provisional)

proyecto con @Mosswhosmoss y @valechavezalb

## 01_PREGUNTAS FUNDAMENTALES

__¿Qué? (Descripción del proyecto)__
- proyecto de recopilacion y visualizacion de datos sobre la salud mentalen los estudiantes y docentes de la udp

__¿Quién? (Usuarios objetivo y stakeholders)__
- estudiantes de la udp 
- personas interesadas en su salud mental 
- personas que ven afectada su salud mental 
- docentes udp
- departamento de salud mental udp

__¿Cuándo? (Timeline del proyecto)__
- final de semestre, diseño abierto

__¿Dónde? (Contexto de uso)__
- Una sala de la facultad de salvador san fuentes

__¿Cómo? (Metodología y herramientas)__
- Mediante preguntas que se relacionan a la salud mental, las personas se posicionarán en un lugar dependiendo de -sus respuestas. Con una cámara se recopilarán la posición de las personas y arrojarán datos que posteriormente se -visualizarán en una pantalla, reflejando el estado de la salud mental de alumnos y docentes de la Universidad Diego Portales.

__¿Por qué? (Objetivos y justificación del proyecto)__
- Según UNICEF “la salud mental es un estado de bienestar mental que permite a las personas hacer frente a los momentos de estrés de la vida, desarrollar todas sus habilidades, poder aprender y trabajar adecuadamente y contribuir a la mejora de su comunidad.” Nosotros como grupo queremos generar un momento de conversación libre de prejuicios y estigma para ver si como facultad se logra ese estado; según el paper “Understanding and Addressing Mental Health Stigma Across Cultures for Improving Psychiatric Care: A Narrative Review” habla de cómo estas instancias de conversación en un espacio seguro, pueden influir en un individuo a recibir la ayuda que necesita.

## 1.1_REFERENTES

  Jubille: referente de esperiencia, respuesta y conversacion entre pares
- [Do All Suicide Survivors Think The Same? | Spectrum](https://youtu.be/djU7rduvo6s?si=njpzflTRPxmsTaH2&t=29)

  Aaron Koblin - "Flight patterns": referente para visualizacion de datos
- ![image](https://github.com/user-attachments/assets/8b4e0c48-3582-4e37-96ce-2ddb8f4f1c7d)

## 02_EXPERIENCIA DE USUARIO

__Punto de inicio de la experiencia__
- se solicitará un foro de 4 personas que se posicionan frente a las cuatro camaras para iniciar la experiencia

__Punto final de la experiencia__
- se muestran los datos de todos los participantes en la pantalla segun la respuesta  sera el color  representado en la grafica, llendo de amarillo que es leve hasta rojo que es grave

__Touchpoints clave__
- la visualizacion final de datos

## 03_ASPECTOS PHYGICAL

__Elementos fisicos__
- camara
- parlantes
- pantalla

__Elementos digitales involucrados__
- arduino
- processing
- p5.js
- figma (wireframes)

__Integracion entre lo fisico y digital__
- la visualizacioin de datos en base a la posiciones de los usuarios

## 04_COMPONENTES

__Lista de componentes (BOM - Bill of Materials)__
- cables dupont
- computador con web cam (asus zenbook 14 $10.000.000)
- masking tape (para marcar suelo quizas)
- arduino r4 wifi

__Especificaciones tecnicas de los componentes__

__cables dupont:__

 - Material: Cobre / Plástico ABS.
 - Longitud: 10 centímetros.Cantidad: 40 Piezas por paquete.
 - Colores variados en el arnés.
 - Excelente conductividad eléctrica.
 - Espaciado estándar 0.1″ (10 milésimas de pulgada) entre conexiones)
 - Cable flexible.
 - Calibre 26 AWG.
   
__computador con web cam (asus zenbook 14 $10.000.000):__

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
   
__masking tape (para marcar suelo quizas)__

 - Color: Crema
 - Adhesivo: Caucho.
 - Espesor: 130 micras ± 10 micras.
 - Adhesión al acero: 5 N/in.
 - Adhesión inicial (tack): 5.0 (cm).
 - Resistencia a la tracción: 60 N/in.
 - Máxima resistencia x 30 min: 60ºC.
 - Elongación: 6% - 12%
   
__arduino r4 wifi__

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
  -  Ancho	68,85 mm
 - Largo
  - 53,34 mm
    
__Diagrama del sistema__

  
## 05_DISEÑO DE INTERACCION

__Wireframes y prototipos__
- ![BOCETO_01](https://github.com/user-attachments/assets/6f963e4a-3213-474b-8c51-3108a4bc6ba4)
- ![BOCETO_02](https://github.com/user-attachments/assets/ab6c0bba-10e1-4d87-8c82-cad41e76f4c1)

__Flujos de interaccion__

__Feedback y respuestas de sistema__


## 06_PLANIFICACION Y GESTION DEL PROYECTO

gracias por su atencion :D
