
void inicializarVariablesNombre(){
  nombreEscrito = false;
//cosas del cursor parpadenate  
  blinkInterval = 500;
  lastBlinkTime = 0;
  cursorVisible = true;
  candidato = "";  
  popUpNombre = false;
}



void dibujarModoNombre(){
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
  text("ESCRIBA EL NOMBRE DEL CANDIDATO POR EL QUE DESEA VOTAR", width/2, height/8+9-4);
  image(logoEGOCRACIA, 15, 15, 90, 90);
  popStyle();


  ///////////////////////////////
  ///////FLEXAS//////////////////
  ///////////////////////////////

  //sombra flexa izq
  pushStyle();
  noStroke();
  fill(0);
  triangle(width/2 - 180-4, height/2 + 40+8, width/2 - 180-4, height/2 - 40+8, width/2 - 230-4, height/2+8);

  //sombra flexa der
  noStroke();
  fill(0);
  triangle(width/2 + 180+4, height/2 - 40+8, width/2 + 180+4, height/2 + 40+8, width/2 + 230+4, height/2+8);
  popStyle();


  //FLEXA REAL IZQ
  pushStyle();
  stroke(2);
  fill(200, 70, 70);
  triangle(width/2 - 180, height/2 + 40, width/2 - 180, height/2 - 40, width/2 - 230, height/2);

  //FLEXA REAL DER
  stroke(2);
  fill(200, 70, 70);
  triangle(width/2 + 180, height/2 - 40, width/2 + 180, height/2 + 40, width/2 + 230, height/2);
  popStyle();

  ////////////////////////////////////
  //////////VISUALIZADOR LETRAS///////
  ////////////////////////////////////


  //LETRA ANTERIOR
  pushStyle();
  fill(75);
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
    stroke(75);
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


  //LETRA ACTUAL
  pushStyle();
  textAlign(CENTER);
  fill(75);
  textFont(robotoBlack100);
  textSize(100);
  text(abecedario[indiceLetra], width/2, height/2 + 30);
  popStyle();



  //si la letra mostrada en el visualizador es el " ", muestra el icono de "espacio"
  if (abecedario[indiceLetra].equals(" ")) {
    pushStyle();
    noFill(); // Color del shape
    strokeWeight(5);
    stroke(75);
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



  //LETRA SIGUIENTE
  pushStyle();
  fill(75);
  textAlign(CENTER);
  textSize(40);
  String letraSiguiente;

  if (indiceLetra == 27) {
    letraSiguiente = abecedario[0];
    // Dibujar el ícono para el espacio
    pushStyle();
    noFill(); // Sin relleno para la figura
    strokeWeight(2);
    stroke(75);
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




  ////////////////////////////////////
  /////AÑADIR LETRA SELECCIONADA//////
  ////////////////////////////////////

//  //sombra del boton
//  pushStyle();
//  fill(245);
//  noStroke();
//  rect(width/2 -245, height/2 +136, 330, 90);
//  popStyle();

  // Botón para añadir la letra seleccionada
  pushStyle();
  fill(255);
  stroke(200);
  strokeWeight(1);
  rect(width/2 -240, height/2 +130, 320, 90);
  fill(75);
  textFont(font);
  textAlign(CENTER);
  textSize(32);
  text("Añadir Selección", width/2 -78, height/2 +188);
  popStyle();


  ///////////////////////
  //////BOTON BORRAR/////
  ///////////////////////

  pushStyle();
  fill(255, 20, 20);
  noStroke();
  rect(width/2 + 105, height/2 + 130, 135, 90);
  popStyle();

  //ICONO BORRAR
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


  ////////////////////////////
  /////CASILLA RELLENABLE//////////
  ////////////////////////////

  //BACKGROUND

  //Triangulo negro
  pushStyle();
  fill(90);
  triangle(width/2 - 355, height/8+83+82, width/2- 355, height/8 - 5+82, width/2 + 354, height/8 - 5+82);
  popStyle();

  //Triangulo blanco
  pushStyle();
  noStroke();
  fill(255);
  //triangle(  width/2-160, height/2 - 210,  width/2 + 150, height/8 - 5, width/2+160, height/2 - 210);
  triangle(width/2 - 355, height/8 + 86+82, width/2 + 355, height/8 - 3+82, width/2 + 355, height/8 + 86+82);
  popStyle();

  ////CASILLA RELLENABLE
  pushStyle();
  fill(240, 240, 240);
  noStroke();
  rectMode(CENTER);
  rect(width/2, height/8+ 40+82, 704, 85);
  line(width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60);
  popStyle();

  //texto: CANDIDATO NOMBRE
  textAlign(LEFT);
  fill(75);
  textSize(40);
  text(candidato, width/2- 340, 150+82);
  println(candidato);

  ///////////////////////////////////////
  //////////CURSOR PARPADEANTE///////////
  ///////////////////////////////////////

  pushStyle();
  if (millis() - lastBlinkTime > blinkInterval) {
    cursorVisible = !cursorVisible; // Alternar estado del cursor
    lastBlinkTime = millis();
  }

  if (cursorVisible) {
    float cursorX = textWidth(candidato) + (width/2 - 340); // Posición del cursor
    strokeWeight(3);
    line(cursorX, 150 + 82 - 30, cursorX, 150 + 82 + 10);
    popStyle();
  }


  //////////////////////////////////////
  //////////////ENTER///////////////
  ///////////////////////////////////////

  //Rectangulo
  pushStyle();
  fill(200);
  strokeWeight(4);
  stroke(255);
  rectMode(CENTER);
  //width/2- 140, height/8 + 60, width/2 + 140, height/8 + 60
  rect(width/2 + 307, height/8 + 38+82, 90, 90);

  // FLECHA
  noFill();
  stroke(255);
  strokeWeight(2);
  beginShape();
  vertex(width/2 + 290, height/8 + 38 - 10+82);  // Esquina superior izquierda del cuerpo
  vertex(width/2 + 307, height/8 + 38 - 10+82);  // Esquina superior derecha del cuerpo
  vertex(width/2 + 307, height/8 + 38 - 20+82);  // Punto superior de la punta
  vertex(width/2 + 328, height/8 + 38+82);       // Punta derecha de la flecha
  vertex(width/2 + 307, height/8 + 38 + 20+82);  // Punto inferior de la punta
  vertex(width/2 + 307, height/8 + 38 + 10+82);  // Esquina inferior derecha del cuerpo
  vertex(width/2 + 290, height/8 + 38 + 10+82);  // Esquina inferior izquierda del cuerpo
  endShape(CLOSE);
  popStyle();


  //CAMBIAR BOTON A VERDE
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
    rect(width/2 + 307, height/8 + 38+82, 86, 86);

    // Flecha apuntando a la derecha
    noFill(); // Negro para la flecha
    //stroke(230, 255, 230); // Sin borde para la flecha
    stroke(220, 255, 220);
    strokeWeight(3);
    beginShape();

    // Coordenadas de la flecha (forma rectangular y punta triangular)
    vertex(width/2 + 290, height/8 + 38 - 10+82);  // Esquina superior izquierda del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 10+82);  // Esquina superior derecha del cuerpo
    vertex(width/2 + 307, height/8 + 38 - 20+82);  // Punto superior de la punta
    vertex(width/2 + 328, height/8 + 38+82);       // Punta derecha de la flecha
    vertex(width/2 + 307, height/8 + 38 + 20+82);  // Punto inferior de la punta
    vertex(width/2 + 307, height/8 + 38 + 10+82);  // Esquina inferior derecha del cuerpo
    vertex(width/2 + 290, height/8 + 38 + 10+82);  // Esquina inferior izquierda del cuerpo

    endShape(CLOSE);
    popStyle();
  }

  /////////////////////////
  //////////POP UP///////////////
  /////////////////////////

  if (popUpNombre == true) {
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
  
  void interaccionModoNombre(){
    
     //FLEXA DER
  if (mouseX < width/2 + 232 && mouseX > width/2 + 178 && mouseY > height/2 - 40 && mouseY < height/2 + 40) {
    if (indiceLetra < 27) {
      indiceLetra = indiceLetra + 1;
    } else {
      indiceLetra = 0;
    }
  }
  
  //FLEXA IZQ
  else if (mouseX > width/2 - 232 && mouseX < width/2 - 178 && mouseY > height/2 - 40 && mouseY < height/2 + 40) {
    if (indiceLetra == 0) {
      indiceLetra = 27;
    } else {
      indiceLetra = indiceLetra - 1;
    }
  }
  
  
  //AL PRESIONAR EL BOTÓN "AÑADIR" SE PONE LA LETRA

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
  
  
//SI ESCRIBES EL NOMBRE DEL CANDIDATO, Y APRETAS EL ENTER, APARECE EL POPUP
  if (nombreEscrito && mouseX < width/2 + 360 && mouseX > width/2 + 262 && mouseY > height /8 - 10+82 && mouseY < height/8 + 85+82) {
    popUpNombre = true;
  } else {
    popUpNombre = false;
  }


}
