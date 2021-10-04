const path = require("path");
const { body } = require("express-validator");

const registerValidations = [
  body("fullName").notEmpty().withMessage("Debe ingresar su nombre"),
  body("email")
    .notEmpty()
    .withMessage("Debe ingresar su correo electrónico")
    .bail()
    .isEmail()
    .withMessage("La dirección de e-mail ingresada no es válida"),
  body("age").isNumeric().withMessage("Por favor ingrese su edad"),
  body("password")
    .notEmpty()
    .withMessage("Debe ingresar una contraseña")
    .bail()
    .isStrongPassword()
    .withMessage("La contraseña es muy débil")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
  body("userCategory").notEmpty().withMessage("Debe elegir una categoría de cliente"),
  body("avatar").custom((value, { req }) => {
    let file = req.file;
    let acceptedExt = [".jpg", ".jpeg", ".png", ".gif"];
    if (!file) {
      throw new Error("Debes seleccionar una imagen de perfil");
    } else {
      let fileExt = path.extname(file.originalname);
      if (!acceptedExt.includes(fileExt)) {
        throw new Error(`Las extensiones de archivo permitidas son ${acceptedExt.join(", ")}`);
      }
    }
    return true;
  }),
];

module.exports = registerValidations;
