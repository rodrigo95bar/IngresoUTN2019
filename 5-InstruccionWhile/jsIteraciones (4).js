function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));

while (numero <0 || numero >10 || isNaN(numero))
{
 numero = parseInt(prompt("Numero incorrecto, ingrese del 1 al 9"));
 
}
document.getElementById("Numero").value = ("Su numero es ") + numero;
}//FIN DE LA FUNCIÓN