// ******* Services require ********
const productsService = require("../services/products-service");

const controller = {
  index: (req, res) => {
    // FilterbyCategory
    const visitedProducts = productsService.filterByCategory("visited");
    const inSaleProducts = productsService.filterByCategory("in-sale");
    res.render("index", {
      visitedProducts: visitedProducts,
      inSaleProducts: inSaleProducts,
    });
  },
  search: (req, res) => {
    // Do the magic
  },
  admin: (req, res) => {
    res.send(`Hola Admin: ${req.query.user}`);
  },
};

module.exports = controller;
