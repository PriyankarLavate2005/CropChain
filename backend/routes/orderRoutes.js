const express = require('express');
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  getAllOrders
} = require('../controllers/orderController');

// Basic CRUD routes without authentication middleware
router.route('/')
  .post(createOrder)
  .get(getAllOrders);

router.route('/user/:userId')
  .get(getUserOrders);

router.route('/:id')
  .get(getOrderById)
  .put(updateOrderStatus)
  .delete(deleteOrder);

module.exports = router;