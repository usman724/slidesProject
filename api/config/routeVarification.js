const jwt = require('jsonwebtoken');




// Verify Token
module.exports=(req, res, next) =>{

try {

    const token =  req.headers.authorization.split(" ")[1];    
    const decode = jwt.verify(token,'as23das');
    req.userData =decode;
    next();

} catch (error) {
        return  res.status(401).json({
            message :"Auth Failed"
        })
}
  
  }