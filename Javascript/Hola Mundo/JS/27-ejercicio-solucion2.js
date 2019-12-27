`use strict`
/*
-pedir 6 numeors por pantalla
-mostrar su elementos en la pagina y consola
-Ordeanr matriz y mostrar
-invertir su orden y mostrarlo
-cuanos elemento tiene el array
-busqueda valor introducido por el usuario, que diga si lo encuentra y su  indice
*/

//Solcuon independiente
var numeros = [];
var dato;




while(numeros.length <=5){
    dato = prompt("Ingresa un numero porfavor");
    numeros.push(dato);
}
document.write(numeros+"<br>");
console.log(numeros);


var orden= numeros.sort();
document.write("<h1> la matriz ordenada es </h1>"+orden);
console.log("la matriz ordenada es: "+orden);

var contra= numeros.reverse();
document.write("<h1> la matriz desordenada es </h1>"+contra);
console.log("la matriz desordenada es: "+contra);

document.write("El array tiene "+numeros.length+" elemnetos");

var busqueda= parseInt(prompt("Busca un numero",0));

var posicion =numeros.findIndex(numeros => numeros == busqueda);

if(posicion && posicion != -1){

    document.write("<hr/><h1>Encontrado </h1>");
    document.write("<h1> Posicion de la busqueda: "+posicion+"</h1></hr>");

}else{
    document.write("<hr/><h1> No encontrado </h1></hr>");
}

