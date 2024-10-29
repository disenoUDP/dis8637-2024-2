# clase-09 Proyecto final

## Concepto y fundamentación

**Descripción del proyecto**

Es una instalación interactiva que invita a los estudiantes, profesores y funcionarios de la escuela de diseño UDP a generar una imagen mediante la IA Midjourney, pidiendo por adelantado al usuario depositar en un recipiente el agua que consumirá el servidor para generar la imagen, con el fin de que los usuarios generen conciencia y reflexionen sobre el impacto ambiental que tienen las tecnologías basadas en IA.

La votación en este proyecto, consiste en que al solicitarse el agua, el usuario puede decidir realizar o no el prompt, este es el dato que recogemos de la realización de este proyecto, una vez visualizamos el impacto medioambiental del uso de IA Gen, ¿Cuantos usuarios decidiran o no utilizar el agua para generar las imagenes?.

**Justificación del proyecto**

Nuestro proyecto nace de que como estudiantes hemos observado en el uso indiscriminado en el ámbito académico de tecnologías de IA generativas de imagen, el cual es fomentado por la escuela, en asignaturas cómo: “Narrativas Visuales e Inteligencia Artificial” y "Experimentación Audiovisual". Esto sin pensar en el impacto que estas tienen en el medio ambiente, al tratarse de una tecnología digital existe una desconexión entre el usuario y el costo ambiental de esta herramienta, costo que queremos visibilizar.

Elegimos el agua porque, a pesar de que google, que es la empresa que aloja los servidores de MidJourney, ha hecho un esfuerzo por disminuir la huella de carbono invirtiendo en procesadores más eficientes y energías renovables, el uso de agua como sistema de enfriamiento de los servidores sigue en pie y es mas, aumenta conforme más crecer estos servidores y mas poder consumen.

¿Cuánta agua consume MidJourney? Responder esta pregunta NO fue fácil, MidJourney carece totalmente de reportes de sustentabilidad o declaraciones de su uso de energías. La información que utilizamos para responder esta pregunta proviene principalmente de Google, quienes declaran utilizar 1.8L de agua * kWh y también del estudio *Power Hungry Processing: Watts Driving the Cost of AI Deployment?* de las autoras Alexandra Sasha Luccioni, Yacine Jernite, and Emma Strubell, de cuya investigación utilizamos el dato de que por cada 1000 inferencias MidJourney consume 2.9 kWh, Con esta información realizamos los siguientes cálculos.


![Infografia taller 2](https://github.com/user-attachments/assets/abe2aaba-1bf6-4c8e-afc4-800d13910ed1)

## Diseño de Interacción 

![Mesa_de_trabajo_11-100](https://github.com/user-attachments/assets/70c9b3c5-6133-42cb-9fbe-16e98cf44d18)


![Mesa_de_trabajo_1_copia_5-100](https://github.com/user-attachments/assets/17c08dc3-1c37-485d-ad21-35fa3b2ceeff)

## Planificación Técnica

**Arquitectura del sistema**

![waaaaaaa](https://github.com/user-attachments/assets/37066fdc-55dd-4d35-82e6-6a03c77941ca)

**Casos de error**

Se pierde la conexion entre el Arduino R4 Wifi y el UI

Se pierde la conexión del sitio MidJourney

El sistema se activa con una cantidad de agua distinta a la que determinamos

El sistema NO se activa con el litro de agua

**Casos limites**

El usuario no puede ingresar el input mediante el teclado

La interacción es realizada por mas de un usuario

**Lista de Componentes**

Nuestra lista de componentes consiste de:

- Mesa de altura 100cm, completamente forrada de un color hasta el suelo por el frente y costados.
- Monitor de min 24"
- Teclado mecanico, conectable via usb
- Arduino R4 Wifi
- Cables dupont
- Sensor analogo de nivel de agua
- Case de montaje
- Bateria de Litio que alimente el dispositivo
- Una cuenta de MidJourney

## Plan de producción 

![programación taller](https://github.com/user-attachments/assets/6a57ccac-bb68-4ea9-8e5f-e49a92363c80)
![programacion taller 2](https://github.com/user-attachments/assets/833b65f6-6aeb-4237-8c5c-0a8762d68aac)








