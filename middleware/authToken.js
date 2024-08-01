const jwt = require('jsonwebtoken')
require('dotenv').config(); 
const authToken = async (req, res, next) => {
  try {
      // Access token from cookies or headers
      const token = req.cookies?.token || req.headers['authorization']; 
      
      if(!token){
        return res.status(200).json({
          message:"user is not login",
          error:true,
          success:false
        })
      }

      jwt.verify(token,process.env.TOKEN_SECRET_KEY, function(err, decoded) {
        console.log(err);
        // console.log("decode the JWT token",decoded);

        if(err){
          console.log("error auth",err)
        }

        req.userId = decoded?.id
        // console.log("user req id", req.userId)
        next();

      });

      
  } catch (error) {
      res.status(400).json({
          data: [],
          message: error.message,
          success: false,
          error: true,
          check : "check the toen errror"
      });
  }
};

module.exports = authToken;
