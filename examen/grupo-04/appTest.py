from flask import Flask, render_template, redirect, url_for
import threading
import time

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

@app.route('/')
def index():
    return render_template('index.html', form_enabled=form_enabled)

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

@app.route('/thanks')
def thanks():
    return render_template('thanks.html')

# Endpoint de prueba para simular la señal del Arduino
@app.route('/test/enable-form')
def enable_form():
    global form_enabled
    form_enabled = True
    return redirect(url_for('index'))

# Endpoint de prueba para resetear el estado
@app.route('/test/reset')
def reset_form():
    global form_enabled 
    form_enabled = False
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)