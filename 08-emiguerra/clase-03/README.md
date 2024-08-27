# clase-03
## encargo-03 
(02-T1ar3/08emiguerra/11sofiaolivares)

### ENTREGABLES:

dispositivo que sirve para guardar cosas de valor, imitando a una caja fuerte que se puede abrir solo con reconocimiento facial



## 1. nombre del dispositivo:
- BrightGuard 
- NeonGuard


## 2. que sensor se va a utilizar:
- Sensor De Distancia Ultrasónico Módulo Hc-sr04 Para Arduino


<img width="382" alt="Screenshot 2024-08-27 at 10 41 35 AM" src="https://github.com/user-attachments/assets/a6b28c4a-89cd-404e-bb60-747609abe58c">

https://www.mercadolibre.cl/sensor-de-distancia-ultrasonico-modulo-hc-sr04-para-arduino/p/MLC34488490?item_id=MLC1474185049&from=gshop&matt_tool=93585317&matt_word=&matt_source=google&matt_campaign_id=14571116301&matt_ad_group_id=127448628672&matt_match_type=&matt_network=g&matt_device=c&matt_creative=544459510238&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735119080&matt_product_id=MLC34488490-product&matt_product_partition_id=2265590047380&matt_target_id=pla-2265590047380&cq_src=google_ads&cq_cmp=14571116301&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gclid=CjwKCAjw8rW2BhAgEiwAoRO5rD2-svqn_zh4oxREEYWoxNMlcvWH2MTr8st0wIyIf05jU_MPnPynhxoCg7MQAvD_BwE





- ESP32-CAM

<img width="476" alt="Screenshot 2024-08-26 at 7 20 32 PM" src="https://github.com/user-attachments/assets/94aef791-dfd4-472b-bb4d-dc85610eec51">

https://altronics.cl/placa-esp32-cam



## 3. capacidad técnica (análogo-digital-valor histórico):
- Análogo-Digital: El sensor captará imágenes (datos análogos) y las convertirá en señales digitales para su procesamiento y comparación con las imágenes faciales almacenadas


<img width="797" alt="Screenshot 2024-08-26 at 7 32 46 PM" src="https://github.com/user-attachments/assets/349b2f2a-c647-44d3-9d8a-c8c050314a78">


- https://github.com/emiguerra/face_recognition-4-ux

 


## 4. listado de componentes, grueso:
- Pantalla Lcd 16x2 Lineas I2c Arduino


https://articulo.mercadolibre.cl/MLC-475633285-pantalla-lcd-16x2-lineas-i2c-arduino-_JM


<img width="622" alt="Screenshot 2024-08-26 at 7 38 35 PM" src="https://github.com/user-attachments/assets/cc4b3e50-03a8-43a1-8bd3-9c1e50d8d5dd">


- Micro Servo Metálico SG92R 9g 2.5kg

 
 https://electronilab.co/tienda/micro-servo-metalico-sg92r-9g-2-5kg-towerpro/


<img width="300" alt="Screenshot 2024-08-26 at 7 41 51 PM" src="https://github.com/user-attachments/assets/cc1f44d3-1100-4201-bba2-c63ba83da6a6">

- Buzzer Zumbador 95 Db 3-24v 12v Pitido Arduino

https://articulo.mercadolibre.cl/MLC-928329655-buzzer-zumbador-95-db-3-24v-12v-pitido-arduino-_JM#position%3D4%26search_layout%3Dstack%26type%3Ditem%26tracking_id%3Da61cee3f-79a6-4fa2-a000-1f8f2804bffe

<img width="684" alt="Screenshot 2024-08-26 at 7 49 09 PM" src="https://github.com/user-attachments/assets/29090b76-865d-4540-bf97-7f349d75716f">

- Fuente de Alimentación (alimentado por batería o USB)
- Carcasa Personalizada (para la caja fuerte) 
- Cables y conectores


## 5. materialidad (como se va a construir)
- "caja fuerte" y sistema de cerradura 
- posibles formas:
- Terciado en la cnc 
- Acrilico transparente 
- componentes con impresión 3d

![image](https://github.com/user-attachments/assets/e2a91312-450b-4885-a2aa-834d9ffd98c6)
![image](https://github.com/user-attachments/assets/5e71a191-4fe3-42db-a0d5-169c939dd577)
![image](https://github.com/user-attachments/assets/33b572e0-fc54-4aed-ac9a-16c686ca8fe7)


## 6. inpout-output

Input sensor elegido detecta al sujeto
- Imagen Facial: El dispositivo captura la imagen del rostro del usuario a través del módulo de reconocimiento facial

Output LED´s integrados dan feedback de acción

- Apertura del Mecanismo: Si el rostro es reconocido, se activa el motor servo para abrir la caja fuerte o puerta
- Feedback Visual: Pantalla LCD que muestra  resultados del escaneo.
- Feedback luces led que especifique rostro rechazado o aceptado
- Feedback Auditivo: Sonido que confirma la apertura de la caja fuerte o puerta

## 7. ¿cómo vamos a indicar la acción que queremos que realice el usuario?

- instrucción visual en la pantalla integrada (ej: acercar-alejar rostro/ acceso denegado/ acceso concedido)

referente: 

https://www.instructables.com/Remote-Controlled-Safe-Box/


https://jayeshkumarjangir49.medium.com/door-unlock-using-face-recognition-arduino-uno-87e86380b3e7


## 7. 3 repositorios en GitHub de personas que hayan usado el sensor
- https://github.com/ageitgey/face_recognition
- https://github.com/deepinsight/insightface
- https://github.com/animikhaich/Facial-recognition-based-automatic-door-lock-unlock-system
- https://github.com/espressif/esp32-camera
