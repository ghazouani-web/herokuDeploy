const express = require("express");
const router = express.Router();
/***************START CRUD ******************/
//4-Create Your Schema
const Article = require("../models/Article");
const Shoes = require("../models/Shoes");
//ADD A NEW Shoes
//PATH : /add
router.post("/add", (req, res) => {
  const {code , genre , description , quantite , couleur , prix , categorie  ,like ,  pointureA ,pointureB ,pointureC ,pointureD ,pointureE ,pointureF} = req.body;
  const newShoes = new Shoes({code  , description , quantite , couleur , prix , categorie ,genre , like , pointureA ,pointureB ,pointureC ,pointureD ,pointureE ,pointureF }); // create a new document
  newShoes
    .save()
    .then((shoes) => res.send(shoes))
    .catch((err) => res.status(400).send({ msg: "ERROR ADD" }));
});
//GET ALL CommandeS
// PATH :/all
router.get("/all", (req, res) => {
    Shoes.find()
    .then((shoes) => res.send(shoes))
    .catch((err) => res.status(400).send({ msg: "ERROR GET Shoes" }));
});
//GET ARTICLES BY ID
//PATH : /:shoesID
router.get("/:shoesID", (req, res) => {
  const id = req.params.shoesID;
  Shoes.findById(id)
    .then((shoes) => {
      if (!shoes) {
        return res.status(404).send({ msg: "Shoes Not Found " });
      }
      res.send(shoes);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR GET shoes BY ID" }));
});
//DELETE Commande BY ID
//PATH /:shoes
router.delete("/:shoesID", (req, res) => {
  const id = req.params.shoesID;
  Shoes.findByIdAndDelete(id) //findOneAndDelete( {_id : value of the id }  )
    .then((shoes) => {
      if (!shoes) {
        return res.status(404).send({ msg: "shoes Not Found " });
      }
      res.send(Shoes);
    })
    .catch((err) => res.status(400).send({ msg: "shoes Remove  " }));
});
//UPDATE Commande BY ID
//PATH : /:shoesID
router.put("/:shoesID", (req, res) => {
  const shoesID = req.params.shoesID;
  Shoes.findByIdAndUpdate(shoesID, req.body, { new: true })
    .then((shoes) => {
      if (!shoes) {
        return res.status(404).send({ msg: "shoes Not Found " });
      }
      res.send(shoes);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR" }));
});
/****************END CRUD *******************/
module.exports = router;