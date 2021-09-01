// Importar express
const express = require("express");

// Importar path
const path = require("path");

// Crear la app de express
const app = express();

// Instalamos el template engine EJS y le decimos a Express que será el que utilizaremos
app.set("view engine", "ejs");
app.set("views", "./src/views");

// Dejamos disponible la carpeta de archivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Prendemos el servidor web
app.listen(3000, console.log("Server running smoothly on port 3000"));


// Linkeamos la carpeta routers
const mainRouter = require("./src/routers/main-routes");
app.use(mainRouter);
