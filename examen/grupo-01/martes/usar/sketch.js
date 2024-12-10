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

// let estadoActual = "espera";
// 0 = espera
// 1 = instrucciones
// 2 = pregunta1 + votar
// 3 = pregunta2 + votar
// 4 = pregunta3 + votar
// 9 = mostrar visualizacion

let estadoActual = 0;
let numeroEstados = 10;

//variable para las imagenes de los estados
let imgEspera = [];
let imgEsperaActual = 0;
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

//Este ejemplo demuestra cómo cargar un modelo previamente entrenado con ml5.neuralNetwork.

let classifier;
let handPose;
let video;
let hands = [];
let classification = "";
let isModelLoaded = false;

// variables para controlar las imagenes de espera
// esperar 3 segundo antes de cambiar la imagen
let tiempoEsperaDelta;
let tiempoEsperaUltimoCambio = 0;

let tiempoInstruccionesDelta;
let tiempoInstruccionesUltimoCambio = 0;

let tiempoPreguntaUnoDelta;
let tiempoPreguntaUnoUltimoCambio = 0;
let tiempoPreguntaDosDelta;
let tiempoPreguntaDosUltimoCambio = 0;
let tiempoPreguntaTresDelta;
let tiempoPreguntaTresUltimoCambio = 0;
let tiempoPreguntaCuatroDelta;
let tiempoPreguntaCuatroUltimoCambio = 0;

let tiempoVizDatosDelta;
let tiempoVizDatosUltimoCambio = 0;

let colorFondo;

