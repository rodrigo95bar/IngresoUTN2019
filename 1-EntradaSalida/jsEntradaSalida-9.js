/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var num1;
var resultado;
var resultado2;

num1 = parseInt(document.getElementById("sueldo").value);

resultado = (10 * num1) / 100;

resultado2 = resultado + num1;

alert("El aumento es de " + "$" + resultado);

document.getElementById("resultado").value = resultado2.toFixed(2);
}
