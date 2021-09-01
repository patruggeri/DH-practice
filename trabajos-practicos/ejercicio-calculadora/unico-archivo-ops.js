const operacionesCalculadora = [
    function sumar (numeroA, numeroB){
    let suma = numeroA + numeroB;
    return ("El resultado de sumar " + numeroA + " y " + numeroB + " es igual a: " + suma);
},
    function restar (numeroA, numeroB){
    let resta = numeroA - numeroB;
    return ("El resultado de restar " + numeroB + " a " + numeroA + " es igual a: " + resta);
},
    function multiplicar (numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return ("El resultado de multiplicar por 0 siempre será 0");
    } // else {}                     // else no es necesario aqui, porque hay un return dentro del if
    let multiplicacion = numeroA * numeroB;
    return ("El resultado de multiplicar " + numeroA + " y " + numeroB + " es igual a: " + multiplicacion);
},
    function dividir (numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return ("No se puede dividir por cero.")
    } else {
        division = numeroA / numeroB;
        return ("El resultado de dividir " + numeroA + " por " + numeroB + " es igual a: " + division);
    }
}
];
module.exports = operacionesCalculadora;