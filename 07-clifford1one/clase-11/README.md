# clase-11

# clase-11
## Evaluación Intermedia - Proyecto de Votación Interactiva (EgoCracia)

Mediante este proyecto buscamos explorar cómo las interfaces pueden influir en la toma de decisiones del usuario en un entorno de votación. Por ello desarrollaremos:

Un módulo de votación que esta compuesto por estaciones de interacción que confunde al usuario (visitantes de diseño abierto) a la hora de emitir su voto por algún candidato ficticio ...

Se le presenta al usuario una lista de candidatos, pero la interfaz está diseñada de manera confusa y difícil de navegar para inducir el voto hacia un candidato específico. Si el usuario intenta seleccionar otro candidato, la interfaz genera un error y lo redirige a una nueva pantalla aún más compleja, repitiendo el ciclo hasta que el usuario elige al candidato deseado (definido por nosotros).

![image](https://github.com/user-attachments/assets/aea540ec-3161-4905-8d3d-2964ab037fb0)


## ¿Qué queremos lograr con éste proyecto?
### Que los participantes de diseño abierto reflexionen respecto a las falencias del sistema de electoral

- Transparentar/reflejar las falencias del sistema electoral:
- Respecto al conteo de votos. 
- La falta de sistematización del proceso, da cabida a multiples errores “humanos” en cada etapa.
- Parte publicitaria: 
- Muchas gente está “despolitizada”; además la mayoría de las campañas, no son efectivas en cuanto a llegar a públicos/sectores específicos 
- Los políticos tienden a no cumplir sus promesas de campaña(y no ven consecuencias x esto)
- La gente vota por los mismos (quiza pq tienen un rostro/nombre familiar/reconocido)
- La gente cree que la culpa es de la ellos mismos por votar “mal” y no del candidato por no cumplir bien su rol político.

## Listado de candidatos:
 se divide en:
 - altamente capacitada
 - medianamente capacitada 
 - bajamente capacitado
 - no capacitado

## Flujo de interacción

### Flujo con Ciclos de Error Progresivo
1. Entrada a la Habitación: El usuario llega a la habitación y ve un sistema de votación digital listo para usar.
2. Instrucciones Iniciales: La pantalla se encuentra en estado de "StandBy". Muestra a los 4 candidatos, con su nombre y código numérico, junto a un mensaje "toma el control para votar"
3. El usuario toma el control(Wii mote).
4. Se muestra una interfaz de votación.
5. El usuario vota por su candidato preferido.
6. Se muestra un mensaje "Gracias por ejercer tu voto! Vuelve más tarde para la coronación.(7s)
7. El voto se registra mediante el sistema de contabilización de Arduino, y se muestra una animación de "acumulación de votos" en una barra.
8. La pantalla vuelve al estado de "StandBy"
9. Cuando un usario tome el Wii mote se muestra la siguiente interfaz de votación.

![image](https://github.com/user-attachments/assets/ae85f5e4-4a40-4268-8200-de5d2bc2040e)


**Diseño de Interfaz**:

Wireframes, interfaces, propuestas

Este sistema de votación se compone de una serie de 3-4 "niveles" de interacción, dentro de los cuales se irán aceptando aquellos votos que sean inclinados hacia nuestro "candidato ideal"

Top 3 de interacciones a desarrollar:
- captcha
- código numérico (más fácil de recordar)
- Escribe el nombre de tu candidato

## USUARIOS
- El dispositivo se utiliza con una sola mano, requiriendo únicamente el pulgar y otro dedo. 
- Puede operarse tanto de pie como sentado. 
- El control debe tomarse firmemente con la mano.
- No se permite la participación (a menos que la persona esté acompañada o asistida) en los siguientes casos:
- Personas ciegas.
- Personas sin pulgares.
- Personas con menos de dos dedos funcionales.
- Personas que no pueden sostener el control por sí mismas.
- Personas que no saben leer.

estas interacciones estarán diseñadas mediante malas interfaces para confundir al usuario y llevarlo a su limite de paciencia

<img width="535" alt="Screenshot 2024-10-28 at 11 30 27 PM" src="https://github.com/user-attachments/assets/a7677d20-5000-4e4b-bc0f-836c3c820d95">

*ref* https://www.reddit.com/r/badUIbattles/comments/1ee36qb/draganddrop_password_login/

<img width="474" alt="Screenshot 2024-10-28 at 11 36 17 PM" src="https://github.com/user-attachments/assets/2481ab70-86a5-4887-9561-f126eb059cc1">

*ref* https://www.reddit.com/r/badUIbattles/comments/1bnrcgd/phone_input_but_you_have_to_put_the_ascii_code/

<img width="656" alt="Screenshot 2024-10-28 at 11 34 20 PM" src="https://github.com/user-attachments/assets/385f732f-0f3a-4a34-a0fd-d632d313df17">

*ref* https://im-a-puzzle.com/share/1673c47d0eaf90e

<img width="599" alt="Screenshot 2024-10-28 at 11 35 08 PM" src="https://github.com/user-attachments/assets/ddc859b4-d848-464d-862a-c19f977ab033">

*ref* https://goulartnogueira.github.io/BadUI/bad-name-selector/

Nuestro modulo se visualizará de la siguiente forma:

![image](https://github.com/user-attachments/assets/21bdba3b-52fa-4073-b70f-e47caa3cedc7)

![b592cb16-e8d9-423c-aa19-45c0d7908a54](https://github.com/user-attachments/assets/7e3544c0-5d8b-4ceb-a010-42697fe90fe2)

![croquis_UX-s2](https://github.com/user-attachments/assets/d7e44eb4-51d3-4ccf-892d-94fee1f187c8)

# CASOS LIMITES

- El control deja de funcionar
- El control se pierde
- Se corta la luz
- El usuario evita elegir un candidato(no vota)
- Error de red o conexión

# CASOS DE ERROR
- El usuario abandonó la experiencia en mitad de una votación: tras 20 segundos sin detectar movimiento, se vuelve a la pantalla de standbys.(internamente la interacción,  y el siguiente usuario, le toca la siguiente interacción).
- El usuario intenta usar el monitor como pantalla táctil


y se compondrá por:

- Arduino 1 r4


- Wii remote	$20.000

![image](https://github.com/user-attachments/assets/4a6a560e-d00d-45a9-bbf2-3d2dc2d1ef3a)


https://articulo.mercadolibre.cl/MLC-1458627633-control-wiimote-original-wii-funda-de-silicona-original-_JM
- Sensor	$6.000

https://articulo.mercadolibre.cl/MLC-577726050-sensor-barra-infraroja-para-nintendo-wii-wii-u-receptor-ir-_JM

- Monitor(HDMI)	$64.900

https://www.pcfactory.cl/producto/48279-aoc-monitor-20-hd--panel-tn-60hz-20e1h
- Cable HDMI	$6.235

https://www.mercadolibre.cl/cable-hdmi-8k-21-jkr-tech-certificado-48gbps-2-mts-ultra-hd-4k-120hz-8k-60hz-jkr/p/MLC29804760

- Pilas AA	$2.790

https://articulo.mercadolibre.cl/MLC-1447945991-pilas-aa-alcalinas-energizer-max-doble-a-blister-de-4-pilas-_JM

- Notebook	$299.000

 https://www.falabella.com/falabella-cl/product/137185870/NOTEBOOK-INTEL-CORE-I5-THINKPAD/137185871

 Para lograr desarrollar de forma física EgoCracia, armamos un plan de acción que consiste en:

<img width="759" alt="Screenshot 2024-10-28 at 11 45 10 PM" src="https://github.com/user-attachments/assets/07d54c60-e466-4afb-9b5c-9e09776ba936">
