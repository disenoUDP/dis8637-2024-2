// para desarrollo usar modoPrueba true
// para mostrar usar modoPrueba false
let modoPrueba = true;

let modeloCargado;
let manosActual;
let deteccionActual;

//Estados: espera, instrucciones, votación, error, respuesta, visualizaciónDeDatos, fin.
//espera = Se mantiene hasta que ml5.js detecte a los cuatro participantes hacer el gesto de "STOP" con la mano.
//instrucciones = Se mantiene hasta que ml5 detecte que los cuatro participantes hicieron el gesto requerido.
//votación = Se mantiene hasta que ml5 detecte que los cuatro participantes votaron.
//error = Ocurre solo si se demoran 30 segundos en votar si se demmoran nuevamente 30 segundos en votar en la misma pregunta vuelve el estado ESPERA
//respuesta = Se mantiene por 90 segundos y elige al azar del 1 al 4 para que los participantes conversen de la respuesta
//visualizaciónDeDatos = Se mantiene por 30 segundos, un gráfico de radar donde se mostraran las respuestas de todos  los grupos de usuarios que participaron de la encuesta
//fin = se mantiene por 10 segundos agradeciendo por participar

// 0 = espera
// 1 = instrucciones
// 2 = pregunta1 + votar
// 3 = pregunta2 + votar
// 4 = pregunta3 + votar
// 5 = pregunta4 + votar
// 6 = mostrar visualizacion
let estadoActual = 0;

// variable para las imagenes de los estados
let imgEspera = [];
let imgEsperaActual = 0;
let imgClasificaciones = [];
let imgInstrucciones = [];
let imgInstruccionesActual = 0;

let imgPreguntasUno = [];
let imgPreguntasUnoActual = 0;
let imgPreguntasDos = [];
let imgPreguntasDosActual = 0;
let imgPreguntasTres = [];
let imgPreguntasTresActual = 0;
let imgPreguntasCuatro = [];
let imgPreguntasCuatroActual = 0;

let imgVizDatos = [];
let imgVizDatosActual = 0;

let haHabidoClasificacionInstrucciones = false;
let haHabidoClasificacionPreguntaUno = false;
let haHabidoClasificacionPreguntaDos = false;
let haHabidoClasificacionPreguntaTres = false;
let haHabidoClasificacionPreguntaCuatro = false;

// este ejemplo demuestra cómo cargar un modelo previamente entrenado con ml5.neuralNetwork.

let classifier;
let handPose;
let video;
let hands = [];
let classification = '';
let isModelLoaded = false;

// variables para controlar las imagenes de espera
// esperar 3 segundo antes de cambiar la imagen
let tiempoEsperaDelta;
let tiempoEsperaUltimoCambio = 0;

let tiempoInstruccionesDelta;
let tiempoInstruccionesUltimoCambio = 0;

let tiempoPreguntaUnoDelta;
let tiempoPreguntaUnoUltimoCambio = 0;
let tiempoDeteccionDelta = 0;
let tiempoPreguntaDosDelta;
let tiempoPreguntaDosUltimoCambio = 0;
let tiempoPreguntaTresDelta;
let tiempoPreguntaTresUltimoCambio = 0;
let tiempoPreguntaCuatroDelta;
let tiempoPreguntaCuatroUltimoCambio = 0;

let tiempoVizDatosDelta;
let tiempoVizDatosUltimoCambio = 0;

let colorFondo;

// variables para almacenar votaciones
let votosPreguntaUno = null;
let votosPreguntaDos = null;
let votosPreguntaTres = null;
let votosPreguntaCuatro = null;

