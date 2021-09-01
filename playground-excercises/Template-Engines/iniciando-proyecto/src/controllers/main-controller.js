const path = require("path");

const mainController = {
    home: (req, res) => {
        return res.render("home");
    },
    about: (req, res) => {
        return res.render("about");
    }
}

module.exports = mainController;