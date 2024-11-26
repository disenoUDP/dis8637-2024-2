
// variables

// = (0||1||2)
int currentScreenState;

PGraphics startScreen, mainScreen, endScreen;

boolean isGamePlaying;

int timeLimit = 5; // seconds

int timeLeft;

// custom button class for Processing
PButton startButton;

// timer for game logic
int timer; 

void setup() {
  fullScreen();
  cargarPantallas();
  inicializarPantallas();
  
  // puzzleCargar();
  
  // configurarPuzzle();
}

void draw() {
  proyectarPantalla();
  // actualizarPuzzle();
}