function preload() {
  //array de imagenEspera
  imgEspera.push(loadImage('imgEspera/espera0.png'));
  imgEspera.push(loadImage('imgEspera/espera1.png'));
  imgEspera.push(loadImage('imgEspera/espera2.png'));
  imgEspera.push(loadImage('imgEspera/espera3.png'));

  imgClasificaciones.push(
    loadImage('imgClasificaciones/clasificacion-bien.png'),
  );
  imgClasificaciones.push(
    loadImage('imgClasificaciones/clasificacion-mal.png'),
  );
  imgClasificaciones.push(
    loadImage('imgClasificaciones/clasificacion-masOMenos.png'),
  );
  imgClasificaciones.push(
    loadImage('imgClasificaciones/clasificacion-talVez.png'),
  );

  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones0.png'),
  );
  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones1.png'),
  );
  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones2.png'),
  );
  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones3.png'),
  );
  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones4.png'),
  );
  imgInstrucciones.push(
    loadImage('imgInstrucciones/instrucciones5.png'),
  );

  imgPreguntasUno.push(loadImage('imgPreguntas/pregunta1-0.png'));
  imgPreguntasUno.push(loadImage('imgPreguntas/pregunta1-1.png'));
  imgPreguntasUno.push(loadImage('imgPreguntas/pregunta1-2.png'));

  imgPreguntasDos.push(loadImage('imgPreguntas/pregunta2-0.png'));
  imgPreguntasDos.push(loadImage('imgPreguntas/pregunta2-1.png'));
  imgPreguntasDos.push(loadImage('imgPreguntas/pregunta2-2.png'));

  imgPreguntasTres.push(loadImage('imgPreguntas/pregunta3-0.png'));
  imgPreguntasTres.push(loadImage('imgPreguntas/pregunta3-1.png'));
  imgPreguntasTres.push(loadImage('imgPreguntas/pregunta3-2.png'));

  imgPreguntasCuatro.push(loadImage('imgPreguntas/pregunta4-0.png'));
  imgPreguntasCuatro.push(loadImage('imgPreguntas/pregunta4-1.png'));
  imgPreguntasCuatro.push(loadImage('imgPreguntas/pregunta4-2.png'));

  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  modeloCargado = document.getElementById('modeloCargado');
  manosActual = document.getElementById('manosActual');
  deteccionActual = document.getElementById('deteccionActual');

  // recuperar votaciones pasadas
  votosPreguntaUno = getItem('votosPreguntaUno');
  votosPreguntaDos = getItem('votosPreguntaDos');
  votosPreguntaTres = getItem('votosPreguntaTres');
  votosPreguntaCuatro = getItem('votosPreguntaCuatro');

  // si no estan en el almacenamiento local, inicializar a 0
  if (!votosPreguntaUno) {
    let votos = {
      bien: 0,
      mal: 0,
      masOMenos: 0,
      noSe: 0,
    };
    storeItem('votosPreguntaUno', votos);
  }
  if (!votosPreguntaDos) {
    let votos = {
      bien: 0,
      mal: 0,
      masOMenos: 0,
      noSe: 0,
    };
    storeItem('votosPreguntaDos', votos);
  }
  if (!votosPreguntaTres) {
    let votos = {
      bien: 0,
      mal: 0,
      masOMenos: 0,
      noSe: 0,
    };
    storeItem('votosPreguntaTres', votos);
  }
  if (!votosPreguntaCuatro) {
    let votos = {
      bien: 0,
      mal: 0,
      masOMenos: 0,
      noSe: 0,
    };
    storeItem('votosPreguntaCuatro', votos);
  }
  if (modoPrueba) {
    createCanvas(480, 270);
  } else {
    createCanvas(1920, 1080);
  }

  if (modoPrueba) {
    tiempoEsperaDelta = 2000;
    tiempoInstruccionesDelta = tiempoEsperaDelta;
    tiempoDeteccionDelta = tiempoEsperaDelta;
    tiempoPreguntaUnoDelta = tiempoEsperaDelta;
    tiempoPreguntaDosDelta = tiempoEsperaDelta;
    tiempoPreguntaTresDelta = tiempoEsperaDelta;
    tiempoPreguntaCuatroDelta = tiempoEsperaDelta;
    tiempoVizDatosDelta = tiempoEsperaDelta;
  } else {
    tiempoEsperaDelta = 6000;
    tiempoInstruccionesDelta = tiempoEsperaDelta;
    tiempoPreguntaUnoDelta = tiempoEsperaDelta;
    tiempoPreguntaDosDelta = tiempoEsperaDelta;
    tiempoPreguntaTresDelta = tiempoEsperaDelta;
    tiempoPreguntaCuatroDelta = tiempoEsperaDelta;
    tiempoVizDatosDelta = tiempoEsperaDelta;
    // esconder elementos cuando no estoy en modo prueba
    modeloCargado.style.display = 'none';
    manosActual.style.display = 'none';
    deteccionActual.style.display = 'none';
  }

  colorFondo = color(243, 244, 248);

  video = createCapture(VIDEO);
  video.size(1920, 1080);
  video.hide();

  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend('webgl');

  // Set up the neural network
  let classifierOptions = {
    task: 'classification',
    debug: true,
  };

  classifier = ml5.neuralNetwork(classifierOptions);

  const modelDetails = {
    model: './modelos/modelo-v3/model.json',
    metadata: './modelos/modelo-v3/model_meta.json',
    weights: './modelos/modelo-v3/model.weights.bin',
  };

  classifier.load(modelDetails, modelLoaded);

  // Start the handPose detection
  handPose.detectStart(video, gotHands);

  // guardar el momento en que termino el setup
  tiempoEsperaUltimoCambio = millis();
}

