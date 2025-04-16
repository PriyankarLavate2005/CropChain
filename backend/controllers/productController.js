const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

exports.uploadProduct = async (req, res) => {
  console.log('Upload product request received');
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);
  console.log('User:', req.user);

  try {
    if (!req.user) {
      console.warn('Unauthorized attempt to upload product');
      return res.status(401).json({ message: 'Not authorized' });
    }
    if (!req.file) {
      console.warn('No file uploaded');
      return res.status(400).json({ message: 'Please upload an image' });
    }

    const { name, price, category, description, stock } = req.body;
    
    if (!name || !price || !category || !stock) {
      console.warn('Missing required fields:', { name, price, category, stock });
      // Clean up the uploaded file
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
      return res.status(400).json({ message: 'Please provide all required fields' });
    }
  
    console.log('Creating product with data:', {
      name,
      price,
      category,
      description: description || '',
      stock,
      image: req.file.path,
      user: req.user.id
    });

    const product = await Product.create({
      name,
      price,
      category,
      description: description || '',
      stock,
      image: req.file.path,
      user: req.user.id
    });

    console.log('Product created successfully:', product);
    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.error('Product upload error:', err);
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    res.status(500).json({
      success: false,
      message: 'Product upload failed',
      error: err.message
    });
  }
};

exports.getUserProducts = async (req, res) => {
  console.log('Fetching products for user:', req.user.id);
  try {
    const products = await Product.find({ user: req.user.id }).sort('-createdAt');
    console.log(`Found ${products.length} products for user`);
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (err) {
    console.error('Error fetching products:', err);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch products',
      error: err.message
    });
  }
};

exports.deleteProduct = async (req, res) => {
  console.log('Delete product request for ID:', req.params.id);
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.warn('Product not found with ID:', req.params.id);
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    
    if (product.user.toString() !== req.user.id) {
      console.warn(`User ${req.user.id} not authorized to delete product ${product._id}`);
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    console.log('Deleting product image at:', product.image);
    if (fs.existsSync(product.image)) {
      fs.unlink(product.image, (err) => {
        if (err) console.error('Error deleting product image:', err);
      });
    }

    await product.deleteOne();
    console.log('Product deleted successfully');
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error('Delete product error:', err);
    if (err.name === 'CastError') {
      return res.status(400).json({ success: false, message: 'Invalid product ID' });
    }
    res.status(500).json({
      success: false,
      message: 'Failed to delete product',
      error: err.message
    });
  }
};