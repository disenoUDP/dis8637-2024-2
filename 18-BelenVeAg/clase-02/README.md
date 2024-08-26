# # clase-02

# Conceptos de experiencias de usuario

**Latencia:** el tiempo que se demora una interfaz en actuar.

**Control**

**Variable**

**Feedback**
  - Sonido
  - Vibración----> Háptico (percepciones a través del tacto)

**Mapeo:** 

**Visibilidad:** que a veces muestre el mecanísmo o cómo funciona----> transparencia

**Esqueumorfismo:** es una técnica de diseño en que un objeto derivado retiene ornamentos o estructuras que eran necesarias en los objetos originales.​

![image](https://github.com/user-attachments/assets/4c27f77c-400b-4aeb-b4ea-a718c20d168c)

![image](https://github.com/user-attachments/assets/8766b00a-4aa2-4458-a367-bb2f9d271076)

Ejemplo: Hay sensores que tienen tinta para identificar a quienes lo accionaron. 

**Leyenda:** Signo gráfico que explica sin instrucciones la función de algo. Si esto no está o falla, es necesario usar instrucciones. 

* Coded Bias: documental de Joy Buolamwini que investiga el racismo en el código.
  * Sus libros: Unamsked AI y Weapons of Mass destruction (Principio: las IAS según cómo las alimentas con info se van comportando, si el código el racista, las funciones que se hagan con esta tmb lo va a ser y es muy segregatorio).
 
**Resolución:** separación entre 2 o más sucesos u objetos próximos en el espacio o en el tiempo.

**NLP**: combina lenguaje computacional relacionado al aprendisaje de máquinas para procesar el lenguaje humano. Ej: Alexa.

**Calibración**: forma de ajustar los parámetros de por ejemplo un sensor.

**Tipos de sensores que vimos:**

- Botones
- D-PAD
- TILT
- Presencia
- Proximidad
- Micrófono
- Crespuscular: que detecta la presencia de luz solar
- Perilla: como la de la estufa para regular la potencia de calor
- Panel táctil

---

Github campus: programa para hacer repositorios académicos de Github, que después se puede hacer público.

Runway: https://runwayml.com/   Empresa de gente chile que utilizan diseño e IA.

HTML: High Markup Language, lenguaje de marcado utilizado en la creación de páginas web.

Github tiene la capacidad de convertir tus apuntes en Readme.md en lenguaje HTML/página web.

Tips para Markdown:
  - https://www.markdownguide.org/cheat-sheet/

Últimos avances de tecnología: 

## Arduino https://arduino.cl/
Es la empresa, el software y la placa (hardware).

Nuestra versión la UNO R4 Wifi tiene: 
- Placa
- Chip para
- Pantalla led: para hacer animaciones
- Wifi: permite conectarse a internet.
- Bluetooth
- Entrada usb C
- Plástico inferior, es un aislante para proteger las conexiones electricas y no se heche a perder. Es desmontable (no recomendable).
- Tiene Hotiyos para atornillarlo
- Puerto circular: para que entre corriente
- Botón para reset: simula conectar y desconectar el arduino.

En la imagen sale la pantalla led mostrando un corazón
<img width="373" alt="Captura de pantalla 2024-08-20 a la(s) 16 15 06" src="https://github.com/user-attachments/assets/da2f275d-2a03-4c21-ab1e-491f1eba61d9">

La app de arduino es para programar para la placa.

¿Por qué se popularizaron los puertos C? Porque no tiene dirección incorrecta para enchufarse.

**Mitchel Resnick:**
- LEGO paper,
- Lfelong kindergarden
- Creador de scratch
- 4 Ps de aprender: passion (gusto por lo que se hace), play, peers (trabajar con compañeros), proyects (haciendo proyectos). 

¿Cómo pongo animaciones? Arduino UNO R4 Wifi led animations.

## Encargo
- En 2 semanas más, 3 septiembre.
- Vamos a construir objetos interactivos, no un arduino solo. Que va a, input utilizando un sensor para tener una respuesta lumínica en esa pantalla.
- Próxima semana: brief de concepto intelectual del proyecto. Investigar sensores, materialidas, forma, usar lenguaje técnico, listado de los componentes. pensar en el input y output. Cómo se va a ver y ocupar? Cómo a nivel corporal vamos a interactuar con él?
- Buscar 3 repositorios de GitHub donde se haya usado el sensor que quieres elegir.
- Extremadamente detallada para que cualquiera lo entienda, que este todo bien explicado para que se entienda
- Por lo tanto en 2 semanas más debe estar construido, tener buena presentación/acabado. Por lo tanto, ser realistas con los elementos de fabricación.
- La próxima semana en clase vamos a programar el sensor.


Referentes
- Brand New Noise
- Led Matrix Editor
- teensage engineering (versión muy cara de lo que estamos haciendo)-> figuras de madera que a través de wifi hacen música.

## Software Arduino
  setup: configuración del arduino

  loop: repeticiones/bucles

Construcciones con variables para leer y reroducir lenguaje.

Función es un conjunto de códigos ejecutables.

Existen diferentes tipos de pines, van del 0-13 y del A0-A5

Yo le puedo dar nombre a los pins para tenerlos mejor identificados

Todas las instrucciones deben terminar con ;

Primero hay que verificar y luego, cuando te diga que está bueno, lo uedes exportar a la placa.
Las letras de color verde significan datos

int= número entero

float= con decimales, 1.2

char letra = "3"

String

let cualquier cosa = 1;
  
Para hacer código hay que saber describir lo que quiero con palabras para después traducirlo al lenguaje de código.

https://semver.org/lang/es/
![image](https://github.com/user-attachments/assets/ac92788b-01e6-4c1a-b97b-83ccc136bb0c)
- 1er número: rompe algo, cambios fuertes
- 2do: mejora algo
- 3ro: bug fixes

Podemos escribir así nuestros commits

Ejemplo de que podemos publicar nuestro software en la biblioteca de arduino (este es de Aarón
<img width="264" alt="Captura de pantalla 2024-08-20 a la(s) 17 48 30" src="https://github.com/user-attachments/assets/7b66e41b-201a-4486-9833-79ba2ccb9639">

El pin 13 en nuestro arduino está conectado al LED.

En vez de escribir espacios podemos:
  - Poner _ (en especial si todo está escrito en mayúscula)
  - Escritura camello

Indico que esto es el output
<img width="224" alt="Captura de pantalla 2024-08-20 a la(s) 17 53 44" src="https://github.com/user-attachments/assets/2c975fdb-34e5-4d05-adab-6935ba3a470d">

delay= es una pausa---> delay(1000); es esperar un segundo

Cuando yo pongo = estoy haciendo una declaración

const int x = y : es para evitar cambiar el valor durante el código. Si no esta puesto (solo int) puedes ir cambiando el valor de x más adelante. 

## Investigación posterior a la clase

Toda la info en: <https://www.figma.com/board/xVQXT7prN3tPQGOM8VX5pf/Untitled?node-id=14-253&t=Yj3GUr811eOvytBd-0>

<https://www.youtube.com/watch?v=KQiDKHCCF64>
