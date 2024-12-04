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
├── appTest.py
├── templates/
│   ├── index.html
│   ├── gallery.html
│   ├── test.html
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
4. Ejecuta el servidor Flask, puede ser el de producción:
   ```bash
   python app.py
   ```
5. Abre tu navegador y visita `http://localhost:5000/`

### Modo Simulación (sin Arduino)

Para probar el sistema sin el hardware, puedes usar el modo de simulación:

1. Usa la versión modificada de `appTest.py` con los endpoints de prueba
2. Ejecuta el servidor:
   ```bash
   python appTest.py
   ```
3. Accede a `http://localhost:5000`
4. Para simular la señal del Arduino:
   - Visita `http://localhost:5000/test/` para habilitar el formulario

### Simulación Avanzada (con Puerto Serial Virtual)

#### Windows
1. Instala [com0com](https://sourceforge.net/projects/com0com/)
2. Crea un par de puertos virtuales (ejemplo: COM3-COM4)
3. Ajusta los puertos en los scripts
4. Ejecuta el simulador:
   ```bash
   python serial_simulator.py
   ```

#### Linux/Mac
1. El simulador creará automáticamente un puerto virtual
2. Ejecuta el simulador:
   ```bash
   python serial_simulator.py
   ```

## Flujo de Funcionamiento

1. El sistema inicia con el formulario web deshabilitado
2. El sensor ultrasónico mide constantemente el nivel de líquido
3. Cuando el líquido alcanza el umbral:
   - Arduino envía 'A' al servidor
   - El formulario web se habilita
4. Al enviar el formulario:
   - Se muestra la galería de imágenes
   - El servidor envía 'B' al Arduino
   - La bomba se activa por 30 segundos
5. Después de 30 segundos:
   - Se muestra la página de agradecimiento
   - La bomba se detiene
6. Después de 20 segundos:
   - El sistema vuelve al inicio
   - Espera nuevo llenado del contenedor

## Solución de Problemas

### El formulario no se habilita
- Verifica la conexión USB del Arduino
- Comprueba el puerto serial en `app.py`
- Usa el modo simulación para probar la interfaz

### Error de puerto serial
- Verifica que el puerto existe y está disponible
- Asegúrate de tener permisos de acceso al puerto
- En Linux, añade tu usuario al grupo dialout:
  ```bash
  sudo usermod -a -G dialout $USER
  ```

### La bomba no se activa
- Verifica las conexiones del relé
- Comprueba que el pin del relé coincide con el código
- Verifica la alimentación de la bomba

## Contribuir

Si deseas contribuir al proyecto:
1. Haz un fork del repositorio
2. Crea una rama para tu característica
3. Envía un pull request

## Licencia

Este proyecto está bajo la Licencia MIT.