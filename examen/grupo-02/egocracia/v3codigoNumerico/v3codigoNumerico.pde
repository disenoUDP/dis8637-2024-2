int digitoActual;
boolean numberCheck;
PFont font;  //la fuente que quiero usar para resaltar la letra seleccionada
PFont robotoBlack;
PFont robotoThin;
PFont robotoBold;
PImage img;
boolean popUp;
String votoCheck = "SU VOTO HA SIDO REGISTRADO EXITOSAMENTE";


void setup() {
  size(1366, 768);
  digitoActual = 0;
  boolean numberCheck = false;
  font = createFont("RobotoRegular-3m4L.ttf", 32);
  robotoBlack = createFont("RobotoBlack-Powx.ttf", 50);
  robotoThin = createFont("RobotoThin-xjmK.ttf", 50);
  robotoBold = createFont("RobotoMedium-Owv4.ttf",50);
  img = loadImage("serbelLogo2.jpeg");
  boolean popUp = false;
}

void draw() {
  background(245);

  //CABECERA
  //fill(240, 235, 235);

  pushStyle();
  fill(245);
  rectMode(CENTER);
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(width/2, 0, 1370, 250);
  fill(75);
  textFont(font);
  textAlign(CENTER);
  text("DIGITE EL CÓDIGO DEL CANDIDATO POR EL QUE DESEA VOTAR", width/2-8, height/8+9-6);
  popStyle();
  
  
  image(img, 15, 15, 90, 90);


  //  pushStyle();
  //  //fill(250, 230, 230);
  //  noStroke();
  //  fill(237,58,79);
  //  //rectMode(CENTER);
  // // stroke(255, 0, 0);
  //  //strokeWeight(4);
  // // rect(width/2, height/9, 1370, 300);
  // rect(0,0, 200, 800);
  //  popStyle();

  //   pushStyle();
  //   fill(237,58,79);
  //rect(1200, 0, 200, 800);
  //  popStyle();

  //background de la casilla rellenable
  //negro
  //triangle(width/2-150, height/8 + 60 - 35, width/2 + 150, height/8 - 5, width/2-160, height/2 - 210);
  pushStyle();
  fill(90);
  triangle(width/2 - 355+54, height/8+83+80, width/2- 355+54, height/8 - 5+80, width/2 + 354-68, height/8 - 5+80);
  popStyle();

  //blanco
  pushStyle();
  noStroke();
  fill(255);
  //triangle(  width/2-160, height/2 - 210,  width/2 + 150, height/8 - 5, width/2+160, height/2 - 210);
  triangle(width/2 - 355+48, height/8 + 86+ 80, width/2 + 355-68, height/8 - 3+80, width/2 + 355-68, height/8 + 86+80);
  popStyle();

  ////CASILLA RELLENABLE
  pushStyle();
  fill(240, 240, 240);
 noStroke();
  rectMode(CENTER);
  rect(width/2-7, height/8+ 40+80, 580, 85);
//  line(width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60);
  popStyle();

  //texto: numero cambiante
  pushStyle();
  textAlign(CENTER);
  fill(75);
  textFont(robotoBold);
  textSize(40);
  text(digitoActual, width/2-25, 150+80);
  //text("lalala", 450, 150);
  popStyle();

  //"ENTER"
  pushStyle();
  fill(200);
  strokeWeight(4);
  stroke(255);
  rectMode(CENTER);
  //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
  rect(width/2 + 307-65, height/8 + 38+80, 90, 90);
  popStyle();

 
  

  // Flecha apuntando a la derecha
  pushStyle();
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();

  // Coordenadas de la flecha (forma rectangular y punta triangular)
  vertex(width/2 + 290-65, height/8 + 38 - 10+80);  // Esquina superior izquierda del cuerpo
  vertex(width/2 + 307-65, height/8 + 38 - 10+80);  // Esquina superior derecha del cuerpo
  vertex(width/2 + 307-65, height/8 + 38 - 20+80);  // Punto superior de la punta
  vertex(width/2 + 328-65, height/8 + 38+80);       // Punta derecha de la flecha
  vertex(width/2 + 307-65, height/8 + 38 + 20+80);  // Punto inferior de la punta
  vertex(width/2 + 307-65, height/8 + 38 + 10+80);  // Esquina inferior derecha del cuerpo
  vertex(width/2 + 290-65, height/8 + 38 + 10+80);  // Esquina inferior izquierda del cuerpo

  endShape(CLOSE);
  popStyle();

  //UNIDADES
  //sombra triangulo pa arriba a la izquierda
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 150+50-30, height/2 + 80 -50, width/2- 350+50+30, height/2 + 80-50, width/2 - 250+50, height/2 + 20-50);

  //real fflexa pa arriba decenas IZQ
  fill(200, 70, 70);
  noStroke();
  triangle(width/2 - 110-30, height/2 + 27, width/2- 310+30, height/2 + 27, width/2 - 210, height/2 -33);

  //signo más + flexa arriba izquierda
  strokeWeight(4);
  stroke(255);
  line(width/2-210, height/2-10+2, width/2-210, height/2+10+2);
  line(width/2-198, height/2+2, width/2-222, height/2+2);

  popStyle();

  //1
  pushStyle();
  fill(75);
  textSize(50);
  textAlign(CENTER);
  textFont(robotoBold);
  text("1", width/2 - 210, height/2 + 90);

  //sombraFLEXA PA ABAJO izquierda
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 150 + 50 -30, height/2 + 120, width/2-350 + 50+30, height/2 + 120, width/2 - 250 + 50, height/2 + 180);
  // strokeWeight(3);
  //stroke(255, 0, 0);

  //flecha pa abajo
  fill(200, 70, 70);
  triangle(width/2 - 150 + 50-10-30, height/2 + 120+3, width/2-350 + 50-10+30, height/2 + 120+3, width/2 - 250 + 50-10, height/2 + 180+3);
  popStyle();

  pushStyle();
  //signo menos - derexa
  stroke(0);
  line(width/2-198, height/2+2+120, width/2-222, height/2+2+120);

  popStyle();

  ////////////////////////////////////////////////
  //////////////FLEXAS DERECHA/////////////////
  ////////////////////////////////////////////////
  // sombra triangulo pa arriba: dereza
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 + 150 - 50+30, height/2 + 80 - 50, width/2 + 350 - 50-30, height/2 + 80-50, width/2 + 250 - 50, height/2 + 20-50);
  //real triangulo pa arriba: unidades
  noStroke();
  fill(200, 70, 70);
  triangle(width/2 + 150 - 50 -10+30, height/2 + 80 - 50-3, width/2 + 350 - 50-10-30, height/2 + 80-50-3, width/2 + 250 - 50-10, height/2 + 20-50-3);
  popStyle();

  //signo más + flexa arriba derexa
  pushStyle();
  strokeWeight(4);
  stroke(255);
  //flexa vertical
  line(width/2-210+199*2, height/2-10+2, width/2-210+199*2, height/2+10+2);
  //flexa horizontal
  line(width/2-198+199*2, height/2+2, width/2-222+199*2, height/2+2);


  popStyle();


  //10
  pushStyle();
  textSize(50);
  textAlign(CENTER);
  textFont(robotoBold);
  text("10", width/2 + 200, height/2 + 90);
  popStyle();

  //sombra FLEXA PA ABAJO: derexa
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 + 150-50+30, height/2 + 120, width/2 + 350-50-30, height/2 + 120, width/2 + 250-50, height/2 + 180);

  //real flexa pa abajo derexa
  fill(200, 70, 70);
  triangle(width/2 + 150-50-10+30, height/2 + 120+3, width/2 + 350-50-10-30, height/2 + 120+3, width/2 + 250-50-10, height/2 + 180+3);
  popStyle();





  // #793 dona
  // #645 rafa
  // #936 migue
  // #101 leo

  if (digitoActual == 101 || digitoActual== 645 || digitoActual== 793 || digitoActual== 936) {
    numberCheck = true;
  } else {
    numberCheck = false;
  }

  if (numberCheck== true) {
    pushStyle();
    stroke(0, 120, 0);
    fill(20, 170, 20);
    strokeWeight(3);
    rectMode(CENTER);
    //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
    rect(width/2 + 307, height/8 + 38+80, 86, 86);

    // Flecha apuntando a la derecha
    noFill(); // Negro para la flecha
    //stroke(230, 255, 230); // Sin borde para la flecha
    stroke(220, 255, 220);
    strokeWeight(3);
    beginShape();

    // Coordenadas de la flecha (forma rectangular y punta triangular)
    vertex(width/2 + 290, height/8 + 38 - 10+80);  // Esquina superior izquierda del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 10+80);  // Esquina superior derecha del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 20+80);  // Punto superior de la punta
    vertex(width/2 + 328, height/8 + 38+80);       // Punta derecha de la flecha
    vertex(width/2 + 307, height/8 + 38 + 20+80);  // Punto inferior de la punta
    vertex(width/2 + 307, height/8 + 38 + 10+80);  // Esquina inferior derecha del cuerpo
    vertex(width/2 + 290, height/8 + 38 + 10+80);  // Esquina inferior izquierda del cuerpo

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
   text( votoCheck ,width/2, height/2 - 50);
   popStyle();
 }else{ 
   popUp = false;
 }
  
}


