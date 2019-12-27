/*var num1=parseInt(prompt('ingresa un numero'))
var num2=parseInt(prompt('ingresa numero 2'));
document.write("<h1> de "+num1+" a "+num2+" estan estos numeros impares </h1>");
for(i=num1;i<=num2;i++){
    var par=num1%2;
    if(num1 != par){
        document.write(i+" es un numero impar <br>")
    }else{
    }
} */

var num1=parseInt(prompt('ingresa numero 1'));
var num2=parseInt(prompt('Ingresa nuemro 2'));

while(num1 < num2){
    num1++;
    if((num1%2)!=0){
        console.log("El "+num1+" es impar");
    }
}