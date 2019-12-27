var edad=prompt('Porfavor ingresar edad de usuario');
var nombre=prompt('Porfavor ingresar nombre de usuario');


if(edad>=18){
        console.log(nombre+" tiene "+edad+" años de edad el es mayor de edad");
    if(edad <=33){
        console.log(nombre+" tiene "+edad+" años, todavia eres milenian");        
    }else if(edad >=70){
        console.log(nombre+" tiene "+edad+" años, es una persona de la tercera edad");
    }else{
        console.log(nombre+" tiene "+edad+" años, ya no eres milenian ");    
    }
}else{
    console.log(nombre+" tiene "+edad+" años, es menor de edad")
}

/* Operadores Logicos

AND(Y): &&;
OR(O): ||;
Negación: !;
*/

var year=2028;
//Negacion

if(year != 2016){
    console.log("El año no es 2016, realmete es "+year);
}

//AND

if(year >= 2000 && year <=2020){
    console.log("Estas en la era actual");
}else{
    console.log("estas en la era postmoderna");
}

//OR

if(year == 2008 || (year >=2018 && year == 2028)){
    console.log("el año termina en 8");
}else{
    console.log("año no registrado");
}
