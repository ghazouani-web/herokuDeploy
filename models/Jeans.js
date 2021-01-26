const mongoose = require("mongoose");

const extendSchema = require('mongoose-extend-schema');
const Article = require('./Article');
const jeansSchema = new extendSchema(Article,{
    genre : {
        type :String ,
        default : "jeans" ,
    },
    tailleA : {
        type : Number ,
        default : 0
    },
    tailleB : {
        type : Number ,
        default : 0
    },
    tailleC : {
        type : Number ,
        default : 0
    },
    tailleD : {
        type : Number ,
        default : 0
    },
    tailleE : {
        type : Number ,
        default : 0
    },
    tailleF : {
        type : Number ,
        default : 0
    } ,
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
    } , 
    jeansImg: { type : String }
});


module.exports = mongoose.model("Jeans" , jeansSchema) ;