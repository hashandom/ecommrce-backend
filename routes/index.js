const express = require('express');

const router = express.Router();

const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignin');

router.post("/signUp",userSignUpController)
router.post("/login",userSignInController);

module.exports = router;