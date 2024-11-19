/* 
  assignment 1: begin prototyping
  this is implementation of start & end screens for first prototype
*/

// VARIABLES
int currentScreenState;  // = (0||1||2)
PGraphics startScreen, mainScreen, endScreen;
boolean isGamePlaying;
int timeLimit = 5; // seconds
int timeLeft;
PButton startButton; // custom button class for Processing
int timer; // timer for game logic

void setup() {
  size(800, 600);
  
  startScreen = createGraphics(width, height);
  mainScreen = createGraphics(width, height);
  endScreen = createGraphics(width, height);
  
  currentScreenState = 0;
  isGamePlaying = false;
}

void draw() {
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

void changeScreenState() {
  currentScreenState = (currentScreenState + 1) % 3; // cycles through states
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

// Custom Button Class
class PButton {
  float x, y, w, h;
  String label;
  
  PButton(float x, float y, float w, float h, String label) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.label = label;
  }
  
  void display() {
    fill(200);
    rect(x, y, w, h, 10);
    fill(0);
    textAlign(CENTER, CENTER);
    text(label, x + w / 2, y + h / 2);
  }
  
  boolean isClicked() {
    return mousePressed && 
           mouseX > x && mouseX < x + w && 
           mouseY > y && mouseY < y + h;
  }
}
