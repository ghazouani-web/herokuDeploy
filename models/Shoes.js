const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Article = require('./Article');



const shoesSchema = new Schema({
    pointureA: {
        type :String ,
        default : 0 
    },
    pointureB: {
       type :String ,
       default : 0 
   },
   pointureC: {
       type :String ,
       default : 0 
   },
   pointureD: {
       type :String ,
       default : 0 
   },
   pointureE: {
       type :String ,
       default : 0 
   },
   pointureF: {
       type :String ,
       default : 0 
   },
   genre : {
       type : String ,
       default : "shoes " 
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
    }
});
module.exports = mongoose.model("Shoes" , shoesSchema) ;