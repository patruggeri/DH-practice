### RETOMANDO CONCEPTOS ###


## Variables

Me sirve para guardar datos, informacion


## Tipos de datos

- boolean: verdadero o falso
- string: cadena de caracteres o texto
- number: valores numericos
- NaN: no es un numero, es el resultado de un error matematico
- undefined y null: la ausencia de un valor
- Las funciones son un tipo especial de datos --> Lo veremos proximamente

- objects: coleccion de datos {}

El objeto consta de una DUPLA:
<key>: "value"
Cada llave tiene relacion con el resto. La coleccion representa una cosa tangible, que se forma a traves de agrupar estos datos.

```js
const libro = {
    autor: "Patricio Ruggeri",
    libro: "Aprendiendo JS",
    "anio-publicacion": 2021      // Si el <key> contiene algun caracter especial (ej: "-") se debe colocar entre comillas para que no se confunda con una resta.
}
const autor = libro.autor;
const anio = libro["anio-publicacion"]  // Si el <key> se escribe con comillas, solo podemos usar este metodo
```


- array: coleccion de datos []

No hay relacion entre los datos, pero SI intentamos que haya siempre una relacion entre los TIPOS de datos.

```js
const libros = [
{
    autor: "Patricio Ruggeri",
    libro: "Aprendiendo JS",
    año: 2020
},
{
    autor: "Patricio Ruggeri",
    libro: "Aprendiendo Node.js",
    año: 2021
}
];
const primerLibro = libros[0];
const autor = primerLibro.autor  // o bien: const autor = primerLibro["autor"]
```


## Funciones

Son para repetir un bloque de codigo las veces que lo necesitemos


