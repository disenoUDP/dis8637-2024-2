# Continuación EgoCracia clase-13 ☆

inicio y avance de pseudocódigo con variables editables y no estáticas

```.java
// Variables generales
Wiimote wiimote;             // Objeto para interactuar con el Wiimote
Pieza[] piezas;             // Array de piezas del rompecabezas
boolean[] piezaListas;      // Array que indica si una pieza está colocada correctamente

* https://processing.org/reference/Array.html


* https://processing.org/reference/int.html

int tiempoEspera = 5000;    // Tiempo de espera en milisegundos
boolean esperandoInteraccion = true; // Indica si el sistema está esperando la interacción

// Variables de la posición del cursor
float cursorX, cursorY;

// Definir la tolerancia de movimiento para las piezas
int distanciaMargen = 20;   // Margen de tolerancia en píxeles

void setup() {
  size(800, 600);
  textSize(16);
  
  // Inicializar el Wiimote
  wiimote = new Wiimote();
  wiimote.begin();

  // Inicializar las piezas
  piezas = new Pieza[9];
  piezaListas = new boolean[piezas.length];
  
  for (int i = 0; i < piezas.length; i++) {
    piezas[i] = new Pieza(i * 80 + 50, 100, i);  // Colocamos las piezas desordenadas
    piezaListas[i] = false;  // Inicialmente todas las piezas están en su lugar incorrecto
  }
}

void draw() {
  background(255);
  
  // Si estamos esperando interacción, mostrar la pantalla "standby"
  if (esperandoInteraccion) {
    mostrarPantallaStandby();
  } else {
    // Si ya no estamos esperando, dibujar el rompecabezas y procesar las interacciones
    dibujarRompecabezas();
    procesarInteracciones();
  }
  
  // Si no hay interacción durante un tiempo determinado, volver a la pantalla inicial
  if (millis() > tiempoEspera) {
    volverPantallaInicio();
  }
}

void mostrarPantallaStandby() {
  textAlign(CENTER, CENTER);
  text("Toma el Wiimote para comenzar", width / 2, height / 2);
  
  if (wiimote.isTaken()) {
    esperandoInteraccion = false;  // El usuario ha tomado el Wiimote, empieza la interacción
    tiempoEspera = millis() + 5000;  // Reiniciar el temporizador de espera
  }
}

void dibujarRompecabezas() {
  // Dibujar todas las piezas en sus posiciones actuales
  for (int i = 0; i < piezas.length; i++) {
    piezas[i].mostrar();
  }
}

void procesarInteracciones() {
  // Procesar las interacciones con las piezas
  for (int i = 0; i < piezas.length; i++) {
    piezas[i].interactuar();
  }
  
  // Verificar si todas las piezas están colocadas correctamente
  boolean todoListo = true;
  for (int i = 0; i < piezas.length; i++) {
    if (!piezaListas[i]) {
      todoListo = false;
      break;
    }
  }
  
  if (todoListo) {
    avanzarAInterfazMasCompleja();  // Si todas las piezas están correctas, avanzar a la siguiente interfaz
  }
}

void avanzarAInterfazMasCompleja() {
  // Mostrar mensaje de éxito y avanzar a la siguiente fase del juego
  text("¡Rompecabezas completado!", width / 2, height / 2);
  // Aquí puedes agregar la lógica para pasar a la siguiente pantalla o interfaz
}

void volverPantallaInicio() {
  // Si no hubo interacción durante el tiempo de espera, vuelve a la pantalla inicial
  text("Vuelve a tomar el Wiimote", width / 2, height / 2);
  esperandoInteraccion = true;  // Volver a esperar la interacción del usuario
}

// Clase Pieza
class Pieza {
  float x, y;                // Posición actual de la pieza
  float originalX, originalY; // Posición original de la pieza
  int id;                     // ID de la pieza
  boolean siendoMovida;       // Indica si la pieza está siendo movida
  boolean lista;              // Si la pieza está en su lugar correcto

  // Constructor de la pieza
  Pieza(float x, float y, int id) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.id = id;
    this.siendoMovida = false;
    this.lista = false;
  }

  // Mostrar la pieza en su posición actual
  void mostrar() {
    fill(lista ? color(0, 255, 0) : color(255, 0, 0));  // Verde si la pieza está correcta, rojo si no
    rect(x, y, 60, 60);  // Dibujar la pieza como un cuadrado
  }

  // Detectar y procesar la interacción con la pieza
  void interactuar() {
    // Verificar si el cursor está sobre la pieza
    if (cursorSobrePieza()) {
      if (wiimote.isButtonPressed()) {
        // Si el botón "A" está presionado y la pieza no está siendo movida, comenzar a moverla
        if (!siendoMovida) {
          siendoMovida = true;
        }
      }
      
      if (siendoMovida) {
        moverPiezaConCursor();  // Mover la pieza con el cursor
      }

      if (!wiimote.isButtonPressed() && siendoMovida) {
        soltarPieza();  // Al soltar el botón, revisar si la pieza está en la posición correcta
      }
    }
  }

  // Verificar si el cursor (Wiimote) está sobre la pieza
  boolean cursorSobrePieza() {
    cursorX = wiimote.getCursorX();  // Obtener la posición X del cursor
    cursorY = wiimote.getCursorY();  // Obtener la posición Y del cursor

    return dist(cursorX, cursorY, x + 30, y + 30) < 30;  // Verificar si está dentro de la pieza
  }

  // Mover la pieza con el cursor
  void moverPiezaConCursor() {
    x = cursorX - 30;  // Ajustar la posición de la pieza al cursor
    y = cursorY - 30;
  }

  // Soltar la pieza y verificar si está en su lugar correcto
  void soltarPieza() {
    if (dist(x + 30, y + 30, originalX + 30, originalY + 30) < distanciaMargen) {
      x = originalX;  // Colocar la pieza en su posición original
      y = originalY;
      lista = true;  // Marcar la pieza como colocada correctamente
    }
    
    siendoMovida = false;  // Dejar de mover la pieza
  }
}
