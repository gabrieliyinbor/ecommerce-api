const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  countInStock: {
    type: Number,
    required: true,
    default: 0
  },
  imageUrl: {
    type: String, // We will store the link to the image, not the image itself
    required: false
  }
}, {
  timestamps: true // This automatically creates 'createdAt' and 'updatedAt' dates
});

module.exports = mongoose.model('Product', productSchema);