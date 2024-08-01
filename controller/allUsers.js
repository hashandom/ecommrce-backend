const userModel =  require('../models/userModel')

const allUsers = async (req,res) => {
    try{
            console.log("all-user user id ", req.userId);
           const allUsers = await userModel.find();
           res.status(200).json({
            data : allUsers,
            message : "all user details",
            success : true,
            error : false
           })

    }catch(err){
       res.status(400).json({
        message : err.message,
        error : true,
        success:false
       })
    }
  
}

module.exports = allUsers;
