const bcrypt = require('bcrypt');
const saltRounds = 10;
const User = require("../models/userModel");

const getAllUsers = async(req, res)=>{
    const users = await User.find({});
    res.json(users)
}



const addUser = async(req, res)=>{
    //get data from request body
    const data = req.body 
    const hash = bcrypt.hashSync(data.password, saltRounds);
    //create a document using request body 
    const users = new User({
        ...data,
        password: hash
    })

    //save document to dtbase
    await users.save()

    res.json(users)
}



module.exports={
    getAllUsers,
    addUser,
}