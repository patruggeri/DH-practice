// Probamos .indexOf
let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]
let indiceJuan = alumnos.indexOf("Juan");
let indiceFrancisco = alumnos.indexOf("Francisco");

console.log(indiceJuan);
console.log(indiceFrancisco);


// Otro ejercicio
function menciona(texto, palabra) {
    if (texto.indexOf(palabra) != -1) {
        return true;
    } else {
        return false;
    };
};

console.log(menciona('Estoy estudiando JavaScript en el curso', 'programación'));
console.log(menciona('El sandwich tiene carne, jamon, queso y tomate', 'tomate'));
