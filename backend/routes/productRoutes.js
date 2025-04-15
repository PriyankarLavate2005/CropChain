const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../config/multerConfig');

// Protect all routes with authentication middleware
router.use(authMiddleware.protect);

// Upload product with image
router.post(
  '/upload',
  upload.single('image'),
  productController.uploadProduct
);

// Get user's products
router.get(
  '/myproducts',
  productController.getUserProducts
);

// Delete product
router.delete(
  '/:id',
  productController.deleteProduct
);

module.exports = router;