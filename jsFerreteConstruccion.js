/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho;
var largo;
var perimetro;
var alambre;

ancho = parseFloat(document.getElementById("Ancho").value);
largo = parseFloat(document.getElementById("Largo").value);

perimetro = (ancho + largo) * 2;

alambre = perimetro * 3;

alert("Se necesitara " + alambre.toFixed(2) + " metros de alambre");

}
function Circulo () 
{
var radio;
var diametro;
var circuenferencia;
radio = parseFloat(document.getElementById("Radio").value);	

diametro = radio * 2;

circunferencia = diametro * Math.PI;

alert("Se debe usar " + circunferencia.toFixed(2) * 3 + " de alambre");

}
function Materiales () 
{
var ancho;
var largo;
var cemento;
var cal;

ancho = parseInt(document.getElementById("Ancho").value);
largo = parseInt(document.getElementById("Largo").value);	


cal = ancho * 3;

cemento = largo * 2;

alert("Se necesita " + cal.toFixed(2) + " bolsas de cal y " + cemento.toFixed(2) + " bolsas de cemento");
}