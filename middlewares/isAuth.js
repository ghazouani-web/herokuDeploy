const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { header } = require("express-validator");


const isAuth = async (req, res, next) => {
      const token = req.headers.authorisation;

      try{

     const decoded = jwt.verify(token,"secret");
      const user = await User.findById(decoded.userID).select("-password");
       
      if (!user) {
          return res.status(401).send([{msg: "Unothorized"}]);
      }

      req.user = user;

    next();
      }catch(error){
          res.send([{msg: "Unothorized"}])
      }
};
module.exports = isAuth;