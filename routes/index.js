const express = require('express');
const router = express.Router();

//user 
const userDetailsController = require('../controller/user/userDetails')
const userSignUpController = require('../controller/user/userSignUp');
const userSignInController = require('../controller/user/userSignin');
const authToken = require('../middleware/authToken');
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser');

//product 
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController  = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProduct')

router.post("/signUp",userSignUpController);
router.post("/login",userSignInController);
router.get("/user-details",authToken, userDetailsController);
router.get("/userLogout",userLogout);


//admin panel
router.get("/all-user",authToken,allUsers)
router.post("/update-user",authToken,updateUser)

//products
router.post("/upload-product",authToken,UploadProductController)
router.get("/get-product",getProductController)
router.post("/update-product",authToken,updateProductController)
router.get("/get-category-product",getCategoryProduct)

module.exports = router;