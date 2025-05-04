import React, { useState } from 'react';
import './Checkout.css';

const Checkout = ({ cartItems, totalPrice, onBackToCart, onPlaceOrder }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder(formData);
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h2>Checkout</h2>
        <button onClick={onBackToCart} className="back-btn">
          ← Back to Cart
        </button>
      </div>

      <div className="checkout-content">
        <form onSubmit={handleSubmit} className="checkout-form">
          <div className="form-section">
            <h3>Shipping Information</h3>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Shipping Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="4"
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === 'credit-card'}
                  onChange={handleChange}
                />
                <span>Credit Card</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="upi"
                  checked={formData.paymentMethod === 'upi'}
                  onChange={handleChange}
                />
                <span>UPI</span>
              </label>
              <label className="payment-option">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === 'cod'}
                  onChange={handleChange}
                />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item._id} className="summary-item">
                  <span>{item.name} × {item.quantity || 1}</span>
                  <span>₹{(parseFloat(item.price.replace(/[^\d.]/g, '')) * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="summary-total">
              <span>Total:</span>
              <span>₹{typeof totalPrice === 'number' ? totalPrice.toFixed(2) : totalPrice}</span>
            </div>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;