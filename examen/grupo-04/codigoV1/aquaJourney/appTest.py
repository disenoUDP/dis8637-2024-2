from flask import Flask, render_template, Response
import serial
import threading
import time
import json
app = Flask(__name__)

# Variable global para control de estado
form_enabled = False

# Simulación del puerto serial (para pruebas)
class MockSerial:
    def write(self, data):
        print(f"Datos enviados al 'Arduino': {data}")
    
    def read(self):
        return b''

# Usar el puerto serial mock en lugar del real
serial_port = MockSerial()

def serial_listener():
    global form_enabled
    while True:
        if serial_port.in_waiting:
            received_char = serial_port.read().decode('ascii')
            if received_char == 'A':
                form_enabled = True
        time.sleep(0.1)

# Esta es la página principal, donde el usuario escribe el promt
# El html es index.html y por ahora tenemos un botón, pero ese botón podemos esconderlo también
@app.route('/')
def index():
    return render_template('index.html', form_enabled=form_enabled, nombre='juan', desperdicio=45)

# Iniciar thread para escuchar el puerto serial
serial_thread = threading.Thread(target=serial_listener, daemon=True)
serial_thread.start()

# La ruta stream nos permite un canal de comunicación permanente entre este servidor y el html renderizado
# en el cliente. Si navegas a esa ruta, verás cómo va cambiando, sea por el arduino o por el simulador
@app.route('/stream')
def stream():
    def event_stream():
        global form_enabled
        last_state = None
        while True:
            if last_state != form_enabled:
                data = json.dumps({'form_enabled': form_enabled})
                yield f"data: {data}\n\n"
                last_state = form_enabled
            time.sleep(0.1)
    return Response(event_stream(), mimetype="text/event-stream")


# Esta ruta viene después del prompt del usuario
@app.route('/gallery')
def gallery():
    # Simular envío de 'B' al Arduino
    serial_port.write(b'B')
    
    images = [
        'https://picsum.photos/400/300?random=1',
        'https://picsum.photos/400/400?random=2',
        'https://picsum.photos/300/400?random=3',
        'https://picsum.photos/400/500?random=4',
        'https://picsum.photos/500/300?random=5',
        'https://picsum.photos/400/400?random=6'
    ]
    return render_template('gallery.html', images=images)

# Esta ruta viene después de la galería. Si la quieres saltar, modifica el HTML de la galeria
@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

# Esta ruta es el panel de control para simular
@app.route('/test')
def test():
    return render_template('test.html')

@app.route('/toggle_form/<state>')
def toggle_form(state):
    global form_enabled
    form_enabled = (state == 'enable')
    return {'success': True, 'form_enabled': form_enabled}

@app.route('/toggle_form/check')
def check_form_state():
    return {'success': True, 'form_enabled': form_enabled}


if __name__ == '__main__':
    app.run(debug=True)