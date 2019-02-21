function Mostrar()
{

var sexo = prompt("ingrese f ó m .");



document.getElementById('Sexo').value=sexo;

while (sexo != "m"  && sexo != "f")
{
    sexo =prompt ("Error, ingrese f ó m .")
}
document.getElementById("Sexo").value = ("Su sexo es ") + sexo;
}//FIN DE LA FUNCIÓN