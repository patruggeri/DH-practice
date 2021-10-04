// ******* Modules require ********
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");

// ******* Services require ********
const productsService = require("../services/products-service");
const usersService = require("../services/users-service");

// ******* Validation results ********
const { validationResult } = require("express-validator");

// ******* Users database ********
const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
//let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

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
      const user = {
        fullName: req.body.fullName,
        age: req.body.age,
        email: req.body.email,
        category: req.body.userCategory,
        color: req.body.headerColor,
        password: bcrypt.hashSync(req.body.password, 10),
        avatar: req.file.filename,
      };
      const usersDB = fs.readFileSync(usersFilePath, "utf-8");
      let users;
      if (usersDB == "") {
        users = [];
      } else {
        users = JSON.parse(usersDB);
      }
      users.push(user);

      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync(path.join(__dirname, "../data/usersDataBase.json"), usersJSON);
      res.redirect("/");
    } else {
      res.render("register", { errors: errors.mapped(), oldValues: req.body });
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const usersDB = fs.readFileSync(usersFilePath, "utf-8");
      let users;
      if (usersDB == "") {
        users = [];
      } else {
        users = JSON.parse(usersDB);
      }
      for (let i = 0; i < users.length; i++) {
        if (
          req.body.email == users[i].email &&
          bcrypt.compareSync(req.body.password, users[i].password)
        ) {
          res.redirect("/");
          break;
        }
      }
      res.redirect("login");
    } else {
      res.render("login", { errors: errors.mapped(), oldValues: req.body });
    }
  },

  search: (req, res) => {
    // Do the magic
  },

  admin: (req, res) => {
    res.send(`Hola Admin: ${req.query.user}`);
  },
};

module.exports = controller;
