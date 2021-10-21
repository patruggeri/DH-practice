const express = require("express");
const router = express.Router();
const moviesController = require("../../controllers/api/apiMoviesController");

router.post("/movies", moviesController.create);
router.delete("/movies/:id", moviesController.destroy);

module.exports = router;
