function porConsola(num1,num2){   
    console.log("suma: "+(num1+num2));
    console.log("resta: "+(num1-num2));
    console.log("multiplicacion: "+(num1*num2));
    console.log("divicion: "+(num1/num2));
    console.log("************************* ");
    //return "!Hola soy la calculadora¡";
  
}
function porPantalla(num1,num2){
    document.write("suma: "+(num1+num2)+" <br/>");
    document.write("resta: "+(num1-num2)+" <br/>");
    document.write("multiplicacion: "+(num1*num2)+" <br/>");
    document.write("divicion: "+(num1/num2)+" <br/>");
    document.write("************************* " +" <br/>");
    }
function calculadora(num1,num2,mostrar=false){

    if(mostrar ==false){ 
        porConsola(num1,num2);
    }else{
        porPantalla(num1,num2);
    }
    return true;
}
calculadora(12,8);
calculadora(2,5,true);
calculadora(4,5,true);

/*
for(var i=1;i<=10;i++){
    console.log(i);
    calculadora(i,7);
} */
