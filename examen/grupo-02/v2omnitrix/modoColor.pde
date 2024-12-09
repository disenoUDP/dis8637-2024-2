void inicializarVariablesColor() {
  selectedColor = color(255);
  noStroke();
  background(240);
  azulAzul = false;
  rojoRojo = false;
  verdeVerde = false;
  moradoMorado = false;

  robotoBlack15 = createFont("RobotoMedium-Owv4.ttf", 25);

  imgMIGUEL = loadImage("MIGUEL.png");
  imgRAFAELA = loadImage("RAFAELA.png");
  imgLEO = loadImage("LEO.png");
  imgDONATELLA = loadImage("DONATELLA.png");

  popUpColor = false;
}

void dibujarModoColor() {
  colorMode(RGB);


  background(245);
  //CABECERA
  pushStyle();
  fill(245);
  rectMode(CENTER);
  stroke(255, 0, 0);
  strokeWeight(4);
  rect(width/2, 0, 1370, 250);
  fill(75);
  textFont(font);
  textAlign(CENTER);
  text("SELECCIONA EL COLOR DEL CANDIDATO POR EL QUE DESEA VOTAR", width/2, height/8+9-4);
  image(logoEGOCRACIA, 10, 18, 96*1.3, 66.5*1.3);
  popStyle();

  //CANDIDATOOOS con su color
  pushStyle();
  noStroke();
  colorMode(HSB);
  rectMode(CENTER);

  //RECTANGULOS COLORES
  //rectangulo MIGUEL K(rojo)
  fill(255, 255, 255);
  rect((width/5)*1, height/4+130, 200+20+10, 280+40, 10);

  //rectangulo RAFA C(morao)
  fill(198, 255, 200);
  rect((width/5)*2, height/4+100+10+20, 200+20+10, 280+40, 10);

  //rectangulo LEO(AZUL)
  fill(180, 255, 255);
  rect((width/5)*3, height/4+100+10+20, 200+20+10, 280+40, 10);

  //rectangulo Dona(verde)
  fill(80, 255, 210);
  rect((width/5)*4, height/4+100+10+20, 200+20+10, 280+40, 10);
  popStyle();

  //FOTOS
  pushStyle();
  imageMode(CENTER);
  image(imgMIGUEL, (width/5)*1, height/4+85, 239/1.2, 229/1.2);
  image(imgRAFAELA, (width/5)*2, height/4+85, 181/1.2, 227/1.2);
  image (imgLEO, (width/5)*3, height/4+95, 260/1.16, 374/1.16);
  image (imgDONATELLA, (width/5)*4, height/4+85, 220/1.2, 227/1.2);
  popStyle();

  //TEXTOS

  //miguel
  pushStyle();
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect((width/5)*1, height/4 + 195 + 40, 200, 70, 7);
  fill(75);
  textAlign(CENTER);
  //textSize(20);
  textFont(robotoBlack15);
  // strokeWeight(2);
  text("MIGUEL", (width/5)*1, height/2+40);
  text("KREUTZBERGER", (width/5)*1, height/2+25+40);


  //rafa(morao)
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect((width/5)*2, height/4+195+40, 200, 70, 7);
  fill(75);
  textAlign(CENTER);
  //textSize(20);
  text("RAFAELA", (width/5)*2, height/2+40);
  text("CATRILEFQUEN", (width/5)*2, height/2+25+40);


  //LEO(AZUL)
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect((width/5)*3, height/4+195+40, 200, 70, 7);
  fill(75);
  textAlign(CENTER);
  //textSize(20);
  text("LEO CEA", (width/5)*3, (height/2 +25/2)+40);

  //Dona(verde)
  fill(255);
  noStroke();
  rectMode(CENTER);
  rect((width/5)*4, height/4+195+40, 200, 70, 7);
  fill(75);
  textAlign(CENTER);
  //textSize(20);
  text("DONATELLA", (width/5)*4, height/2+40);
  text("IRARRAZABAL", (width/5)*4, height/2 +25+40);

  popStyle();

  gradiente(ANCHO);
  checkColor();

  //COLOR SELECCIONADO rectangulo
  pushStyle();
  fill(selectedColor);
  stroke(255);
  strokeWeight(3);
  rectMode(CENTER);
  rect(width/2 + 277+74, height/2 + 166+50, 140, 100);
  fill(0);
  textSize(18);
  textAlign(CENTER);
  text("COLOR", width/2 + 348, height/2 + 215);
  text("SELECCIONADO", width/2 + 348+4, height/2 + 235);
  popStyle();


  //que pasa cuando le achuntas a los colores


  if (rojoRojo == true) {
    pushStyle();
    noFill();
    stroke(75);
    strokeWeight(12);
    rectMode(CENTER);
    rect((width/5)*1, height/4+130, 200+20, 280+40, 10);
    popStyle();
  } else {
    rojoRojo = false;
  }



  if (moradoMorado == true) {
    pushStyle();

    noFill();
    stroke(75);
    strokeWeight(12);
    rectMode(CENTER);
    rect((width/5)*2, height/4+130, 200+20, 280+40, 10);
    popStyle();
  } else {
    moradoMorado = false;
  }

  if (azulAzul == true) {
    pushStyle();

    noFill();
    stroke(75);
    strokeWeight(12);
    rectMode(CENTER);
    rect((width/5)*3, height/4+130, 200+20, 280+40, 10);
    popStyle();
  } else {
    azulAzul = false;
  }

  if (verdeVerde == true) {
    pushStyle();

    noFill();
    stroke(75);
    strokeWeight(12);
    rectMode(CENTER);
    rect((width/5)*4, height/4+130, 200+20, 280+40, 10);
    popStyle();
  } else {
    verdeVerde = false;
  }

  // println(mouseX, mouseY);

  colorMode(RGB, 255, 255, 255);

  //ENTEER
  //Rectangulo
  pushStyle();
  fill(200);
  strokeWeight(3);
  stroke(75);
  rectMode(CENTER);
  //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
  rect(width/2 + 307+165, height/8 + 38+82+384, 100, 100);

  // FLECHA
  noFill();
  stroke(245);
  strokeWeight(2);
  beginShape();
  vertex(width/2 + 290+165, height/8 + 38 - 10+82+384);  // Esquina superior izquierda del cuerpo
  vertex(width/2 + 307+165, height/8 + 38 - 10+82+384);  // Esquina superior derecha del cuerpo
  vertex(width/2 + 307+165, height/8 + 38 - 20+82+384);  // Punto superior de la punta
  vertex(width/2 + 328+165, height/8 + 38+82+384);       // Punta derecha de la flecha
  vertex(width/2 + 307+165, height/8 + 38 + 20+82+384);  // Punto inferior de la punta
  vertex(width/2 + 307+165, height/8 + 38 + 10+82+384);  // Esquina inferior derecha del cuerpo
  vertex(width/2 + 290+165, height/8 + 38 + 10+82+384);  // Esquina inferior izquierda del cuerpo
  endShape(CLOSE);
  popStyle();

  if (rojoRojo || moradoMorado || azulAzul || verdeVerde) {
    colorCorrecto = true;
  }

  if (colorCorrecto) {
    pushStyle();
    stroke(0, 120, 0);
    fill(20, 170, 20);
    strokeWeight(4);
    rectMode(CENTER);
    //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
    rect(width/2 + 307+165-3, height/8 + 38+82+384, 100, 100);

    // Flecha apuntando a la derecha
    noFill(); // Negro para la flecha
    //stroke(230, 255, 230); // Sin borde para la flecha
    stroke(220, 255, 220);
    strokeWeight(3);
    beginShape();

    // Coordenadas de la flecha (forma rectangular y punta triangular)
    vertex(width/2 + 290+165, height/8 + 38 - 10+82+384);  // Esquina superior izquierda del cuerpo
    vertex(width/2 + 307+165, height/8 + 38 - 10+82+384);  // Esquina superior derecha del cuerpo
    vertex(width/2 + 307+165, height/8 + 38 - 20+82+384);  // Punto superior de la punta
    vertex(width/2 + 328+165, height/8 + 38+82+384);       // Punta derecha de la flecha
    vertex(width/2 + 307+165, height/8 + 38 + 20+82+384);  // Punto inferior de la punta
    vertex(width/2 + 307+165, height/8 + 38 + 10+82+384);  // Esquina inferior derecha del cuerpo
    vertex(width/2 + 290+165, height/8 + 38 + 10+82+384);  // Esquina inferior izquierda del cuerpo

    endShape(CLOSE);
    popStyle();
  }




  //POP UP COLOR
  if (popUpColor == true) {
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
    popUpNombre = false;
  }
}




