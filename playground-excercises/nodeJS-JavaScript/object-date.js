// Para que el sistema imprima la fecha actual por consola
let fechaActual = new Date();

// Para que lo arroje en un formato mas friendly

let fechaActualFriendly = fechaActual.toUTCString();

console.log(fechaActualFriendly);

// Como obtener dia, mes y año
fechaActual.getDay();               // Devuelve el dia (Domingo = 0, Lunes = 1, etc)
let dia = fechaActual.getDate();              // Devuelve fecha del mes
let mes = fechaActual.getMonth();             // Devuelve el mes (Enero = 0, Febrero = 1, etc)
let anio = fechaActual.getFullYear();          // Devuelve el año

console.log("Hoy es el " + dia + " de " + (mes + 1) + " de " + anio);

// Puedo hacer 1 array con meses, para asignar el valor correcto en vez del numero
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log("Hoy es el " + dia + " de " + meses[mes] + " de " + anio);


// Como dar una fecha puntual
let miCumple = new Date(1990,10,16);
console.log(miCumple.toUTCString());