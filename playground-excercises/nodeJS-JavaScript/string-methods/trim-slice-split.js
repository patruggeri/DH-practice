
let frase = "     Me gusta jugar al basquet      ";
let deportes = ['futbol', 'tenis', 'natacion'];

// Probando trim()
let otraFrase = frase.trim()
console.log(otraFrase);

// Probando .slice()
console.log(otraFrase.slice(9,25));
console.log(otraFrase.slice(9,30));    // Solo cuenta hasta el ultimo caracter (25)
console.log(otraFrase.slice(-10));     // Comienza a contar desde el final, sin tener en cuenta el 0
console.log(otraFrase.slice(18));      // Si le damos 1 solo parametro, corta hasta el final del string


// Probando .push() en conjunto con slice()
deportes.push(otraFrase.slice(18));
console.log(deportes);


console.log("----------------------------")


// Probando .split()
console.log(otraFrase.split());
console.log(otraFrase.split(' '));

let nuevaFrase;    // No puedo ejecutar ott otraFrase.split() porque me va a dar error.