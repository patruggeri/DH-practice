// ************ Require's ************
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// ************ Controller Require ************
const mainController = require("../controllers/mainController");

// ************ Initializing Multer ************
const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/avatar"),
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-avatar" + path.extname(file.originalname));
  },
});

const uploader = multer({ storage });

// ************ Middlewares ************
const adminAccess = require("../middlewares/adminAccess");

// ************ Validations ************
const registerValidations = require("../validations/register-validations");
const loginValidations = require("../validations/login-validations");

// *********** ROUTES ************
router.get("/", mainController.index);

router.get("/register", mainController.register);
router.post("/", uploader.single("avatar"), registerValidations, mainController.processRegister);

router.get("/login", mainController.login);
router.post("/login", loginValidations, mainController.processLogin);

router.get("/search", mainController.search);

router.get("/admin", adminAccess, mainController.admin);

module.exports = router;
