# PREclase-15

Links relevantes

https://processing.org/reference/char.html

https://processing.org/reference/Array.html

https://processing.org/tutorials/arrays

https://processing.org/examples/array.html

https://forum.processing.org/one/topic/converting-a-string-to-an-array-of-chars


codigo hasta hora 

```java
PFont font;  //la fuente que quiero usar para resaltar la letra seleccionada
PFont robotoBlack;
PFont robotoThin;
boolean nombreEscrito;
int indiceLetra; //el indice que conecta numeros con letras
String candidato = ""; //esto es el espacio donde se va escribiendo el nombre
String[] abecedario = {" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
boolean popUp;
String votoCheck = "SU VOTO HA SIDO REGISTRADO EXITOSAMENTE";

void setup() {
  size(1366, 768);
  font = createFont("RobotoRegular-3m4L.ttf", 50);
  robotoBlack = createFont("RobotoBlackItalic-LmMD", 100);
  robotoThin = createFont("RobotoThin-xjmK.ttf", 40);
  boolean nombreEscrito = false;
  boolean popUp = false;
}

void draw() {
  background(245);

  //// FLEXA IZQUIERDA
  //pushStyle();
  //fill(200, 200, 200);
  //stroke(0);
  //strokeWeight(2);
  //beginShape();
  //vertex(width/2 - width/7, height/2 + 50); //90°
  //vertex(width/2 - width/7 - 170, height/2 + 50);
  //vertex(width/2 - width/7 - 220, height/2); //punta
  //vertex(width/2 - width/7 - 170, height/2 - 50);
  //vertex(width/2 - width/7, height/2 - 50); //90°
  //endShape(CLOSE);
  //popStyle();

  //sombra flexa izq
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 180-4, height/2 + 40+8, width/2 - 180-4, height/2 - 40+8, width/2 - 230-4, height/2+8);
  popStyle();

  //FLEXA REAL
  pushStyle();
  stroke(2);
  fill(200, 70, 70);
  triangle(width/2 - 180, height/2 + 40, width/2 - 180, height/2 - 40, width/2 - 230, height/2);
  popStyle();

  //// FLEXA DERECHA
  //pushStyle();
  //fill(101, 101, 101);
  //stroke(0);
  //strokeWeight(2);
  //beginShape();
  //vertex(width/2 + width/7,       height/2 - 50); //90°
  //vertex(width/2 + width/7 + 50, height/2 - 50);
  //vertex(width/2 + width/7 + 80, height/2 ); //punta
  //vertex(width/2 + width/7 + 50, height/2 + 50);
  //vertex(width/2 + width/7,       height/2 + 50); //90°
  //endShape(CLOSE);
  //popStyle();

  //sombra FLEXA DEREXA
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 + 180+4, height/2 - 40+8, width/2 + 180+4, height/2 + 40+8, width/2 + 230+4, height/2+8);
  popStyle();

  //FLEXA REAL
  pushStyle();
  stroke(2);
  fill(200, 70, 70);
  triangle(width/2 + 180, height/2 - 40, width/2 + 180, height/2 + 40, width/2 + 230, height/2);
  popStyle();



  ////////////////////////////////////

  // VISTA PREVIA: Letra anterior
  pushStyle();
  fill(0);
  textAlign(CENTER);
  textSize(40);
  String letraAnterior;

  if (indiceLetra == 0) {
    letraAnterior = abecedario[27]; // Última letra del abecedario, "z" en este caso
    text(letraAnterior, width / 2 - 120, height / 2 + 15);
  } else if (abecedario[indiceLetra - 1].equals(" ")) {
    // Dibujar el ícono para el espacio si la letra anterior es un espacio
    pushStyle();
    noFill(); // Sin relleno para la figura
    strokeWeight(2);
    beginShape();
    vertex(width / 2 - 120 - 20, height / 2 + 8); // Coordenadas del ícono
    vertex(width / 2 - 120 - 20, height / 2 + 20);
    vertex(width / 2 - 120 + 20, height / 2 + 20);
    vertex(width / 2 - 120 + 20, height / 2 + 8);
    endShape();
    popStyle();
  } else {
    letraAnterior = abecedario[indiceLetra - 1];
    text(letraAnterior, width / 2 - 120, height / 2 + 15);
  }
  popStyle();


  // visualizador Letra actual
  pushStyle();
  textAlign(CENTER);
  fill(0);
  textFont(robotoBlack);
  textSize(100);
  text(abecedario[indiceLetra], width/2, height/2 + 30);
  popStyle();

  // Letra actual
  pushStyle();
  textAlign(CENTER);
  fill(0);
  textSize(100);
  popStyle();

  //si la letra mostrada en el visualizador es el " ", muestra el icono de "espacio"
  if (abecedario[indiceLetra].equals(" ")) {
    pushStyle();
    noFill(); // Color del shape
    strokeWeight(4);
    beginShape();
    vertex(width/2 - 28, height/2);
    vertex(width/2- 28, height/2 + 20);
    vertex(width/2 + 28, height/2+ 20);
    vertex(width/2 + 28, height/2);
    endShape();
    popStyle();
    // } else {
    // Dibuja la letra actual
    //  text(abecedario[indiceLetra], width / 2, height / 2 + 15);
  }



  // VISTA PREVIA: Letra siguiente
  pushStyle();
  fill(0);
  textAlign(CENTER);
  textSize(40);
  String letraSiguiente;

  if (indiceLetra == 27) {
    letraSiguiente = abecedario[0];
    // Dibujar el ícono para el espacio
    pushStyle();
    noFill(); // Sin relleno para la figura
    strokeWeight(2);
    beginShape();
    vertex(width / 2 + 120 - 20, height / 2 + 8); // Coordenadas del ícono
    vertex(width / 2 + 120 - 20, height / 2 + 20);
    vertex(width / 2 + 120 + 20, height / 2 + 20);
    vertex(width / 2 + 120 + 20, height / 2 + 8 );
    endShape();
    popStyle();
  } else {
    letraSiguiente = abecedario[indiceLetra + 1];
  }
  text(letraSiguiente, width/2 +120, height/2 + 15);
  popStyle();



  ////////////////////////////////////

  //sombra del boton pa añadir letra
  pushStyle();
  fill(245);
  noStroke();
  rect(width/2 -245, height/2 +136, 330, 90);
  popStyle();

  // Botón para añadir la letra seleccionada
  pushStyle();
  fill(255);
  stroke(200);
  rect(width/2 -240, height/2 +130, 320, 90);
  fill(255, 0, 0);
  textFont(font);
  textAlign(CENTER);
  textSize(32);
  text("Añadir Selección", width/2 -78, height/2 +188);
  popStyle();

  // Botón para borrar
  pushStyle();
  fill(255, 20, 20);
  noStroke();
  rect(width/2 + 105, height/2 + 130, 135, 90);
  popStyle();

  //icono del boton pa borrar
  pushStyle();
  // noFill();
  fill(255);
  strokeWeight(3);
  stroke(255);
  beginShape();
  vertex(width/2 + 150, height/2 + 200);
  vertex(width/2 + 210, height/2 + 200);
  vertex(width/2 + 210, height/2 + 150);
  vertex(width/2 + 150, height/2 + 150);
  vertex(width/2 + 130, height/2 + 175);
  vertex(width/2 + 150, height/2 + 200);
  endShape();
  popStyle();

  pushStyle();
  stroke(255, 0, 0);
  strokeWeight(3);
  line(width/2 + 155, height/2 + 190, width/2 + 200, height/2 + 160);
  line(width/2 + 155, height/2 + 160, width/2 + 200, height/2 + 190);
  popStyle();

  //background de la casilla rellenable
  //negro
  //triangle(width/2-150, height/8 + 60 - 35, width/2 + 150, height/8 - 5, width/2-160, height/2 - 210);
  pushStyle();
  fill(90);
  triangle(width/2 - 355, height/8+83, width/2- 355, height/8 - 5, width/2 + 354, height/8 - 5);
  popStyle();

  //blanco
  pushStyle();
  noStroke();
  fill(255);
  //triangle(  width/2-160, height/2 - 210,  width/2 + 150, height/8 - 5, width/2+160, height/2 - 210);
  triangle(width/2 - 355, height/8 + 86, width/2 + 355, height/8 - 3, width/2 + 355, height/8 + 86);
  popStyle();

  ////CASILLA RELLENABLE
  pushStyle();
  fill(240, 240, 240);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/8+ 40, 704, 85);
  line(width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60);
  popStyle();

  //texto: CANDIDATO NOMBRE
  textAlign(LEFT);
  fill(0);
  textSize(40);
  text(candidato, width/2- 340, 150);
  //text("lalala", 450, 150);
  println(candidato);


  //"ENTER"
  pushStyle();
  fill(200);
  strokeWeight(4);
  stroke(255);
  rectMode(CENTER);
  //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
  rect(width/2 + 307, height/8 + 38, 90, 90);

  //flexa
  // "ENTER" - Botón y flecha
  pushStyle();
  fill(200);
  strokeWeight(4);
  stroke(255);
  rectMode(CENTER);

  // Rectángulo del botón
  rect(width/2 + 307, height/8 + 38, 90, 90);

  // Flecha apuntando a la derecha
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();

  // Coordenadas de la flecha (forma rectangular y punta triangular)
  vertex(width/2 + 290, height/8 + 38 - 10);  // Esquina superior izquierda del cuerpo
  vertex(width/2 + 307, height/8 + 38 - 10);  // Esquina superior derecha del cuerpo
  vertex(width/2 + 307, height/8 + 38 - 20);  // Punto superior de la punta
  vertex(width/2 + 328, height/8 + 38);       // Punta derecha de la flecha
  vertex(width/2 + 307, height/8 + 38 + 20);  // Punto inferior de la punta
  vertex(width/2 + 307, height/8 + 38 + 10);  // Esquina inferior derecha del cuerpo
  vertex(width/2 + 290, height/8 + 38 + 10);  // Esquina inferior izquierda del cuerpo

  endShape(CLOSE);
  popStyle();

  popStyle();

  //si escribes el nombre, el boton cambia de gris a verde
  if (candidato.equals("A") || (candidato.equals("LEO CEA") || (candidato.equals("RAFAELA CATRILEFQUEN") || (candidato.equals("MIGUEL KREUTZBERGER") || (candidato.equals("DONATELA IRARRAZABAL")))))) {
    nombreEscrito = true;
  } else {
    nombreEscrito = false;
  }

  if (nombreEscrito) {
    pushStyle();
    stroke(0, 120, 0);
    fill(20, 170, 20);
    strokeWeight(3);
    rectMode(CENTER);
    //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
    rect(width/2 + 307, height/8 + 38, 86, 86);

    // Flecha apuntando a la derecha
    noFill(); // Negro para la flecha
    //stroke(230, 255, 230); // Sin borde para la flecha
    stroke(220, 255, 220);
    strokeWeight(3);
    beginShape();

    // Coordenadas de la flecha (forma rectangular y punta triangular)
    vertex(width/2 + 290, height/8 + 38 - 10);  // Esquina superior izquierda del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 10);  // Esquina superior derecha del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 20);  // Punto superior de la punta
    vertex(width/2 + 328, height/8 + 38);       // Punta derecha de la flecha
    vertex(width/2 + 307, height/8 + 38 + 20);  // Punto inferior de la punta
    vertex(width/2 + 307, height/8 + 38 + 10);  // Esquina inferior derecha del cuerpo
    vertex(width/2 + 290, height/8 + 38 + 10);  // Esquina inferior izquierda del cuerpo

    endShape(CLOSE);
    popStyle();
  }
  
 if(popUp == true){
   pushStyle();
   
   fill(0, 150);
   rectMode(CENTER);
   rect(width/2, height/2, 1366, 768);
   
   
   fill(220, 210, 210);
   stroke(0);
   strokeWeight(3);
   rectMode(CENTER);
   rect(width/2, height/2 - 50, 800, 400, 15);
   textAlign(CENTER);
   textSize(30);
   fill(0);
   text( votoCheck,width/2, height/2 - 50);
   popStyle();
 }else{ 
   popUp = false;
 }
  
}




void mouseReleased() {
  // Flecha derecha
  if (mouseX < width/2 + 232 && mouseX > width/2 + 178 && mouseY > height/2 - 40 && mouseY < height/2 + 40) {
    if (indiceLetra < 27) {
      indiceLetra = indiceLetra + 1;
    } else {
      indiceLetra = 0;
    }
  }
  // Flecha izquierda
  else if (mouseX > width/2 - 232 && mouseX < width/2 - 178 && mouseY > height/2 - 40 && mouseY < height/2 + 40) {
    if (indiceLetra == 0) {
      indiceLetra = 27;
    } else {
      indiceLetra = indiceLetra - 1;
    }
  }
  //si "añadir letra", la letra seleccionada se pone en el cuadro de texto
  //width/2 -240, height/2 +130, 320, 90, 10)

  else if (mouseX > width/2 - 250 && mouseX < width/2 + 82 && mouseY > height/2 + 128 && mouseY < height/2 + 222) {
    candidato = candidato + abecedario[indiceLetra];
  }
  // Borrar la última letra 45, 50, 50, 50, 10ul
  else if (mouseX > width/2 + 100 && mouseX < width/2 + 242 && mouseY > height/2 + 128 && mouseY < height/2 + 222) {
    // background(0, 0, 255);
    if (candidato.length() > 0) {
      candidato = candidato.substring(0, candidato.length() - 1);
    }
  } else {
    println("click afuera");
  }

  println("Letra actual: " + abecedario[indiceLetra]);

  if (nombreEscrito && mouseX < width/2 + 360 && mouseX > width/2 + 262 && mouseY > height /8 - 10 && mouseY < height/8 + 85) {
   popUp = true;
  } else {
   popUp = false;
  }
}
```

