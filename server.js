const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware (The Gatekeeper)
// This allows your app to understand JSON data sent in requests
app.use(express.json()); 

// Basic Route (To test if it works)
app.get('/', (req, res) => {
    res.send('E-Commerce API is running...');
});

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});