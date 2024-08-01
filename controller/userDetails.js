const userModel =  require('../models/userModel')

const userDetailsController = async(req,res) => {
  try{
      // console.log("user id  userDetails file", req.userId)
      const user = await userModel.findById(req.userId);
      // console.log("user detailssss",user);
      res.status(200).json({
        data:user,
        success:true,
        error:false,
        message:"user Details"
      })
  }catch(error){
    res.status(400).json({
        message:error.message,
        success:false,
        error:true
    })
  }
    
  
}

module.exports= userDetailsController;
