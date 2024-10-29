## clase-11

# Temática y contextualización a nivel nacional
Nuestro proyecto aborda el estrés de la carga acádemica y como este afecta la vida de les alumnes. 
Estudio reciente (2018) en Chile, realizado por la Universidad Andrés Bello (UNAB) y la Universidad de las Américas, reveló que una proporción significativa de estudiantes universitarios presenta síntomas de estrés y otros problemas de salud mental como la ansiedad y la depresión. Según la investigación, el 57% de los estudiantes reportó haber experimentado estrés académico, una cifra elevada que destaca las dificultades y demandas emocionales a las que se enfrentan en sus entornos académicos. Además, más de el 10% dentro del porcentaje de estudiantes estresados, han dicho querer suicidarse debido a tanta carga y la falta de atención de salud psicologica. 

# Descripción de proyecto
Nuestro objetivo es visibilizar ante las autoridades de la Escuela de Diseño de la Universidad Diego Portales sobre el impacto del estrés derivado de la carga académica en sus estudiantes. A través de este proyecto, buscamos crear un espacio donde los estudiantes puedan expresar su experiencia, comprendan que no están solos en estos desafíos y visibilicen esta problemática de manera colectiva y efectiva.

A través de una recopilación de datos interactiva basada en un sistema de votación sencilla, que permitirá medir y visualizar el nivel de estrés que genera la carga académica, acumulado en los estudiantes en tiempo real. 

### Introducción Visual con la Gráfica de Ikeda: 
Al iniciar la interacción, se mostrará una pantalla con la Gráfica de Ikeda, que no solo captará la atención del usuario, sino que ofrecerá una representación simbólica de los efectos del estrés en el cerebro humano. La gráfica se utilizará para ilustrar cómo el estrés académico, la ansiedad y la tensión afectan a los estudiantes, resaltando visualmente el peso de estas presiones. 
(boceto de  la pantalla, ubicación, espacio, tamaño, visualizar montaje)

![](ikeda.png)
 
Por qué ocupar la gráfica de ikeda 

Uso de datos para crear experiencias inmersivas
El público se convierte parte de la obra
Estética minimalista - visualización de datos como arte
Busca hacer una excavación profunda en la creación de sonidos mediante algoritmos. 

Su gráfica hace uso de datos en tiempo real, la utilización de su gráfica nos ayudará a llamar la atención de una manera más innovadora y que las personas hagan consciencia de su estrés de una manera distinta.

### Cuestionario Interactivo y gráfica
Luego se mostrará en pantalla un saludo y una breve introducción para contextualizar al usuario
# GRAFICA BIENVENNIDA 
![](etapa1.png)

Para luego seguir con las preguntas de este cuestionario que están diseñadas para reflejar distintas dimensiones del estrés académico, tales como:
- Dificultad para gestionar el tiempo.
- Conflictos entre los estudios y la vida personal.
- Presión por alcanzar metas y expectativas personales.
- Falta de empatía de los académicos respecto a la carga de trabajo.
  
Las preguntas utilizadas serán 5 y se relacionan estrictamente con indicadores de estrés elevados, ya que todas estás situaciones que presentamos ayudan a establecer una conexión directa que genera el estrés académico, ya que son situaciones que genera síntomas emocionales que son parte del estrés, como ansiedad, frustración, cansancio, insomnio. procrastinación, etc.
ejemplo concreto de preguntas: 
- ¿Crees que necesitas más tiempo para cumplir con tus proyectos?
- ¿Te resulta difícil balancear tus estudios con actividades personales?
- ¿Te sientes presionado/a por cumplir con fechas límite?
- ¿Has sentido alguna vez que no puedes alcanzar tus propias expectativas en los Exámenes, solemnes etc?
- ¿Has notado que te sientes más cansado/a de lo normal después de preparar solemnes para D.A?

Las preguntas se presentarán en una pantalla de forma simple y clara, y se responderán con un control que tendrá solo dos botones: “Sí” y “No”. Los estudiantes deben presionar el botón que mejor refleje su situación, permitiéndonos recopilar datos anónimos de manera directa y accesible. 

![](etapa2.png)

Dibujo técnico de panel con dos botones de arcade tamaño jumbo

![](botones.jpg) 

### Visualización de Estrés Acumulado

Pantalla ubicada en la exposición
Cada vez que un estudiante responda “Sí” a una pregunta, el nivel de estrés acumulado en la gráfica aumentará progresivamente. Si al final de las preguntas un estudiante ha respondido “Sí” a todas, el sistema enviará automáticamente una notificación a las autoridades de la carrera (director y secretaría de estudios) indicando que un estudiante ha alcanzado un nivel crítico de estrés. 

![](etapa3.png)

https://github.com/user-attachments/assets/effd4ddb-fd2d-4b6f-adc3-e881d513c168


Pantalla de Visibilización Pública
Para ampliar el impacto de esta iniciativa, colocaremos una segunda pantalla en un lugar de alto tránsito en la Facultad de Diseño (entrada en Salvador Sanfuentes). En esta pantalla se mostrará un mensaje como: "200 estudiantes de Diseño UDP experimentan un nivel crítico de estrés", el cual se actualizará en tiempo real según la cantidad de estudiantes que interactúen con el proyecto. Esto permitirá que tanto estudiantes como visitantes, docentes y  autoridades comprendan la magnitud del problema de forma inmediata.

 https://github.com/user-attachments/assets/fc3125bf-8145-4238-ba2d-13335e160148

### Reporte de resultados
Al finalizar Diseño Abierto, se enviará un reporte a los profesores de taller, la secretaría y el director de la escuela, que incluirá los datos recopilados sobre el estrés relacionado con la carga académica. Este reporte destacará la magnitud de la problemática al término del periodo académico, proporcionando datos concretos para apoyar la implementación de posibles cambios en la gestión académica y el bienestar estudiantil.
Queremos poder crear un en la percepción y gestión del estrés académico. Mediante la visibilización pública y la presentación de datos a las autoridades, para poder fomentar una mayor empatía y sensibilidad hacia la salud mental de les estudiantes, para que los docentes y las autoridades consideren la carga académica desde una perspectiva más humana y puedan ver el impacto que genera en la vida de les estudiantes 

## Interacción del usuario: 
1. Acercarse al área de la pantalla y tomar el control de botones. Asegurarse de que la pantalla cambie del estado de espera al saludo inicial al momento de tomar el control.
  
2. Leer la introducción de la encuesta. Mantener el control en mano mientras aparece el mensaje de bienvenida e introducción a la encuesta en la pantalla.
   
3. Responder cada pregunta de la encuesta usando los botones de “Sí” o “No”. Asegurarse de que cada respuesta se registre antes de avanzar a la siguiente pregunta. Si aparece un mensaje de error, verificar que solo uno de los botones está presionado.
   
4. Finalizar la encuesta. Cuando completes todas las preguntas, observa los resultados mostrados en la pantalla, incluyendo el gráfico de respuestas.
   
5. Dejar el control en su lugar designado. Colocar el control en el sitio indicado para que el sistema se reinicie automáticamente y vuelva al estado de espera en la pantalla.
   
6. Verificar que el sistema vuelva al estado de espera. Confirma que, al dejar el control, la pantalla retome su imagen inicial, esperando a un nuevo usuario.

 ### Diagrama de flujo
 
 https://miro.com/app/board/uXjVLNU6cXI=/









