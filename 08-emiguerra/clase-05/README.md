# clase-05

## retroalimentación y apoyo a colegas
con @AlanisMria y @BelenVeAg revisamos el código ya que tenían un doble sonido que no necesitabamos, no obtuvimos resultados concretos pero creemos que es problema del delay
![Uploading IMG_5270.jpg…]()



## explicación textual (qué es, cómo es) 
### nombre ideas: me gustaría combinar lo delicado y la curiosidad 
- tarea: cierre de caja cuando el usuario se acerque
El objetivo de este proyecto es crear una experiencia interactiva que despierte la curiosidad del usuario y fomente su participación. A través de un diseño que combina luz, movimiento y gestos sutiles, la caja responde a la cercanía y distancia del usuario, generando una sensación de conexión y sorpresa. Más allá de su funcionalidad, la caja se convierte en un objeto que invita a explorar y descubrir, creando un diálogo entre el usuario y el entorno. El proyecto de la caja (nombre) busca transformar un elemento común en una experiencia inmersiva y atractiva, que estimule tanto los sentidos como la imaginación.

![IMG_0768](https://github.com/user-attachments/assets/17245c22-d434-41d1-98ca-023f7bd83fed)
![dd034f26-5620-4f01-8ee8-6851b4a4d8ea](https://github.com/user-attachments/assets/0f08dea3-5a13-40cb-baf0-fa152fa053e5)

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


