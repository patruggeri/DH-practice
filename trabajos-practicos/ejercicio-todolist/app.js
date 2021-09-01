// Leer el archivo tareas.json
/*  (1) Debemos importar el modulo para interactuar con el sistema de archivos <--- FS
    (2) Luego leer el archivo json usando FS, en base al nombre del archivo <--- STRING
    (3) Luego descomprimir/traducir el archivo json <--- ARRAY CON OBJETOS
    (4) Guardar el array con objetos en una variable "tareas" */

const fs = require("fs");                   // 1

const textoJSON = fs.readFileSync("./tareas.json", "utf-8");  // 2

const tareas = JSON.parse(textoJSON);       // 3 y 4


// Imprimir todas las tareas en la terminal
/*  (5) Recorrer el array en "tareas".
    (6) Por cada una de las tareas, las asigno a una nueva variable.
    (7) Imprimir el titulo de la tarea linea a linea.
    (extra) Si quiero imprimir unicamente las pendientes, agrego un condicional. */

for (let i = 0; i < tareas.length; i++) {   // 5
    let tarea = tareas[i];                  // 6
    if (tarea.estado == "pendiente"){       // Extra
    console.log(tarea.titulo);              // 7
    };
}

switch (tareas){
    case process.argv[2] == listar:
        console.log (tareas);
        break;
    case process.argv[2] == undefined:
        console.log ("Atención - Tienes que pasar una acción.");
        break;
    case process.argv[2] == []:
        console.log ("No entiendo qué quieres hacer.");
        break;
};

/* process.argv --> Es una palabra reservada que nos lleva a interactuar
                    con la consola. argv es un ARRAY en el cual se recorren todas
                    las palabras escritas en la consola como indices. */
