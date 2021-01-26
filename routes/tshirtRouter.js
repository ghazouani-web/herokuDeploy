const express = require("express");
const router = express.Router();
const multer = require('multer') ;
const storage = multer.diskStorage({
  destination : function(req,file, cb){
    cb(null , './public/uploads/');
  },
  filename : function(req,file,cb){
    cb(null,file.originalname);

  },

});

const upload = multer({
  storage :storage ,
}) 
/***************START CRUD ******************/
//4-Create Your Schema
const Tshirt = require("../models/Tshirt");
//ADD A NEW Commande
//PATH : /add_Commande
router.post("/add",(req, res) => {

  const {code , genre , description , quantite , couleur , prix , categorie  , sizeXS,sizeS,sizeM,sizeL,sizeXL,sizeXXL ,like } = req.body;
  const newTshirt = new Tshirt({code  , description , quantite , couleur , prix , categorie ,genre , sizeXS,sizeS,sizeM,sizeL,sizeXL,sizeXXL ,like}); // create a new document
  //newTshirt.Postedby
  newTshirt
    .save()
    .then((tshirt) => res.send(tshirt))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});

//GET ALL CommandeS
// PATH :/tshirts
router.get("/all", (req, res) => {
    Tshirt.find()
    .then((tshirts) => res.send(tshirts))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commandes" }));
});
//GET ARTICLES BY ID
//PATH : /commandes/:commandeID
router.get("/:tshirtID", (req, res) => {
  const id = req.params.tshirtID;
  Tshirt.findById(id)
    .then((tshirt) => {
      if (!tshirt) {
        return res.status(404).send({ msg: "Commande Not Found " });
      }
      res.send(tshirt);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET Commande BY ID" }));
});
//DELETE Commande BY ID
//PATH /:tshirt
router.delete("/:tshirtID", (req, res) => {
  const id = req.params.tshirtID;
  Tshirt.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((tshirt) => {
      if (!tshirt) {
        return res.status(404).send({ msg: "tshirt Not Found " });
      }
      res.send(Tshirt);
    })
    .catch((err) => res.status(400).send({ msg: "tshirt Remove  " }));
});
//UPDATE Commande BY ID
//PATH : /:tshirtID
router.put("/:tshirtID", (req, res) => {
  const tshirtID = req.params.tshirtID;
  Tshirt.findByIdAndUpdate(tshirtID, req.body, { new: true })
    .then((tshirt) => {
      if (!tshirt) {
        return res.status(404).send({ msg: "commande Not Found " });
      }
      res.send(tshirt);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
/****************END CRUD *******************/
module.exports = router;