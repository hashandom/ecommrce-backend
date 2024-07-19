const express = require('express');
const router = express.Router();

const userDetailsController = require('../controller/userDetails')
const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignin');
const authToken = require('../middleware/authToken');

router.post("/signUp",userSignUpController);
router.post("/login",userSignInController);
router.get("/user-details",authToken, userDetailsController);

module.exports = router;