# clase-03

## Encargo 3 / Etapa 01

> Decidimos trabajar con un módulo de reconocimiento de voz, dado que nos llamó la atención trabajar alguna interacción en base al sonido y al ruido. 

Dentro de nuestra conversación surgió la idea de crear un objeto el cual responda a la voz del usuario, y nos hizo gracia la idea de un objeto el cual te diga que hacer o te de respuestas. Por lo tanto, dada la idea propuesta, quedó como referente el juguete Magic 8 Ball, el cual da respuestas a preguntas después de ser agitado. En este caso, el usuario agita el objeto y este muestra la respuesta en la ventana que se encuentra al inferior de este.

La interacción comprendería que el usuario hace una pregunta al objeto, el micrófono analiza el tono de voz y en función de eso, arroje una respuesta de texto según el tono. La interacción del usuario con los juegos que buscan emular la adivinación cómo la bola 8 es muy similar a la de los juegos de azar, sin embargo en su desarrollo su creador destaca el añadir varias formas de responder negativamente o positivamente más allá del sí o no además de un par de respuestas neutras o vagas cómo “puede ser” o “pregunta otra vez” para hacer el juego mas parecido a una sesión de adivinación y no tanto a una máquina automatizada de si o no, aunque esta lo sea.

![image](https://github.com/user-attachments/assets/1eca0a66-25a1-4381-a852-1150300ec314)


Dado que estamos usando un micrófono, nos pareció más correcto que el diseño del objeto fuera estacionario y no den ganas de tomarlo a quien está interactuando, así para no obstruir el micrófono y mover la placa. 

Pensando en la forma, a Paula se le ocurrió la idea de recurrir a la forma de una bola de cristal, generando una especie de domo por sobre la placa, así el usuario puede ver la respuesta que le otorgara el objeto en los LEDs y no den ganas de interactuar con el objeto sosteniendolo.

![bola](https://github.com/user-attachments/assets/47278d04-ec85-4fa3-83dc-244142150065)

Para que el objeto se adapte a esta forma estacionaria, convertimos la bola en un domo, para así poder apoyarse sobre una superficie y estar el display en la parte superior del domo debemos asegurarnos que la entrada para el sensor de sonido se encuentre en la orientación adecuada.
