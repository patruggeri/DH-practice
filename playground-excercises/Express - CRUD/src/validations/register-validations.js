const { body } = require("express-validator");

const registerValidations = [
  body("fullName").notEmpty().withMessage("Debe ingresar su nombre"),
  body("email")
    .notEmpty()
    .withMessage("Debe ingresar un correo electrónico")
    .bail()
    .isEmail()
    .withMessage("La dirección de e-mail ingresada no es válida"),
  body("age").isNumeric().withMessage("Por favor ingrese su edad"),
  body("password")
    .isStrongPassword()
    .withMessage("La contraseña es muy débil")
    .bail()
    .custom((value, { req }) => {
      if (value !== req.body.confirmPassword) {
        throw new Error("Las contraseñas no coinciden");
      }
      return true;
    }),
];

module.exports = registerValidations;
