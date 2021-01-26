const mongoose = require("mongoose");
const extend = require('mongoose-schema-extend');
const Schema = mongoose.Schema;
const articleSchema = new Schema({ 
    code :{
        type: Number,
        required: true,  
    },
    prix :{
        type: String,
        required: true,
    },
    quantite :{
        type: String,
        required: true,
    },
    description : {
        type: String , 
        required : true ,
    },

    categorie : {
        type : String ,
        default : "femme " , 
    },
    like:
    {
       Type:Number ,
       default : 0 
    },
   date : {
       type :Date , 
       default:Date.now
   } , 
    couleur :{
        type: String,   
    }
});


module.exports = mongoose.model("Article" , articleSchema) ;



// img:
// {
// data: Buffer,
// contentType: String
// }