# clase-02

Clase 20 de agosto de 2024

## Conceptos
- Resolución: Intervalos (Espacio/Tiempo)
- Dimensión fisica: Forma/Ubicación
- Variables: Cantidad de resultados
- Latencia: Tiempo de respuesta
- Etiqueta
- Control                
- Feedback: Sonido; Vibración/Háptico
- Instrucciones
- Visibilidad: como se persive el estado del sistema
- Calibración
- Esqueomorfismo: Botones, palancas, etc. ,mecánicas que permanecen en la digitalidad
- Heuristica: Cosas aprendidas en base a la experienxia previa
- Función
  
  ## "En la iformación todo puede ser contextual"

  JAKOB NIELSEN -> "PRINCIPIOS DE LA USABILIDAD"

## Sensores 
1. Perillas
2. Botones
3. D-Pad
4. Tilt
5. Presencia/Movimiento
6. Proximidad
7. Microfono
8. Crepuscular

https://www.figma.com/board/5KIemd8KjIroqXSkUQ52Pb/interfaces-cotidianas?node-id=0-1&t=aNqyjnmjioonqD9B-0

## ¿Cómo subir una imagen?

![Texto](./img /nombrearchivo.jpg)

 Se agrega img/ para crear una carpeta
 
- ./ significa justo despues
- ../ significa que estaran en la carpeta de atras
- ../../../ tres carpetas hacia atrás

  ## Placa de arduino
Es un microcontrolador de color azul, con distintos tipos de puertos de conexión, cuenta con un metodo de conexión vía Wifi, una mini pantalla led para proyectar animaciones, un pequeño botón blanco y una placa de algún tipo de polimero, que sirve a modo de aislante para evitar coto sircuitos y tambien para poder adherir la placa en un aterial por medio de tornillos, ya que cuenta con orificios.

![Texto](./Arduino.jpg)

## ¿Por qué el USB C paso a la universalidad?

- Orientación en la que debe posicionarse el puerto, ya que con el usb anterior era muy facil confundir las dirección.
- Masificación de dispositivos que lo implementan
- "Mayor durabilidad"

## "Una placa de Arduino puede ser mas potente que el computador que hizo los cálculos para mandar al Apolo11 al espacio (._.)"


  ## Galería de animación Arduino
  https://forum.arduino.cc/t/help-with-led-matrix-animations-on-arduino-uno-r4-wifi-board/1247865/1 

  ## Encargo 03
  Entregar un documento con el desarrollo conceptual de este objeto, implementando alguna de las interacciones presentes en el encargo anterior.
  
  - Nombre
    
  - Sensores: Características, como interactua, familia de sensores
    
  - Capacidades técnicas
    
  - Análogo o digital

  - Como indicaremos la acción que esperamos del usuario

  - 3 repositores en github quienes lo hayan implemententado

  - Pensar en sus caracteristicas formales y materiales.
  
  Montaje de objetos interactivos, con manifestación visual en la pantalla de los arduinos incluyendo algún sensor. Debe ser elegante

  ## Led Matrix edition 

## Programación Arduino

Podemos escribir codigos antes de lo que esta predeterminado

Función set up contiene el codigo que da ordenes y la funcion loop contiene los codigos que se repetirán, los () contienen la información,  Pinmode busca un pin (Cual y que debe hacer), int "nombre de pin" = "numero de pin" define donde se dirigirá la info

Digital Write, envia una señal electrica a donde sea que este conectado 

Podemos escribir codigos antes de lo que esta predeterminado

## "En Arduino se piensa en el comportamiento y a la vez en la parte fisica"

1.1.1 siginifica:

primer numero -> Mejor versión

Segundo numero -> Menor versión

Tercer numero -> Parche

Boards Manajer: Se pueden instalar elementos que nos permitan trabajar con distintas placas

Library manager: Biblioteca donde podemos sacar codigos y no hacer todo desde 0.

- Una manera de escribir espacios es con un _
- 
- Si algo esta en mayusculas es muy importante

- Output: Emite salidas electricas

- Delay: Tiempo de domora

- Int division = /2: sirve para inventar palabras como "division" que al ponerlas en cualquier parte completen la accion con lo que viene despues de el =

## Una manera facil de programar Arduinos es seleccionarlo primero como puerto, para luego ir a examples y que aparezcan modos específicos para el modelo de manera predeterminada, por ejemplo LED_matrix, que sirve para poder animar y controlar las luces led.


![VideoArduino](./videoArduino.mp4) 

## ¿Como hago funcionar la matriz led del arduino?

Esto se puede hacer habilitando la opcion de led_matrix y luego LivePreview en arduino, este habilita el puerto del arduino que recibe información desde Led matrix editor , en el cual podemos dibujar para indicar cuales leds queremos encender y cuales no. Luego de tener dibujado lo que queremos proyectar, descargaremos el archivo. para  cargar el archivo en un sketch debemos ir a la opcion de led_matrix y luego play animation y pegar el contenido en Animation.h.

https://ledmatrix-editor.arduino.cc/
https://www.youtube.com/watch?v=6A_xKy1qANw

## Animación de un HOLA en calve morse

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

## Repositorio Matrices Led

https://github.com/danidask/MatrizLed

 para usar el array de led debemos descargar una biblioteca para arduinohttps://github.com/MajicDesigns/MD_MAX72XX

## FigJam
https://www.figma.com/board/xVQXT7prN3tPQGOM8VX5pf/Untitled?node-id=0-1&t=JB5KrtRkH9XKZWRm-0
 



