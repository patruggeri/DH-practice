const fs = require("fs");
const path = require("path");

const productsService = require("../services/products-service");

const controller = {
  // ----- Root - Show all products -----
  index: (req, res) => {
    res.render("products", { products: productsService.products });
  },

  // ----- Detail - Detail from one product -----
  detail: (req, res) => {
    // Find one product
    const product = productsService.findOneById(req.params.id);
    res.render("detail", { product: product });
  },

  // ----- Create - Form to create -----
  create: (req, res) => {
    res.render("product-create-form");
  },

  // ----- Create -  Method to store -----
  store: (req, res) => {
    // CreateOne (Save included)
    productsService.createOne(req.body, req.file);
    res.redirect("/products");
  },

  // ----- Update - Form to edit -----
  edit: (req, res) => {
    // Find one product
    const product = productsService.findOneById(req.params.id);
    res.render("product-edit-form", { product: product });
  },
  // ----- Update - Method to update -----
  update: (req, res) => {
    // Edit One (Find one & Save included)
    productsService.editOne(req.params.id, req.body, req.file);
    res.redirect("/products");
  },

  // ----- Delete - Delete one product from DB -----
  destroy: (req, res) => {
    // Destroy one (Save included)
    productsService.destroyOne(req.params.id);
    res.redirect("/products");
  },
};

module.exports = controller;
