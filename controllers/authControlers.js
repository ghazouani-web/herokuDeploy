const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const User = require("../models/User");
const register =  async (req, res) => {
    const {name,lastName,email,password,adress,numTel} = req.body;
    try{
        let user = await User.findOne({email});
        // 1-chek if the user exist
        if (user){
            return res.status(400).json([{msg: "this user is already exists"}])
        }
        //2-creat a new  user
        user = new User({name, lastName, email,password,adress,numTel})
        //3- hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        // 4-save the user
        await user.save()
        //5-login the user (token)
        const payload = {
            userID: user._id
        }
        const token = jwt.sign(payload,"secret",{ expiresIn: '1h' });
        //6- {user, token} response
        res.send({
            token,
            user: {

                name: user.name,
                lastName: user.lastName,
                email: user.email,
                adress:user.adress,
                numTel:user.numTel,
                _id: user._id,
            }
        });
    }catch (error){
  console.log(error);
    }
}
const login = async (req,res) => {
    const {email, password} = req.body;
    try{
        let user = await User.findOne({ email });
     // 1_chek if the user exist
     if(!user){
         return res.status(400).send([{ msg : "bad credential (email)"}])
     }
     //2_compare the passworld
     const isMatch = await bcrypt.compare(password,user.password);
     if (!isMatch) {
         return res.status(400).send([{ msg : "bad credential (passworld)"}]);
     }
     // 3_sign in the user ( token)
     const payload = {
        userID: user._id
    }
    const token = jwt.sign(payload,"secret",{ expiresIn: '1h' });
    res.send({
        token,
        user: {
            name: user.name,
            lastName: user.lastName,
            email: user.email,
            adress:user.adress,
            numTel:user.numTel,
            _id: user._id,
        }
    });
    }catch (error){
      console.log(error)
    }
}

const getAuthUser = (req, res) =>{

res.send({user: req.user});

}
    module.exports = {
        register,
        login,
        getAuthUser,
    }