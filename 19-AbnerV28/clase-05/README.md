Solemne 01
# Manual de uso proyecto "shh"
1. Primer paso: Busca un espacio silencioso, ya sea una sala, una habitación, solo procurar que haya poco ruido ambiente.
2. Segundo paso: Para hacer uso de éste objeto, como primer paso debes colgar a "shh" en la pared mediante el orificio el cual se encuentra en tapa trasera el cual contiene un orficion superior, el objeto para poder colgarlo no debe ser superior a un radio de 1 centímetro.
3. Tercer paso: Revisa que "shh" esté conectado a una fuente de energía, para verificar que esté encendido comenzará a mostrar algo (arreglar) en la matriz led.
4. Cuarto paso: Si quieres despertar a la criatura "shh" debes emitir algún ruido en el lugar o hablarle directamente (editar)
5. Quinto paso: Dependiendo de cuánto hables cambiará su estado de ánimo, el cual es triste y enojado, siendo éste último un ruido alto como es gritar o donde exita muchas personas hablando. (arreglar)
6. Sexto paso: Si quieres que la criatura vuelva a dormir, asegurate que no haya ruido a tu alrededor.
## Prohibiciones 
1. Asegurate que "shh" no sufra caídas, ni golpes.
2. Que no tenga contacto con el agua ni ningún liquído. 
   

// ![texto](./aquivaelnombre.jpg)

``` cpp
//Codigo para matriz led ojo enojado
const uint32_t animationenojado[][4] = {
	{
		0x1f816,
		0x81681083,
		0xfc70ee07,
		66
	}
};

```
``` cpp
//Codigo para matriz led ojo calmado
const uint32_t animationcalmado [][4] = {
	{
		0x0,
		0x7fe8010,
		0x0,
		66
	}
};
```
``` cpp
//Codigo para matriz led ojo triste 
const uint32_t animationtriste [][4] = {
	{
		0x2001f816,
		0x81689097,
		0xfe000000,
		66
	}
};

```
