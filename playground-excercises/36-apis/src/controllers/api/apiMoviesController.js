const { Movie } = require("../../database/models");

module.exports = {
  create: async (req, res) => {
    const movie = await Movie.create(req.body);
    res.json({
      meta: {
        status: 201,
        url: "api/movies",
      },
      data: movie,
    });
  },
  destroy: async (req, res) => {
    const movie = await Movie.destroy({ where: { id: req.params.id } });
    res.json({
      meta: {
        status: 200,
        url: `api/movies/${req.params.id}`,
      },
      data: movie,
    });
  },
};
