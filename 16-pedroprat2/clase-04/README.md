# clase-04
El objeto consiste en una caja que se instala en la pared, fabricada en corte laser la cual tiene la figura de un gato con un ojo perforado, por donde el usuario puede mirar hacia adentro de la caja y ver la silueta de un gato el cual al cabo de unos segundos de ser obvservado muere. esta caja esta inspirada en el dicho la curiosidad mato al gato.

El objeto consta de un arduino uno r4 wifi (entrega animacion gato vivo., gato muerto )mas tres cables conectados a un sesor de distancia marca sharp (si la señal es positiva empieza a gastar tiempo de vida del gato, si es negativa se pausa el tiempo), ademas de un portapilas (da energia al arduino)

<img width="327" alt="Screen Shot 2024-09-07 at 7 32 14 pm" src="https://github.com/user-attachments/assets/ed9144d2-9557-4ecd-8cfa-4040191df906">

 El objeto consta de un arduino uno r4 wifi (entrega animacion gato vivo., gato muerto )mas tres cables conectados a un sesor de distancia marca sharp (si la señal es positiva empieza a gastar tiempo de vida del gato, si es negativa se pausa el tiempo), ademas de un portapilas (da energia al arduino)
 
![IMG_3855 2](https://github.com/user-attachments/assets/ebd64208-1d50-4a56-aac9-0a4895a33aa6)
<img width="136" alt="Screen Shot 2024-09-07 at 7 35 42 pm" src="https://github.com/user-attachments/assets/35a9e227-04a1-4306-affb-91e0586e57d7">
<img width="140" alt="Screen Shot 2024-09-07 at 7 36 12 pm" src="https://github.com/user-attachments/assets/410dc299-39d6-4c3f-9429-8123a2933246">
<img width="569" alt="Screen Shot 2024-09-07 at 7 37 57 pm" src="https://github.com/user-attachments/assets/83f3e943-68ee-40c9-b2ac-d7674bca486a">
![IMG_3884](https://github.com/user-attachments/assets/f0d59336-f46d-4b3b-b658-ceb7b6389418)
![IMG_3882](https://github.com/user-attachments/assets/c3cf10bc-c1c4-41db-be2a-b472939615f1)
<img width="531" alt="Screen Shot 2024-09-07 at 7 47 15 pm" src="https://github.com/user-attachments/assets/706412ac-6925-4c91-a0a2-704a5525cd9d">
<img width="527" alt="Screen Shot 2024-09-07 at 7 46 59 pm" src="https://github.com/user-attachments/assets/05205f20-bd5a-44e7-b2c2-f91e3b06d06a">
<img width="511" alt="Screen Shot 2024-09-10 at 00 29 49" src="https://github.com/user-attachments/assets/43e4464c-2722-47f5-8b65-0e2b755c45b4">
<img width="398" alt="Screen Shot 2024-09-10 at 00 28 07" src="https://github.com/user-attachments/assets/f36ed803-5f6c-411f-a43d-19ae384ca763">
<img width="314" alt="Screen Shot 2024-09-10 at 00 27 46" src="https://github.com/user-attachments/assets/22985017-2cd2-419f-baf0-2ccfb62f6b6a">
<img width="238" alt="Screen Shot 2024-09-10 at 00 25 40" src="https://github.com/user-attachments/assets/19250334-4796-42fe-9677-d3315aeecc94">
![IMG_3898](https://github.com/user-attachments/assets/67be4966-2c4d-4679-9b9e-7f6fb93ce5ab)
![IMG_3899](https://github.com/user-attachments/assets/c377c126-1d87-445c-985e-bd1646d08cdc)
![IMG_3900](https://github.com/user-attachments/assets/73ff92cf-594b-426e-a99d-0e3ee36a72ea)
Claro, aquí tienes una versión más humanizada del manual de uso:

---

La Curiosidad Mató al Gato

## Introducción

Bienvenido a **La Curiosidad Mató al Gato**, un objeto interactivo diseñado para ofrecer una experiencia que refleja el dicho popular. Al mirar a través del ojo perforado en la caja, verás una animación en la pantalla LED que representa un gato cuya "vida" se agota tras unos segundos de observación. Este objeto está pensada para hacerte reflexionar sobre cómo la curiosidad puede llevar a situaciones imprevistas.

## Componentes

- **Caja**: Hecha con precisión en corte láser, con la figura de un gato y un ojo perforado para la observación.
- **Arduino Uno R4 WiFi**: El cerebro del sistema, encargado de manejar las animaciones del gato.
- **Sensor de Distancia Sharp**: Detecta cuándo te acercas y activa la animación.
- **Portapilas**: Proporciona energía al Arduino.
- **Pantalla LED**: Muestra las animaciones que dan vida al gato.

## Instalación

1. **Montaje en la Pared**:
   - Fija la caja a la pared utilizando adhesivo, asegurándote de que quede bien sujeta y a una altura cómoda para la observación.

2. **Conexión de Componentes**:
   - **Sensor de Proximidad**:
     - Conecta el pin **VCC** del sensor al pin **5V** del Arduino.
     - Conecta el pin **GND** del sensor al pin de **GND** del Arduino.
     - Conecta el pin **SIG** del sensor al pin **A0** del Arduino.
   - **Portapilas**: Conéctalo al Arduino para alimentar el sistema.

3. **Conexión de Energía**:
   - Inserta las baterías en el portapilas y conéctalo al Arduino. ¡Y listo! Tu caja estará lista para funcionar.

## Funcionamiento

1. **Observación**:
   - Al acercarte y mirar a través del ojo perforado, el sensor detectará tu presencia y comenzará a contar el tiempo de vida del gato en la pantalla.

2. **Animación del Gato Vivo**:
   - Mientras estás cerca, verás cómo el gato en la pantalla LED está animado y activo, representando la vida del gato.

3. **Muerte del Gato**:
   - Si mantienes la proximidad durante más de 20 segundos, la animación cambiará para mostrar la "muerte" del gato. Verás una animación que dura 4 segundos, representando simbólicamente la muerte del gato (RIP).

4. **Reinicio**:
   - Después de que el gato "muere", el sistema se reinicia y el gato revive. Este ciclo se repite, recordándonos la naturaleza cíclica de la curiosidad.

## Interacción

- **Acercarse a la Caja**: La caja está diseñada para captar tu curiosidad. Al acercarte y mirar a través del ojo perforado, el sensor detecta tu presencia y activa la animación del gato.

- **Mirar a Través del Ojo Perforado**: Al observar la animación, experimentas cómo la curiosidad puede tener consecuencias. La animación del gato te invita a reflexionar nuestras acciones porque pueden afectar a la vida de otros.

- **La Curiosidad**: Este objeto no solo es una experiencia visual, sino también una invitación a pensar sobre cómo la curiosidad puede llevarte a situaciones inesperadas y cómo cada ciclo de observación trae consigo un nuevo comienzo.











