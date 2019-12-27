`use strict`
var nombre=prompt("porfavor ingresa tu nombre");
var apellido=prompt("porfavor ingresa tu apellido");

var texto=`
        <h1> Hola que tal </h1>
        <h3> Mi nombre es: ${nombre} </h3>
        <h3> Mi apellido es: ${apellido} </h3>
           `;
document.write(texto);
