const mongoose = require("mongoose");
const Article = require("./Article");
const Schema = mongoose.Schema;
const commandeSchema = new Schema({
    date: { type: Date,
         default: Date.now } ,
    PostedBy: {type: mongoose.Schema.ObjectId, ref: 'User' },
    Art : {type: mongoose.Schema.ObjectId, ref: 'Article' },
    etat:{ type : Boolean ,
        
      }
})
module.exports = mongoose.model("Commande" , commandeSchema);