import React, { useState } from 'react';
import { FaTrash, FaCheckCircle, FaTimes, FaSpinner, FaShoppingBag, FaTruck, FaMoneyBillWave, FaCreditCard } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cartItems, onRemoveItem, onClose, totalPrice, clearCart }) => {
  const [showSuccessBar, setShowSuccessBar] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    payment: 'cash',
    email: ''
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
    
    // Validate form
    if (!formData.name || !formData.address || !formData.phone || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate order submission
    setTimeout(() => {
      console.log('Order submitted:', {
        customer: formData,
        items: cartItems,
        total: totalPrice + 5
      });

      setShowSuccessBar(true);
      clearCart();
      
      setTimeout(() => {
        setShowSuccessBar(false);
        onClose();
      }, 5000);
      
      setIsSubmitting(false);
    }, 1500);
  };

  const closeSuccessBar = () => {
    setShowSuccessBar(false);
    onClose();
  };

  return (
    <div className="cart-container">
      {/* Success Notification */}
      {showSuccessBar && (
        <div className="success-notification slide-in">
          <div className="success-content">
            <FaCheckCircle className="success-icon bounce" />
            <div>
              <h3>Order Confirmed!</h3>
              <p>Your order has been placed successfully.</p>
            </div>
          </div>
          <button className="close-notification" onClick={closeSuccessBar}>
            <FaTimes />
          </button>
        </div>
      )}

      <div className="cart-header">
        <div className="cart-title">
          <FaShoppingBag className="cart-icon" />
          <h2>Your Shopping Cart</h2>
        </div>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">
            <FaShoppingBag />
          </div>
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't added anything to your cart yet</p>
          <button className="continue-shopping-btn" onClick={onClose}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-container">
            <div className="cart-items-header">
              <h3>Items ({cartItems.length})</h3>
            </div>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item-card">
                  <div className="cart-item-image-container">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                    {item.quantity > 1 && (
                      <p className="item-quantity">Quantity: {item.quantity}</p>
                    )}
                  </div>
                  <button 
                    className="remove-item-btn"
                    onClick={() => onRemoveItem(item)}
                    disabled={isSubmitting}
                    aria-label="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="checkout-section">
            <div className="order-summary-card">
              <h3 className="summary-title">
                <FaTruck className="summary-icon" /> Order Summary
              </h3>
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
              <h3 className="form-title">Delivery Information</h3>
              
              {error && (
                <div className="error-message">
                  <FaTimes className="error-icon" /> {error}
                </div>
              )}
              
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="your@email.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="1234567890"
                />
              </div>
              <div className="form-group">
                <label>Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Your full delivery address"
                  rows="3"
                />
              </div>
              
              <div className="payment-methods">
                <h4>Payment Method</h4>
                <div className="payment-options">
                  <label className={`payment-option ${formData.payment === 'cash' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={formData.payment === 'cash'}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                    <div className="payment-content">
                      <FaMoneyBillWave className="payment-icon" />
                      <span>Cash on Delivery</span>
                    </div>
                  </label>
                  <label className={`payment-option ${formData.payment === 'card' ? 'active' : ''}`}>
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={formData.payment === 'card'}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                    />
                    <div className="payment-content">
                      <FaCreditCard className="payment-icon" />
                      <span>Credit Card</span>
                    </div>
                  </label>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="place-order-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="spinner" /> Processing...
                  </>
                ) : (
                  <>
                    Place Order · ${(totalPrice + 5).toFixed(2)}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;