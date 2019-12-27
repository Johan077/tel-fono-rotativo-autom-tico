/*
programa que diga dos numeros que diga cual es el mayor menro y si son iguales
si no es numero > volverl apedir0
*/


var num1=parseInt(prompt('ingrasr numero uno'));
var num2=parseInt(prompt('ingresar numero 2'));

while( num1 <=0 || num2 <=0 || isNaN(num1) || isNaN(num2)){
    
var num1=parseInt(prompt('ingrasr numero uno'));
var num2=parseInt(prompt('ingresar numero 2'));
}
    if(num1 > num2){
        alert("El numero mayor es :"+num1);
        alert("El numero menor es : "+num2);
    }else if(num1 == num2){
        alert("el "+num1+"  es igual a "+num2);
    }else{
        alert("el numero mayor es "+num2);
        alert("El numero menor es "+ num1);
    }
