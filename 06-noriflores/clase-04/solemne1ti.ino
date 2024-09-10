//Trabajo de Sofia Abdallah, Nora Flores y Enzo León

// Pines para el sensor de proximidad
const int pin_trig = 2;
const int pin_echo = 4;

// Pines para los LEDs
const int ledPin1 = 13;
const int ledPin2 = 12;

// Pin para el buzzer
const int buzzer = 8;

// Definir la variable para almacenar la distancia medida
long duration;
int distance;

// Configuración de distancias para activar los LEDs
const int minDistance1 = 0;   // Encender el pin 13 a 0 cm
const int maxDistance1 = 150;  // Apagar el pin 13 a 30 cm
const int minDistance2 = 151;  // Encender el pin 12 a 30 cm
const int maxDistance2 = 300;  // Apagar el pin 12 a 50 cm

void setup() {
  // Modos de los pines
  pinMode(pin_trig, OUTPUT);
  pinMode(pin_echo, INPUT);
  pinMode(ledPin1, OUTPUT);
  pinMode(ledPin2, OUTPUT);
  pinMode(buzzer, OUTPUT);

// Se abre la consola para conocer los valores que entrega el componente
  Serial.begin(9600);
}

void loop() {
  // Generar un pulso en el pin trig para medir la distancia
  digitalWrite(pin_trig, LOW);
  delayMicroseconds(2);
  digitalWrite(pin_trig, HIGH);  // Activar el pulso de salida
  delayMicroseconds(10);
  digitalWrite(pin_trig, LOW);

  // Leer la duración del pulso en el pin echo
  duration = pulseIn(pin_echo, HIGH);

  // Calcular la distancia en centímetros
  distance = duration * 0.0344 / 2;

  // Imprimir la distancia en el monitor serie
  Serial.print("Distancia: ");
  Serial.print(distance);
  Serial.println(" cm");

  // Activar y desactivar los LEDs y el buzzer según la distancia
  if (distance >= minDistance1 && distance <= maxDistance1) {
    digitalWrite(ledPin1, LOW);      // Apagar el pin 13
    digitalWrite(ledPin2, HIGH);    // Encender el pin 12
    tone(buzzer, 2000);            // Suena el buzzer (tono 1)
  
  } else if (distance >= minDistance2 && distance <= maxDistance2) {
    digitalWrite(ledPin1, HIGH);     // Encender el pin 13
    digitalWrite(ledPin2, LOW);     // Apagar el pin 12
    tone(buzzer, 1000);            // Suena el buzzer (tono 2)
  
  } else {
    digitalWrite(ledPin1, LOW);      // Apagar el pin 13
    digitalWrite(ledPin2, LOW);     // Apagar el pin 12
    noTone(buzzer);                // Apagar el buzzer
    
  }
}