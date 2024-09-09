# clase-05

## retroalimentación y apoyo a colegas

con @AlanisMria y @BelenVeAg revisamos el código ya que tenían un doble sonido que no necesitaban, no obtuvimos resultados concretos pero creemos que es problema del delay
![IMG_5270](https://github.com/user-attachments/assets/410125bc-ea94-4b8b-977e-df67f75abe79)

@AlanisMria y @BelenVeAg nos compartieron su archivo .3dm para que ajustaramos la pieza que redirige la luz de la pantalla (diseñada por ellas)

@AlanisMria me ayudó con una guía rapida de como configurar la impresion 3D en Ultimaker Cura


## explicación textual (qué es, cómo es) 
### nombre ideas: LOCK 
- tarea: cierre de caja cuando el usuario se acerque
El objetivo de este proyecto es crear una experiencia interactiva que despierte la curiosidad del usuario y fomente su participación. A través de un diseño que combina luz, movimiento y gestos sutiles, la caja responde a la cercanía y distancia del usuario, generando una sensación de conexión y sorpresa. Más allá de su funcionalidad, la caja se convierte en un objeto que invita a explorar y descubrir, creando un diálogo entre el usuario y el entorno. El proyecto de la caja (nombre) busca transformar un elemento común en una experiencia inmersiva y atractiva, que estimule tanto los sentidos como la imaginación.

![IMG_0768](https://github.com/user-attachments/assets/17245c22-d434-41d1-98ca-023f7bd83fed)


Su forma cúbica o rectangular facilita la instalación ordenada de los componentes y proporciona estabilidad. Además, este diseño simple genera un impacto visual claro. El tamaño está pensado para ser visible desde cierta distancia, lo que despierta la curiosidad del usuario.
Los componentes están distribuidos estratégicamente: el sensor de proximidad se ubica al frente, pero en la parte inferior, para detectar al usuario rápidamente sin ser visible. La pantalla LED se coloca en el centro, de manera que el usuario pueda ver claramente la animación o el ícono que muestra el comportamiento de la caja al acercarse o alejarse. El servomotor está en el lateral, lo que permite controlar eficientemente el movimiento de la tapa. El Arduino se sitúa en el centro, optimizando la conexión entre los elementos y asegurando un flujo ordenado de datos y energía

Carcasa Externa: Fabricada en filamento 3D, esta carcasa fue elegida por su versatilidad y precisión en el diseño. Este material permite crear una estructura que oculta los componentes internos, dejando visibles solo los elementos esenciales, como la pantalla del Arduino y el puerto USB. El orificio ha sido diseñado de manera discreta pero funcional, asegurando que no interfiera con el funcionamiento del sensor de proximidad.

### manual de uso textual (cómo interactúo con el objeto)
#### Control de Caja Interactiva con Sensor de Proximidad

- Proyecto desarrollado utilizando un Arduino Uno R4 WiFi para controlar una caja interactiva que responde a la proximidad del usuario, utilizando la pantalla led del arduino  y un servomotor.

Cuando el usuario se acerca a la caja, esta responde de la siguiente manera:
1. Estado inicial: La caja está abierta, con una luz encendida en su interior y una pantalla de Arduino mostrando una animación o ícono parpadeante que invita al usuario a acercarse.
2. Detección de proximidad: Si el usuario se acerca a una distancia de entre medio metro y un metro, la animación en la pantalla LED aumenta de velocidad conforme el usuario se aproxima, mientras la luz interna permanece encendida.
3. Cierre de la caja: Al llegar a una distancia menor o igual a medio metro, la luz interna se apaga, la tapa se cierra automáticamente mediante un servomotor, y la pantalla LED muestra una animación de una mueca burlesca.
4. Retroceso: no está muy claro 
#### Casos Límite:
1. El usuario no se acerca: Si el usuario no se aproxima a la caja, esta puede permanecer en estado de espera por un máximo de un minuto. Después de este tiempo, la caja podría cambiar la animación en la pantalla para intentar atraer más la atención del usuario, o podría apagarse temporalmente hasta que se detecte un nuevo movimiento
2. El usuario se aleja inmediatamente:
Si el usuario se aleja demasiado rápido, la caja volvera a su estado inicial de apertura pero en espera de detectar proximidad

Por ejemplo, si el Arduino recibe la señal, esto indica que el usuario se encuentra a 75 cm de distancia de la caja, lo que hace que la animación en la pantalla aumente su velocidad a medida que el usuario se aproxima. Una vez que la distancia se reduce a menos de 50 cm, el servomotor activa el cierre automático de la tapa

### documentación
- diagramamos los componentes dentro de la caja principal para ubicar la carcasa acrílica que contendrá objetos de "valor"

![dd034f26-5620-4f01-8ee8-6851b4a4d8ea](https://github.com/user-attachments/assets/0f08dea3-5a13-40cb-baf0-fa152fa053e5)

primeros acercamientos del modelo 3d para impresión

![17AC0345-5986-4378-B971-08FE142C0EC8](https://github.com/user-attachments/assets/6a2eee82-4926-49fe-866a-7bd5fee819f9)
### Video MP4

<video width="640" height="360" controls>
  <source src="https://github.com/user-attachments/assets/2ca4c08c-d6ae-44eb-a102-e5835ddd7cf7" type="video/impresora_mp4">
</video>

![F822F74E-AC6A-43E7-B61F-71892113A5BA](https://github.com/user-attachments/assets/cc121aba-1e0f-4d3f-9467-a9d247f6a96a)


el compartimiento diseñado inicialmente para el arduino 1 r4 se redireccionó para que la vista del usuario solo se enfocara en la pantalla led que contendrá las animaciones de: 
1. pausa (modo espera)
2. detección de usuario (vibración lumínica)
3. cierre de caja (animación con lengua afuera)

luego de entender la diagramación interna de todos los componentes utilizados (servo motor, sensor tof, arduino 1 r4) llegamos a:

![50354EC4-8A74-4073-AB2E-516803784EF3](https://github.com/user-attachments/assets/5171b09b-f906-4988-b847-d8f5cb71f719)



