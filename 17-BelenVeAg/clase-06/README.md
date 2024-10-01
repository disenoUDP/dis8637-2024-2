# clase-06

El diseño de interacción puede influir en el actuar de las persomas de forma positiva o negativa.

Uno puede tranformar un momento, generar un cambio de estado, o preservar un estado.

Diseñar lo abstracto.

"Form follows function" Sullyvan. La forma sigue la función. Pensamiento de diseño Brown, post Bauhaus.

Squeumorfismo: imitación de lo real en lo digital.

Diseño Brown. 

La forma de pensar del diseño cambia y se cuestiona constantemente.

También existe: "La forma sigue la forma" por lo que la forma de los objetos no responde a la funcionalidad.

La modernidad termina con la llegada del internet aprox. Vivímos en la post modernidad.

La forma también puede seguir la interacción. (Prizm).

Factor importante: Conductas humanas. El usuario promedio realmente no existe. La busqueda de lo común pero no del promedio. 

Por lo tanto, también se puede diseñar según el comportamiento.

Al momento de optimizar las líneas de transito con las micros (que fueran un poco más lento al darles sueldo, pero a pesar que eso aumente la seguridad l gente reclamaba por ir más lento).

Existe en todo lo político: formular/compartir opinión y valores.

Patrones de Diseño de Interacción. 

Diseño de autor: los diseños que aportan estatus, emoción. 

Diseño de interacción: la transición de un estado a otro. 

Centro Cultural España. CCE Santiago. Partituras inesperadas. Vamos a ir con el curso de exposición.

Existen tipos de usuarios. Por lo tanto uno diseña para ese tipo de usuario.

Si uno quiere trabajar para este rubro, intentar salir del ámbito de las pantallas. No se limita a la interfaz del dispositivo/la pantalla.

La interacción no solo es funcional, puede ser lúdica, narrativa, atención e interés.

El olor a gas no es natural, se le puso al gas para que la gente pudiera detectar una fuga.

Efectos en los sentidos post covid-> aumento de nuevos tipos de usuarios(?)

A veces pueden ser pocos los usuarios que necesiten un producto, pero como el impacto puede ser tannimportante/mortal para el usuario, está más que justificado.

---

Wifi: no tiene que ver con internet, no necesita internet, basta que haya un medio tranmisor. Es una red inalambrica. 

**códigos arduino útiles** http://docs.arduino.cc/hardware/uno-r4-min 
    - Ese arduino tiene bluetooth, no wifi.

Arduino Cloud: con un arduino wifi, el wifi es una nube y puede interactuar con otros servidores. El intermediario sería arduino cloud. 

API: Interfaz de programación de aplicaciones.

Instalar Arduino UNO R4 Boards. 

1 byte (b) son 8 bits (b). Ojo con mb < Mb < MB.

<img width="815" alt="Captura de pantalla 2024-09-24 a la(s) 12 38 25" src="https://github.com/user-attachments/assets/df910157-994e-4aa2-aa5c-d268a3b7c4b3">

## Ejemplo Web client Arduino

El ejemplo anterior era solo para ver que redes habían disponibles, pero no me conecté a ninguna. Ahora vamos a ver cómo se hace eso.

Servidores web: son los buscadores, como google chrome, opera, etc. 

Clientes web: quienes piden info al servidor.

Te voy a dar el nombre de la red a la que te vas a conectar, la contraseña,

!: antepone a una acción para decir que esa acción NO está pasando. 

Direcciones IP: son el identificador que permite el envío de información entre dispositivos en una red. Internet necesita una forma de diferenciar entre distintas computadoras, enrutadores y sitios web.

Cada servidor tiene la posibilidad de responder en la misma dirección ip a múltiples solicitudes simultaneamente.  

Router: recive una señal de internet a través de un cable red/fibra óptica, a veces solo, a veces con una caja.

<img width="781" alt="Captura de pantalla 2024-09-24 a la(s) 15 59 29" src="https://github.com/user-attachments/assets/0cff7611-bc1d-4f50-91f1-e414cd18b85f">

Protocolo de red

Arduino-> documentation-> HARDWARE-> 

hipertexto: texto con la capacidad de vincular a otro lugar, link.

http, udp, mqtt

Protocolo udp: streaming: para que una gran cantidad de datos ...

El streaming permite errores. 

Arduino no es bueno para streaming

mqtt: protocolo de regla de comunicación.

Por lo que el arduino:
1. Verificó que tenía un chip wifi
2. Verificó que estaba actualizado
3. Recibió una dirección online

También podemos hacer que el arduino sea un servidor para que un cliente pueda preguntarle cosas. 

## Ejemplo AP_simple web server
Acces-point: punto de acceso. 

Servidor

El arduino así nomas no puede tener más de una persona conectada

**Pero qué es en sí el cliente y el servidor?**

Para el dispositivo que se conecta hay que poner el IP adress

Soy access point, serbido y arduino.

## Arduino cloud

Los proyectos están linkeados a una cuenta. Por lo que puedes acceder a las configuraciones a traves de cualquier dispositivo, tu dispositivo no tiene que estar conectado a un wifi específico, el arduino así.

Para conectar tu placa sin problemas, la placa debe estar actualizadas. La conección puede fallar varias veces, pero eventualmente se conectará. 

El navegador con el que mejor funciona es chrome.

- Devices/conectar arduino/
- Things: es para tus proyectos. Add/selecciono el arduino y mi wifi
- Sketch
- Dashboards: nos deja agregar controladores./Slider

PWM: es una técnica para modular una señal/impulso.

Recomendación
- Escribir código
- ver que la placa esté bien conectada
- No compilar muchas veces

### Pregunta pendiente a futuro: ¿Cómo lograr interacciones geniales con esta tecnología?
