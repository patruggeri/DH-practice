const fs = require("fs");
const path = require("path");

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
};

module.exports = controller;
