const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

exports.uploadProduct = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please upload an image' 
      });
    }

    const { name, price, category, description, stock } = req.body;
    
    if (!name || !price || !category || !stock) {
      // Clean up the uploaded file if validation fails
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ 
        success: false, 
        message: 'Please provide all required fields' 
      });
    }

    const product = await Product.create({
      name,
      price,
      category,
      description: description || '',
      stock,
      image: req.file.path,
      user: req.user.id
    });

    res.status(201).json({ 
      success: true, 
      data: product 
    });
  } catch (err) {
    // Clean up file if error occurs
    if (req.file && fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

exports.getUserProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).sort('-createdAt');
    res.status(200).json({ 
      success: true, 
      count: products.length, 
      data: products 
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }
    
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({ 
        success: false, 
        message: 'Not authorized' 
      });
    }

    // Delete image file
    if (fs.existsSync(product.image)) {
      fs.unlinkSync(product.image);
    }

    await product.deleteOne();
    res.status(200).json({ 
      success: true, 
      data: {} 
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: err.message
    });
  }
};