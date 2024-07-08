const express = require("express");
const appController = require("../controllers/appController.js");

const router = express.Router();

router.get('/data', appController.getData);

router.get('/getWeight', appController.getUserWeight);

router.post('/insertWeight', appController.postWeight);

router.post('/insertSignupData', appController.postSignup);

router.post('/postLoginData', appController.postLogin);

module.exports = router;

