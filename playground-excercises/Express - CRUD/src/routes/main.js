// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

// ************ Middlewares ************
const adminAccess = require("../middlewares/adminAccess");

router.get("/", mainController.index);
router.get("/search", mainController.search);
router.get("/admin", adminAccess, mainController.admin);

module.exports = router;
