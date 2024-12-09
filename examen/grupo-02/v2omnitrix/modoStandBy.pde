void inicializarVariablesStandBy() {
  imagenStandBy = loadImage("standBy.jpg");
  imagenStandBy.resize(width, height);

  movimientoMouse = false;
}

void dibujarModoStandBy() {
    colorMode(RGB);

    background(245);

  image(imagenStandBy, 0, 0);
}

void interaccionStandBy() {

  //esto es para que la pantalla de standBy se cambie si detecta movimiento de mouse
  if (frameCount > 3) {
    if (pmouseX + 20 < mouseX || pmouseY + 20 < mouseY) {
      movimientoMouse = true;
      background(255);
    }
  }

 // if(pmouseX == mouseX && pmouseY == mouseY && millis() > 5){
   // dibujarModoStandBy();
  
 // }
  
  
}

void reseteo() {
  println("oh no");
  tiempoLastMouseMoved = millis();
  movimientoMouse = false;
 candidato = "";
 digitoActual = 0;
 indiceLetra = 0;
 selectedColor = 0;
 popUpNombre= false;
 popUpNumero = false;
 popUpColor = false;
   valorAleatorio = random(1);
}
  
