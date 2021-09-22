// ******* Services require ********
const productsService = require("../services/products-service");
const usersService = require("../services/users-service");

// ******* Validation results ********
const { validationResult } = require("express-validator");

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

  register: (req, res) => {
    res.render("register");
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      res.redirect("index");
    } else {
      res.render("register", { errors: errors.array(), values: req.body });
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    res.redirect("index");
  },

  search: (req, res) => {
    // Do the magic
  },

  admin: (req, res) => {
    res.send(`Hola Admin: ${req.query.user}`);
  },
};

module.exports = controller;
