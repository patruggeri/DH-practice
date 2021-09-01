### OTRA FORMA DE HACERLO ###
Tambien podriamos haber generado todas las operaciones en un mismo archivo, encerrando en un string a todas ellas y luego exportandolo a la calculadora (VER: unico-archivo-ops).

Ya en la calculadora, importamos dicho archivo y luego asignamos las variables correspondientes (sumar, restar, multiplicar, dividir) a su correspondiente indice del string --> [0, 1, 2, 3]

Luego invocamos las funciones como de costumbre (VER: calculadora-unico).
--------------------------------------------------------------
Seria un error escribir las funciones de forma independiente en el mismo archivo para luego hacer "module.exports" de cada una de ellas, pues estariamos sobreescribiendo dicho "module.exports" y unicamente importariamos la ultima funcion.


### LO IDEAL ###
En principio, lo ideal es crear modulos independientes con distintas funcionalidades para evitar arrastre de errores y bloques de codigo muy extensos, que podrian generar confusiones.
