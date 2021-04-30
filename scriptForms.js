function funcionFormulario(){
	let datos = document.forms[0].elements;
 	document.getElementById("datos").innerHTML = "Nombre: "+datos["fname"].value+" Apellido: "+datos["lname"].value;
}