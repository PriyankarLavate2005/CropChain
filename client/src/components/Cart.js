import React, { useState } from 'react';
import './Cart.css';
import Checkout from './Checkout'; // Assuming you have a Checkout component

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity, onClose, totalPrice }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const extractPriceValue = (priceString) => {
    if (!priceString) return 0;
    const numericValue = priceString.match(/\d+\.?\d*/);
    return numericValue ? parseFloat(numericValue[0]) : 0;
  };

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleBackToCart = () => {
    setIsCheckingOut(false);
  };

  const handlePlaceOrder = (orderData) => {
    // Here you would typically send the order to your backend
    console.log('Placing order with:', orderData);
    alert('Order placed successfully! Thank you for your purchase.');
    onClose();
    setIsCheckingOut(false);
  };

  if (isCheckingOut) {
    return (
      <Checkout 
        cartItems={cartItems}
        totalPrice={totalPrice}
        onBackToCart={handleBackToCart}
        onPlaceOrder={handlePlaceOrder}
      />
    );
  }

  return (
    <div className="cart-overlay">
      <div className="cart-container">
        <div className="cart-header">
          <h2>🛒 Your Shopping Cart</h2>
          <button onClick={onClose} className="close-btn">
            &times;
          </button>
        </div>
        
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <img src="/empty-cart.png" alt="Empty cart" className="empty-cart-img" />
            <p>Your cart is feeling lonely</p>
            <button onClick={onClose} className="continue-shopping-btn">
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item._id} className="cart-item">
                  <div className="item-image">
                    <img 
                      src={item.image.startsWith('http') ? item.image : `http://localhost:5000/${item.image}`}
                      alt={item.name}
                      onError={(e) => {
                        e.target.src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  <div className="item-info">
                    <h3>{item.name}</h3>
                    <p className="item-price">{formatINR(extractPriceValue(item.price))}</p>
                    <div className="quantity-controls">
                      <button 
                        onClick={() => onUpdateQuantity(item._id, (item.quantity || 1) - 1)}
                        disabled={(item.quantity || 1) <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => onUpdateQuantity(item._id, (item.quantity || 1) + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <div className="item-subtotal">
                    {formatINR(extractPriceValue(item.price) * (item.quantity || 1))}
                  </div>
                  <button 
                    onClick={() => onRemoveItem(item)}
                    className="remove-item-btn"
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="summary-row total-row">
                <span>Total:</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
              
              <button 
                className="checkout-btn"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                🚀 Proceed to Checkout
              </button>
              
              <button 
                className="continue-shopping-btn"
                onClick={onClose}
              >
                ← Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;