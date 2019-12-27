var num1=parseInt(prompt('por favor ingresa el primer numero'));
var num2=parseInt(prompt('por favor ingresa segundo numero'));
var result="la Suma es :"+(num1+num2)+"<br/>"+
            "la Resta es :"+(num1-num2)+"<br/>"+
            "la Multiplicacion es :"+(num1*num2)+"<br/>"+
            "la Divicion es :"+(num1/num2)+"<br/>";

var result2="la Suma es :"+(num1+num2)+"\n"+
            "la Resta es :"+(num1-num2)+"\n"+
            "la Multiplicacion es :"+(num1*num2)+"\n"+
            "la Divicion es :"+(num1/num2)+"\n";


while(num1<0 || num2<0 || isNaN(num1) || isNaN(num2) ){
    num1=parseInt(prompt('por favor ingresar primer numero'));
    num2=parseInt(prompt('por favor ingresar segundo numero'));
} 

document.write(result);
console.log(result2);
alert(result2);
