from flask import Flask, render_template, redirect, url_for
import serial
import threading
import time

app = Flask(__name__)

# Configuración del puerto serial
SERIAL_PORT = '/dev/cu.usbmodem34B7DA5FECF42'  # Ajusta según tu sistema
BAUD_RATE = 9600
serial_port = serial.Serial(SERIAL_PORT, BAUD_RATE, timeout=1)

# Variable global para control de estado
form_enabled = False

def serial_listener():
    global form_enabled
    while True:
        if serial_port.in_waiting:
            received_char = serial_port.read().decode('ascii')
            if received_char == 'A':
                form_enabled = True
        time.sleep(0.1)

# Iniciar thread para escuchar el puerto serial
serial_thread = threading.Thread(target=serial_listener, daemon=True)
serial_thread.start()

@app.route('/')
def index():
    return render_template('index.html', form_enabled=form_enabled)

@app.route('/gallery')
def gallery():
    # Enviar 'B' al Arduino
    serial_port.write(b'B')
    
    # Array de imágenes de ejemplo (usando placeholders)
    images = [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/400?random=2',
        'https://picsum.photos/300/400?random=3',
        'https://picsum.photos/400/500?random=4',
        'https://picsum.photos/500/300?random=5',
        'https://picsum.photos/400/400?random=6'
    ]
    return render_template('gallery.html', images=images)

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

if __name__ == '__main__':
    app.run(debug=True) 