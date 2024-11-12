# clase-12
## Spreadsheet

- Variable: Boleana

- Boleana ya vote: Contará con 4 opciones  "Si" quiero darme un gustito/ "No" quiero darme un gustito   - "Si" quiero consumir/ "No" quiero consumir.

- int cuanta Gente ha usado el Sistema: El sistema podrá ser utilizado por aproximadamente 200, considerando la probabilidad de que pocas personas escojan la opcion de no consumir y las 180 que podran acceder a balas.

- int cuantas balas hay disponibles: Habrán 180 balas disponibles para dispensar.

- Descripción física de la interfaz: Interfaz del monitor táctil: 1ra. Una Pantalla enblanco con opciones. 2da. Una simulación del menú de Macdonalds.

- Instrucciones
   - Instruccion 01
  
     - Totem: El tótem se encuentra en standBy, presentando la pregunta en el monitor táctil "¿Quieres darte un gustito?" con las opciones "Sí" o "No" abajo, en un tamaño  más pequeño y encerrado en rojo.
   
    - Instrucciones Usuario: Usuario no presente
   
     - Comunicación de sistemas: Entre monitor y RaspBerry.
       
   - Instruccion 02

     totem: El tótem se encuentra en standBy, presentando la pregunta en el monitor táctil "¿Quieres darte un gustito?" con las opciones "Sí" o "No" abajo, en un tamaño más pequeño y encerrado en rojo.
         
     Instrucciones Usuario: El usuario se acerca al totem y lee la info 
         
     Comunicación de sistemas: Entre monitor y RaspBerry.

   - Instruccion 03

     totem: Si el usuario elige "No", ocurrirán las instrucciones 4 y 5. Si elige "Sí", ocurrirá la Instrucción 6.
         
     Instrucciones Usuario: El usuario elige una opción entre "Sí" o "No".
         
     Comunicación de sistemas: Entre monitor y RaspBerry.

    - Instruccion 04

       totem: En el totem aparecerá un mensaje de agradecimiento por no contribuir al genocidio durante 15 segundos.
           
       Instrucciones Usuario: El usuario recepcionará la info. 
           
       Comunicación de sistemas: Entre monitor y RaspBerry.
   
   - Instruccion 05

       totem: El totem volverá a modo StandBy
           
       Instrucciones Usuario: El usuario se irá
           
       Comunicación de sistemas: Entre monitor y RaspBerry.

   - Instruccion 06
  
       totem: Se presentaran las opciones del menú mediante un carríl de imagenes 
           
       Instrucciones Usuario: El usuario deberá deslizar para visualizar las opciones
           
       Comunicación de sistemas: Entre monitor y RaspBerry.

   - Instruccion 07

       totem: Se presentaran las opciones del menú, entre ellas se considerará si el usuario elige consumir algún producto (continua en la instrucción 7 en adelante) o "No consumir" (ocurrirás las instrucciones 4 y 5). 
           
       Instrucciones Usuario: El usuario debe elegir una opción, presionandola en la pantalla 
           
       Comunicación de sistemas: Entre monitor y RaspBerry.

   - Instruccion 08

       totem: El totem mostrará en la pantalla un mensaje de "Retire su pedido", acompañado de una flecha apuntando hacia abajo, indicando el dispensador
           
       Instrucciones Usuario: El usuario debera esperar hasta que escuche la bala caer 
           
       Comunicación de sistemas: Entre monitor y  RaspBerry 

   - Instruccion 09

       totem: El dispensador se activará y entregará una Bala 
           
       Instrucciones Usuario: El usuario debe retirar la bala 
           
       Comunicación de sistemas: Entre  RaspBerry y Sensor paso a paso
   - Instruccion 10

       totem: El Totem volverá a la instrucción 5
           
       Instrucciones Usuario: El usuario observara y leera el empaque de la bala
           
       Comunicación de sistemas: Entre monitor y RaspBerry.

   - Instruccion 11
      
      Instrucciones Usuario: El usuario se irá
           
