/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 
 /*Estados: espera, instrucciones, votación, error, respuesta, visualizaciónDeDatos, fin.
espera = Se mantiene hasta que ml5.js detecte a los cuatro participantes hacer el gesto de "STOP" con la mano.
instrucciones = Se mantiene hasta que ml5 detecte que los cuatro participantes hicieron el gesto requerido.
votación = Se mantiene hasta que ml5 detecte que los cuatro participantes votaron.
error = Ocurre solo si se demoran 30 segundos en votar si se demmoran nuevamente 30 segundos en votar en la misma pregunta vuelve el estado ESPERA
respuesta = Se mantiene por 90 segundos y elige al azar del 1 al 4 para que los participantes conversen de la respuesta
visualizaciónDeDatos = Se mantiene por 30 segundos, un gráfico de radar donde se mostraran las respuestas de todos  los grupos de usuarios que participaron de la encuesta
fin = se mantiene por 10 segundos agradeciendo por participar 
*/
let estadoActual = "espera";

//variable para las imagenes de los estados
//referencia https://www.youtube.com/watch?v=ZmPz7lWhKxw
let imgEspera = [];
let imgEsperaIndex = 0;

/* This example demonstrates loading a pre-trained model with ml5.neuralNetwork.
 */

let classifier;
let handPose;
let video;
let hands = [];
let classification = "";
let isModelLoaded = false;

function preload() {
  //array de imagenEspera
  imgEspera[0] = loadImage("imgEspera/esperaPantalla_1.png");
  imgEspera[1] = loadImage("imgEspera/esperaPantalla_2.png");
  imgEspera[2] = loadImage("imgEspera/esperaPantalla_3.png");
  imgEspera[3] = loadImage("imgEspera/esperaPantalla_4.png");

  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(1920, 1080);

  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(1920, 1080);
  video.hide();

  // For this example to work across all browsers
  // "webgl" or "cpu" needs to be set as the backend
  ml5.setBackend("webgl");

  // Set up the neural network
  let classifierOptions = {
    task: "classification",
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
}

function draw() {
  //referencia:https://editor.p5js.org/jao123/sketches/qMfNbq_BL
  if (estadoActual == "espera") {
    background(243, 244, 248);

    image(imgEspera[imgEsperaIndex], 0, 0, 1920, 1080);

    //función para que la consola muestre los gestos que se guardan en el almacenamiento local
    let recuperaGesto = getItem("gestoDetectado");
    if (recuperaGesto !== null) {
      console.log(recuperaGesto);
    }
    //Display the webcam video
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
    // If the model is loaded, make a classification and display the result
    if (isModelLoaded && hands[0]) {
      let inputData = flattenHandData();
      classifier.classify(inputData, gotClassification);
      textSize(64);
      fill(0, 255, 0);
      text(classification, 20, 60);
      // Callback function for when classification has finished
      storeItem("gestoDetectado", classification);
    }
  }
}

function moveFrame() {
  imagenEsperaIndex++;
  if (imagenEsperaIndex > imagenEspera.length - 1) {
    imagenEsperaIndex = 0;
  }
}

// convert the handPose data to a 1D array
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
}

// Callback function for when the classifier makes a classification
function gotClassification(results) {
  classification = results[0].label;
}

// Callback function for when the pre-trained model is loaded
function modelLoaded() {
  isModelLoaded = true;
}
