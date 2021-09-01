const operaciones = require("./unico-archivo-ops");

sumar = operaciones[0];
restar = operaciones[1];
multiplicar = operaciones[2];
dividir = operaciones[3];


// Ejecutamos las funciones con valores random.
resultadoSuma = sumar(14, 3);
resultadoResta = restar(30795,15808.89);
resultadoMultiplicar = multiplicar(50,82);
resultadoDividir = dividir(5,20);

// Ejecutamos la funcion multiplicar asignando algun argumento = 0.
resultadoMultiplicarPor0 = multiplicar(41,0);

// Ejecutamos la funcion dividir asignando algun argumento = 0.
resultadoDividirPor0 = dividir(0,22);

// Mostramos en terminal el resultado.
console.log(resultadoSuma);
console.log(resultadoResta);
console.log(resultadoMultiplicar);
console.log(resultadoDividir);
console.log(resultadoMultiplicarPor0);
console.log(resultadoDividirPor0);

