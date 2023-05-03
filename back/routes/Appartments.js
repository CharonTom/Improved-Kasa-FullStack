const express = require("express");
const router = express.Router();

// import

const appartCtrl = require("../controllers/appartment");
const collapseCtrl = require("../controllers/collapse");

router.get("/appart", appartCtrl.getAllAppartments);
router.get("/collapse", collapseCtrl.getAllCollapse);
//router.get("/:id", appartCtrl.getOneAppartment);

module.exports = router;
