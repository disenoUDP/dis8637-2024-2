
# Encargo 8: Dimmer con LED usando Arduino Cloud

Este proyecto tiene como objetivo crear un dimmer para controlar la intensidad de un LED utilizando **Arduino Cloud**. A continuación, se detallan los pasos para configurarlo y el código utilizado. Un video con la demostración del funcionamiento se subirá próximamente.

## Creación de cuenta en Arduino Cloud

1. Abre [Arduino Cloud](https://cloud.arduino.cc/) en tu navegador.
2. Elige una cuenta o crea una nueva, y sigue las indicaciones para establecer una contraseña.
3. Descarga la **app móvil de Arduino Cloud** en tu teléfono, la cual funcionará como un dashboard para monitorear tus proyectos online.

## Conexión de Arduino a Arduino Cloud

### Materiales necesarios:
- Arduino
- Cable de conexión USB
- LED

### Pasos:
1. Inicia sesión en [Arduino Cloud](https://cloud.arduino.cc/).
2. Conecta tu Arduino al puerto USB de tu computadora.
3. En el menú de Arduino Cloud, selecciona **Devices** y presiona **Add Device** para comenzar la conexión.
4. Aparecerá la opción **Setup Device** donde deberás seleccionar tu placa Arduino.
5. Espera a que finalice la configuración de la conexión.
6. Una vez conectada la placa, ve a **Things** en el menú lateral izquierdo.
7. Presiona **Create Thing** para crear un nuevo "Thing" asociado a tu Arduino.
8. En **Associated Device**, selecciona tu dispositivo vinculado.
9. Agrega una nueva variable presionando **Add**, en este caso, agrega la variable `Light` para controlar el encendido y apagado del LED.
10. Ve a la pestaña **Sketch** para asegurarte de que tu Arduino esté correctamente vinculado y listo para subir el código.

> **Nota**: Si ocurre algún error, asegúrate de que el cable de conexión esté funcionando correctamente o intenta cambiar el navegador web.

## Tutoriales recomendados

Recomendamos empezar con el tutorial básico de encender un LED. Puedes encontrar los tutoriales recomendados en nuestro servidor de Discord.

### Experiencia del equipo

En el tutorial recomendado por **@morgan**, utilizamos el código propuesto. Lo modificamos ligeramente, y nuestra compañera **@alanis** logró encender el LED una vez, pero luego dejó de funcionar.

Gracias a la ayuda de **@paula**, quien revisó y modificó el código, lo compartió con todos nosotros y el problema se solucionó.

En mi caso, al principio tuve un problema con mi cuenta de Arduino Cloud, pero tras crear una nueva cuenta con otro correo, el proyecto funcionó sin problemas. Agradezco a **@paula** por su colaboración en este proceso.



