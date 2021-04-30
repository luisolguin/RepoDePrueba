function printNum(){
	document.write("<p>");

	for(let i=0; i<10;i++){
		document.write(" "+i);

	}
	document.write("</p>");
}

function cuadrado(n){
	document.write("<p>");
	document.write("<br>");
	for(let j=0; j<n;j++){
	for(let i=0; i<n;i++){
		document.write("-*-");

	}
	document.write("<br>");
	}
	
	document.write("</p>");
}

let frutas=["Manzana","Platano","Guayaba","Pera","Fresa","Mora","Melon"];

function tomarFrutas(n){
	document.write("<p>");

	for(let i=0; i<n;i++){
		let indice=Math.floor(Math.random() * 10)%frutas.length;
		document.write(frutas[indice]+" ");
	}
	document.write("</p>");
}
//---------------Objeto Fruta-----------------------//
let cesto={};
cesto = {
	tipo : "(vacio)",
	seleccionarFruta : function(){
		let indice=Math.floor(Math.random() * 10)%frutas.length;
		this.tipo=frutas[indice];
	},
	imprimirFruta :  function(){
		document.write("<p>");
		document.write(this.tipo);
		document.write("</p>");
	}
};
