const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const controller = {
  // Root - Show all products
  index: (req, res) => {
    res.render("products", { products: products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    // findOneById
    const product = products.find((prod) => {
      return prod.id == req.params.id;
    });
    res.render("detail", { product: product });
  },

  // Create - Form to create
  create: (req, res) => {
    res.render("product-create-form");
  },

  // Create -  Method to store
  store: (req, res) => {
    const lastProduct = products[products.length - 1];
    const biggestProdId = products.length > 0 ? lastProduct.id : 0;
    const product = {
      id: biggestProdId + 1,
      ...req.body, // --> Este spread op. nos trae toda la info del body y la completa donde corresponde.
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      image: req.file ? req.file.filename : "default-image.png",
    };
    products.push(product);

    // Save
    const productsJSON = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, productsJSON);
    res.redirect("products");
  },

  // Update - Form to edit
  edit: (req, res) => {
    // findOneById
    const product = products.find((prod) => {
      return prod.id == req.params.id;
    });
    res.render("product-edit-form", { product: product });
  },
  // Update - Method to update
  update: (req, res) => {
    // findOneById
    const product = products.find((prod) => {
      return prod.id == req.params.id;
    });

    product.name = req.body.name;
    product.price = Number(req.body.price);
    product.discount = Number(req.body.discount);
    product.category = req.body.category;
    product.description = req.body.description;
    product.image = req.file ? req.file.filename : product.image;

    // Save
    const productsJSON = JSON.stringify(products, null, 2);
    fs.writeFileSync(productsFilePath, productsJSON);

    res.redirect("/products");
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    const newProductsList = products.filter((prod) => {
      return prod.id != req.params.id;
    });

    // Save
    const productsJSON = JSON.stringify(newProductsList, null, 2);
    fs.writeFileSync(productsFilePath, productsJSON);

    res.redirect("/products");
  },
};

module.exports = controller;