void interaccionModoColor() {
  if (mouseX > 181 && mouseX < width -260 && mouseY > 449+100 && mouseY < 501+150) {
    //background(0);
    selectedColor = get(mouseX, mouseY);
  }
}



void checkColor() {
  float h = hue(selectedColor);
  //  float s = saturation(selectedColor);
  //  float b = brightness(selectedColor);

  //  println(h, s, b);

  //dona     VERDE   23, 101, 52
  //leo cea  AZUL    49, 68, 108
  //rafa     MORAO   89, 17, 88
  //miguel   ROJO    132, 20, 20

  //COLORES ELEGIBLES
  /////////////////////////////////////
  //ROJO
  if ( h < 10 && h > 8|| h >353 && h < 355) {
    rojoRojo = true;
  } else {
    rojoRojo = false;
  }


  //MORADO
  if (h < (ANCHO*2/3 +105 )&& h > (ANCHO*2/3 + 100 )) {
    moradoMorado = true;
  } else {
    moradoMorado = false;
  }

  //AZUL
  if (h < (ANCHO*2/3 + 85)&& h > (ANCHO*2/3 - 85 )) {
    azulAzul = true;
  } else {
    azulAzul = false;
  }

  //VERDE
  if (h < (ANCHO/3 + 2 )&& h > (ANCHO/3 - 2 )) {
    verdeVerde = true;
  } else {
    verdeVerde = false;
  }
}

void gradiente(int ancho) {
  colorMode(HSB, ancho, 1, 1);
  noFill();
  for (int i = 0; i < ancho; i++) {
    int hue = (i + azulHue) % ancho;
    color c = color(hue, 1, 1);
    int centrado = (width-ANCHO)/2 + i;
    stroke(c);
    line(centrado-115, 550, centrado-115, 650);
  }
}
