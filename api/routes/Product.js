const express = require('express')
const routes = express.Router();

const product = require('../controller/Product')
const varify = require('../config/routeVarification')

// Product 
routes.post('/AddProduct',varify,product.add_product);
routes.post('/DeleteProduct/:id',varify,product.delete_product);


// Get Product By Seller ID
routes.get('/ProductbySeller/:id',product.get_product_by_seller);

routes.get('/ProductbySellercategories/:sellerid/:categories',product.get_product_by_seller_categorie);

module.exports = routes;