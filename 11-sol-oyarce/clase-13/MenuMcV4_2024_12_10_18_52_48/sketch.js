//Para hacer este proyecto tuvimos que hacer un servidor web con una interfaz gráfica parecida a la de los totems de McDonalds y que a su vez, mande señales a un arduino para hacer girar 2 motores paso a paso.

//Decidimos utilizar p5.js, una biblioteca de JavaScript libre y de código abierto, para abordar el proyecto, y para lograr la conexión con arduino, utilizamos la biblioteca de gohai "p5.webserial" que permite la interacción de p5 con dispositivos con puertos seriales, que tiene arduino, y que a su vez posee una biblioteca casi tan grande como la del programa processing.
//https://github.com/gohai/p5.webserial

//La parte del sketch de p5 va a ser el lugar en donde se establecen las funciones del servidor web, mientras que en el index.html es donde se suben sus elementos y el style.css define cómo se van a ver esos elementos.

//Primero hay que establecer todos los elementos que se van a manejar dentro del codigo.

let port; //Existe un puerto.
let connectBtn; //Existe un botón de conexión.
let menu; //Existe un menú.
let htmlTitulo; //Existe un html para el título.
let htmlInicio; //Existe un html para el inicio.
//Identifico mis botones del menú.
let botonComboRacing;
let botonMcDouble;
let botonMcFlurry;
let botonNoConsumir;

//Primera función: Asociar mis botones a las imágenes png que se cargaron en el index.html usando el comando document.getElementById("");
function setup() {
  botonComboRacing = document.getElementById("comboRacing");
  botonMcDouble = document.getElementById("mcDouble");
  botonMcFlurry = document.getElementById("mcFlurry");
  botonNoConsumir = document.getElementById("noConsumir");

//Establecer que cuando se seleccione uno de los botones ocurra un evento usando el comando ad.EventListener("",""). Donde la primera "" es la acción y la segunda el nombre que le doy a la acción.
  botonComboRacing.addEventListener("click", presionarBotonComboRacing);

  botonMcDouble.addEventListener("click", presionarBotonMcDouble);

  botonMcFlurry.addEventListener("click", presionarBotonMcFlurry);

  botonNoConsumir.addEventListener("click", presionarBotonNoConsumir);

//Se establece lo que es el puerto, en este caso, es la serial de gohai. Todo de aquí a la línea 65 fue sacado del código de gohai.
//https://github.com/gohai/p5.webserial
  port = createSerial();

  let usedPorts = usedSerialPorts();
  if (usedPorts.length > 0) {
    port.open(usedPorts[0], 57600);
  }

//Se crea el botón para conectar el arduino al código y se establece su ubicación, texto y forma de funcionar.
  connectBtn = createButton("@WacDonalds");
  connectBtn.position(1000, 90);
  connectBtn.mousePressed(connectBtnClick);
}

//?????????????
function draw() {
  //serial
  let str = port.readUntil("\n");
  if (str.length > 0) {
    text(str, 10, height - 20);
  }

//Esto define qué va a decir el botón cuando el puerto esté abierto/sin conexión con arduino y cuando sí tenga conexión con arduino, utilizando comando de "if" y "else". Es importante que digan cosas diferentes para saber si está conectado o no. En este proyecto la diferencia es mínima y el contenido sin relación a la función, ya que la idea era camuflarlo en la interfaz. 
  if (!port.opened()) {
    connectBtn.html("@WcDonalds.");
  } else {
    connectBtn.html("@WcDonalds");
  }
}

//BOTON COMBO RACING
//Aquí se va a integrar la función de "presionarBotonX". Al presionar esta opción, se va a mostrar el texto "preparandoTuPedido" durante 6 segundos y se hará girar el motor "u" una vez. Lo mismo con los otros botones, excepto "noConsumir".
function presionarBotonComboRacing() {
  interaccionBotones("u", "PREPARANDO TU PEDIDO...");
}

//En un principio, la forma de lograr esta acción requería de muchas líneas de código en cada botón, por lo que para minimizar líneas, se creyó la función interaccionBotones, que define (el mensaje que recibe el arduino, el mensaje que aparece en la portada).
function interaccionBotones(mensajeArduino, mensajePantalla) {
  port.write(mensajeArduino);

  //Esto es 
  htmlInicio = document.getElementById("abajo").innerHTML;
  console.log(htmlInicio);
  document.getElementById("abajo").innerHTML =
    "<div class='titular'><h1>" + mensajePantalla + "</h1/div>";

  //PSeteamos un tiempo fuera para que la interfaz solo se vea por 7 segundos. 1 segundo son 1000 milisegundos.
  setTimeout(volver, 7000);
  htmlTitulo = document.getElementById("gustito").innerHTML;
  document.getElementById("gustito").firstChild.remove();
}

//De la fila 91 a la 106 se escribe lo que permite volver al inicio. Por lo tanto, traer de vuelta gustito y los botones con sus funciones originales.
function volver() {
  document.getElementById("gustito").innerHTML = htmlTitulo;
  document.getElementById("abajo").innerHTML = htmlInicio;

  botonComboRacing = document.getElementById("comboRacing");
  botonMcDouble = document.getElementById("mcDouble");
  botonMcFlurry = document.getElementById("mcFlurry");
  botonNoConsumir = document.getElementById("noConsumir");
  botonComboRacing.addEventListener("click", presionarBotonComboRacing);

  botonMcDouble.addEventListener("click", presionarBotonMcDouble);

  botonMcFlurry.addEventListener("click", presionarBotonMcFlurry);

  botonNoConsumir.addEventListener("click", presionarBotonNoConsumir);
}

//BOTON MCDOUBLE
function presionarBotonMcDouble() {
  interaccionBotones("u", "PREPARANDO TU PEDIDO...");
}

//BOTON MCFLURRY
function presionarBotonMcFlurry() {
  interaccionBotones("u", "PREPARANDO TU PEDIDO...");
}

//BOTON NO CONSUMIR
function presionarBotonNoConsumir() {
  interaccionBotones("d", "ESPERA UN MOMENTO...");
}

////// FUNCIONES DEL SERIAL //////
function connectBtnClick() {
  if (!port.opened()) {
    port.open("Arduino", 57600);
  } else {
    port.close();
  }
}

function sendBtnClick() {
  port.write("Hello from p5.js\n");
}
////////////////////////////////
