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

// @desc    Fetch all products (with optional search)
// @route   GET /api/products?keyword=...
// @access  Public
exports.getProducts = async (req, res) => {
    try {
        // 1. Check if a 'keyword' was passed in the URL (e.g. ?keyword=iPhone)
        const keyword = req.query.keyword ? {
            name: {
                $regex: req.query.keyword, // Matches partial strings (e.g. "phon" matches "iPhone")
                $options: 'i'             // Case insensitive (e.g. "iphone" matches "iPhone")
            }
        } : {};

        // 2. Find products using that keyword (or find all if keyword is empty)
        const products = await Product.find({ ...keyword });

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Public
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if (product) {
            await product.deleteOne(); // Deletes the item from MongoDB
            res.json({ message: 'Product removed' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Public
exports.updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, countInStock, imageUrl } = req.body;

        // 1. Find the product
        const product = await Product.findById(req.params.id);

        if (product) {
            // 2. Update fields (only if new data is provided)
            product.name = name || product.name;
            product.description = description || product.description;
            product.price = price || product.price;
            product.category = category || product.category;
            product.countInStock = countInStock || product.countInStock;
            product.imageUrl = imageUrl || product.imageUrl;

            // 3. Save the updated product
            const updatedProduct = await product.save();
            res.json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};