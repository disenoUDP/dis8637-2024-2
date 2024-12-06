// arduino uno r4 minima
// por montoyamoraga

int velocidadBaud = 9600;

int patitaLectura = 7;

int estadoBotonActual = 0;
int estadoBotonAnterior = 0;

// variables para tiempo
unsigned long debounceTiempoAnterior = 0;
unsigned long debounceTiempoDelta = 50;

int porcentajeAgua = 3;

void setup() {
  Serial.begin(velocidadBaud);

  pinMode(patitaLectura, INPUT_PULLUP);

  Serial.write('A');
}

void loop() {

  // actualizar lectura
  int lectura = digitalRead(patitaLectura);

  if (lectura != estadoBotonAnterior) {
    debounceTiempoAnterior = millis();
  }

  if (millis() - debounceTiempoAnterior > debounceTiempoDelta) {

    if (lectura != estadoBotonActual) {
      estadoBotonActual = lectura;
    }
  }

  estadoBotonAnterior = lectura;

  if (estadoBotonActual == 1) {
    Serial.write(porcentajeAgua);
  }
}
