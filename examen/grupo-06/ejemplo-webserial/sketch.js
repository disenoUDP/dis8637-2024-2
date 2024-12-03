let botonConectar;
let botonEnviar;

let puerto;



function setup() {
  createCanvas(400, 400);
  puerto = createSerial();

  botonConectar = document.getElementById('botonConectar');
  botonConectar.addEventListener('click', conectar);

  botonEnviar = document.getElementById('botonEnviar');
  botonEnviar.addEventListener('click', enviarHola);
}

function draw() {
  background(255, 0, 0);
}

function conectar () {
  puerto.open(9600);
}

function enviarHola () {
  puerto.write('hola');
}