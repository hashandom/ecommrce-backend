import addToCartModel from "../../models/cartProduct"


const CountAddToCartProduct =async (req,res) => {
 try{
    const userId = req?.userId
    const count  = await addToCartModel.countDocument({
        userId:userId
    })
    res.json({
        data : {
            count:count
        },
        message:"ok",
        error:false,
        success:true
        
    })

 }catch(err){
    res.json({
        message : message.err || message,
        error : true,
        success:false
    })
 }

 }
module.exports= CountAddToCartProduct;
