/* Crear función llamada multiplicar. Esta función deberá recibir 2 parámetros y retornar
el producto de los mismos. Debe ser exportada al final del archivo.*/

function multiplicar (numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return ("El resultado de multiplicar por 0 siempre será 0");
    } // else {}                     // else no es necesario aqui, porque hay un return dentro del if
    let multiplicacion = numeroA * numeroB;
    return ("El resultado de multiplicar " + numeroA + " y " + numeroB + " es igual a: " + multiplicacion);
    };

module.exports = multiplicar;