CODIGO GRADIENTE AVANCE CON AARÓN GRANDE AARÓN

```java
//https://www.youtube.com/watch?v=tIgLJz0ZQD4



int r = 0;
int g = 0;
int b = 0;

int renglonX = 600;

int renglonY = 100;

//leo azul (0, 0, 255)
//miguel rojo(255, 0, 0)
//rafa morado (255/2, 0, 255/2)
// dona (0, 255, 0)

color azul = color(0, 0, 255);
color rojo = color(255, 0, 0);
color morado = color(255/2, 0, 255/2);
color verde = color(0, 255, 0);

int numeroColores = 255;

void setup() {
  size(1366, 768);
  noStroke();

  for (int i = 0; i< numeroColores; i++) {
    float componenteR = red(azul) + i * (red(rojo) - red(azul))/numeroColores;
    float componenteG = green(azul) + i * (green(rojo) - green(azul))/numeroColores;
    float componenteB = blue(azul) + i * (blue(rojo) - blue(azul))/numeroColores;
    fill(componenteR, componenteG, componenteB);

    rect(floor(i * float(width/(4*numeroColores))), 0, ceil(width/float(4*numeroColores)), height);
  }
}


//fill(r, i, b);
//rect(0, i * height/256, width, height/256);
```

![image](https://github.com/user-attachments/assets/d55143d2-afa5-4ad4-99a8-f8f0c4b99ab1)
