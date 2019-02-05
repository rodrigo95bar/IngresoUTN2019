function Mostrar()
{
//tomo la edad  
var edad;

edad = parseInt(document.getElementById("edad").value);


alert(edad);

if (edad >= 18) 
{ 
    alert("es mayor de edad");

}
else 
{ 
    alert ("Es menor de edad");
}

}//FIN DE LA FUNCIÓN