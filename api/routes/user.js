const express = require('express')
const routes = express.Router();

const UserController = require('../controller/user')
const categoriesController = require('../controller/categories')

const AccountValidation = require('../config/validation')

routes.get('/' ,UserController.getUserData);
routes.get('/:id' ,AccountValidation.userdatavalidation(),UserController.getAllUserData);
routes.post('/:id',UserController.EditeAccount);
routes.post('/createAccount',AccountValidation.CreateAccountValidation() ,UserController.postUserDate);
routes.post('/businessAccount/:id',AccountValidation.BusinessAccountValidation() ,UserController.postBusinessAccount);
routes.post('/personalAccount/:id',AccountValidation.PersonalAccountValidation() ,UserController.postPersonalAccount);

routes.get('/:categories',categoriesController.SearchByCategories);

module.exports = routes