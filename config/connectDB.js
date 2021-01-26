
const mongoose = require ("mongoose");
const config = require('config') ;
const MONGO_URI = config.get('MONGO_URI')
require("dotenv").config({path: "./config/.env"});
const connectDB = async () =>{
    const opts = {
        useNewUrlParser: true ,
        useUnifiedTopology: true ,
    }
try{
    await mongoose.connect(MONGO_URI,opts)
    console.log("the data base is conected...");
}
catch(error){
  console.log(error);
}
 };
 module.exports = connectDB ;