var num=parseInt(prompt('¿Cual es el numero que quieres tu tabla de multiplicar?'));
document.write("La tabla de multiplicar del  " +num+" es: </h1>");

for(i=1;i<=15;i++){
    var mult=i*num;
    document.write(i+' X '+num+' : '+mult+' <br>');
}

//todas las tablas de multiplicar

for(i=1;i<=15;i++){
    document.write("La tabla de multiplicar del  " +i+" es: </h1>");
    for(j=1;j<=15;j++){
    document.write(j+' X '+i+' : '+(i*j)+' <br/>');
}
}