`use strict`

var categorias=["accion","terror","comedia"];
var peliculas=["Duro de matar 4","Hollwen","Son como niños"];

var cine=[categorias,peliculas];
peliculas.sort();
peliculas.reverse();
console.log(peliculas);
//console.log(cine[0][1]);
//console.log(cine[1][2]);

/*
var elemento="";

do{
    elemento=prompt("introduce tu pelicula");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop();
peliculas[0]=undefined;
 */

 var indice=peliculas.indexOf("hollwen");
 if(indice != -1){
     peliculas.splice(indice);
 }

var string=peliculas.join();
var cadena="texto1, texto2, texto3, texto4";
var caden_array=cadena.split(", ");
console.log(caden_array);