const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));// Connect to MongoDB


// Middleware (The Gatekeeper)
// This allows your app to understand JSON data sent in requests
app.use(express.json()); 

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Basic Route (To test if it works)
app.get('/', (req, res) => {
    res.send('E-Commerce API is running...');
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server active on port " + PORT + " - READY TO GO!");
});