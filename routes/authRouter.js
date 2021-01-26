const express = require("express");
const router = express.Router();
const{register,login,getAuthUser} = require("../controllers/authControlers");
const{  validator,loginRules,registerRules} = require("../middlewares/bodyValidator")

const isAuth = require("../middlewares/isAuth");
/**
 * param post /api/auth/register
 * description register user
 * access public
 */
router.post("/register" , registerRules(),validator,register);
/**
 * param post /api/auth/login
 * description login the user user
 * access public
 */
router.post("/login" ,loginRules(),validator,login );

/**
 * param get /api/auth/me
 * description get auth user
 * access private
 */
router.get("/me" ,isAuth,getAuthUser );




module.exports = router;