const express = require('express')
const routes = express.Router();
const CategoriesController = require('../controller/categories');


routes.get('/:categories',CategoriesController.SearchByCategories);