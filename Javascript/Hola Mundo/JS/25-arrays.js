`use strict`

var nombres="Johan Borda";
var primos=["Johan Borda","Daniel Borda","Felipe Borda","Santiago Borda","Andres Cardenas","Fernando Borda", "David Santos","Cristian Cardenas"];
var lenguajes=new Array("JS","Java","PHP","SQL","Python");

/*
console.log(primos.length);
var elemt=parseInt(prompt("que elemento del array quieres",0));
if(elemt <= primos.length){
    alert("el primo seleccionado es: "+primos[elemt]);
}else{
    alert("por favor ingresar un numero de elemento  "+primos.length);
}
*/

/*
document.write("<h1>lenguajes de programacion </h1>");
for(i=0;i<lenguajes.length;i++){
document.write("<li>"+lenguajes[i]+"</li>");
}

lenguajes.forEach((elemento,indicie,arra)=>{
    console.log(arra);
    document.write("<li>"+indicie+" - "+elemento+"</li>");
}) */

for(let lenguaje in lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+"</li>");
}
document.write("</ul>");

//Busquedas

var precios=[10,20,50,80,12];
//var busqueda=lenguajes.findIndex(lenguaje =>  lenguaje == "PHP");
var busqueda=precios.some(precio =>  precio < 10);

console.log(busqueda);