const express = require("express");
const router = express.Router();

const apiGenresRouter = require("./apiGenresRoutes");

router.use(apiGenresRouter);

module.exports = router;

/* Creamos este archivo "api/index.js" para centralizar todas las operaciones para la API desde aqui */
