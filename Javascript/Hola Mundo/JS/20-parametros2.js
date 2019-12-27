//Parametros Rest y Spread

function listfrut(frut1,frut2,...mas_frutas){
    console.log("fruta 1 :"+frut1);
    console.log("fruta 2: "+frut2);
    console.log(mas_frutas);
}

listfrut("naranja","Manzana","sandia","pera","Melon");
var frutas=["naraja","Manzana"];
listfrut(...frutas,"sandia","pera");


