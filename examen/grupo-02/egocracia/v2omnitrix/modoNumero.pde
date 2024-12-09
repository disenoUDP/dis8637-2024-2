void inicializarVariablesNumero() {
  numberCheck = false;
  digitoActual = 0;
  popUpNumero= false;
}


void dibujarModoNumero() {
  background(245);
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
  image(logoEGOCRACIA, 15, 15, 90, 90);
  popStyle();


  //CASILLA RELLENABLE
  //background de la casilla rellenable
  //triangulo negro
  pushStyle();
  fill(90);
  triangle(width/2 - 355+54, height/8+83+80, width/2- 355+54, height/8 - 5+80, width/2 + 354-68, height/8 - 5+80);
  popStyle();

  //triangulo blanco
  pushStyle();
  noStroke();
  fill(255);
  triangle(width/2 - 355+48, height/8 + 86+ 80, width/2 + 355-68, height/8 - 3+80, width/2 + 355-68, height/8 + 86+80);
  popStyle();

  ////CASILLA RELLENABLE
  pushStyle();
  fill(240, 240, 240);
  noStroke();
  rectMode(CENTER);
  rect(width/2-7, height/8+ 40+80, 580, 85);
  popStyle();

  //TEXTO: NUMERO EN LA CASILLA ()VA CAMBIANDO)
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

  //ENTER:  Flecha apuntando a la derecha
  pushStyle();
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  vertex(width/2 + 290-65, height/8 + 38 - 10+80);  // Esquina superior izquierda del cuerpo
  vertex(width/2 + 307-65, height/8 + 38 - 10+80);  // Esquina superior derecha del cuerpo
  vertex(width/2 + 307-65, height/8 + 38 - 20+80);  // Punto superior de la punta
  vertex(width/2 + 328-65, height/8 + 38+80);       // Punta derecha de la flecha
  vertex(width/2 + 307-65, height/8 + 38 + 20+80);  // Punto inferior de la punta
  vertex(width/2 + 307-65, height/8 + 38 + 10+80);  // Esquina inferior derecha del cuerpo
  vertex(width/2 + 290-65, height/8 + 38 + 10+80);  // Esquina inferior izquierda del cuerpo

  endShape(CLOSE);
  popStyle();

  //  FLecHAS IZQUIERDA UNIDADES
  //sombra flecha pa arriba a la izquierda
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 150+50-30, height/2 + 80 -50, width/2- 350+50+30, height/2 + 80-50, width/2 - 250+50, height/2 + 20-50);

  //FLECHA pa arriba decenas IZQ
  fill(200, 70, 70);
  noStroke();
  triangle(width/2 - 110-30, height/2 + 27, width/2- 310+30, height/2 + 27, width/2 - 210, height/2 -33);

  //signo más + flexa arriba izquierda
  strokeWeight(4);
  stroke(255);
  line(width/2-210, height/2-10+2, width/2-210, height/2+10+2);
  line(width/2-198, height/2+2, width/2-222, height/2+2);
  popStyle();

  //NUMERO 1
  pushStyle();
  fill(75);
  textSize(50);
  textAlign(CENTER);
  textFont(robotoBold);
  text("1", width/2 - 210, height/2 + 90);

  //sombra FLEXA PA ABAJO izquierda
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 150 + 50 -30, height/2 + 120, width/2-350 + 50+30, height/2 + 120, width/2 - 250 + 50, height/2 + 180);
  // strokeWeight(3);
  //stroke(255, 0, 0);

  //flecha pa abajo IZQUIERDA
  fill(200, 70, 70);
  triangle(width/2 - 150 + 50-10-30, height/2 + 120+3, width/2-350 + 50-10+30, height/2 + 120+3, width/2 - 250 + 50-10, height/2 + 180+3);
  popStyle();

  pushStyle();
  //signo menos - izquierda
  stroke(255);
  strokeWeight(4);
  line(width/2-198, height/2+2+120+20, width/2-222, height/2+2+120+20);

  popStyle();

  ////////////////////////////////////////////////
  //////////////FLEXAS DERECHA/////////////////
  ////////////////////////////////////////////////
  // sombra flecha pa arriba: dereza
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 + 150 - 50+30, height/2 + 80 - 50, width/2 + 350 - 50-30, height/2 + 80-50, width/2 + 250 - 50, height/2 + 20-50);
  //flecha pa arriba: unidades
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


  // numero 10
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

  //flexa pa abajo derexa
  fill(200, 70, 70);
  triangle(width/2 + 150-50-10+30, height/2 + 120+3, width/2 + 350-50-10-30, height/2 + 120+3, width/2 + 250-50-10, height/2 + 180+3);
  popStyle();


  //signo menos - derexa
  pushStyle();
  stroke(255);
  strokeWeight(4);
  line(width/2+198-20, height/2+2+120+20, width/2+222-20, height/2+2+120+20);
  popStyle();





  // #793 dona
  // #645 rafa
  // #936 migue
  // #101 leo

  //ACA LE DIGO QUE SI COLOCA BIEN EL NUMERO, EL BOTON PASA A SER VERDE

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
    rect(width/2 + 307-65, height/8 + 38+80, 86, 86);

    // Flecha apuntando a la derecha
    noFill(); // Negro para la flecha
    //stroke(230, 255, 230); // Sin borde para la flecha
    stroke(220, 255, 220);
    strokeWeight(3);
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
  }

  //POP UP
  if (popUpNumero == true) {
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
    text( votoCheck, width/2, height/2 - 50);
    popStyle();
  } else {
    popUpNumero = false;
  }
}

void interaccionModoNumero() {
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

  //SI EL NUMERO ES CORRECTO Y HACES CLICK EN ENTER, SALE EL POPUP
  if (numberCheck && mouseX < width/2 + 360-65 && mouseX > width/2 + 262-65 && mouseY > height /8 - 10+80 && mouseY < height/8 + 85+80) {
    popUpNumero = true;
  } else {
    popUpNumero = false;
  }
}
