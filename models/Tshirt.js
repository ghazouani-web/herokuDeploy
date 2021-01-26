const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const tshirtSchema =  new Schema({
    postedByuserid: String,
    sizeXS :{
           type: Number,
           default: 0 } ,
   sizeS :{
               type: Number,
               default: 0     },
    sizeM :{
                   type: Number,
                   default: 0       } ,        
    sizeL :{
            type: Number,
            default: 0             },
   sizeXL :{
            type: Number,
            default: 0           },
   sizeXXL :{
      type: Number,
      default: 0            },                      
      genre : {
       type : String ,
       default : "t-shirt " 
   },
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
},
// Postedby : {type : mongoose.Schema.Types.ObjectId , ref : "User"}
   });
   module.exports = mongoose.model("Tshirt" , tshirtSchema) ;