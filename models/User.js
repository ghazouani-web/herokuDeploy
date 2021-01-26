
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name :{
        type: String,
        required: true,
    },
    lastName :{
        type: String,
        required: true,
    },
    email :{
        type: String,
        required: true,
    },
    password :{
        type: String,
        required: true,
    },
    
    
    adress :{
        type: String,
        required: true,
    },
    numTel :{
        type: String,
        required: true,
    },
})


module.exports = mongoose.model("User" , userSchema);