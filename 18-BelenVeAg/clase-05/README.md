# clase-05

# Proyecto 1

## Retroalimentacíon y ayuda entre pares

Ayudamos al grupo de Morgan y Sofía dándoles el stl de una de las partes de nuestro proyecto y adaptando las medidas al suyo, ya que nosotras teníamos conocimientos de modelado 3d en Rhino y luego se lo pusimos a imprimir. También nos preguntaron qué código estábamos usando para el pulsador y les dimos lo que habíamos avanzado hasta el minuto. También le hicimos una mini introducción al Morgan de Rhino.

![IMG_2650](https://github.com/user-attachments/assets/3c6372e4-7ca7-4cd1-a118-e5f344e84487)

![IMG_2657](https://github.com/user-attachments/assets/313a4652-a228-4987-bc4c-3733af3ddbec)

La Emi nos intentó ayudar con un error de código, no resultó pero se aprecia la ayuda.

También le hicimos un tutorial a la Emi para descargar el slicer UltiMaker Cura y cómo usarlo para hacer impresiones 3d, para que así también ella pudiera ayudar a la gente que iba a ir el sábado.

## Explicación textual

**MarcaMorsa** es un objeto interactivo en donde las personas pueden aprender a escribir de forma lúdica una palabra en código morse.

En cuanto a su dimensión física, proyectamos que este objeto podría tener una forma más orgánica en la parte inferior, para lograr una mejor ergonomía con las manos y un agarre más cómodo. de estilo retro. Su materialidad será de madera e impresión 3D. Tendrá a la vista un botón, una matriz led y unos orificios hacia su interior que permiten la salida del sonido. En el interior se encontrarán escondidos el arduino, un parlante y las demás conexiones. 

**¿Cómo funciona?**

Para utilizar este objeto, primero se tiene que encender manteniendo presionado por 5 segundos el botón (input), si se hace bien, la matriz LED dará un output haciendo un sonido y mostrando la palabra “hola” 2 veces, primero en el alfabeto español y luego en código morse. Después, comenzará el juego,  aparecerá una letra aleatoria en morse en la matriz junto con un sonido característico para el punto y el espacio. Una vez listo, el usuario deberá presionar el botón, haciendo click para el punto y manteniéndolo presionado menos de 3 segundos para la raya, para así imitar el ritmo y duración del sonido. Si el usuario logra recrearlo con éxito, se presentará un dibujo mostrando la letra en el alfabeto español, seguido de un dibujo relacionado a la inicial de lo que se escribió, pero si no lo logra aparecerá una gran X y un sonido de desaprobación, la cual reiniciará (a definir) el nivel o todo el juego. Por lo tanto, cada letra tendrá dos variables.

Este patrón de funcionamiento correrá infinitamente hasta lograr todo el abecedario o apagando el equipo. Si la persona logra completar el desafío, la matriz LED mostrará una pequeña animación de felicitaciones (idea: aplausos, confeti, “Felicidades”) junto a una pequeña melodía. Finalmente, para apagar el equipo, la persona deberá mantener apretado el botón por 5 segundos y al apagarse la matriz LED dará un output haciendo un sonido y mostrando la palabra “adios” 2 veces, de nuevo en el alfabeto español y luego en código morse. 

# Documentación audiovisual

## Archivos 3D

```stl
[]
```

# Manual de uso textual

# Orden del codigo

Al realizar el codigo, muchas veces surgieron problemas respecto a bibliotecas que eran necesarias para los codigos que debiamos usar, ya que estas se encontraban disponibles, pero no en todas las ocaciones se encontraban comprimidas como archivo zip y al comprimirlo costaba que arduino pudiera abrirla.
# Calidad de factura
