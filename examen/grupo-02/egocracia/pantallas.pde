void drawMainScreen() {
  mainScreen.beginDraw();
  mainScreen.background(0);
  mainScreen.fill(255);
  mainScreen.textSize(50);
  mainScreen.textAlign(CENTER, CENTER);
  mainScreen.text(timeLeft, width / 2, height / 2);
  mainScreen.endDraw();
  image(mainScreen, 0, 0);

  if (millis() - timer >= 1000) {
    timeLeft--;
    timer = millis();
  }

  if (timeLeft <= 0) {
    changeScreenState();
  }
}

void drawStartScreen() {
  startScreen.beginDraw();
  startScreen.background(100);
  startScreen.textAlign(CENTER, CENTER);
  startScreen.textSize(50);
  startScreen.text("Elige a tu candidato favorito", width / 2, height / 2 - 50);
  startScreen.endDraw();
  image(startScreen, 0, 0);

  if (startButton == null) {
    startButton = new PButton(width / 2 - 50, height / 5 * 4, 100, 60, "INICIAR");
  }

  startButton.display();
  if (startButton.isClicked()) {
    startButton = null;
    changeScreenState();
    timeLeft = timeLimit;
    timer = millis();
  }
}


void changeScreenState() {
  currentScreenState = (currentScreenState + 1) % 3; // cycles through states
}


void drawEndScreen() {
  endScreen.beginDraw();
  endScreen.background(0);
  endScreen.fill(255);
  endScreen.textSize(50);
  endScreen.textAlign(CENTER, CENTER);
  endScreen.text("GAME OVER", width / 2, height / 2 - 50);
  endScreen.text("Click to Restart", width / 2, height / 2 + 50);
  endScreen.endDraw();
  image(endScreen, 0, 0);

  if (mousePressed) {
    changeScreenState();
  }
}

void proyectarPantalla() {
  switch (currentScreenState) {
  case 0:
    drawStartScreen();
    break;
  case 1:
    drawMainScreen();
    break;
  case 2:
    drawEndScreen();
    break;
  }
}

void cargarPantallas() {
  startScreen = createGraphics(width, height);
  mainScreen = createGraphics(width, height);
  endScreen = createGraphics(width, height);
}

void inicializarPantallas() {
  currentScreenState = 0;
  isGamePlaying = false;
}
