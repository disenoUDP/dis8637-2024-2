# clase-13

## Qué es pseudocódigo?

Es una manera informal de escribir un código, se utiliza lenguaje natural que imita la lógica utilizada en el programa, es un puente de ideas para escribir el código que está destinado a ser ejecutado.
Se emplean palabras comunes, como “si”, “sino”, “mientras”, “repetir”, para describir acciones y decisiones. Al ser escrito de esta manera, el pseudocódigo permite centrarse en los pasos lógicos en lugar de los detalles de la implementación técnica. :)

## pseudocódigo

   INICIO
    votosSi ← 0
    respuestas ← crear arreglo para almacenar 
    respuestaEscrita ← 0
    tiempoInicio ← 0

    DEFINIR detectPresencia COMO entrada (input)
    DEFINIR botonSi COMO entrada (input)
    DEFINIR teclado COMO salida (output)

    MOSTRAR "Pantalla de inicio con gráfica de acumulación y frase: "Este semestre ha acumulado x estudiantes con estrés :)""

    ESPERAR (7, 10, 15) segundos (probar)

    MIENTRAS VERDAD
        SI detectPresencia ESTÁ ACTIVO
            tiempoInicio ← TIEMPO ACTUAL
            MOSTRAR "Pantalla de inicio con gráfica de acumulación y frase: "Este semestre ha acumulado x estudiantes con estrés :)""
            ESPERAR 5 SEGUNDOS

            MOSTRAR "Esta es una encuesta relacionada con el estrés académico 
            MOSTRAR "¿Sientes que el estrés académico ha tomado el control sobre tu vida?"
            MOSTRAR "Presiona el botón derecho para Sí"

            SI botonSi ESTÁ ACTIVADO ENTONCES
                votosSi ← votosSi + 1 (incrementa y se acumula)
                ENVIAR_CORREO "correo va cambiando según la cantidad de personas que vayan a responder"
                MOSTRAR "acumulación de datos y número en frase"

                MOSTRAR "¿Quieres compartir lo que te estresa con nosotros?"
                SI botonSi ESTÁ ACTIVADO ENTONCES
                    ACTIVAR teclado
                    MOSTRAR "Despliega el teclado que se encuentra bajo el panel de botones y escribe tu respuesta"
                    RESPUESTA ← ESCRITA 
                    GUARDAR RESPUESTA EN respuestas[respuestaEscrita]
                    respuestaEscrita ← respuestaEscrita + 1 (guardar respuesta)

                    MOSTRAR "Respuestas compartidas:"
                    MOSTRAR TODAS LAS RESPUESTAS EN respuestas
                    ESPERAR 30 segundos
                FIN_SI
            SINO
                MOSTRAR "Gracias por responder"
            FIN_SI

            ESPERAR 10 segundos
            MOSTRAR "Pantalla de inicio"
    FIN_MIENTRAS
FIN



