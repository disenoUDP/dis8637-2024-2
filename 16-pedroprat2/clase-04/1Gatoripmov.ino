#include "Arduino_LED_Matrix.h"

// Crear una instancia de la clase ArduinoLEDMatrix
ArduinoLEDMatrix matrix;

// A0 es el pin del sensor de proximidad
const int sensorPin = A0; // Pin analógico al que está conectado el sensor
const int proximityThreshold = 100; // Umbral para activar la animación
const unsigned long catLifeTime = 20000; // 20 segundos de vida del gato
const unsigned long animation2Time = 4000; // 4 segundos de animación "RIP"

// Definir las animaciones
const uint32_t animation2[][4] = {
    // Animación 2 (RIP)
    {
        0xf6f96,
        0x9f6fc68a,
        0x68968000,
        66
    },
};

const uint32_t animation7[][4] = {
  // Animación 1 (Gato vivo moviendose de lado a lado)
    {
        0x820c60ba,
        0x820aa08,
        0x20440380,
        90
    },
    {
        0x4106305d,
        0x4105504,
        0x102201c0,
        66
    },
    {
        0x2083182e,
        0x82082a82,
        0x81100e0,
        90
    },
    {
        0x10418c17,
        0x41041541,
        0x4088070,
        66
    },
    {
        0x820c60b,
        0xa0820aa0,
        0x82044038,
        90
    },
    {
        0x4106305,
        0xd0410550,
        0x4102201c,
        90
    },
    {
        0x820c60b,
        0xa0820aa0,
        0x82044038,
        66
    },
    {
        0x10418c17,
        0x41041541,
        0x4088070,
        90
    },
    {
        0x2083182e,
        0x82082a82,
        0x81100e0,
        90
    },
    {
        0x4106305d,
        0x4105504,
        0x102201c0,
        66
    }
};

// Tiempos de duración para cada animación
const uint8_t animationDurations[] = {
    90, 66, 90, 66, 90, 90, 66, 90, 90, 66
};

// Variables de tiempo
unsigned long lastProximityDetected = 0; // Momento en que se detectó proximidad
bool isGatoVivo = true; // Estado de vida del gato
bool anim2Played = false; // Estado de si la animación "RIP" fue jugada

void setup() {
    Serial.begin(115200);
    matrix.begin();
    matrix.loadSequence(animation7); // Cargar la animación inicial
    matrix.play(true); // Reproducir la animación del gato vivo
}

void loop() {
    int sensorValue = analogRead(sensorPin); // Leer el valor del sensor
    unsigned long currentMillis = millis(); // Obtener el tiempo actual

    if (sensorValue < proximityThreshold && isGatoVivo) {
        // Si el sensor detecta proximidad y el gato está vivo
        if (lastProximityDetected == 0) {
            // Registrar el momento en que alguien se acercó a mirar
            lastProximityDetected = currentMillis;
        }

        // Verificar si han pasado los 20 segundos de vida del gato
        if (currentMillis - lastProximityDetected >= catLifeTime) {
            // El gato muere, aca se muestra la animación "RIP" durante 4 segundos
            matrix.loadSequence(animation2); // Cargar la animación "RIP"
            matrix.play(true);
            delay(animation2Time); // Esperar 4 segundos
            anim2Played = true; // Marcar que la animación "RIP" se jugó

            // Después de la animación "RIP", reiniciar ciclo y el gato gana 20 segundos de vida
            isGatoVivo = false;
        }
    } else {
        // Si no hay proximidad o el gato está muerto
        if (!isGatoVivo) {
            // Reiniciar la vida del gato si ya murió y no hay más proximidad
            lastProximityDetected = 0;
            anim2Played = false;
            isGatoVivo = true; // El gato revive con 20 segundos
            matrix.loadSequence(animation7); // Cargar la animación inicial del gato vivo moviendose
            matrix.play(true); // Reproducir la animación del gato vivo
        }
    }

    // Imprimir el valor del sensor para depuración
    Serial.print("Sensor Value: ");
    Serial.println(sensorValue);

    delay(100); // Pequeño retraso antes de la próxima lectura
}
