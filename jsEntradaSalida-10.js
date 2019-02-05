/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
var importe;
var resultado;
var resultadofinal;
var resultadofinal2;
importe = document.getElementById("importe").value;

resultado = importe * 25;

resultadofinal = resultado / 100;

resultadofinal2 = importe - resultadofinal;

document.getElementById("resultado").value = resultadofinal2;
}
