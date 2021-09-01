/* Crear función llamada restar. Esta función deberá recibir 2 parámetros y retornar
la resta de los mismos. Debe ser exportada al final del archivo.*/

function restar (numeroA, numeroB){
    let resta = numeroA - numeroB;
    return ("El resultado de restar " + numeroB + " a " + numeroA + " es igual a: " + resta);
};

module.exports = restar;