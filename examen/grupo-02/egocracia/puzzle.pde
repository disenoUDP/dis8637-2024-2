int grosorXico = 200; //tamaño del "ejemplo" de la imagen resuelta
PImage small; //imagen vista previa

//Variables para el puzle y sus piezas
PImage img; //la imagen original
PImage[] pieces = new PImage[16]; //este es un array que almacena las 16 piezas
int[] positions = new int[16]; // Array que almacena la posición actual de cada pieza
int piezaSelected = -1;  //variable que sabe qué pieza está seleccionada



void puzzleCargar() {
  img = loadImage("d3s.jpg"); //cargar imagen
  if (img == null) { 
    println("Image not loaded! Check the file path.");
    exit();  //si no encuentra la imagen, imprime y escapa!
  }
  size(img.width + grosorXico, img.height); //tamaño ventana, considera imgOG + example
}



void configurarPuzzle() {
  // Initialize positions in order
  for (int i = 0; i < positions.length; i++) { 
    positions[i] = i;
  }

  // Resize small image
  small = img.get();
  small.resize(grosorXico, 0); //la imgOG se duplica y se escala pa la example

  // Divide la imagen en 16 piezas
  int pieceWidth = floor(img.width / 4); //dice que cada pieza mide 1/4 del imgOG(X)
  int pieceHeight = floor(img.height / 4); //dice que cada pieza mide 1/4 del imgOG(Y)


  int index = 0;
  for (int row = 0; row < 4; row++) { //dividir la img en 4 filas
    for (int col = 0; col < 4; col++) {//dividir la img en 4 columnas
      pieces[index++] = img.get(col * pieceWidth, row * pieceHeight, pieceWidth, pieceHeight);
    }
  }

  // Shuffle positions to ensure solvability
  do {
    shufflePositions(); //variable para revolver las piezas
  } while (!isSolvable());//si el puzle no tiene solución, repetir el paso anterior

  textAlign(CENTER, CENTER); //alinear el texto al centro
}

void actualizarPuzzle() {
  background(0); //fondo color negro noche

  // Draw pieces
  int pieceWidth = floor(img.width / 4); //dibujar las piezas 
  int pieceHeight = floor(img.height / 4);//dibujar las piezas

  for (int i = 0; i < positions.length; i++) {
    int x = (i % 4) * pieceWidth; //calcula la posicion X de la grilla
    int y = (i / 4) * pieceHeight;//calcula la posicion Y de la grilla
    image(pieces[positions[i]], x, y); //dibuja las piezas

    // Resaltar la pieza seleccionada
    if (piezaSelected == i) {
      stroke(255, 0, 0);
      strokeWeight(4);
      noFill();
      rect(x, y, pieceWidth, pieceHeight);
    }
  }

  // Dibula la imgExample
  image(small, img.width, 0);

  // Ceckear si el puzle ta resuelto y mostrar animación de celebración 
  if (isFinished()) {
    textSize(100 + sin(frameCount * 0.15) * 50);
    fill(random(255), random(255), random(255));
    text("DONE!", width / 2, height / 2);
  }
}



void puzzleClick() {
  //esta parte maneja el "intercambio" de piezas cuando las clickeas
  int pieceWidth = floor(img.width / 4); 
  int pieceHeight = floor(img.height / 4);

  if (mouseX < img.width) {
    int index = floor(mouseX / pieceWidth) + floor(mouseY / pieceHeight) * 4;
    if (piezaSelected < 0) {
      piezaSelected = index; //si el mouse esta dentro de la grilla, selecciona la pieza bajo el mouse
    } else {
      swapPositions(piezaSelected, index);
      piezaSelected = -1;
    }
  }
}

void swapPositions(int a, int b) {
  //intercambiar piezas
  int temp = positions[a];
  positions[a] = positions[b];
  positions[b] = temp;
}

void shufflePositions() {
  //mezclar las posiciones de las piezas
  for (int i = 1; i < positions.length; i++) {
    int j = int(random(0, i + 1));
    swapPositions(i, j);
  }
}

boolean isSolvable() {
  //verifica que sea posible resolver el puzle
  int inversions = 0;
  for (int i = 0; i < positions.length; i++) {
    for (int j = i + 1; j < positions.length; j++) {
      if (positions[i] > positions[j]) {
        inversions++;
      }
    }
  }
  // Puzzle is solvable if the number of inversions is even
  return inversions % 2 == 0;
}

boolean isFinished() {
  //verifica que todas las piezas esten listas en su lugar final
  for (int i = 0; i < positions.length; i++) {
    if (positions[i] != i) {
      return false;
    }
  }
  return true;
}
