const express = require('express');
const router = express.Router();
const { 
    createProduct, 
    getProducts, 
    getProductById // <--- Import the new function
} = require('../controllers/productController');

// Route for /api/products
router.route('/')
    .get(getProducts)
    .post(createProduct);

// Route for /api/products/:id  (The :id is a variable)
router.route('/:id')
    .get(getProductById);

module.exports = router;
