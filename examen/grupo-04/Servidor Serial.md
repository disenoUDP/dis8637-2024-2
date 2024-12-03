# Sistema de Control de Fluidos con Arduino y Web

Este proyecto implementa un sistema que integra una interfaz web con un Arduino para el control de fluidos. El sistema permite monitorear el nivel de líquido en un contenedor usando un sensor ultrasónico y controlar una bomba de agua a través de un relé.

## Requisitos del Sistema

### Hardware
- Arduino (cualquier modelo compatible)
- Sensor ultrasónico HC-SR04
- Módulo relé
- Bomba de agua
- Cable USB para Arduino

### Software
- Python 3.8 o superior
- Arduino IDE
- Navegador web moderno

## Instalación

### 1. Configuración del Entorno Python

Primero, asegúrate de tener Python instalado. Puedes descargarlo desde [python.org](https://python.org).

Crea un entorno virtual y actívalo:

```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/Mac
python3 -m venv venv
source venv/bin/activate
```

Instala las dependencias necesarias:

```bash
pip install flask pyserial
```

### 2. Estructura del Proyecto

Crea la siguiente estructura de archivos:

```
proyecto/
├── app.py
├── templates/
│   ├── index.html
│   ├── gallery.html
│   └── thanks.html
└── arduino/
    └── control_fluidos.ino
```

### 3. Configuración del Arduino

1. Abre el Arduino IDE
2. Carga el archivo `control_fluidos.ino`
3. Conecta el Arduino vía USB
4. Selecciona el puerto correcto en Arduino IDE
5. Sube el código al Arduino

### 4. Conexiones del Hardware

Conecta los componentes al Arduino:

- **Sensor HC-SR04:**
  - VCC a 5V
  - GND a GND
  - TRIG a pin 9
  - ECHO a pin 10

- **Módulo Relé:**
  - VCC a 5V
  - GND a GND
  - IN a pin 8

## Uso del Sistema

### Modo Normal (con Arduino)

1. Conecta el Arduino al puerto USB
2. Identifica el puerto serial (COM3, /dev/ttyUSB0, etc.)
3. Modifica el `SERIAL_PORT` en `app.py` según corresponda
4. Ejecuta el servidor Flask:
   ```bash
   python app.py
   ```
5. Abre tu navegador y visita `http://localhost:5000`

### Modo Simulación (sin Arduino)

Para probar el sistema sin el hardware, puedes usar el modo de simulación:

1. Usa la versión modificada de `app.py` con los endpoints de prueba
2. Ejecuta el servidor:
   ```bash
   python app.py
   ```
3. Accede a `http://localhost:5000`
4. Para simular la señal del Ardui
