/* Crear función llamada dividir. Esta función deberá recibir 2 parámetros y retornar
la división de los mismos. Debe ser exportada al final del archivo.*/

function dividir (numeroA, numeroB){
    if(numeroA == 0 || numeroB == 0){
        return ("No se puede dividir por cero.")
    } else {
        division = numeroA / numeroB;
        return ("El resultado de dividir " + numeroA + " por " + numeroB + " es igual a: " + division);
    }
};

module.exports = dividir;