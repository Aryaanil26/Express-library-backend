const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const login = async (req, res) => {
const { email, password } = req.body;

const user = await User.findOne({email: email});

if(!user){
    return res.status(401).send("Unauthorized access!");
}
const passwordsMatch = bcrypt.compareSync(password, user.password);

if(passwordsMatch) {
    const token = jwt.sign({ _id: user._id, email: user.email ,name: user.name}, process.env.TOKEN_SECRET_KEY);
    res.cookie("token", token, { httpOnly:true, secure: process.env.ENVIRONMMENT === "development" ? false : true, maxAge:1 * 60 * 60 * 1000,})
   
    res.send({_id:user._id, name: user.name, email: user.email });      
}
else{
    res.status(401).send("Unathorized access")
}
};


const verifyLogin = async(req, res)=>{
 res.status(200).json(req.user)
}

module.exports = {
  login,
  verifyLogin
};