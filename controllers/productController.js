const Product = require('../models/Product');

// @desc    Create a new product
// @route   POST /api/products
// @access  Public
exports.createProduct = async (req, res) => {
    try {
        // 1. Get data from the user (Postman)
        const { name, description, price, category, countInStock, imageUrl } = req.body;

        // 2. Create a new product in memory
        const product = new Product({
            name,
            description,
            price,
            category,
            countInStock,
            imageUrl
        });

        // 3. Save it to the database
        const createdProduct = await product.save();

        // 4. Send back the success message
        res.status(201).json(createdProduct);
        
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Get all products
// @route   GET /api/products
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // Empty brackets {} means "Find Everything"
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};