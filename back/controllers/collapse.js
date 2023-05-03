const collapse = require("../models/Collapase");

exports.getAllCollapse = (req, res, next) => {
  collapse
    .find()
    .then((apparts) => {
      res.status(200).json(apparts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
