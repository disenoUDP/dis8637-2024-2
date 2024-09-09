
https://github.com/user-attachments/assets/646359c1-f907-4201-9201-39cc2cefaaa2
# clase-05

10 de septiembre de 2024

## Retroalimentación y ayuda entre pares

Ayudamos al grupo de Morgan y Sofía, compartiendoles el archivo de nuestro visor, ayudándoles a adaptar la pieza a su objeto y finalmente pusimos su objeto a imprimir en la impresora 3d, mencionando también que hicimos una pequeña introducción a Morgan en Rhino.

![IMG_2650](https://github.com/user-attachments/assets/3c6372e4-7ca7-4cd1-a118-e5f344e84487)

![IMG_2657](https://github.com/user-attachments/assets/313a4652-a228-4987-bc4c-3733af3ddbec)


Emilia intentó ayudarnos a solucionar un problema con el código del speaker pero no funcionó :(

También ayudamos a Emi haciéndole una breve intro al slicer Ultimaker cura, para que ella pudiera ayudar a las personas que irían al laboratorio el día sábado. 

Hicimos pequeñas "cápsulas" tutoriales que fuimos grabando a lo largo de nuestro proceso y las compartimos.

Explicamos a Santiago y Tiare como habiamos hecho la division de nuestra pieza 3D, porque nos preguntaron en que tolerancia habiamos hecho el encaje.

![consejo_tiare_stgo](https://github.com/user-attachments/assets/3b80b1fb-43d7-4918-a4bf-79dffaeab209) 

## Explicación textual

Lo que queremos que sea
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

En cuanto a su dimensión física, proyectamos que este objeto podría tener una forma más orgánica en la parte inferior, para lograr una mejor ergonomía con las manos y un agarre más cómodo. Su materialidad será de madera e impresión 3D. Tendrá a la vista un botón, una matriz led y unos orificios hacia su interior que permiten la salida del sonido. En el interior se encontrarán escondidos el arduino, un parlante y las demás conexiones. 

Lo que es
MarcaMorsa es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

## Documentación audiovisual

- Medimos los elementos de los componentes, para poder ubicarlos dentro de la proporción del objeto y priorizar el buen funcionamiento y comodidad del usuario.

![Ubicación_componentes](https://github.com/user-attachments/assets/26c63777-e0a3-4f30-8c81-035a3050efca)

- Primer modelo realizado en clase, algunos elementos fueron cambiados, como el boton y el tamaño del speaker lo que nos llevo a variar en su forma.

![Primer_acercamiento_formal](https://github.com/user-attachments/assets/43528323-b057-482c-9261-75206b473a61)

- Este primer modelo, contaba con un visor, cuyo principal elemento sería una lupa, esto con el fin de acercar la pantalla led a la visión del usuario.
Estaba compuesto por un soporte desmontable, que permitiera ubicar la lupa en la parte superior de la carcasa, este visor fue descartado por la alta probabilidad de distorsion de la pantalla que podía provocar dependiendo del ángulo en que fuera visto. 

![Pieza_visor_primer_prototipo](https://github.com/user-attachments/assets/7bde45f9-fbc8-4a63-99e0-d9af7ac2826c)


- Carcasa de prototipo armada.

![prototipo](https://github.com/user-attachments/assets/ceedf951-1fe8-44d8-8551-3bb5ac90e240)


https://github.com/user-attachments/assets/9c6cbb66-ea07-461d-8140-be1caa0b029b


- Usamos un speaker de 4 ohm

![Speaker](https://github.com/user-attachments/assets/cbdf7ac3-661e-41b1-89c8-b4cc89b9a143)

- Usamos un botón arcade con led de 12v

![Botón](https://github.com/user-attachments/assets/f715aa49-fc03-4bf9-86e1-6cd7b3c27d1f)

- Mediante ayuda del profesor, tutoriales y códigos de arduino, logramos descubrir los pines mas convenientes, donde conectar ambos componentes.

![Conexión_componentes (1)](https://github.com/user-attachments/assets/84702961-b32f-4690-adf6-3bb1e5a6e194)

- Luego de descubrir donde van las conexiones negativas y positivas soldamos los cables a los componentes.

https://github.com/user-attachments/assets/037e6f25-e61f-41e3-8bbc-7dfc30f15b54

- Logramos hacer funcionar el speaker y el botón mediante codigos de arduino ;)

https://github.com/user-attachments/assets/2fdbcc98-151c-4b4e-977c-5c91b9a841e2






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

### Lo quequ


## Orden del código

**Links Visitados**

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/toneMelody​/
  
- pitches.h
pitches.h. GitHub Gist: instantly share code, notes, and snippets.
gist.github.com

- https:​​/​/docs​.arduino​.cc​/built​-in​-examples​/digital​/Button​/

- programar un pulsador en Arduino para animación LED - Search Videos Videos
bing.com

- https://www.profetolocka.com.ar/2024/07/22/tutorial-usando-la-matriz-led-del-arduino-uno-r4-parte-1/ 

Al realizar el código, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los códigos que debíamos usar, ya que estas se encontraban disponibles, pero no en todas las ocasiones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiese abrirla.

(Acabamos de descubrir que discord funciona con lenguaje markdown y documentos de Google igual :o)

## Resultado Final



