const express = require('express')
const routes = express.Router();

const UserController = require('../controller/user')
const varify = require('../config/routeVarification')
const AccountValidation = require('../config/validation')

const path = require('path');
const multer = require('multer');
const fs = require('fs');


// var upload = multer({dest:'uploads/'});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Views/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})



var upload = multer({
    storage: storage
}).single('ProfileImage');





// Add User Route For Seller

routes.post('/SignUp', AccountValidation.CreateAccountValidation(), UserController.postUserDate);
routes.post('/login', AccountValidation.loginAccountValidation(), UserController.loginUser);
routes.get('/login', UserController.openlogin);






routes.post('/completeProfile/:userid',upload,AccountValidation.completeProfileAccountValidation(),UserController.completeProfile);


routes.post('/forget_password', UserController.forgetPassword);


routes.get('/varification_Account/:id', UserController.varifyAccount);


routes.post('/dashboard', UserController.updatewhereuse);

// createFolder




routes.post('/createFolder', UserController.createFolder);

routes.get('/open', UserController.openpage);

routes.get('/slide', UserController.openpageedit);


module.exports = routes