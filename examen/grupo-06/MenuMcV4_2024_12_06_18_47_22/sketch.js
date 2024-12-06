let menu;
//Identifico mis botones
let botonComboRacing;
let botonMcDouble;
let botonMcFlurry;
let botonNoConsumir;

//function preload() {

//}

function setup() {
  // TODO: Definir segun la pantalla

  //Asocio mis botones a los elementos que cargue en html.
  botonComboRacing = document.getElementById("comboRacing");
  botonMcDouble = document.getElementById("mcDouble");
  botonMcFlurry = document.getElementById("mcFlurry");
  botonNoConsumir = document.getElementById("noConsumir");

  //Al añadir un ad.EventListener defino que con una acción "x", hago un evento.
  botonComboRacing.addEventListener("click", presionarBotonComboRacing);

  botonMcDouble.addEventListener("click", presionarBotonMcDouble);

  botonMcFlurry.addEventListener("click", presionarBotonMcFlurry);

  botonNoConsumir.addEventListener("click", presionarBotonNoConsumir);
}

function draw() {
  //image(menu, 0, 0, 525, 295);
  //background(255, 0, 0);
}

  //Aquí se va a integrar la función de "presionarBotonX". Al presionar la opción, se va a mostrar el texto "preparandoTuPedido" durante 30 segundos y hará girar el motor una vez. Lo mismo con los otros botones, excepto "noConsumir"
// Hemos logrado mostrar el texto, pero no durante 30 segundos.
//No hemos vinculado aún este código con arduino.
function presionarBotonComboRacing() {
document.getElementById("abajo").innerHTML =
    "<div class='titular'><h1>PREPARANDO TU PEDIDO...</h1/div>";
  
}
 

function presionarBotonMcDouble() {
  console.log("presionarBotonMcDouble");
  document.getElementById("abajo").innerHTML =
    "<div class='titular'><h1>PREPARANDO TU PEDIDO...</h1/div>";
  //Al presionarlo se va a ir a pantalla "preparandoTuPedido". Lo mismo con los otros botones, excepto "noConsumir"
  document.getElementById("gustito").remove();
}

function presionarBotonMcFlurry() {
  console.log("presionarMcFlurry");
  document.getElementById("abajo").innerHTML =
    "<div class='titular'><h1>PREPARANDO TU PEDIDO...</h1/div>";
  //Al presionarlo se va a ir a pantalla "preparandoTuPedido". Lo mismo con los otros botones, excepto "noConsumir"
  document.getElementById("gustito").remove();
}

function presionarBotonNoConsumir() {
  console.log("presionarNoConsumir");

  document.getElementById("abajo").innerHTML =
    "<div class='titular'><h1>ESPERA UN MOMENTO...</h1/div>";
  //Al presionarlo se va a ir a pantalla "espereUnMomento".   document.getElementById("gustito").remove();
  document.getElementById("gustito").remove();
}
