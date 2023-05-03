const Appart = require("../models/Appartment");

exports.getAllAppartments = (req, res, next) => {
  Appart.find()
    .then((apparts) => {
      res.status(200).json(apparts);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

// lire un appart
exports.getOneAppartment = (req, res, next) => {
  Appart.findOne(req.params.id)
    .then((appart) => {
      res.status(200).json(appart);
    })
    .catch((error) => {
      res.status(404).json({
        error: error,
      });
    });
};