void mouseReleased() {
  //flexa derexa abajo
  if (mouseX > width/2 + 92 && mouseX < width/2 + 300 && mouseY > height/2 + 120 && mouseY < height/2 +190) {
    // background(255, 0, 0);
    digitoActual = digitoActual - 10;
  }
  //flexa derexa arriba
  if (mouseX > width/2 + 92 && mouseX < width/2 + 300 && mouseY > height/2 -35 && mouseY < height/2 + 35) {
    // background(255, 0, 0);
    digitoActual = digitoActual + 10;
  }

  //flexa izquierda abajo
  if (mouseX < width/2 - 92 && mouseX > width/2 - 300 && mouseY > height/2 + 120 && mouseY < height/2 +190) {
    //background(255, 0, 0);
    digitoActual = digitoActual - 1;
  }

  //flexa izquierda arriba
  if (mouseX < width/2 - 92 && mouseX > width/2 - 300 && mouseY > height/2 -35 && mouseY < height/2 + 35) {
    // background(255, 0, 0);
    digitoActual = digitoActual + 1;
  }

  // #793
  // #645
  // #936
  // #011

  if (numberCheck && mouseX < width/2 + 360 && mouseX > width/2 + 262 && mouseY > height /8 - 10+80 && mouseY < height/8 + 85+80) {
    popUp = true;
  } else {
    popUp = false;
  }
}
