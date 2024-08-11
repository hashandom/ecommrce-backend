const mongoose = require('mongoose')

const addToCart = mongoose.Schema({
    ProductId : {
        ref:'product',
        type:String,
    },
    quantity : Number,
    userId:String
    
},{
    timestamps : true
})


const addToCartModel = mongoose.model("addToCart",addToCart)

module.exports = addToCartModel