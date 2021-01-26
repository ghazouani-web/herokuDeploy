const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest :'./uploads/'})
const fs =require('fs') ;
const Jeans = require("../models/Jeans");
// const newLocal = router.use('/static', express.static("uploads"));


//  const storage = multer.diskStorage({
//    destination : function(req,file ,cb){
//      cb(null , './public/uploads')
//  },
//    filename: function(req,file,cb){
//      cb(null , file.filename)
//  }
//  });
//  const uploads = multer({storage : storage}) ;

/***************START CRUD ******************/
//4-Create Your Schema

// const { diskStorage } = require("multer");
//ADD A NEW jeans
//PATH : /add
router.use(express.static("./uploads"))
router.post("/add", (req, res) => {
      // let fileType = req.file.mimetype.split("/")[1];
      // let newFileName = `${req.file.originalname}.${fileType}` ;
  const newJeans = new Jeans({
    code : req.body.code   , 
    description : req.body.description ,
     quantite: req.body.quantite ,
       couleur: req.body.couleur  , 
       prix : req.body.prix,
        categorie: req.body.categorie ,
        genre : req.body.genre,
        tailleA: req.body.tailleA,
        tailleB: req.body.tailleB,
        tailleC: req.body.tailleC,
        tailleD: req.body.tailleD,
        tailleE: req.body.tailleE,
        tailleF: req.body.tailleF,
        like : req.body.like ,
      
      }); // create a new document
  newJeans
    .save()
    .then((Jeans) => res.send(Jeans))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//GET ALL CommandeS
// PATH :/jeanss
router.get("/all", (req, res) => {
    Jeans.find()
    .then((jeanss) => res.send(jeanss))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commandes" }));
});
//GET ARTICLES BY ID
//PATH : /commandes/:commandeID
router.get("/:jeansID", (req, res) => {
  const id = req.params.jeansID;
  Jeans.findById(id)
    .then((jeans) => {
      if (!jeans) {
        return res.status(404).send({ msg: "Commande Not Found " });
      }
      res.send(jeans);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commande BY ID" }));
});
//DELETE Commande BY ID
//PATH /:jeans
router.delete("/:jeansID", (req, res) => {
  const id = req.params.commandeID;
  Jeans.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((jeans) => {
      if (!jeans) {
        return res.status(404).send({ msg: "jeans Not Found " });
      }
      res.send(Jeans);
    })
    .catch((err) => res.status(400).send({ msg: "jeans Remove  " }));
});
//UPDATE Commande BY ID
//PATH : /:jeansID
router.put("/:jeansID", (req, res) => {
  const jeansID = req.params.jeansID;
  Jeans.findByIdAndUpdate(jeansID, req.body, { new: true })
    .then((jeans) => {
      if (!jeans) {
        return res.status(404).send({ msg: "commande Not Found " });
      }
      res.send(jeans);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
/****************END CRUD *******************/
module.exports = router ;