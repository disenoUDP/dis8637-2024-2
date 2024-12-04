#include "arduino_secrets.h"
#include "thingProperties.h" // IoT Cloud properties

// Pins
const int trigPin = 2;  // Trigger HC-SR04
const int echoPin = 3;  // Echo HC-SR04
const int relayPin = 4; // Pin relay

// Parameters for the tank
const float maxDistance = 14.5;  // Maximum distance in cm (Empty tank)
const float minDistance = 3.0;   // Minimum distance in cm (Full tank)
const float maxWaterLevel = 1000.0; // Maximum water level in mL (Full tank)

// Variables
float waterPercentage = 0;

void setup() {
  // Initialize Serial, pins, and IoT Cloud connection
  Serial.begin(9600);
  pinMode(trigPin, OUTPUT);
  pinMode(echoPin, INPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, LOW); // Ensure relay is off initially

  // Connect to Arduino IoT Cloud
  initProperties(); // Initialize cloud properties
  ArduinoCloud.begin(ArduinoIoTPreferredConnection);


}

void loop() {
  // Update the IoT Cloud properties
  ArduinoCloud.update();

  // Measure the water level
  float distance = measureDistance();
  calculateWaterPercentage(distance);

  // Control the relay if the tank is full
  if (distance <= minDistance) { // Tank is full when distance is at or below `minDistance`
    digitalWrite(relayPin, LOW); // Turn on the pump
    Serial.println("Pump Activated!");
    delay(20000); // Keep the pump on for 30 seconds
    digitalWrite(relayPin,HIGH ); // Turn off the pump
    Serial.println("Pump Deactivated.");
  }

  delay(5000); // Delay between measurements
}

float measureDistance() {
  // Send a 10-microsecond pulse to the trigger pin
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);
  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  // Measure the duration of the echo pulse in microseconds
  long duration = pulseIn(echoPin, HIGH);

  // Calculate the distance in cm (duration in microseconds × speed of sound in cm/μs ÷ 2)
  float distance = duration * 0.034 / 2;
  Serial.print("Measured Distance: ");
  Serial.print(distance);
  Serial.println(" cm");
  return distance;
}

void calculateWaterPercentage(float distance) {
  // Ensure the distance is within a valid range
  if (distance > maxDistance) {
    waterPercentage = 0; // Tank is empty
  } else if (distance <= minDistance) {
    waterPercentage = 100; // Tank is full
  } else {
    // Calculate water percentage directly
    waterPercentage = ((maxDistance - distance) / (maxDistance - minDistance)) * 100;
  }

  // Print debug information
  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.print(" cm, Water Percentage: ");
  Serial.print(waterPercentage);
  Serial.println(" %");
}

/*
  Since WaterLevel is READ_WRITE variable, onWaterLevelChange() is
  executed every time a new value is received from IoT Cloud.
*/
void onWaterLevelChange()  {
  // Add your code here to act upon WaterLevel change
}