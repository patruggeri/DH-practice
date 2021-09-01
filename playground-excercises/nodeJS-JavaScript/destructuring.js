/*
Destructuring nos permite extraer datos de arrays y objetos literales
de una manera más sencilla y fácil de implementar.
*/

// Desestructurando ARRAYS
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [ , bariloche, , china, ] = destinosDelMundo;
// Dejo espacios donde no me interesa guardar tal o cual variable.
console.log(bariloche);


// Desestructurando OBJETOS --> Tomo unicamente las propiedades que quiero.
let auto = { marca: 'Ferrari', kilometros: 31, color: "Rojo" };
let { marca, color:tono } = auto;

console.log(tono);