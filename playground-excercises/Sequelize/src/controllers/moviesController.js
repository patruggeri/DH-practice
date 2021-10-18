const db = require("../database/models/index");

moviesController = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      res.render("moviesList", { movies });
    });
  },

  detail: (req, res) => {
    db.Movie.findByPk(req.params.id).then((movie) => {
      res.render("moviesDetail", { movie });
    });
  },

  recommended: async (req, res) => {
    movies = await db.Movie.findAll({ order: [["rating", "DESC"]], limit: 5 });

    res.render("recommendedMovies", { movies });
  },

  newest: async (req, res) => {
    const movies = await db.Movie.findAll({
      order: [["release_date", "DESC"]],
    });
    res.render("newestMovies", { movies });
  },
};

module.exports = moviesController;
