`use strict`

//DOM - Document Object Moodem

function cambio(color,letra){

    caja1.style.background = color;
    caja1.style.color= letra;
}

//var caja1=document.getElementById("caja");

var caja1=document.querySelector("#caja");

caja1.innerHTML = "Texto en la caja desde JS";
caja1.style.background="blue";
caja1.style.padding = "20px";
caja1.style.color = "yellow";
caja1.className = "Hola , Hola2";

var alldivs= document.getElementsByTagName('div');

var seccion= document.querySelector("#miseccion");
var hr=document.createElement("hr");
var valor;

for(valor in alldivs){
    if(typeof alldivs[valor].textContent == "string"){
    var parr = document.createElement("p");
    var text = document.createTextNode(alldivs[valor].textContent);
    parr.append(text);
    seccion.append(parr);
    }
    }
seccion.append(hr);

