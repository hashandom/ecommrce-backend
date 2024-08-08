const mongoose = require('mongoose')

const addToCart = mongoose.Schema({
    ProductId : String,
    quantity : Number,
    userId:String
    
},{
    timestamps : true
})


const addToCartModel = mongoose.model("addToCartDb",addToCart)

module.exports = addToCartModel