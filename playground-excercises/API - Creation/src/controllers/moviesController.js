const { Movie, Genre } = require("../database/models");
const { Op } = require("sequelize");

const fetch = require("node-fetch");

const moviesService = require("../services/movies-service");

// ASYNC / AWAIT
module.exports = {
  search: async (req, res) => {
    const title = req.query.title;
    const movies = await Movie.findAll({
      where: {
        title: { [Op.like]: `%${title}%` },
      },
    });
    if (movies.length > 0) {
      res.render("moviesList", { movies });
      return;
    } else {
      // REQUEST A OMDB
      /* Llave única para comunicarme con el server de la API */
      const apiKey = "d4e35e92";
      /* Url de la API incluyendo la llave */
      const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${req.query.title}`;
      /* Proceso de conexión con node-fetch */
      const httpResult = await fetch(url);
      const movie = await httpResult.json();

      if (movie.Error) {
        res.send("Película inexistente, prueba con otra cosa");
      } else {
        res.render("moviesDetailOmdb", { movie });
      }
    }
  },
  list: (req, res) => {
    Movie.findAll({
      include: [{ association: "genre" }, { association: "actors" }],
    }).then((movies) => {
      res.render("moviesList", { movies });
    });
  },
  new: async (req, res) => {
    const movies = await Movie.findAll({
      order: [
        ["release_date", "DESC"],
        ["title", "ASC"],
      ],
      limit: 5,
    });
    res.render("newestMovies", { movies });
  },
  recommended: async (req, res) => {
    const movies = await Movie.findAll({
      order: [["rating", "DESC"]],
      limit: 5,
    });
    res.render("recommendedMovies", { movies });
  },
  detail: async (req, res) => {
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    res.render("moviesDetail", { movie });
  },

  add: (req, res) => {
    res.render("moviesAdd");
  },
  create: async (req, res) => {
    await Movie.create(req.body);
    res.redirect("/movies");
  },

  edit: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id, { include: ["genre"] });
    const genres = await Genre.findAll();
    res.render("moviesEdit", { movie, genres });
  },

  update: async (req, res) => {
    await Movie.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect(`/movies/detail/${req.params.id}`);
  },

  delete: async (req, res) => {
    const movie = await Movie.findByPk(req.params.id);
    res.render("moviesDelete", { movie });
  },

  destroy: async (req, res) => {
    await moviesService.delete(req.params.id);
    res.redirect("/movies");
  },
};
