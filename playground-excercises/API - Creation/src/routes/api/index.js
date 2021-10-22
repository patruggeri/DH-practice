const express = require("express");
const router = express.Router();

const apiGenresRouter = require("./apiGenresRoutes");
const apiMoviesRouter = require("./apiMoviesRoutes");

router.use(apiGenresRouter);
router.use(apiMoviesRouter);

module.exports = router;

/* Creamos este archivo "api/index.js" para centralizar todas las operaciones para la API desde aqui */
