# clase-05

10 de septiembre de 2024

## Retroalimentación y ayuda entre pares

Ayudamos al grupo de Morgan y Sofía, compartiendoles el archivo de nuestro visor, ayudandoles a adaptar la pieza a su objeto y finalmente pusimos su objeto a imprimir en la impresora 3d, mencionando tambien que hicimos una pequeña introducción a morgan en Rhino.

Emilia intento ayudarnos a solucionar un problema con el codigo del speaker pero no funcionó :(

También ayudamos a Emi haciendole una breve intro al slicer Ultimaker cura, para que ella pudiera ayudar a las personas que irían al laboratorio el dia sabado. 

Hicimos pequeñas "capsulas" tutoriales que fuimos grabando a lo largo de nuestro proceso y las compartimos.

Explicamos a Santiago y Tiare como habiamos hecho la division de nuestra pieza 3D, porque nos preguntaron en que tolerancia habiamos hecho el encaje.

## Explicación textual

Lo que queremos que sea
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

En cuanto a su dimensión física, proyectamos que este objeto podría tener una forma más orgánica en la parte inferior, para lograr una mejor ergonomía con las manos y un agarre más cómodo. Su materialidad será de madera e impresión 3D. Tendrá a la vista un botón, una matriz led y unos orificios hacia su interior que permiten la salida del sonido. En el interior se encontrarán escondidos el arduino, un parlante y las demás conexiones. 

Lo que es
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

## Documentación audiovisual


## Manual de uso textual

1. Conectar el objeto interactivo "MarcaMorsa" a una fuente de alimentación para encenderlo.

2. La pantalla te va a recibir con un “Hola” escrito en español seguido de un hola en clave morse (escrito y sonoro).

3. La pantalla mostrará un punto con su respectivo sonido (**C1**) para que el usuario lo recree presionando el botón, al hacer el click sonará el sonido 1 también. 

4. Si lo consigue, aparecerá una animación de logro con un sonido **C1** y pasará a la siguiente fase, sino, aparecerá una animación de una cruz con un sonido **C4** y deberá repetirlo.

5. En la siguiente fase la pantalla mostrará una línea con su respectivo sonido (**C2**) y para que el usuario lo recree manteniendo apretando el botón, al hacer el hold sonará el sonido 2.

6. Si lo consigue pasará a la siguiente fase, sino apararecerá la animación de la X y deberá repetirlo.

7. En la siguiente fase se reproducirá un sonido en clave morse, de la letra M ( - - ) , para que el usuario lo recree, Si lo logra aparecerá la letra M en la pantalla escrita con letras y en morse. Si no lo logra aparecera la animación y sonido de fallo.

8.  En la siguiente fase se reproducirá un sonido en clave morse, de la letra O ( - - - ) , para que el usuario lo recree, Si lo logra aparecerá la letra M en la pantalla escrita con letras y en morse.  Si no lo logra aparecera la animación y sonido de fallo.
  
9.   En la siguiente fase se reproducirá un sonido en clave morse, de la letra R (. - .), para que el usuario lo recree, Si lo logra aparecerá la letra M en la pantalla escrita con letras y en morse.  Si no lo logra aparecera la animación y sonido de fallo.

10. En la siguiente fase se reproducirá un sonido en clave morse, de la letra S (. . .) , para que el usuario lo recree, Si lo logra aparecerá la letra M en la pantalla escrita con letras y en morse.  Si no lo logra aparecera la animación y sonido de fallo.

11. En la siguiente fase se reproducirá un sonido en clave morse, de la letra A (. -) , para que el usuario lo recree, Si lo logra aparecerá la letra M en la pantalla escrita con letras y en morse.  Si no lo logra aparecera la animación y sonido de fallo.

12. Al lograr superar todos los niveles, aparecerá una animacion de la mascota del juego, una morsa que te guiñará el ojo en señal de felicitación.

13. Finalmente el juego se reiniciará.

En este caso se logro realizar un código ue abarca hasta el punto ...


## Orden del código










**Links Visitados**

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/toneMelody​/
  
- pitches.h
pitches.h. GitHub Gist: instantly share code, notes, and snippets.
gist.github.com

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/Button​/

- programar un pulsador en Arduino para animación LED - Search VideosVideos
bing.com

- https://www.profetolocka.com.ar/2024/07/22/tutorial-usando-la-matriz-led-del-arduino-uno-r4-parte-1/ 

Al realizar el codigo, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los codigos que debiamos usar, ya que estas se encontraban disponibles, pero no en todas las ocaciones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiera abrirla.

(Acabamos de descubrir que discord funciona con lenguaje markdown :o)

## Resultado Final

