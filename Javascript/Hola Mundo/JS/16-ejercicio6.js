var num=parseInt(prompt('Ingresa un numero por favor'));

while( num <0 || isNaN(num)){
 var num=parseInt(prompt('Porfavor ingresa un numero mayor a 0'));
}

var par=num%2;
if(par == 0){
  console.log('el numero '+num+' es un numero par');
}else{
    console.log('El numero '+num+' es un numero impar');
}