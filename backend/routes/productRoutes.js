const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../middleware/uploadMiddleware');
const Product = require('../models/Product');

// Upload product
router.post('/upload', uploadMiddleware.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'Please upload an image file'
      });
    }

    const { name, price, category, description, stock } = req.body;

    if (!name || !price || !category) {
      return res.status(400).json({ 
        success: false,
        message: 'Name, price, and category are required fields' 
      });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      description: description || '',
      stock: stock || 'Available',
      image: req.file.path.replace(/\\/g, '/')
    });

    await newProduct.save();

    res.status(201).json({
      success: true,
      product: {
        id: newProduct._id,
        name: newProduct.name,
        price: newProduct.price,
        category: newProduct.category,
        description: newProduct.description,
        stock: newProduct.stock,
        image: newProduct.image,
        createdAt: newProduct.createdAt
      }
    });

  } catch (err) {
    console.error('Error uploading product:', err.message);
    
    if (err.name === 'ValidationError') {
      return res.status(400).json({
        success: false,
        message: 'Validation error: ' + err.message
      });
    }

    res.status(500).json({ 
      success: false,
      message: 'Server error: ' + err.message 
    });
  }
});

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ 
      success: false,
      message: 'Server error: ' + err.message 
    });
  }
});

module.exports = router;