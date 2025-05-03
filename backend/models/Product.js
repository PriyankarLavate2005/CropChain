const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Other']
  },
  description: {
    type: String,
    default: ''
  },
  stock: {
    type: String,
    required: true,
    enum: ['Available', 'Limited', 'Out of Stock'],
    default: 'Available'
  },
  image: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);