
# clase-05

## retroalimentación y apoyo a colegas

@AlanisMria y @BelenVeAg nos compartieron su archivo .3dm para que ajustaramos la pieza que redirige la luz de la pantalla (diseñada por ellas)

@nuestros compañeros de taller nos apoyamos mutuamente con diferentes partes de nuestros códigos, ayudándonos a resolver los problemas que surgían al momento de probarlos.

![texto](./compañeros.jpg)

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
### Video impresora v.1.0

![Uploading Screenshot 2024-09-07 at 5.02.45 PM.png…]()


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
![texto](./piezas.jpg)
![texto](./piezas1.jpg)

luego comenzamos a prototipar conecciones, comenzamos con código de prueba para el servomotor:

referente: https://www.youtube.com/watch?v=GUhPrO1BEJ0&t=986s

![conección servo](https://github.com/user-attachments/assets/18fe884d-e9d8-4836-9bb7-e001045e8231)



```
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15ms for the servo to reach the position
  }
}
```

![9827FCEB-913E-4524-9204-43E3DF971118](https://github.com/user-attachments/assets/37c1ef08-ca4b-48ea-80ad-f1834e925692)

### Video servoMotor 1.0

<video width="640" height="360" controls>
  <source src="
https://github.com/user-attachments/assets/7b2b6193-91a1-4793-acc0-7ca88b015aad" type="video/impresora_mp4">
</video>

definimos el ángulo necesario de recorrido para que la tapa abra y cierre en 20°, creando la pieza necesaria:

![Captura de pantalla 2024-09-08 222525](https://github.com/user-attachments/assets/1cb0badb-6946-4d7e-9f90-5de33489ce17)

Respecto al Sensor Laser de Distancia VL53L0X, hicimos las siguientes pruebas y conecciones, no hemos logrado que lea las distancias como debería, ya que la primera vez que cargamos el código al arduino corrió bien pero al aproximar otro objeto no lo distingió

<img width="841" alt="Screenshot 2024-09-09 at 11 08 59 AM" src="https://github.com/user-attachments/assets/a0e6ef54-96bf-457e-bae4-30e5399fdf75">



```
#include "Adafruit_VL53L0X.h"

Adafruit_VL53L0X lox = Adafruit_VL53L0X();

void setup() {
  Serial.begin(115200);

  // wait until serial port opens for native USB devices
  while (! Serial) {
    delay(1);
  }
  
  Serial.println("Adafruit VL53L0X test");
  if (!lox.begin()) {
    Serial.println(F("Failed to boot VL53L0X"));
    while(1);
  }
  // power 
  Serial.println(F("VL53L0X API Simple Ranging example\n\n")); 
}


void loop() {
  VL53L0X_RangingMeasurementData_t measure;
    
  Serial.print("Reading a measurement... ");
  lox.rangingTest(&measure, false); // pass in 'true' to get debug data printout!

  if (measure.RangeStatus != 4) {  // phase failures have incorrect data
    Serial.print("Distance (mm): "); Serial.println(measure.RangeMilliMeter);
  } else {
    Serial.println(" out of range ");
  }
    
  delay(100);
}

```


![sensor tof coneccion](https://github.com/user-attachments/assets/1c2a5f22-5a06-4820-8436-de08a55649d7)

![sensor tof frente](https://github.com/user-attachments/assets/990ad5cb-5369-4c4d-a2e2-bbac652924f9)

