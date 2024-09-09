# clase-05

# Proyecto 1

## Retroalimentación y ayuda entre pares

Tomamos en cuenta el concejo de Santiago de diseñar una mascota para el juego y también de Aarón para que esta fuera una morsa, ya que suena parecido a la palabra “Morse”.

En la clase del martes 3 la Alanis le mostró a la Tiare y al Santiago cómo hizo la ranura de nuestra impresión 3D. 

Durante la clase del 3 le explicamos al Santiago y la Tiare como habíamos hecho la división de nuestra pieza 3D,  porque nos preguntaron con qué tolerancia habíamos hecho el encaje.

El viernes ayudamos al grupo de Morgan y Sofía dándoles el stl de una de las partes de nuestro proyecto, pero adaptando las medidas al suyo, ya que nosotras teníamos conocimientos de modelado 3d en Rhino y luego lo pusimos a imprimir. También nos preguntaron qué código estábamos usando para el pulsador y les dimos lo que habíamos avanzado hasta el minuto. También le hicimos una mini introducción al Morgan de Rhino.

![IMG_2650](https://github.com/user-attachments/assets/3c6372e4-7ca7-4cd1-a118-e5f344e84487)

![IMG_2657](https://github.com/user-attachments/assets/313a4652-a228-4987-bc4c-3733af3ddbec)

La Emi nos intentó ayudar con un error de código, no resultó, pero se aprecia la ayuda.

También le hicimos un tutorial a la Emi para que pudiera descargar el slicer UltiMaker Cura y cómo usarlo para hacer impresiones 3d y para que así también ella pudiera ayudar a la gente que iba a ir el sábado, ya que ella nos dijo que iba a ir ese día.

Por mi lado también mandé un manual pdf de la profesora Paula Corrales en el discord que explicaba un poco sobre impresión 3D, además de otros mini videos tutoriales.

## Explicación textual

### Lo que queremos que sea

**MarcaMorsa** es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

En cuanto a su dimensión física, proyectamos que este objeto podría tener una forma más orgánica en la parte inferior, para lograr una mejor ergonomía con las manos y un agarre más cómodo. Su materialidad será de madera e impresión 3D. Tendrá a la vista un botón, una matriz led y unos orificios hacia su interior que permiten la salida del sonido. En el interior se encontrarán escondidos el arduino, un parlante y las demás conexiones. 

### Lo que es

**MarcaMorsa** es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.


## Documentación audiovisual

Primeros bocetos y lluvia de ideas que hicimos en un moodboard de nuestro figjam colaborativo

<img width="570" alt="Captura de pantalla 2024-09-08 a la(s) 21 31 59" src="https://github.com/user-attachments/assets/12577980-0607-450e-8abc-729be99b69f8">

Después de la corrección comenzó la etapa de modelado 3D y prototipado, para ver posibles dimensiones, formas y disposición de los elementos.

![IMG_2696](https://github.com/user-attachments/assets/ca27ee2c-dec3-492a-98d9-13925ae4cffa)

Este fue el primer modelo realizado en clase, algunos elementos fueron cambiados, como que en vez de modelar un botón que se adaptara a las dimenciones del pulsador disponible en sala decidmos comprar un pulsador de arcade, también el tamaño del speaker fue redefinido. Todo lo anterior nos llevó a variar su forma. Andrés nos sugirió que cambiaramos la forma de los agujeros para el speaker, por lo que se decidió que fuera con la forma de la mascota para incluirla de forma más natural en el diseño físico.

**Imagen del primer modelo previo a los cambios mencionados anteriormente**
![Primer_acercamiento_formal](https://github.com/user-attachments/assets/43528323-b057-482c-9261-75206b473a61)

Este primer modelo, contaba con un visor, cuyo principal elemento sería una lupa, esto tomando en cuenta la idea del proyecto de Santiago e Ivo para "agrandar/acercar la pantalla led" a la visión del usuario. Estaba compuesto por un soporte desmontable, que permitía ubicar la lupa en la parte superior de la carcasa. Este visor fue descartado por la alta probabilidad de distorsión de la pantalla que podía provocar dependiendo del ángulo en que fuera visto, además de que pensamos que no era muy senzato con respecto al tiempo que teníamos que construirlo. Fue por eso que decidimos hacer una pieza de color negra que centrara, aislara y resaltara la luz de la Matriz LED (esta misma pieza fue la que le dimos al grupo de Moss y Sofi).

**Pieza visor primer prototipo**
![Pieza_visor_primer_prototipo](https://github.com/user-attachments/assets/7bde45f9-fbc8-4a63-99e0-d9af7ac2826c)

**Pieza nueva aislante**
```stl
[]
```


**Materiales**
- Botón arcade con led de 12v (compra por mercado libre)
- Speaker de 4 ohm (se lo compramos a la Paula)
  
![Botón](https://github.com/user-attachments/assets/f715aa49-fc03-4bf9-86e1-6cd7b3c27d1f)
![Speaker](https://github.com/user-attachments/assets/cbdf7ac3-661e-41b1-89c8-b4cc89b9a143)

Definimos la formalidad final del prototipo y la ubicación de sus componentes

![disposición_interna](https://github.com/user-attachments/assets/84af1df8-c4e1-4ca1-a6e8-18296ee6ae8e)

**Carcasa de prototipo armada.**

![prototipo](https://github.com/user-attachments/assets/ceedf951-1fe8-44d8-8551-3bb5ac90e240)

<https://github.com/user-attachments/assets/9c6cbb66-ea07-461d-8140-be1caa0b029b>

Mediante ayuda del profesor, tutoriales y códigos de arduino, logramos descubrir los pines mas convenientes, donde conectar ambos componentes.

![Conexión_componentes (1)](https://github.com/user-attachments/assets/84702961-b32f-4690-adf6-3bb1e5a6e194)

Luego de descubrir donde van las conexiones negativas y positivas soldamos los cables a los componentes.


Logramos hacer funcionar el speaker y el botón mediante códigos de arduino ;)

https://github.com/user-attachments/assets/2fdbcc98-151c-4b4e-977c-5c91b9a841e2


## Archivos 3D

```stl
[]
```

## Manual de uso textual

### Caso hipotético terminado

1. Conectar el objeto interactivo "MarcaMorsa" a una fuente de alimentación para encenderlo.

2. La pantalla te va a recibir con un “Hola” escrito en español seguido de un hola en clave morse (escrito y sonoro).

3. La pantalla mostrará un punto con su respectivo sonido (**C1**) para que el usuario lo recree presionando el botón, al hacer el click sonará el sonido 1 también. 

4. Si lo consigue, aparecerá una animación de logro con el sonido **C1** y pasará a la siguiente fase, sino, aparecerá una animación de una cruz (X) con un sonido **C4** y deberá repetirlo.

5. En la siguiente fase la pantalla mostrará una línea con su respectivo sonido (**C2**) y para que el usuario lo recree manteniendo presionado el botón, al hacer el hold sonará el sonido 2.

6. Si lo consigue, aparecerá una animación de logro con el sonido **C2** y pasará a la siguiente fase, sino, aparecerá la animación de la cruz y deberá repetirlo.

7. En la siguiente fase se reproducirá un sonido en clave morse de la letra M ( - - ), para que el usuario lo recree. Si lo logra, aparecerá la letra M en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación de cruz y su sonido de fallo.

8.  En la siguiente fase se reproducirá otro sonido en clave morse de la letra O ( - - - ), para que el usuario lo recree. Si lo logra aparecerá la letra O en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación de cruz y su sonido de fallo.
  
9.   En la siguiente fase se reproducirá otro sonido en clave morse, la letra R (. - .), para que el usuario lo recree. Si lo logra aparecerá la letra R en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y sonido de fallo.

10. En la siguiente fase se reproducirá otro sonido en clave morse, la letra S (. . .), para que el usuario lo recree. Si lo logra aparecerá la letra S en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y un sonido de fallo.

11. En la siguiente fase se reproducirá otro sonido en clave morse, la letra A (. -), para que el usuario lo recree. Si lo logra aparecerá la letra A en la pantalla, escrita estándar y en morse. Si no lo logra, aparecerá la animación y sonido de fallo.

12. Al lograr superar todos los niveles mencionados anteriormente, aparecerá una animación de la mascota del juego, una morsa que te guiñará el ojo en señal de felicitación por escribir su nombre.

13. Finalmente el juego se reiniciará.

### Lo que es



## Orden del código

### Links Visitados**

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/toneMelody​/
- **pitches.h**-> GitHub Gist: instantly share code, notes, and snippets.
gist.github.com
- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/Button​/
- programar un pulsador en Arduino para animación LED - Search Videos Videos
bing.com
- https://www.profetolocka.com.ar/2024/07/22/tutorial-usando-la-matriz-led-del-arduino-uno-r4-parte-1/ 

Al realizar el código, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los códigos que debíamos usar, ya que estas se encontraban disponibles, pero no en todas las ocasiones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiese abrirla.

(Acabamos de descubrir que discord funciona con lenguaje markdown :o)


# Calidad de factura

