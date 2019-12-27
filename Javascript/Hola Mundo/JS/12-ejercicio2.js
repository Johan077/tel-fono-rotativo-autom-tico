/*
utlizando un bucle ,mosotrr la suma y la media de los numeros introducidos
hasta untroducir un numero negativo y hay  mostrar el resultado
*/

var suma=0;
var contador=0;

do{
    var num= parseInt(prompt("introduce numero hasta uno negativo",0));
    if (isNaN(num)){
        num=0;
    }else if(num >=0){
        suma+=num;
        contador++;
    }
    console.log(suma);
    console.log(contador);
}while(num >=0)
alert('la suma de los numeros es '+suma);
alert("la media es "+(suma/contador));
