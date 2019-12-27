var num1=parseInt(prompt('porfavor ingresar numpero '));
document.write("<h1> Los numeros divisbles del numero " +num1+" son: <h1>")

for(i=1;i<=num1;i++){
    div=num1%i;
    if(div ===0){
        document.write(i+"<br>");
    }
} 