// Objeto literal de Javascript
const tarea = {
    titulo: "Practicar el switch",
    estado: "pendiente"   // No puede ser booleano pq tengo 3 estados posibles, y no 2.
}

// Array de tareas

const tareas = [
    {
        titulo: "Practicar el switch",
        estado: "pendiente"
    },
    {
        titulo: "Practicar el ciclo for",
        estado: "en proceso"
    },
    {
        titulo: "Comprar viveres",
        estado: "terminado"
    },
];

// Para obtener la propiedad "titulo" de la tarea nro 3:
console.log(tareas[2].titulo);