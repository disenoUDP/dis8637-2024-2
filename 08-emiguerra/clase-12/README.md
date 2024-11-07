# Inicio EgoCracia clase-12  ☆

java (processing) es diferente a javascript/ecmascript (P5.js) 

```
imagen25.ontouch(){

otrafuncion();

}
```
- cuando toda la imagen esta inscrito en tamaño y orden 

- puzzle -> lista ordenada de piezas

- piezas distractoras

- en cada uno de los lugares que necesitamos una pieza, hay una que corresponde a la posición

- detectar que el cursor se mueve(que cambie su pocisión), y como lo detecto? y luego de eso ya no esta en standby 

- debe ocurrir un feedback con sonido de "chik" 

- programación orientada a objetos

## instrucciones en orden y con descripción:

1. muestra la pantalla en "standby", indica "toma el Wiimote para comenzar"

2. El Wiimote recepciona el movimiento que se produce cuando el usuario lo toma en su mano

3. La pantalla muestra la interfaz de rompecabezas con las piezas ordenadas aleatoriamente sin completar la figura

4. pocisiona el cursor encima de una pieza usando el wiimote

5. Presionar el botón "A" y mantenerlo presionado

6. mueve el cursor hacia el lugar que corresponde a la pieza (coordenada con margen de 20 px)

7. Soltar el botón "A"

 8.1 coloca la pieza en el lugar correcto (cordenadas con margen de 20px) debe emitir un sonido 

 8.2 registra el voto solo si el usuario vota por el candidato deseado            / envía el voto al servidor 

 8.3 no registres el voto si se vota por otro candidato que no sea el deseado 

 8.4 avanza a la siguiente interfazcon mas complejidad 

9. si no se detecta mas interacción, espera 5 segundos

10.  vuelve a la pantalla de inicio

### Yo soy la pieza "tengo un lugar asignado"

1. estoy fuera de ese lugar 
2. si un cursor panea sobre ti no pasa nada.
3. Si el cursor se posiciona sobre mí y mantiene el click, puede moverme 
4. Si suelta el click y estoy en una posición que no correponde, me quedo ahí.
5. Si me está moviendo, y suelta el click en mi posición correcta (con una tolerancia de 20 pixeles), me pongo exactamente en la posición correcta (me muevo si es necesario). 

5.1 Siempre que el click me "suelte" tengo que evaluar mi posición
6. Una vez estoy en mi posición correcta, aviso que ya estoy listo y dejo de ser "interactuable"


- la carcasa del wiimote podría ser un lápiz 
- el cursor podría ser un lápiz
    
### instrucciones próxima semana (topdown):
- diagrama de flujo figma jam
- pseudocódigo

```
void START (){
//inicializar la cámara
//prender la cámara
}
```
- boceto de producción
- wireframe mediana fidelidad
- render o ilustración de puesta en escena (por taller)
- disposición del lab 333