function draw() {
  if (modoPrueba) {
    console.log('estadoActual: ' + estadoActual);
  }

  // 0 = espera
  if (estadoActual == 0) {
    dibujarEspera();
  }
  //ESTADO INSTRUCCIONES
  // si no esta en estado de espera inicia estado instrucciones
  // es fundamental que "algo" haga cambiar los estados, en este caso si detecta gesto con un 90% de seguridad.
  // && quiere decir "y también", se deben cumplir AMBAS condiciones
  else if (estadoActual == 1) {
    dibujarInstrucciones();
  } else if (estadoActual == 2) {
    dibujarPreguntaUno();
  } else if (estadoActual == 3) {
    dibujarPreguntaDos();
  } else if (estadoActual == 4) {
    dibujarPreguntaTres();
  } else if (estadoActual == 5) {
    dibujarPreguntaCuatro();
  } else if (estadoActual == 6) {
    dibujarVizDatos();
  }

  //ESTADO MUESTRA DE DATOS
  //aqui no se que hacer

  if (modoPrueba) {
    image(video, 0, 0, width / 5, height / 5);
  }
}

// convert the handPose data to a 1D array

function dibujarDeteccionHandPose() {
  // Draw the handPose keypoints
  if (hands[0]) {
    let hand = hands[0];
    for (let i = 0; i < hand.keypoints.length; i++) {
      let keypoint = hand.keypoints[i];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function clasificarConModelo() {
  // si el modelo esta cargado
  // haz una clasificacion y muestra el resultado
  if (isModelLoaded && hands[0]) {
    let inputData = flattenHandData();
    classifier.classify(inputData, gotClassification);
    deteccionActual.innerHTML = 'Detección actual: ' + classification;
    console.log(classification);
  }
}

function dibujarEspera() {
  background(colorFondo);

  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(imgEspera[imgEsperaActual], 0, 0, width, height);
  } else {
    image(imgEspera[imgEsperaActual], 0, 0);
  }
  // si ya paso el tiempo de espera
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoEsperaUltimoCambio > tiempoEsperaDelta) {
    // subir numero de la imagen
    imgEsperaActual++;
    // si llegamos a la ultima, volver a la cero
    // imgEsperaActual = imgEsperaActual % imgEspera.length;

    // guardar el momento en que se cambio la imagen
    tiempoEsperaUltimoCambio = millis();
  }
  // si llegamos a la ultima imagen de espera
  if (imgEsperaActual >= imgEspera.length) {
    // cambiamos al estado 1
    // 1 = instrucciones
    estadoActual = 1;
    tiempoEsperaUltimoCambio = millis();
  }
}

function dibujarInstrucciones() {
  background(colorFondo);

  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(
      imgInstrucciones[imgInstruccionesActual],
      0,
      0,
      width,
      height,
    );
  } else {
    image(imgInstrucciones[imgInstruccionesActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (
    millis() - tiempoInstruccionesUltimoCambio >
    tiempoInstruccionesDelta
  ) {
    // subir numero de la imagen
    imgInstruccionesActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;

    // guardar el momento en que se cambio la imagen
    tiempoInstruccionesUltimoCambio = millis();
  }

  // si estamos en la ultima imagen de las instrucciones
  // y detectamos con nuestro modelo
  if (imgInstruccionesActual == imgInstrucciones.length - 1) {
    clasificarConModelo();
  }

  // si se acaban las imagenes de las instrucciones,
  // pasamos a la siguiente si hay deteccion
  // si no, nos quedamos en la ultima
  if (imgInstruccionesActual >= imgInstrucciones.length) {
    if (haHabidoClasificacionInstrucciones) {
      // cambiamos al estado 1
      // 1 = instrucciones
      estadoActual = 2;
      tiempoPreguntaUnoUltimoCambio = millis();
    } else {
      imgInstruccionesActual = imgInstrucciones.length - 1;
    }
  }
}

function dibujarPreguntaUno() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(
      imgPreguntasUno[imgPreguntasUnoActual],
      0,
      0,
      width,
      height,
    );
  } else {
    image(imgPreguntasUno[imgPreguntasUnoActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (
    millis() - tiempoPreguntaUnoUltimoCambio >
    tiempoPreguntaUnoDelta
  ) {
    // subir numero de la imagen
    imgPreguntasUnoActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;

    // guardar el momento en que se cambio la imagen
    tiempoPreguntaUnoUltimoCambio = millis();
  }

  // si estamos en la ultima imagen de la pregunta
  // detectamos con nuestro modelo
  if (imgPreguntasUnoActual == imgPreguntasUno.length - 1) {
    clasificarConModelo();
  }

  // si se acaban las imagenes de la pregunta,
  // pasamos a la siguiente si hay deteccion
  // si no, nos quedamos en la ultima
  if (imgPreguntasUnoActual >= imgPreguntasUno.length) {
    if (haHabidoClasificacionPreguntaUno) {
      // cambiamos al estado 3
      // 3 = pregunta 2
      estadoActual = 3;
      tiempoPreguntaDosUltimoCambio = millis();
    } else {
      imgPreguntasUnoActual = imgPreguntaUno.length - 1;
    }
  }
}

function dibujarPreguntaDos() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(
      imgPreguntasDos[imgPreguntasDosActual],
      0,
      0,
      width,
      height,
    );
  } else {
    image(imgPreguntasDos[imgPreguntasDosActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (
    millis() - tiempoPreguntaDosUltimoCambio >
    tiempoPreguntaDosDelta
  ) {
    // subir numero de la imagen
    imgPreguntasDosActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;

    // guardar el momento en que se cambio la imagen
    tiempoPreguntaDosUltimoCambio = millis();
  }

  // si estamos en la ultima imagen de la pregunta
  // detectamos con nuestro modelo
  if (imgPreguntasDosActual == imgPreguntasDos.length - 1) {
    clasificarConModelo();
  }

  // si se acaban las imagenes de la pregunta,
  // pasamos a la siguiente si hay deteccion
  // si no, nos quedamos en la ultima
  if (imgPreguntasDosActual >= imgPreguntasDos.length) {
    if (haHabidoClasificacionPreguntaDos) {
      // cambiamos al estado 4
      // 4 = pregunta 3
      estadoActual = 4;
      tiempoPreguntaTresUltimoCambio = millis();
    } else {
      imgPreguntasDosActual = imgPreguntasDos.length - 1;
    }
  }
}

function dibujarPreguntaTres() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(
      imgPreguntasTres[imgPreguntasTresActual],
      0,
      0,
      width,
      height,
    );
  } else {
    image(imgPreguntasTres[imgPreguntasTresActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (
    millis() - tiempoPreguntaTresUltimoCambio >
    tiempoPreguntaTresDelta
  ) {
    // subir numero de la imagen
    imgPreguntasTresActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;

    // guardar el momento en que se cambio la imagen
    tiempoPreguntaTresUltimoCambio = millis();
  }

  // si estamos en la ultima imagen de la pregunta
  // detectamos con nuestro modelo
  if (imgPreguntasTresActual == imgPreguntasTres.length - 1) {
    clasificarConModelo();
  }

  // si se acaban las imagenes de la pregunta,
  // pasamos a la siguiente si hay deteccion
  // si no, nos quedamos en la ultima
  if (imgPreguntasTresActual >= imgPreguntasTres.length) {
    if (haHabidoClasificacionPreguntaTres) {
      // cambiamos al estado 5
      // 5 = pregunta 4
      estadoActual = 5;
      tiempoPreguntaCuatroUltimoCambio = millis();
    } else {
      imgPreguntasTresActual = imgPreguntasTres.length - 1;
    }
  }
}

function dibujarPreguntaCuatro() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(
      imgPreguntasCuatro[imgPreguntasCuatroActual],
      0,
      0,
      width,
      height,
    );
  } else {
    image(imgPreguntasCuatro[imgPreguntasCuatroActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (
    millis() - tiempoPreguntaCuatroUltimoCambio >
    tiempoPreguntaCuatroDelta
  ) {
    // subir numero de la imagen
    imgPreguntasCuatroActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;

    // guardar el momento en que se cambio la imagen
    tiempoPreguntaCuatroUltimoCambio = millis();
  }

  // si estamos en la ultima imagen de la pregunta
  // detectamos con nuestro modelo
  if (imgPreguntasCuatroActual == imgPreguntasCuatro.length - 1) {
    clasificarConModelo();
  }

  // si se acaban las imagenes de la pregunta,
  // pasamos a la siguiente si hay deteccion
  // si no, nos quedamos en la ultima
  if (imgPreguntasCuatroActual >= imgPreguntasCuatro.length) {
    if (haHabidoClasificacionPreguntaCuatro) {
      // cambiamos al estado 6
      // 6 = visualizacion de datos
      estadoActual = 6;
      tiempoVizDatosUltimoCambio = millis();
    } else {
      imgPreguntasCuatroActual = imgPreguntasCuatro.length - 1;
    }
  }
}

function dibujarVizDatos() {
  console.log('por hacer vizDatos');
}

function flattenHandData() {
  let hand = hands[0];
  let handData = [];
  for (let i = 0; i < hand.keypoints.length; i++) {
    let keypoint = hand.keypoints[i];
    handData.push(keypoint.x);
    handData.push(keypoint.y);
  }
  return handData;
}

// Callback function for when handPose outputs data
function gotHands(results) {
  hands = results;
  manosActual.innerHTML = 'Manos detectadas: ' + hands.length;
}

// Callback function for when the classifier makes a classification
function gotClassification(results) {
  // guarda la clasificacion
  classification = results[0].label;

  // si estamos en instrucciones
  if (estadoActual == 1) {
    // cambia boolean para determinar que ha habido clasificacion
    haHabidoClasificacionInstrucciones = true;
  }
  // si estamos en pregunta 1
  else if (estadoActual == 2) {
    // cambia boolean para determinar que ha habido clasificacion
    haHabidoClasificacionPreguntaUno = true;
  }
  // si estamos en pregunta 2
  else if (estadoActual == 3) {
    // cambia boolean para determinar que ha habido clasificacion
    haHabidoClasificacionPreguntaDos = true;
  }
  // si estamos en pregunta 3
  else if (estadoActual == 4) {
    // cambia boolean para determinar que ha habido clasificacion
    haHabidoClasificacionPreguntaTres = true;
  }
  // si estamos en pregunta 4
  else if (estadoActual == 5) {
    // cambia boolean para determinar que ha habido clasificacion
    haHabidoClasificacionPreguntaCuatro = true;
  }
}

// Callback function for when the pre-trained model is loaded
function modelLoaded() {
  isModelLoaded = true;
  modeloCargado.innerHTML = 'Modelo cargado!';
}
