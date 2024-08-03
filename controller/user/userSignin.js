const userModel = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const jwt =  require('jsonwebtoken');
require('dotenv').config(); 

const userSignInController = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            throw new Error("Please provide the email");
        }
        if (!password) {
            throw new Error("Please provide the password");
        }

        const user = await userModel.findOne({ email }); //in this user model is return relevant to the email
        
        if (!user) {
            throw new Error("User not found");
        }

        const checkPassword = await bcrypt.compare(password, user.password);
    

        if (checkPassword) {
            const tokenData ={
                id : user._id,
                email:user.email
            }

        //Generate the json webToken
          const token = await  jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY , { expiresIn: 60 * 60 *8});
        
         //Generate the json webToken  
         const tokenOption = {
            httpOnly : true,
            secure:true
         }
         res.cookie("token",token,tokenOption).json(
            {
                message:"login sucessfully",
                data:token,
                sucess:true,
                error:false
            }

         )

         
        }else{
            throw new Error("please check the  password");
        }

    

    } catch (err) {
        res.status(400).json({
            message: err.message,
            error: true,
            success: false
        });
    }
}

module.exports=userSignInController;
