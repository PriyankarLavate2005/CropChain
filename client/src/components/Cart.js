import React, { useState } from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cartItems, onRemoveItem, onClose, totalPrice }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    payment: 'cash'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    console.log('Order submitted:', { items: cartItems, ...formData });
    setOrderPlaced(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="order-success">
        <FaCheckCircle className="success-icon" />
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-shopping" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price?.toFixed(2)}</p>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => onRemoveItem(item)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Delivery:</span>
              <span>$5.00</span>
            </div>
            <div className="summary-row total">
              <span>Total:</span>
              <span>${(totalPrice + 5).toFixed(2)}</span>
            </div>
          </div>

          <form className="checkout-form" onSubmit={handleSubmitOrder}>
            <h3>Delivery Information</h3>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Payment Method</label>
              <select
                name="payment"
                value={formData.payment}
                onChange={handleInputChange}
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit Card</option>
              </select>
            </div>
            <button type="submit" className="place-order-btn">
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;