# clase-15

No sé por qué se borró la información que tenía, pero bueno, habrá que reescribirla ;;

Estaba intentando buscar un código que me permitiera establecer conección entre p5 y arduino,  

<https://github.com/gohai/p5.webserial>

Hice una pausa de eso para ver cómo hacer botones interactivos en p5.

## Creando la página web

### Botones
Primero investigamos sobre botones en <https://www.w3schools.com/css/css3_buttons.asp>

Ahí vimos atributos sobre los botones y caracteristicas que estos tienen.

<https://www.w3schools.com/css/tryit.asp?filename=trycss_buttons_border>

```css

<!DOCTYPE html>
<html>
<head>
<style>

.button {
  background-color: transparent;
  border: none;
  color: white;
  padding: 50px 50px; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.button1 {
  background-color: none; 
  border: 2px solid black;
  border-radius: 12px;
}

.button2 {
  background-color: none; 
  border: 2px solid black;
  border-radius: 12px;

}

.button3 {
  background-color: none; 
  border: 2px solid black;  
  border-radius: 12px;

}

.button4 {
  background-color: none; 
  border: 2px solid black;  
  border-radius: 12px;

}


</style>
</head>
<body>


<button class="button button1">
<button class="button button2">
<button class="button button3">
<button class="button button4">

</body>
</html>

```

Links de referencia para seguir trabajando en la casa:
- *Para ocultar elementos al hacer click: <https://www.w3schools.com/js/tryit.asp?filename=tryjs_intro_inner_html>
- Prueba de botón <https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test>
- Información botones: <https://www.w3schools.com/jsref/met_win_open.asp>
- Text align: <https://www.w3schools.com/css/tryit.asp?filename=trycss_text-align-last>
- add eventlistener: <https://www.w3schools.com/jsref/met_element_addeventlistener.asp>
- Esto es para abrir una pestaña aparte nueva, por lo que para el caso no función

Forma de agregar una tipografía al html: embed code
![Captura de pantalla 2024-12-03 184539](https://github.com/user-attachments/assets/bea131c7-4e81-4050-bee7-44d87c6e86ed)

