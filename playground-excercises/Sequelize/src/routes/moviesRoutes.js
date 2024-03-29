const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");

router.get("/movies", moviesController.list);
router.get("/movies/newest", moviesController.newest);
router.get("/movies/recommended", moviesController.recommended);
router.get("/movies/detail/:id", moviesController.detail);

module.exports = router;
