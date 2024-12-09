let modoPrueba = true;

let deteccionActual;
let manosActual;
let modeloCargado;


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
let imgPreguntas = [];
let imgPreguntasActual = 0;

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

  imgPreguntas.push(loadImage("imgPreguntas/pregunta1-0.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta1-1.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta1-2.png"));
  
  imgPreguntas.push(loadImage("imgPreguntas/pregunta2-0.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta2-1.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta2-2.png"));

  imgPreguntas.push(loadImage("imgPreguntas/pregunta3-0.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta3-1.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta3-2.png"));

  imgPreguntas.push(loadImage("imgPreguntas/pregunta4-0.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta4-1.png"));
  imgPreguntas.push(loadImage("imgPreguntas/pregunta4-2.png"));

  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {

  deteccionActual = document.getElementById("deteccionActual");
  manosActual = document.getElementById("manosActual");
  modeloCargado = document.getElementById("modeloCargado");

  if (modoPrueba) {
    createCanvas(480, 270);
  } else {
    createCanvas(1920, 1080);
  }
  
  
  if (modoPrueba) {
    tiempoEsperaDelta = 2000;
  } else {
    tiempoEsperaDelta = 6000;
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
    background(colorFondo);

    // mostrar la imagen
    if (modoPrueba) {
      // mostrar la imagen mas chiquita cuando esta en modo pruegba
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
    }
  }
  //ESTADO INSTRUCCIONES
  // si no esta en estado de espera inicia estado instrucciones
  // es fundamental que "algo" haga cambiar los estados, en este caso si detecta gesto con un 90% de seguridad.
  // && quiere decir "y también", se deben cumplir AMBAS condiciones
  else if (estadoActual == 1) {
    // If the model is loaded, make a classification and display the result
    if (isModelLoaded && hands[0]) {
      let inputData = flattenHandData();
      classifier.classify(inputData, gotClassification);
      textSize(64);
      fill(0, 255, 0);
      deteccionActual.innerHTML = "Detección actual: " + classification;
      text(classification, 20, 60);
      // Callback function for when classification has finished
      // storeItem("gestoDetectado", gotClassification);
      estadoActual = 2;

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
  }
  
  //ESTADO MUESTRA DE DATOS
  //aqui no se que hacer

  image(video, 0, 0, width/5, height/5);
}

// convert the handPose data to a 1D array

// function draw() {
//   //Display the webcam video
//   image(video, 0, 0, width, height);

//   // Draw the handPose keypoints
//   if (hands[0]) {
//     let hand = hands[0];
//     for (let i = 0; i < hand.keypoints.length; i++) {
//       let keypoint = hand.keypoints[i];
//       fill(0, 255, 0);
//       noStroke();
//       circle(keypoint.x, keypoint.y, 10);
//     }
//   }

//   // If the model is loaded, make a classification and display the result
//   if (isModelLoaded && hands[0]) {
//     let inputData = flattenHandData();
//     classifier.classify(inputData, gotClassification);
//     textSize(64);
//     fill(0, 255, 0);
//     text(classification, 20, 60);
//     // console.log(classification);
//   }
// }

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
