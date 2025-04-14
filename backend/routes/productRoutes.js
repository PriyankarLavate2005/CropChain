const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// No auth middleware needed - auth is handled in the controllers
router.post('/products', productController.uploadProduct);
router.get('/products', productController.getProducts);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;