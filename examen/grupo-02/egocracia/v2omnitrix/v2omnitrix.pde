float valorAleatorio;

//variables modoNombre
boolean nombreEscrito;
int indiceLetra; //el indice que conecta numeros con letras
String candidato; //esto es el espacio donde se va escribiendo el nombre
String[] abecedario = {" ", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
  "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
boolean popUpNombre;
//cosas del cursor parpadeante
boolean cursorVisible;
int lastBlinkTime;
int blinkInterval; // Intervalo de parpadeo en milisegundos
PImage imagenStandBy;

//cosas del modoNumero
boolean numberCheck;
int digitoActual;
boolean popUpNumero;

//cosas que funcionan pa modoNumero && modoNombre
//boolean popUp;
String votoCheck;
PImage logoEGOCRACIA;

//varuables modoStandBy
boolean movimientoMouse;

long tiempoLastMouseMoved = 0;
long tiempoMouseInactividad = 5000;

//cosas del modoColor
color selectedColor;
boolean azulAzul;
boolean rojoRojo;
boolean verdeVerde;
boolean moradoMorado;

int ANCHO = 800;
int azulHue = 2 * ANCHO / 3;

PImage imagenLogoServel;
PImage imgMIGUEL;
PImage imgRAFAELA;
PImage imgLEO;
PImage imgDONATELLA;

///////////////////////////////////////////////////////////

void setup() {
  size(1366, 768);


  inicializarTipografias();

  inicializarVariablesStandBy();

  //cosas del modo nombre
  inicializarVariablesNombre();

  inicializarVariablesNumero();

  inicializarVariablesColor();

  logoEGOCRACIA = loadImage("logoEGOCRACIA.png");
  //popUp = false;
  votoCheck = "SU VOTO HA SIDO REGISTRADO EXITOSAMENTE";

  // valorAleatorio = random(1);
  valorAleatorio = 0.7;

  // contar el tiempo en que salimos de setup
  tiempoLastMouseMoved = millis();
}

//////////////////////////////////////////////////////

void draw() {
  background(245);

  interaccionStandBy();

  // dibujarModoStandBy();

  if (movimientoMouse == false) {
    dibujarModoStandBy();
  } else if (valorAleatorio < 0.33333) {
    dibujarModoNombre();
  } else if (valorAleatorio < 0.66666) {
    dibujarModoNumero();
  } else {
    dibujarModoColor();
  }


  //en cualquier momento, si no hay movimiento en el mouse por x segundos, se vuelve a la pantalla de standby
  if (millis() - tiempoLastMouseMoved > tiempoMouseInactividad) {
    reseteo();
  }
}

//gradiente(ANCHO);
// checkColor();
// dibujarModoColor();
//   interaccionModoColor();
// gradiente();

//dibujarModoNombre();
//dibujarModoNumero();




void mouseReleased() {

  // como aca solo entro si mouseReleased
  // actualizo el tiempo lastMoved
  tiempoLastMouseMoved = millis();

  if (movimientoMouse == false) {
  } else if (movimientoMouse == true) {

    // ACA QUIERO QUE SE PONGA UNA INTERFAZ DE LAS Q TENGO (RANDOM MENTE)
    if (valorAleatorio < 0.33333) {
      interaccionModoNombre();
    } else if (valorAleatorio < 0.66666) {
      interaccionModoNumero();
    } else {
      interaccionModoColor();
    }
  }
}



//void mouseMoved(){}
