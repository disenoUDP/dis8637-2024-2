import time
from serial import Serial, serial_for_url

# Crear un par de puertos seriales virtuales
# En Windows necesitarás instalar com0com
# En Linux/Mac puedes usar socat o PTY
def create_virtual_serial():
    try:
        # Linux/Mac
        import pty
        import os
        
        master, slave = pty.openpty()
        port_name = os.ttyname(slave)
        return port_name 
        #return '/dev/cu.usbmodem34B7DA5FECF42'
    except:
        # Windows (asume que com0com está instalado)
        return 'COM3'

def simulate_arduino():
    port = create_virtual_serial()
    ser = Serial(port, 9600)
    
    while True:
        # Simular envío de 'A' cada 10 segundos
        print("Enviando señal 'A'...")
        ser.write(b'A')
        time.sleep(10)
        
        # Esperar por 'B'
        if ser.in_waiting:
            data = ser.read()
            if data == b'B':
                print("Recibido 'B', simulando activación de bomba...")
                time.sleep(30)  # Simular 30 segundos de bomba
                print("Bomba desactivada")

if __name__ == '__main__':
    simulate_arduino()