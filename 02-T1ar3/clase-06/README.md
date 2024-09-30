# Clase 06: Video - Cloud

## Diseño de Interacción 

- **Victor Papanek:** "La forma sigue la función" evoluciona a "la forma sigue la forma". La interacción ahora se enfoca más en lo sensorial que en lo funcional.
- **La forma sigue la interacción:** Lo importante es lo social. Ejemplo: Proyecto Prizm.

## Patrones de Diseño de Interacción 
- **Perspectiva de usuario:** El usuario puede cambiar o preservar un estado, según reglas de comportamiento.
- **Estados:** No todos los estados son visibles; importa más cómo se comportan que cómo se ven.
- **Referencias:** Ccesantiago, *Partitura Inesperada* (15 de octubre), libro *Inteligencia Militar*.

## Internet de las Cosas (IoT)
- Ejemplos: Objetos que cambian de color, contador de huevos, etc.
- **Pregunta clave:** ¿Qué podemos diseñar para que no todo ocurra en una pantalla?
- **Interacción no limitada a la interfaz:** La interacción es jugo, narrativa, atención e interés.
- Ejemplo: El gas no tiene olor, pero se le añade uno para detectar fugas.

## Revisión de Arduino.cc
- **Referencias adicionales:** Ruth Bader Ginsburg, Wikipedia (artículos con más información).
- Todo tiene un RUT (documentos, artículos, etc.).

### Páginas útiles:
- API Weather Map
- New York Times Developers
- **¿Qué es una API?**: Permite la comunicación entre dos aplicaciones de software mediante un conjunto de reglas.
- **"YourKey"**: Es una llave al final de los enlaces.

## Ejemplos de código

### Estructura básica de un código Arduino:

while (!Serial) {
    ; // Espera a que el puerto serial se conecte. Necesario para puertos USB nativos.
}

int contador = 0;
while (contador < 5) {
    // Repite hasta que el contador llegue a 5.
    contador = contador + 1;
}
Byte: 8 bits, puede valer 0 o 1.
MAC Address: Un identificador de 6 bytes.
Void loop, void setup: Funciones principales del código Arduino.
wifi.macAddress(): Clase dentro de otra clase, que accede a información sobre el WiFi.
Información del módulo WiFi:
Intensidad de la señal: Indica la potencia de la conexión.
Errores: Si no se encuentra una conexión, el sistema entra en modo búsqueda.
## segunda parte de la clase 
Print en puerto serial: Utiliza dos variables.
Cliente web: Navegadores como Google Chrome, Edge, etc.
