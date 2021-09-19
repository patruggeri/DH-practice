const fs = require("fs");
const path = require("path");

const logMiddleware = (req, res, next) => {
  fs.appendFileSync(
    path.join(__dirname, "../logs/user-logs.txt"),
    `El usuario ingresó a la ruta: ${req.url}\n`
  );

  next();
};

module.exports = logMiddleware;
