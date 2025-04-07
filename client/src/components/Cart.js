import React, { useState } from 'react';
import { FaTrash, FaCheckCircle } from 'react-icons/fa';
import './Cart.css';

const Cart = ({ cartItems, onRemoveItem, onClose, totalPrice, userId }) => {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
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

const handleSubmitOrder = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  
  try {
    const orderData = {
      userId: userId, // Make sure to pass userId from props or state
      items: cartItems.map(item => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image
      })),
      totalAmount: totalPrice + 5, // Include delivery
      deliveryInfo: formData
    };

    const response = await fetch('http://localhost:5000/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      throw new Error('Failed to place order');
    }

    setOrderPlaced(true);
    setTimeout(() => {
      onClose();
      // Optionally clear cart here
    }, 3000);
    
  } catch (error) {
    console.error('Error placing order:', error);
    setError(error.message || 'Failed to place order. Please try again.');
  } finally {
    setIsLoading(false);
  }
};;

  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-animation">
          <FaCheckCircle className="success-icon" />
          <svg className="checkmark" viewBox="0 0 52 52">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
            <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
          </svg>
        </div>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order is being processed.</p>
        <button 
          className="continue-shopping" 
          onClick={onClose}
          style={{ marginTop: '20px' }}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Your Shopping Cart</h2>
        <button className="close-btn" onClick={onClose}>×</button>
      </div>

      {error && <div className="error-message">{error}</div>}

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
                required
              >
                <option value="cash">Cash on Delivery</option>
                <option value="card">Credit Card</option>
              </select>
            </div>
            <button 
              type="submit" 
              className="place-order-btn"
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Place Order'}
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Cart;