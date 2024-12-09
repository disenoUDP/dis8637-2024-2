const express = require('express');
const { SerialPort } = require('serialport');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const fs = require('fs');

// Configuración de modo de operación
const conexionSerial = false; // Cambiar a true para usar Arduino real
const TIMEOUT_DURATION = 10000; // 10 segundos

// Configuración del puerto serial si está habilitado
let port;
if (conexionSerial) {
    port = new SerialPort({
        path: '/dev/ttyACM0', // Ajustar según el sistema
        baudRate: 9600
    });

    port.on('error', (err) => {
        console.error('Error en puerto serial:', err);
    });

    port.on('data', (data) => {
        handleArduinoCommand(data.toString().trim());
    });
}

// Estados del sistema
const STATES = {
    
    STAND_BY: 'STAND_BY',

    INRODUCCION: 'INTRODUCCION',

    PREGUNTA: 'PREGUNTA',

    RAZON: 'RAZON',

    RESUMEN: 'RESUMEN'
};

let currentState = STATES.STAND_BY;

// Manejo del almacenamiento local
const STORAGE_FILE = 'responses.json';

function loadResponses() {
    try {
        const data = fs.readFileSync(STORAGE_FILE);
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function simulateEmail(response) {
    const timestamp = new Date().toLocaleString();
    const emailData = {
        to: 'coordinacion@universidad.edu',
        subject: 'Nueva notificación de estudiante estresado',
        body: `
Fecha: ${timestamp}

Se ha registrado un nuevo caso de estudiante que reporta estar estresado.

${response.texto ? `El estudiante dejó el siguiente mensaje:
"${response.texto}"` : 'El estudiante no dejó un mensaje.'}

Esta es una notificación automática del sistema de monitoreo de estrés estudiantil.

Por favor, no responda a este correo.
        `
    };

    console.log('\n=== SIMULACIÓN DE EMAIL ===');
    console.log('Para:', emailData.to);
    console.log('Asunto:', emailData.subject);
    console.log('Mensaje:\n', emailData.body);
    console.log('===========================\n');
}

function saveResponse(response) {
    const responses = loadResponses();
    const newResponse = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        usuarioEstresado: response.usuarioEstresado,
        texto: response.texto || ''
    };
    
    // Si el usuario está estresado, enviar email
    if (newResponse.usuarioEstresado) {
        simulateEmail(newResponse);
    }
    
    responses.push(newResponse);
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(responses, null, 2));
    return responses;
}

function getStressedCount() {
    const responses = loadResponses();
    return responses.filter(r => r.usuarioEstresado).length;
}

// Configuración de Express
app.use(express.static('public'));
app.use(express.json());

// Manejo de Socket.IO
io.on('connection', (socket) => {
    console.log('Cliente conectado');
    
    socket.emit('stateChange', currentState);
    socket.emit('stressedCount', getStressedCount());
    socket.emit('updateResponses', loadResponses());
    socket.emit('configUpdate', { timeout: TIMEOUT_DURATION });
    
    if (!conexionSerial) {
        socket.on('simulateArduino', (command) => {
            console.log('Comando simulado:', command);
            handleArduinoCommand(command);
        });
    }
    
    socket.on('submitReason', (reason) => {
        const responses = saveResponse({
            usuarioEstresado: true,
            texto: reason
        });
        io.emit('updateResponses', responses);
        io.emit('stressedCount', getStressedCount());
        changeState(STATES.RESUMEN);
    });

    socket.on('timeout', () => {
        if (currentState === STATES.RAZON) {
            const responses = saveResponse({
                usuarioEstresado: true,
                texto: ''
            });
            io.emit('updateResponses', responses);
            io.emit('stressedCount', getStressedCount());
        }
        changeState(STATES.STAND_BY);
    });
});

function handleArduinoCommand(command) {
    switch(command) {
        case 'PERSON_DETECTED':
            changeState(STATES.PREGUNTA);
            break;
        case 'BUTTON_YES':
            if (currentState === STATES.PREGUNTA) {
                //saveResponse({ usuarioEstresado: true });
                changeState(STATES.RAZON);
            }
            break;
        case 'BUTTON_NO':
            if (currentState === STATES.PREGUNTA) {
                // saveResponse({ usuarioEstresado: false });
                changeState(STATES.STAND_BY);
            }
            break;
        case 'BUTTON_REASON':
            if (currentState === STATES.RAZON) {
                io.emit('requestReason');
                changeState(STATES.RESUMEN);
            }
            break;
    }
}

function changeState(newState) {
    currentState = newState;
    io.emit('stateChange', currentState);
}

// Iniciar servidor
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
    if (!conexionSerial) {
        console.log('Modo simulación activado. Controles:');
        console.log('- P: Detectar persona');
        console.log('- S: Botón SÍ');
        console.log('- N: Botón NO');
        console.log('- ENTER: Enviar razón');
    } else {
        console.log('Modo Arduino activado. Usando conexión serial.');
    }
});