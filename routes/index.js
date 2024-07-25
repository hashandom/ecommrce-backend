const express = require('express');
const router = express.Router();

const userDetailsController = require('../controller/userDetails')
const userSignUpController = require('../controller/userSignUp');
const userSignInController = require('../controller/userSignin');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/userLogout')


router.post("/signUp",userSignUpController);
router.post("/login",userSignInController);
router.get("/user-details",authToken, userDetailsController);
router.get("/userLogout",userLogout);


module.exports = router;