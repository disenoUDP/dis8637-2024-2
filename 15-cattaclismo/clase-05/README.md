# clase-05

## avance

De acuerdo a las correcciones hechas por el equipo en general, decidí agregarle color a la fachada de la casa paea que fuera más apegada a la casa original (de la película). 

Se agregó una luz led roja para indicar su uso y el sensor se dejó en la parte trasera en la base de la casa. 

![ver](casaluzled.jpg) 

![ver](espacios.jpg) 

Para el espacio del sensor me equivoqué por tres milimetros y solo calza bien una parte :(, pero todo tiene solución!

![ver](pequeñoerror.jpg)

## Lento y seguro

Código de prueba para luz led externa

```cpp
int pinred = 11;
void setup() {
  // put your setup code here, to run once:
 pinMode(pinred, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
digitalWrite(pinred, HIGH);
delay(1000);
digitalWrite(pinred, LOW);
delay(1000);
}
```


