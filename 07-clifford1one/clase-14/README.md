# clase-14
## pre clase 14

Hay 2 tipos de información a la que processing puede acceder.

Buil In variables: son las variables ya definidas, tu escribes la variable, y el programa sabe en qué parte del pc buscar pa encontrar esa info.

User defined variable: son variables que "inventamos", por lo que tenemos que decirle al programa en qué parte del pc buscar la info que necesitamos.

## User defined variables.

Para tener una variable "user-defined" tenemos que hacer una serie de cosas:

1. Declatrar la variable(tipo nombre;): Avisar

los tipos pueden ser: 

- Integer(int): números enteros

- Decimal(float): números decimales

-Hay más pero por ahora no importan uwu

2. Inicilizar la variable: Darle un valor iniciial

3.  Usar la variable: dale tu korte macabro

```java
void setup()
size(640, 360);
int circleX

void draw()
circleX = 50
```

Tambien puedes irle sumando valores, esto hará que el objeto se mueva.

Ej 

```java
int circleX;

void setup(){
size(640, 360);
circleX = 50;
//en este caso, la variable circleX es sobre la posición del circulo en el eje x
}

void draw(){
background(0, 0, 255);
ellipse(circleX, 180, 30, 30);

circleX = circleX +1;
//la linea anterior significa que cada vez que el loop se repita, el valor de circleX aumentará 1, por lo que cada vez estará un pixel más a la derecha
}
```

## random()

se le pueden asignar valores random a las distintas varibales. también puedo darle un rango en el que esté esos valores random, ejemplo, un n° random entre 0 y 10

ej: random(0, 100); -seria un n° randome entre 0 y 100)

``` java
int circleX;

void setup(){
size(640, 360);

}

void draw() {
background(0, 0, 255);
ellipse(circleX, 180, 30, 30);
circleX = random(width);
//si le pongo solo 1 valor, lo lee como "n° random entre 0 y el valor que dice. en este caso, el valor de width es de 640, por lo que me estará dando valores random entre 0 y 640
}
```
de esta forma, se generara el circulo en un lugar distinto del eje x en cada frame. si le pusiera lo mismo para el eje Y, con circleY, la elipse se dibujaria en distntos lugares random durante todo el loop.

## println()
se utiliza para corroborar cosas del codigo que no siempre puedes ver a simple vista. imprime valores en la consola, que te pueden ayudar a debugear el codigo


## if()

se usa if para que ciertos pedazos del código se reproduzcan en ciertos momentos en específico.

la versión pro es - if() {} else if() - en ese, se lee en orden y si la condición se cumple, se salta el resto del codigo. Entonces va viendo uno, y si no se cumple, pasa al siguiente, si sí se cumple, se salta el resto del if.

ej ```java
void setup(){
  size(640, 360);
}

void draw(){
background(0, 0, 255);
rect(50, 180, 60, 60);

if(mouseX < 100){
  background(0, 0, 155);
}

  else if(mouseX < 200){
    background(0, 0, 55);
}
else if(mouseX < 300){
  background(0, 0, 30);
}

else if(mouseX < 400){
  background(0, 30, 0);
}

else if(mouseX < 500){
  background(0, 55, 0);
 }
else if(mouseX < 640){
background(0, 155, 0);
}
}
```


