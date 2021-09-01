/* Crear función llamada sumar. Esta función deberá recibir 2 parámetros y retornar
la suma de los mismos. Debe ser exportada al final del archivo.*/

function sumar (numeroA, numeroB){
    let suma = numeroA + numeroB;
    return ("El resultado de sumar " + numeroA + " y " + numeroB + " es igual a: " + suma);
};

module.exports = sumar;