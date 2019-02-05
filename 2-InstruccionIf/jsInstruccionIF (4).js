function Mostrar()
{
//tomo la edad  

var edad;

edad = parseInt(document.getElementById("edad").value);

alert(edad)

if (edad >=13 && edad <=17)

{
    alert("Es dolescente");
}
else
{
    alert("No es adolescente");
}
}//FIN DE LA FUNCIÓN