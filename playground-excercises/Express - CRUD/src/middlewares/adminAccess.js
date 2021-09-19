const admins = ["Ada", "Greta", "Vim", "Tim"];

const adminAccess = function (req, res, next) {
  for (let i = 0; i < admins.length; i++) {
    if (req.query.user == admins[i]) {
      next();
    }
    res.send("No tienes los privilegios para ingresar");
  }
};

module.exports = adminAccess;
