const express = require("express");
const appController = require("../controllers/appController.js");

const router = express.Router();

router.get('/data', appController.getData);

router.get('/getWeight', appController.getUserWeight);

module.exports = router;

