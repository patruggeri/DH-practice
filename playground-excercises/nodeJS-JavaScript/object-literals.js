/* Para este ejercicio contamos con un objeto literal deportista ya definido,
que tiene los siguientes atributos: nombre, energia, experiencia.

Queremos poder pedirle al deportista que entrene.
Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

La función entrenarHoras tiene las siguientes tres características:
- Recibe por parámetro la cantidad de horas.
- Resta a su energía (this.energia) la cantidad de horas x 5.
- Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.

Una vez definida la función, podemos ejecutar el código y ver cómo va variando
la energía y experiencia del deportista por consola.
*/
let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantHoras) {
        this.energia = this.energia - cantHoras * 5;
        this.experiencia = this.experiencia + cantHoras * 2;
    }
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("---------------------------------");
console.log("---------------------------------");


// Con una funcion constructora, creamos varios objetos

function Celular(marca, modelo, gama, lanzamiento){
    this.marca = marca;
    this.modelo = modelo;
    this.gama = gama;
    this.lanzamiento = lanzamiento;
};

let miCelular = new Celular("Samsung", "S21", "Alta", 2021);
let otroCelular = new Celular("Motorola", "G9", "Media", 2021);
let unCelularMas = new Celular("Apple", "Iphone 12 Pro Max", "Alta", 2020);

console.log(miCelular);
console.log(otroCelular);
console.log(unCelularMas);
