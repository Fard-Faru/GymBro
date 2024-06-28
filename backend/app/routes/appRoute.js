const express = require("express");
const appController = require("../controllers/appController.js");

const router = express.Router();

router.get('/data', appController.getData);

module.exports = router;

