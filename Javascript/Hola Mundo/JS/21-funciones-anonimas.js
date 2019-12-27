//funciones anonimas

var pelicula=function(nombre){
    return "la pelicula es :"+nombre;
}

function suma(num1,num2,sum_mostrar,sumapor2){
    var sumar=num1+num2;
    sum_mostrar(sumar);
    sumapor2(sumar);

    return sumar;

}
suma(5,7,dato => {
    console.log("la suma es: "+dato)},
    dato => {
    console.log("la suma por 2 es: "+(dato*2))
    }
)