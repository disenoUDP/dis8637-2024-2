# clase-12

## Descripción completa de interfaz

0. Algo que diga "solo para estudiantes de diseño Udp"
1. Al inicio de todo, se muestra en la pantalla una gráfica de acumulación de píxeles, coorespondiente a la cantidad de personas que ya han votado que sí a la encuesta con un recuento en numeros que diga "Este semestre ha acumulado x cantidad de personas con estrés". 
2. Cuando el ususario se hacerca a el panel de botones y el sensor detecte su presencia, la pantalla de inicio estará 30 segundos, luego saludará y mostrará las instrucciones de lo que se debe hacer, las cuales deben ser leídas por el usuario.
3. Después de las instrucciones, se mostrará en un lado de la pantalla el recuento de personas que han contestado que si a la encuesta y al otro lado, se mostrará la pregunta "¿Sientes que el estrés académico ha tomado el control sobre tu forma de vida?", a la cual el usuario de contestar sí (con el botón derecho) o no (con el botón izquierdo).
4. Al momento de ya haber contestado, si el usuario cntestó que sí, se mostrará en pantalla el recuento de votos si más el suyo con un recuento pequeño de cuantas personas faltan para que se envíe un correo a las autoridades: "faltan x respuestas de si para enviar notificación a autoridades" (el correo se enviará cada 5 respuestas sí). En caso de que el usuario conteste no, se mostrará en pantalla un "Gracias por responder".
5. Al momento en que termina la encuesta más el recuento de votos, deberán pasar 10 segundos para que la pantalla vuelva a la pantalla de incio y el usuario se pueda alejar. 

## Corrección

Pensar en que se muestra en pantalla dividida, ver si se muestra la gráfica en pantalla completa pero solo a la mitad, si se muestra la gráfica achatada o qué. 

Hacer muy visible cuando se suma un voto: Cuando alguien vota que si poner recuento numerico en rojo con la suma del voto reciente

# PRUEBA DE P5.JS 

## Función mousepressed (libro: Make:Getting Started with p5.js)

```
let squares = []; // Esta línea sirve para almacenar los cuadrados que se hacen

function setup() {
  createCanvas(1920, 1080); // tamaño del lienzo (pantalla)
  background(200); // esto es para el fondo gris
}

function draw() {
  background(200);
  
  for (let square of squares) {
    noStroke(); // importante, no queremos cuadrados con lineas
    fill(square.color); // para asignar color (me costó encontrarlo porque solo me hacía cuagrados blancos xd)
   rect(square.x, square.y, square.size, square.size); 
  }
}


function mousePressed() {
  let newSquare = {
    x: random(width), // aparecerá en cualquier parte 
    y: random(height), 
    size: 30, // esto es para cambiar el tamaño del cuadrado
    color: color(random(255), random(255), random(255)) // 255 corresponde a color rgb, son tres rgb 
  };

  squares.push(newSquare); // para agregar cuadrados
}

```



