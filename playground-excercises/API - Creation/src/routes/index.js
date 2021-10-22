const express = require("express");
const genresRouter = require("./genresRoutes");
const moviesRouter = require("./moviesRoutes");
const authRouter = require("./authRoutes");
const apiRouter = require("./api/index");

const loginMiddleware = require("../middlewares/login-middleware");

const router = express.Router();

router.use(loginMiddleware);

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Digital Movies" });
});

router.use(genresRouter);
router.use(moviesRouter);
router.use(authRouter);
/* Aqui podriamos cambiar en el futuro desde donde accedemos a las rutas de API. Si no lo aclaramos aqui, tendriamos que hacerlo dentro de cada ruta puntualmente, lo cual no seria muy practico. */
router.use("/api", apiRouter);

module.exports = router;
