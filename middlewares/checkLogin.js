const jwt = require('jsonwebtoken');
const checkLogin = async (req,res,next) =>{
 if(req.cookies.token){
    try{
      const userData = jwt.verify(req.cookies.token,process.env.TOKEN_SECRET_KEY)
      req.user = userData
    }
    catch(error){
     res.status(401).send("Unauthorized access!")
    }
}
else {
    res.status(401).send('Unautorized access')
}
}

module.export = {
    checkLogin
}