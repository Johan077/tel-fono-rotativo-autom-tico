`use strict`
/*
-pedir 6 numeors por pantalla
-mostrar su elementos en la pagina y consola
-Ordeanr matriz y mostrar
-invertir su orden y mostrarlo
-cuanos elemento tiene el array
-busqueda valor introducido por el usuario, que diga si lo encuentra y su  indice
*/
//var numeros =new Array(6);
var numeros=[];
function print(elementos, textoCustom=""){
    document.write("<h1> contenido del array"+textoCustom+" </h1>");
    document.write("<ul>");
    numeros.forEach((elemento, index) =>{
    document.write("<li>"+elemento+"</li>")
});
document.write("<ul>");
}

for(i=0;i<=5;i++){
    //numeros[i]= parseInt(prompt("introduce un numero",0));
    numeros.push(parseInt(prompt("introduce un numero",0)));
}

print(numeros);
//Mostrar Array por Consola
console.log(numeros);

numeros.sort(function(a,b){return a-b});
print(numeros, "ordenados");

numeros.reverse();
print(numeros, "revertido");


document.write("<h1> el array tiene "+numeros.length+" elementos </h1>");