function preload() {
  //array de imagenEspera
  imgEspera.push(loadImage("imgEspera/espera0.png"));
  imgEspera.push(loadImage("imgEspera/espera1.png"));
  imgEspera.push(loadImage("imgEspera/espera2.png"));
  imgEspera.push(loadImage("imgEspera/espera3.png"));
  
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones0.png"));
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones1.png"));
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones2.png"));
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones3.png"));
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones4.png"));
  imgInstrucciones.push(loadImage("imgInstrucciones/instrucciones5.png"));

  imgPreguntasUno.push(loadImage("imgPreguntas/pregunta1-0.png"));
  imgPreguntasUno.push(loadImage("imgPreguntas/pregunta1-1.png"));
  imgPreguntasUno.push(loadImage("imgPreguntas/pregunta1-2.png"));
  
  imgPreguntasDos.push(loadImage("imgPreguntas/pregunta2-0.png"));
  imgPreguntasDos.push(loadImage("imgPreguntas/pregunta2-1.png"));
  imgPreguntasDos.push(loadImage("imgPreguntas/pregunta2-2.png"));

  imgPreguntasTres.push(loadImage("imgPreguntas/pregunta3-0.png"));
  imgPreguntasTres.push(loadImage("imgPreguntas/pregunta3-1.png"));
  imgPreguntasTres.push(loadImage("imgPreguntas/pregunta3-2.png"));

  imgPreguntasCuatro.push(loadImage("imgPreguntas/pregunta4-0.png"));
  imgPreguntasCuatro.push(loadImage("imgPreguntas/pregunta4-1.png"));
  imgPreguntasCuatro.push(loadImage("imgPreguntas/pregunta4-2.png"));

  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {

  modeloCargado = document.getElementById("modeloCargado");
  manosActual = document.getElementById("manosActual");
  deteccionActual = document.getElementById("deteccionActual");

  if (modoPrueba) {
    createCanvas(480, 270);
  } else {
    createCanvas(1920, 1080);
  }
  
  
  if (modoPrueba) {
    tiempoEsperaDelta = 2000;
    tiempoInstruccionesDelta = tiempoEsperaDelta;
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
  }

  colorFondo = color(243, 244, 248);

  video = createCapture(VIDEO);
  video.size(1920, 1080);
  video.hide();

  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend("webgl");

  // Set up the neural network
  let classifierOptions = {
    task: "classification",
    debug: true,
  };

  classifier = ml5.neuralNetwork(classifierOptions);

  const modelDetails = {
    model: "./modelos/modelo-v1/model.json",
    metadata: "./modelos/modelo-v1/model_meta.json",
    weights: "./modelos/modelo-v1/model.weights.bin",
  };

  classifier.load(modelDetails, modelLoaded);

  // Start the handPose detection
  handPose.detectStart(video, gotHands);

  // guardar el momento en que termino el setup
  tiempoEsperaUltimoCambio = millis();
}


function draw() {
  
  if (modoPrueba) {
    console.log("estadoActual: " + estadoActual);
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
  }
  else if (estadoActual == 2) {
   dibujarPreguntaUno();
  } else if (estadoActual == 3) {
    dibujarPreguntaDos();
   }  else if (estadoActual == 4) {
    dibujarPreguntaTres();
   }
   else if (estadoActual == 5) {
    dibujarPreguntaCuatro();
   } else if (estadoActual == 6) {
    dibujarVizDatos();
   }
  
  //ESTADO MUESTRA DE DATOS
  //aqui no se que hacer

  if (modoPrueba) {
    image(video, 0, 0, width/5, height/5);

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
    deteccionActual.innerHTML = "Detección actual: " + classification;
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
    image(imgInstrucciones[imgInstruccionesActual], 0, 0, width, height);
  } else {
    image(imgInstrucciones[imgInstruccionesActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoInstruccionesUltimoCambio > tiempoInstruccionesDelta) {
    // subir numero de la imagen
    imgInstruccionesActual++;
    // si llegamos a la ultima, volver a la cero
    // imgInstruccionesActual = imgInstruccionesActual % imgInstrucciones.length;
    
    // guardar el momento en que se cambio la imagen
    tiempoInstruccionesUltimoCambio = millis();
  }
  // si llegamos a la ultima imagen de instrucciones
  if (imgInstruccionesActual >= imgInstrucciones.length) {
    // cambiamos al estado 1
    // 1 = instrucciones
    estadoActual = 2;
    tiempoPreguntaUnoUltimoCambio = millis();
  }

      // // If the model is loaded, make a classification and display the result
      // if (isModelLoaded && hands[0]) {
      //   let inputData = flattenHandData();
      //   classifier.classify(inputData, gotClassification);
      //   textSize(64);
      //   fill(0, 255, 0);
      //   deteccionActual.innerHTML = "Detección actual: " + classification;
      //   text(classification, 20, 60);
      //   // Callback function for when classification has finished
      //   // storeItem("gestoDetectado", gotClassification);
      //   estadoActual = 2;
  
        //variable  para que la consola muestre los gestos que se guardan en el almacenamiento local
        // let recuperaGesto = getItem("gestoDetectado");
        // if (recuperaGesto !== null) {
          // console.log(recuperaGesto);
        // }
  
        //Camara que muestra, solo necesitamos que encienda la camara pero que no se muestre en panatlla
        /*image(video, 0, 0, width, height);
  
      // Draw the handPose keypoints
      if (hands[0]) {
        let hand = hands[0];
        // console.log(hand.value());
        for (let i = 0; i < hand.keypoints.length; i++) {
          let keypoint = hand.keypoints[i];
          fill(0, 255, 0);
          noStroke();
          circle(keypoint.x, keypoint.y, 10);
        }
      }*/
  
}

function dibujarPreguntaUno() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(imgPreguntasUno[imgPreguntasUnoActual], 0, 0, width, height);
  } else {
    image(imgPreguntasUno[imgPreguntasUnoActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoPreguntaUnoUltimoCambio > tiempoPreguntaUnoDelta) {
    // subir numero de la imagen
    imgPreguntasUnoActual++;
    console.log(imgPreguntasUnoActual);
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
  // pasamos a la siguiente
  if (imgPreguntasUnoActual >= imgPreguntasUno.length) {
    // cambiamos al estado 1
    // 1 = instrucciones
    estadoActual = 3;
    tiempoPreguntaDosUltimoCambio = millis();
  }
}

function dibujarPreguntaDos() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(imgPreguntasDos[imgPreguntasDosActual], 0, 0, width, height);
  } else {
    image(imgPreguntasDos[imgPreguntasDosActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoPreguntaDosUltimoCambio > tiempoPreguntaDosDelta) {
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
  // pasamos a la siguiente
  if (imgPreguntasDosActual >= imgPreguntasDos.length) {
    // cambiamos al estado 4
    // 4 = pregunta 3
    estadoActual = 4;
    tiempoPreguntaTresUltimoCambio = millis();
  }
}

function dibujarPreguntaTres() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(imgPreguntasTres[imgPreguntasTresActual], 0, 0, width, height);
  } else {
    image(imgPreguntasTres[imgPreguntasTresActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoPreguntaTresUltimoCambio > tiempoPreguntaTresDelta) {
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
  // pasamos a la siguiente
  if (imgPreguntasTresActual >= imgPreguntasTres.length) {
    // cambiamos al estado 5
    // 5 = pregunta 4
    estadoActual = 5;
    tiempoPreguntaCuatroUltimoCambio = millis();
  }
}

function dibujarPreguntaCuatro() {
  // mostrar la imagen
  if (modoPrueba) {
    // mostrar la imagen mas chiquita cuando esta en modo prueba
    image(imgPreguntasCuatro[imgPreguntasCuatroActual], 0, 0, width, height);
  } else {
    image(imgPreguntasCuatro[imgPreguntasCuatroActual], 0, 0);
  }

  // si ya paso el tiempo de instrucciones
  // cambiar la imagen
  //esto es para crear el gif de imagenes/movimientos
  if (millis() - tiempoPreguntaCuatroUltimoCambio > tiempoPreguntaCuatroDelta) {
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
  // pasamos a la siguiente
  if (imgPreguntasCuatroActual >= imgPreguntasCuatro.length) {
    // cambiamos al estado 6
    // 6 = visualizacion de datos
    estadoActual = 6;
    tiempoVizDatosUltimoCambio = millis();
  }
}

function dibujarVizDatos() {
  console.log("por hacer vizDatos")
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
  manosActual.innerHTML = "Manos detectadas: " + hands.length;

}

// Callback function for when the classifier makes a classification
function gotClassification(results) {
  classification = results[0].label;
}

// Callback function for when the pre-trained model is loaded
function modelLoaded() {
  isModelLoaded = true;
  modeloCargado.innerHTML = "Modelo cargado!";
}
