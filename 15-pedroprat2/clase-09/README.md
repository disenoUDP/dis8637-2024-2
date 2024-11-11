# clase-09
1. Concepto y Fundamentación

Descripción del Proyecto: 
Es una instalación interactiva que invita a los estudiantes, profesores y funcionarios de la escuela de diseño UDP a generar una imagen mediante la IA Midjourney, pidiendo por adelantado el agua que consumirá el servidor para generar la imagen, con el fin de que los usuarios generen conciencia y reflexionen sobre el impacto ambiental que tienen las tecnologías basadas en IA.

Justificación y Relevancia:

Nuestro proyecto nace de que como estudiantes hemos observado en el uso indiscriminado en el ámbito académico de tecnologías de IA generativas de imagen, el cual es fomentado por la escuela, en asignaturas cómo: “Narrativas Visuales e Inteligencia Artificial” y "Experimentación Audiovisual". Esto sin pensar en el impacto que estas tienen en el medio ambiente, al tratarse de una tecnología digital existe una desconexión entre el usuario y el costo ambiental de esta herramienta, costo que queremos visibilizar.

Elegimos el agua porque, a pesar de que google, que es la empresa que aloja los servidores de MidJourney, ha hecho un esfuerzo por disminuir la huella de carbono invirtiendo en procesadores más eficientes y energías renovables, el uso de agua como sistema de enfriamiento de los servidores sigue en pie y es mas, aumenta conforme más crecer estos servidores y mas poder consumen.

¿Cuánta agua consume MidJourney? Responder esta pregunta NO fue fácil, MidJourney carece totalmente de reportes de sustentabilidad o declaraciones de su uso de energías. La información que utilizamos para responder esta pregunta proviene principalmente de Google, quienes declaran utilizar 1.8L de agua * kWh y también del estudio *Power Hungry Processing: Watts Driving the Cost of AI Deployment?* de las autoras Alexandra Sasha Luccioni, Yacine Jernite, and Emma Strubell, de cuya investigación utilizamos el dato de que por cada 1000 inferencias MidJourney consume 2.9 kWh, Con esta información realizamos los siguientes cálculos.



La razón de la temática de nuestro proyecto se basa en el uso indiscriminado en el ámbito académico de tecnologías de IA generativas de imagen, el cual es fomentado por la escuela, en asignaturas cómo: “Narrativas Visuales e Inteligencia Artificial”.Esto sin pensar en el impacto que estas tienen en el medio ambiente.

Según nuestra investigación, el uso de IA generativa impacta al medio ambiente de variadas formas, pero la que nos llama la atención principalmente es el uso de agua que requiere el proceso, ya que si bien, las empresas de desarrollo han hecho avances en buscar fuentes de energía para los servidores que produzcan menos emisiones de carbono, particularmente Google Cloud, que es la empresa en la que se alojan los servidores de Midjourney. En el uso de agua para el enfriamiento de los servidores no se han hecho avances, por más que se financien estudios y se regocijen de la reducción de impacto en carbono, se oculta totalmente la información respecto al consumo de agua, que aumenta cada año, ya que aumenta cada vez más la cantidad de servidores que utiliza Midjourney.

La información que utilizamos para hacer una estimación es del artículo por Alexandra Sasha Luccioni, Yacine Jernite, and Emma Strubell. Power Hungry Processing: Watts Driving the Cost of AI Deployment?. (June 3–6, 2024).
https://arxiv.org/abs/2311.16863
https://www.gstatic.com/gumdrop/sustainability/google-2024-environmental-report.pdf

En el que se determina que el gasto por 1000 inferencias de Midjourney es de 2.9kWh y el informe de consumo de Google que determina que por cada kWh de sus servidores se consume 1.8 L de agua.

Cada inferencia consume 0.0029 kWh, y según sus reportes, Midjourney recibe 2.500.000 usuarios al día, de los cuales la mayoría tienen el plan estándar que demora 1 min por imagen generada (inf) y si el promedio de uso de estos usuarios es de alrededor 8 min podemos concluir que cada usuario genera 8 imagenes, osea 8 inferencias.

Con un simple cálculo llegamos a la cifra de que esto serian 20.000.000 de inferencias por dia x 0,0029 kWh x inferencia nos da un total de 58.000 kWh que multiplicado por los 1.8 L  de agua x kWh nos da un total de 104.000L x Hora y 2.505.600 L x dia, si esta cifra la dividimos en la cantidad de usuarios nos da un total de 1L a día por usuario, aproximadamente.

Cómo grupo nuestro mayor objetivo es generar conciencia, no buscamos hacer que la IA deje de ser utilizada cómo herramienta en la facultad, buscamos que los estudiantes, docentes y funcionarios sean conscientes del costo ambiental que presentan este tipo de herramientas digitales para utilizarlas de manera más óptima y así reducir su impacto.

