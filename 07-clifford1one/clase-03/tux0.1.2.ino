/*En este caso quiero conseguir lo siguiente:
Hay 3 casillas de las cuales 1 está "ON" y 2 están "OFF".
Cada casilla tiene un botón asociado. Al presionar un botón manda una señal a su respectiva casilla, 
la cual se apaga o  enciende dependiendo de su estado anterior.
Una vez que se encuentrena apagadas todas las casillas, se pasa a la siguiente "etapa".

Para esto, comenzaré haciendo un codigo que tenga 3 leds y sus  3 botones respectivos conectados*/

// int son las variables numéricas que se definen

int gLed = 0;
int rLed = 1;
int yLed = 2;
//greenLed-redLed-yellowLed

int bBut = 4;
int rBut = 5;
int wBut = 6;
//blueButton-redButton-whiteButton

int bButValue = 0;
int rButValue = 0;
int wButValue = 0;
//blueButtonValue-redButtonValue-whiteButtonValue

void setup() {

    pinMode(bBut, INPUT);
  pinMode(rBut, INPUT);
  pinMode(wBut, INPUT);
  //Definir que los pines donde se conectan los botones actúan como actuador

  pinMode(gLed, OUTPUT);
  pinMode(rLed, OUTPUT);
  pinMode(yLed, OUTPUT);
//Definir que los pines donde se concetan los botones actúan como receptor

}

void loop() {

  bButValue = digitalRead(bBut);
/*Aca indica que debe leer los datos del botón. Yo lo entiendo así:

"¿Qué debe hacer? Indagar(digitalRead);
¿Qué es lo que debe indagar?: Los valores del botón azul;
¿Sobre quién debo indagrlo? Al botón azul (bBut).*/
  
  if (bButValue != 0) {
    digitalWrite(gLed, HIGH);
  }
/* If es una condición. != significa no es igual. digitalWrite sería como "decretar". 
"Si, el valor del botón azul NO es 0, decreta positivo el valor del led verde"
*/
  else {
    digitalWrite(gLed, LOW);
  }
/*"De lo contrario, si es que el valor del botón azul es cero, decreta el valor del led verde como "negativo"" */

  rButValue = digitalRead(rBut);

  if(rButValue != 0) {
    digitalWrite(rLed, HIGH);
  }

  else{
    digitalWrite (rLed, LOW);
  }


 wButValue = digitalRead(wBut);

if (wButValue != 0) {
  digitalWrite(yLed, HIGH);
}

  else{
    digitalWrite (yLed, LOW);
  }
}