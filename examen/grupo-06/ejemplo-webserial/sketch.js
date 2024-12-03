let botonConectar;
let botonEnviar;

let puerto;

let puertosUsados = usedSerialPorts();
if (puertosUsados.length > 0) {
  port.open(usedPorts[0], 9600);
}

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

  copy(0, 0, width, height, 0, -1, width, height);

  let str = port.readUntil("\n");
  if (str.length > 0) {
    text(str, 10, height-20);
  }

  if (!puerto.opened()) {
    botonConectar.innerHTML = 'Conectar';
  } else {
    botonConectar.innerHTML = 'Desconectar';
  }
}

function conectar () {
  if (!puerto.opened()) {
    puerto.open('Arduino', 9600);
  } else {
    puerto.close();
  }
}

function enviarHola () {
  puerto.write("hola\n");
}