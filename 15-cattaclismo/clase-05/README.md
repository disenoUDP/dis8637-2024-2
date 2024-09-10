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
He estado estudiando un poco más ya que no entendía nada, ahora, gracias a las recomandaciones de mis compañeros en el ds me he podido enchufar jeje. 
![ver](bitacora05.jpg)
![ver](bitacora051.jpg) 

Configuración de espacio dentro de la casa (la cinta de papel es solo para la foto, no va a quedar como soporte) 
![ver](espacio.jpg)
![ver](objeto.jpg)


