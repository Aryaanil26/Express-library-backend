const jwt = require('jsonwebtoken');
const checkLogin = async (req,res,next) =>{
    const token = req.cookies.token;

 if(token) {
    try{
      const userData = jwt.verify(req.cookies.token,process.env.TOKEN_SECRET_KEY);

      req.user = userData;
      next();
    }
    catch(error){
     res.status(401).send("Unauthorized access!")
    }
}
else {
    res.status(401).send('Unautorized access')
}
}

module.export = checkLogin;