## PASO A PASO

1. Inicializar el proyecto de Javascript --> `npm init -y`
    - Me crea el package.json - Este contiene la info base del proyecto: punto de entrada, autor, dependencias, etc
2. Crear app.js --> Es el punto de entrada del proyecto. (Si lo creo antes de npm init, no hace falta punto 3)
3. Modificar el punto de entrada de package.json a `app.js`
4. Instalar la dependencia express --> `npm install express`
5. Requerir el módulo de express en app.js --> `const express = require("express")`
6. Requerir el módulo de path (sirve para construir rutas correctas) --> `const path = require("path")`
6. Crear app de express --> `const app = express()`
7. Dar visibilidad a la carpeta public con archivos estaticos --> `app.use(express.static(path.join(__dirname, "public")))`
8. Levantar servidor en el puerto reservado --> `app.listen(puerto,() => console.log("Servidor corriendo"))`
9. Construir la estructura de carpetas: public, controllers, routers, views
10. Crear las rutas necesarias --> Importante la utilización de RUTAS ABSOLUTAS (`__dirname`) con path.join


