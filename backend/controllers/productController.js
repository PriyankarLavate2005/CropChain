const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// ... (keep your existing multer configuration) ...

// Helper function to verify JWT
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return null;
  }
};

// Upload product (with auth)
exports.uploadProduct = async (req, res) => {
  // Check for token in headers
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  // Verify token
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  upload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ 
        success: false, 
        message: err.message 
      });
    }

    try {
      const { name, price, category, stock } = req.body;
      
      if (!name || !price || !category || !stock) {
        if (req.file) fs.unlinkSync(req.file.path);
        return res.status(400).json({ 
          success: false, 
          message: 'Missing required fields' 
        });
      }

      const product = new Product({
        name,
        price: parseFloat(price),
        category,
        stock,
        imageUrl: req.file ? `/uploads/products/${req.file.filename}` : null,
        owner: decoded.userId // Use the userId from the token
      });

      await product.save();
      res.status(201).json({ success: true, product });

    } catch (error) {
      if (req.file) fs.unlinkSync(req.file.path);
      res.status(500).json({ 
        success: false, 
        message: 'Server error',
        error: error.message 
      });
    }
  });
};

// Get all products (public)
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Failed to fetch products',
      error: error.message 
    });
  }
};

// Delete product (with auth)
exports.deleteProduct = async (req, res) => {
  // Check for token
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ success: false, message: 'No token provided' });
  }

  // Verify token
  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }

  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).json({ 
        success: false, 
        message: 'Product not found' 
      });
    }

    // Check if the user owns the product
    if (product.owner.toString() !== decoded.userId) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to delete this product' 
      });
    }

    // Delete the product
    await Product.findByIdAndDelete(req.params.id);

    // Delete associated image
    if (product.imageUrl) {
      const imagePath = path.join(__dirname, '..', product.imageUrl);
      if (fs.existsSync(imagePath)) fs.unlinkSync(imagePath);
    }

    res.json({ success: true, message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: 'Server error',
      error: error.message 
    });
  }
};