const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profilepic:String,
    role : String,
}, 

{
    timestamps: true
});

const userModel = mongoose.model('user', userSchema);  /*useSchema means waht's look like the fields & user is the document when saving user become users for colelction*/ 

module.exports = userModel;
