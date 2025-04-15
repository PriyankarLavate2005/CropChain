const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

// @desc    Upload a new product
// @route   POST /api/products/upload
// @access  Private
exports.uploadProduct = async (req, res) => {
  try {
    // Check if user is authenticated
    if (!req.user) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Check if image was uploaded
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image' });
    }

    const { name, price, category, description, stock } = req.body;

    // Create new product
    const product = await Product.create({
      name,
      price,
      category,
      description,
      stock,
      image: req.file.path,
      user: req.user.id
    });

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (err) {
    console.error(err);
    
    // If product creation fails but image was uploaded, delete the image
    if (req.file) {
      fs.unlink(req.file.path, (unlinkErr) => {
        if (unlinkErr) console.error('Error deleting uploaded image:', unlinkErr);
      });
    }

    res.status(500).json({
      success: false,
      message: 'Product upload failed',
      error: err.message
    });
  }
};

// @desc    Get all products for a user
// @route   GET /api/products/myproducts
// @access  Private
exports.getUserProducts = async (req, res) => {
  try {
    const products = await Product.find({ user: req.user.id }).sort('-createdAt');
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: err.message
    });
  }
};

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    // Make sure user owns the product
    if (product.user.toString() !== req.user.id) {
      return res.status(401).json({
        success: false,
        message: 'Not authorized to delete this product'
      });
    }

    // Delete the image file
    fs.unlink(product.image, (err) => {
      if (err) console.error('Error deleting product image:', err);
    });

    await product.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: err.message
    });
  }
};