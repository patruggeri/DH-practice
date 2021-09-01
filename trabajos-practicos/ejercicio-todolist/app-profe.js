// Leer el archivo tareas.json
// importar el archivo json <--- string
// >>importar modulo para interactuar con el sistema de archivos ("fs")
const fs = require("fs");
// >>leer el archivo usando fs, en base al nombre del archivo
const textoJSON = fs.readFileSync("./tareas.json", "utf-8");

// descomprimir/traducir el archivo json <--- array con objetos
// guardar mi array de objetos en una variable "tareas"
const tareas = JSON.parse(textoJSON);

// dependiendo de la acción que nos llega como tercer parámetro
const accion = process.argv[2];

// tomamos diferentes medidas
switch (accion) {
  //Si la accion es "listar", listo todas las tareas
  case "listar": {
    listar();
    break;
  }
  //Si no hay un tercer parametro, doy el mensaje "Debés usar un parámetro de acción"
  case undefined: {
    console.log("Debés usar un parámetro de acción");
    break;
  }
  //Si la accion es cualquier otra cosa, doy el mensaje "No entiendo lo que querés que haga"
  default: {
    console.log("No entiendo que querés que haga");
  }
}

function listar() {
  // Imprimir todas las tareas en la terminal
  // Recorrer ese array en "tareas"
  // > Por cada una de las tareas en ese array
  for (let i = 0; i < tareas.length; i++) {
    // >> asignar el elemento a una variable llamada "tarea"
    const tarea = tareas[i];
    // >> Imprimir el titulo de la tarea
    console.log(`(${i}) - ${tarea.titulo} [${tarea.estado}]`);
  }
}
