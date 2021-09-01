/*
Vamos a crear tres funciones:
- La primera se llamará doble. Esta recibirá un número y retornará el doble.
- La segunda se llamará triple. Esta recibirá un número y retornará el triple.
- La tercera se llamará aplicarCallback y recibirá por parámetro un numero y una función.
  Esta retornará el valor de aplicar dicha función al valor que recibió.
*/
let doble = n1 => n1 * 2;
let triple = n1 => n1 * 3;
let aplicarCallback = (n1, funcion) => funcion(n1);

console.log(aplicarCallback(5, doble));

/*
CALCULADORA
- Creemos cuatro funciones que realicen las operaciones principales de una calculadora.
- Creemos la función calculadora, la cual recibirá dos parámetros numéricos y una función,
  que será nuestro callback.
*/
let sumar = (n1, n2) => n1 + n2;
let restar = (n1, n2) => n1 - n2;
let multiplicar = (n1, n2) => n1 * n2;
let dividir = (n1, n2) => n1 / n2;

let calculadora = (n1, n2, funcion) => funcion(n1, n2);

console.log(calculadora(8, 3, multiplicar));

/*
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos
de un array.
Para esto debemos completar la función procesar. Esta recibe dos parámetros:
1. El primer parámetro es un array.
2. El segundo parámetro que recibe es una función (callback).
La función deberá retornar un array donde cada elemento es el resultado de aplicar
la función pasada a un elemento del array pasado.
*/

function agregarHttp(url) {
    return ("http://" + url);
};

function procesar(unArray,operacion){
    let contador = [];
    for(i = 0; i < unArray.length; i++){
    contador[i] = operacion(unArray[i]);  // (!)
    };
    return contador;
};

/*
(!) Lo mejor seria utilizar --> contador.push(operacion(unArray[i]))
    En otros lenguajes, utilizar "contador[i]" no es correcto, pero en JS si lo es.
*/

console.log(procesar(["www.google.com","www.yahoo.com"], agregarHttp));