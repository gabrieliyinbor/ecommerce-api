const express = require('express');
const router = express.Router();
const { 
    createProduct, 
    getProducts, 
    getProductById,
    updateProduct,
    deleteProduct // <--- Import this
} = require('../controllers/productController');

router.route('/')
    .get(getProducts)
    .post(createProduct);

router.route('/:id')
    .get(getProductById)
    .put(updateProduct)
    .delete(deleteProduct); // <--- Add this line

module.exports = router;