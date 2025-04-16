const express = require('express');
const router = express.Router();
const { upload, handleMulterErrors } = require('../config/multerConfig');
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply auth middleware to all product routes
router.use(authMiddleware.protect);

// Upload product with image
router.post(
  '/upload',
  upload.single('image'),
  handleMulterErrors,
  productController.uploadProduct
);

// Get user's products
router.get('/myproducts', productController.getUserProducts);

// Delete product
router.delete('/:id', productController.deleteProduct);

module.exports = router;