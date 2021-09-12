const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  index: (req, res) => {
    // FilterbyCategory
    const visitedProducts = products.filter((prod) => {
      return prod.category == "visited";
    });
    // FilterbyCategory
    const inSaleProducts = products.filter((prod) => {
      return prod.category == "in-sale";
    });
    // Luego renderizar la vista index con estos arrays.
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
