# clase-07

## Trabajo Viernes 27

Después de 1 hora logré vincular mi arduino. Cuando funcionó, lo que hice fue cerrar la aplicación yb abrirla de nuevo.

## Cómo conectar Arduino
- Usar Chrome
- No tener la placa conectada a ningún componente.

## Observaciones
- Para mandar información de forma remota, 

<img width="1306" alt="Captura de pantalla 2024-09-27 a la(s) 12 39 25" src="https://github.com/user-attachments/assets/2011a3ee-3337-4dd3-bcea-d0f65a7de765">

Variables: se hace solo, lo mete a tu código. Pero si compilas el código

![image](https://github.com/user-attachments/assets/35539ade-ccc5-4aa0-bb5f-8f2910bdd7b5)

Cómo conectar el led

![IMG_2894](https://github.com/user-attachments/assets/6bf581d8-433c-4844-9884-256d4d452459)

Conceptos:
- INCLUIR: define librerías.
- DEFINIR: define un pin.

---
# Clase 1 de Octubre
- Paraconseguir cosas, siempre preguntar. Muchas veces puedes conseguir beneficios o descuentos.
- Just Javascript: <https://justjavascript.com> para aprender javavascript.
- Chromium: navegador web, navegadores que también utilizan chromium: Microsoft Edge, Brave, Opera.
- Safari no es un navegador. No sirve para desarrolladores.
- Existen cables de carga y cables de datos. Los de datos te permiten mandar/recibir datos y cargar el artículo.
- Los cargadores cuando te señalan los W (watts) te está respondiendo qué tanta potencia puede pasar.

## Presentación Paula
- Máscara de Iron Man WOOOO
- Ella utilizó otro Arduino porque los códigos que encontró para hacer el proyecto no eran compatibles con el R4Wifi (era una librería muy antigua).
- Para hacerlo: Quiero hacer el casco, busco un tutorial de cómo hacer físicamente el caso, luego preguntarse "Qué quiero que haga el casco.
- > Que se abra y cierre el casco, que tenga luces en los ojos. 2 led y 2 servomotores.
  > Que sea controlable con un accionador
- Ver repositorio Paula clase 8.
- **Boleana:** 2 estados, 1 o 0.
- Las ordenes no las dejó en el void loop.
- ¿Cómo hacer parpadeos sin usar delay? El Delay entorpece. El código que encontró solo cambió 2 líneas.
- Cada vez que el led se vaya prender, parpaderá por x segundos y luego se mantendran prendidos. Usando variables if y else.
- Primero probó las conecciones, código y accionadores y luego fabricó la máscara.
- El wifi registrado para el proyecto es el del teléfono, porque es algo que se estrá transportando perfectamente.
- Los pins 0 y 1 no son recomendables.
- La placa del arduino no se puede soldar.
- Saber las palabras qué necesito para saber qué buscar y buscarlo en sitios confiables.
- Hacer una lista de prioridades de lo que se debe hacer.-> Saber qué qué quuiero hacer, qué tengo qué hacer, cuándo y cómo.
- Los venden a 500 dolares.
- El estado de "inicio" estaba marcado con el ángulo en que se cuentras los servos.

**Reflexiones de los profes**
- Es diseño decir cómo hacer proyectos como ese.
- Nosotros tenemos que diseñar el proceso para que un otro tenga la experiencia que nosotros tuvimos.
- Herramienta: diagrama de flujo fundamental para hacer esto. De aquí pueden salir diagramas de estado.
- Si podemos establacer nuestra idea de interacción en la forma de un mapa de flujo, las tareas de programar van a ser mucho más sencillas.

Ejemplo:
<https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.researchgate.net%2Ffigure%2FThe-elements-in-an-ADSR-envelope_fig22_270819567&psig=AOvVaw1kWIZ9jAWkZXeB6gPx7eWx&ust=1727883543306000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjfovjB7YgDFQAAAAAdAAAAABAE![image](https://github.com/user-attachments/assets/18ef85f3-3a4e-424e-a2c5-bd2da7a93e75)>

Ataque:

*Animator controller unity character-> como programar para animar los estados de los personajes. (Ver ese tipo de interacciones no solo sirve para aprender el software en sí, sino que también para entender lenguaje computacional.

Entender el Lenguaje Computacional es el núcleo de este taller. 

Próximo proyecto tendrá:
1. Sensores
2. procesamiento de datos
3. Acción wue reponda a la información de los datos.
