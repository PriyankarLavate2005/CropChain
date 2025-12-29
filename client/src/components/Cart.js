import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, onRemoveItem, onUpdateQuantity, onClose, totalPrice }) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [hoverStates, setHoverStates] = useState({});
  const navigate = useNavigate(); // React Router hook for navigation
  
  // Safe function handlers
  const safeUpdateQuantity = (itemId, newQuantity) => {
    if (onUpdateQuantity && typeof onUpdateQuantity === 'function') {
      onUpdateQuantity(itemId, newQuantity);
    } else {
      console.warn('onUpdateQuantity is not available');
    }
  };

  const safeRemoveItem = (item) => {
    if (onRemoveItem && typeof onRemoveItem === 'function') {
      onRemoveItem(item);
    } else {
      console.warn('onRemoveItem is not available');
    }
  };

  const safeClose = () => {
    if (onClose && typeof onClose === 'function') {
      onClose();
    } else {
      console.warn('onClose is not available');
    }
  };

  // New function to handle continue shopping with routing
  const handleContinueShopping = () => {
    safeClose(); // Close the cart modal first
    navigate('/products'); // Then navigate to products page
  };

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
    console.log('Placing order with:', orderData);
    alert('Order placed successfully! Thank you for your purchase.');
    safeClose();
    setIsCheckingOut(false);
  };

  const handleMouseEnter = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: true }));
  };

  const handleMouseLeave = (element) => {
    setHoverStates(prev => ({ ...prev, [element]: false }));
  };

  // Inline styles
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      backdropFilter: 'blur(5px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      padding: '20px',
    },
    container: {
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      width: '90%',
      maxWidth: '800px',
      maxHeight: '90vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '25px 30px',
      backgroundColor: '#f8f9fa',
      borderBottom: '2px solid #e9ecef',
    },
    title: {
      margin: 0,
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#2d3748',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    closeBtn: {
      background: 'none',
      border: 'none',
      fontSize: '2rem',
      cursor: 'pointer',
      color: '#6c757d',
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
    },
    emptyCart: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 30px',
      textAlign: 'center',
    },
    emptyCartImg: {
      width: '150px',
      height: '150px',
      marginBottom: '20px',
      opacity: 0.7,
      fontSize: '80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyText: {
      fontSize: '1.3rem',
      color: '#6c757d',
      marginBottom: '25px',
      fontWeight: '500',
    },
    continueBtn: {
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      padding: '12px 30px',
      borderRadius: '50px',
      cursor: 'pointer',
      fontSize: '1rem',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.3)',
    },
    itemsContainer: {
      flex: 1,
      overflowY: 'auto',
      padding: '20px',
      maxHeight: '400px',
    },
    cartItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '15px',
      marginBottom: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)',
      border: '1px solid #f1f3f4',
      position: 'relative',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    },
    itemImage: {
      width: '80px',
      height: '80px',
      borderRadius: '12px',
      overflow: 'hidden',
      marginRight: '20px',
      flexShrink: 0,
      backgroundColor: '#f8f9fa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    itemInfo: {
      flex: 1,
    },
    itemName: {
      margin: '0 0 8px 0',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#2d3748',
    },
    itemPrice: {
      margin: '0 0 12px 0',
      fontSize: '1rem',
      fontWeight: '600',
      color: '#007bff',
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    quantityBtn: {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: '2px solid #007bff',
      backgroundColor: 'white',
      color: '#007bff',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      transition: 'all 0.2s ease',
    },
    quantityDisplay: {
      minWidth: '40px',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: '1.1rem',
    },
    itemSubtotal: {
      fontSize: '1.1rem',
      fontWeight: '700',
      color: '#28a745',
      margin: '0 20px',
      minWidth: '100px',
      textAlign: 'right',
    },
    removeBtn: {
      position: 'absolute',
      top: '10px',
      right: '10px',
      background: 'none',
      border: 'none',
      fontSize: '1.5rem',
      cursor: 'pointer',
      color: '#dc3545',
      width: '30px',
      height: '30px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.2s ease',
    },
    summary: {
      padding: '25px 30px',
      backgroundColor: '#f8f9fa',
      borderTop: '2px solid #e9ecef',
    },
    summaryRow: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '12px',
      fontSize: '1rem',
      color: '#495057',
    },
    totalRow: {
      fontSize: '1.3rem',
      fontWeight: '700',
      color: '#2d3748',
      paddingTop: '15px',
      borderTop: '2px solid #dee2e6',
      marginTop: '10px',
    },
    checkoutBtn: {
      width: '100%',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      padding: '16px',
      borderRadius: '12px',
      cursor: 'pointer',
      fontSize: '1.1rem',
      fontWeight: '700',
      marginTop: '20px',
      transition: 'all 0.3s ease',
      boxShadow: '0 6px 20px rgba(40, 167, 69, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
    },
  };

  // Hover effects
  const hoverEffects = {
    closeBtnHover: { backgroundColor: '#e9ecef', color: '#dc3545' },
    continueBtnHover: { backgroundColor: '#0056b3', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(0, 123, 255, 0.4)' },
    quantityBtnHover: { backgroundColor: '#007bff', color: 'white' },
    removeBtnHover: { backgroundColor: '#dc3545', color: 'white' },
    cartItemHover: { transform: 'translateY(-3px)', boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' },
    checkoutBtnHover: { backgroundColor: '#218838', transform: 'translateY(-2px)', boxShadow: '0 8px 25px rgba(40, 167, 69, 0.4)' },
    checkoutBtnDisabled: { backgroundColor: '#6c757d', cursor: 'not-allowed', transform: 'none', boxShadow: 'none' },
  };

  // Checkout Component (included in the same file)
  const Checkout = ({ cartItems, totalPrice, onBackToCart, onPlaceOrder }) => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: '',
      paymentMethod: 'card'
    });

    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const orderData = {
        ...formData,
        items: cartItems,
        total: totalPrice,
        orderDate: new Date().toISOString()
      };
      onPlaceOrder(orderData);
    };

    const checkoutStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        padding: '20px',
      },
      container: {
        backgroundColor: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
        width: '90%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto',
        display: 'flex',
        flexDirection: 'column',
      },
      header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '25px 30px',
        backgroundColor: '#f8f9fa',
        borderBottom: '2px solid #e9ecef',
      },
      title: {
        margin: 0,
        fontSize: '1.8rem',
        fontWeight: '700',
        color: '#2d3748',
      },
      backBtn: {
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '1rem',
        fontWeight: '600',
        transition: 'all 0.3s ease',
      },
      content: {
        display: 'flex',
        flexDirection: 'column',
        padding: '30px',
        gap: '30px',
      },
      formSection: {
        flex: 1,
      },
      sectionTitle: {
        fontSize: '1.4rem',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#2d3748',
      },
      formGroup: {
        marginBottom: '20px',
      },
      label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: '600',
        color: '#495057',
      },
      input: {
        width: '100%',
        padding: '12px 15px',
        border: '2px solid #e9ecef',
        borderRadius: '8px',
        fontSize: '1rem',
        transition: 'border-color 0.3s ease',
      },
      orderSummary: {
        backgroundColor: '#f8f9fa',
        padding: '25px',
        borderRadius: '15px',
        border: '2px solid #e9ecef',
      },
      orderItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #dee2e6',
      },
      submitBtn: {
        width: '100%',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        padding: '16px',
        borderRadius: '12px',
        cursor: 'pointer',
        fontSize: '1.1rem',
        fontWeight: '700',
        marginTop: '20px',
        transition: 'all 0.3s ease',
        boxShadow: '0 6px 20px rgba(40, 167, 69, 0.3)',
      },
    };

    return (
      <div style={checkoutStyles.overlay}>
        <div style={checkoutStyles.container}>
          <div style={checkoutStyles.header}>
            <h2 style={checkoutStyles.title}>📦 Checkout</h2>
            <button 
              onClick={onBackToCart}
              style={checkoutStyles.backBtn}
            >
              ← Back to Cart
            </button>
          </div>
          
          <div style={checkoutStyles.content}>
            <form onSubmit={handleSubmit} style={checkoutStyles.formSection}>
              <h3 style={checkoutStyles.sectionTitle}>Shipping Information</h3>
              
              <div style={checkoutStyles.formGroup}>
                <label style={checkoutStyles.label}>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  style={checkoutStyles.input}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div style={checkoutStyles.formGroup}>
                <label style={checkoutStyles.label}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={checkoutStyles.input}
                  placeholder="Enter your email"
                />
              </div>
              
              <div style={checkoutStyles.formGroup}>
                <label style={checkoutStyles.label}>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  style={checkoutStyles.input}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div style={checkoutStyles.formGroup}>
                <label style={checkoutStyles.label}>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  style={checkoutStyles.input}
                  placeholder="Enter your full address"
                />
              </div>
              
              <div style={{ display: 'flex', gap: '15px' }}>
                <div style={{ ...checkoutStyles.formGroup, flex: 1 }}>
                  <label style={checkoutStyles.label}>City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    style={checkoutStyles.input}
                    placeholder="City"
                  />
                </div>
                
                <div style={{ ...checkoutStyles.formGroup, flex: 1 }}>
                  <label style={checkoutStyles.label}>Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    required
                    style={checkoutStyles.input}
                    placeholder="Pincode"
                  />
                </div>
              </div>
              
              <h3 style={checkoutStyles.sectionTitle}>Payment Method</h3>
              <div style={checkoutStyles.formGroup}>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleInputChange}
                  style={checkoutStyles.input}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="upi">UPI</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
              
              <button type="submit" style={checkoutStyles.submitBtn}>
                ✅ Place Order - {formatINR(totalPrice)}
              </button>
            </form>
            
            <div style={checkoutStyles.orderSummary}>
              <h3 style={checkoutStyles.sectionTitle}>Order Summary</h3>
              {cartItems.map(item => (
                <div key={item._id} style={checkoutStyles.orderItem}>
                  <span>{item.name} × {item.quantity || 1}</span>
                  <span>{formatINR(extractPriceValue(item.price) * (item.quantity || 1 ))}</span>
                </div>
              ))}
              <div style={{ ...checkoutStyles.orderItem, borderBottom: 'none', fontWeight: '700', fontSize: '1.2rem' }}>
                <span>Total:</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
    <div style={styles.overlay}>
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title}>🛒 Your Shopping Cart</h2>
          <button 
            onClick={safeClose}
            style={{
              ...styles.closeBtn,
              ...(hoverStates.closeBtn ? hoverEffects.closeBtnHover : {})
            }}
            onMouseEnter={() => handleMouseEnter('closeBtn')}
            onMouseLeave={() => handleMouseLeave('closeBtn')}
          >
            &times;
          </button>
        </div>
        
        {(!cartItems || cartItems.length === 0) ? (
          <div style={styles.emptyCart}>
            <div style={styles.emptyCartImg}>🛒</div>
            <p style={styles.emptyText}>Your cart is feeling lonely</p>
            <button 
              onClick={handleContinueShopping}
              style={{
                ...styles.continueBtn,
                ...(hoverStates.continueShopping ? hoverEffects.continueBtnHover : {})
              }}
              onMouseEnter={() => handleMouseEnter('continueShopping')}
              onMouseLeave={() => handleMouseLeave('continueShopping')}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div style={styles.itemsContainer}>
              {cartItems.map(item => (
                <div 
                  key={item._id} 
                  style={{
                    ...styles.cartItem,
                    ...(hoverStates[`item-${item._id}`] ? hoverEffects.cartItemHover : {})
                  }}
                  onMouseEnter={() => handleMouseEnter(`item-${item._id}`)}
                  onMouseLeave={() => handleMouseLeave(`item-${item._id}`)}
                >
                  <div style={styles.itemImage}>
                    {item.image ? (
                      <img 
                        src={item.image.startsWith('http') ? item.image : `http://localhost:5000/${item.image}`}
                        alt={item.name}
                        style={styles.image}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div style={{ display: 'none', fontSize: '24px', color: '#6c757d' }}>
                      📦
                    </div>
                  </div>
                  <div style={styles.itemInfo}>
                    <h3 style={styles.itemName}>{item.name || 'Unnamed Product'}</h3>
                    <p style={styles.itemPrice}>{formatINR(extractPriceValue(item.price))}</p>
                    <div style={styles.quantityControls}>
                      <button 
                        onClick={() => safeUpdateQuantity(item._id, (item.quantity || 1) - 1)}
                        disabled={(item.quantity || 1) <= 1}
                        style={{
                          ...styles.quantityBtn,
                          ...((item.quantity || 1) <= 1 ? { opacity: 0.5, cursor: 'not-allowed' } : {}),
                          ...(hoverStates[`decrease-${item._id}`] ? hoverEffects.quantityBtnHover : {})
                        }}
                        onMouseEnter={() => handleMouseEnter(`decrease-${item._id}`)}
                        onMouseLeave={() => handleMouseLeave(`decrease-${item._id}`)}
                      >
                        −
                      </button>
                      <span style={styles.quantityDisplay}>{item.quantity || 1}</span>
                      <button 
                        onClick={() => safeUpdateQuantity(item._id, (item.quantity || 1) + 1)}
                        style={{
                          ...styles.quantityBtn,
                          ...(hoverStates[`increase-${item._id}`] ? hoverEffects.quantityBtnHover : {})
                        }}
                        onMouseEnter={() => handleMouseEnter(`increase-${item._id}`)}
                        onMouseLeave={() => handleMouseLeave(`increase-${item._id}`)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div style={styles.itemSubtotal}>
                    {formatINR(extractPriceValue(item.price) * (item.quantity || 1))}
                  </div>
                  <button 
                    onClick={() => safeRemoveItem(item)}
                    style={{
                      ...styles.removeBtn,
                      ...(hoverStates[`remove-${item._id}`] ? hoverEffects.removeBtnHover : {})
                    }}
                    onMouseEnter={() => handleMouseEnter(`remove-${item._id}`)}
                    onMouseLeave={() => handleMouseLeave(`remove-${item._id}`)}
                    aria-label="Remove item"
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            
            <div style={styles.summary}>
              <div style={styles.summaryRow}>
                <span>Subtotal:</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
              <div style={styles.summaryRow}>
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div style={{...styles.summaryRow, ...styles.totalRow}}>
                <span>Total:</span>
                <span>{formatINR(totalPrice)}</span>
              </div>
              
              <button 
                style={{
                  ...styles.checkoutBtn,
                  ...((!cartItems || cartItems.length === 0) ? hoverEffects.checkoutBtnDisabled : {}),
                  ...(hoverStates.checkoutBtn ? hoverEffects.checkoutBtnHover : {})
                }}
                onClick={handleCheckout}
                disabled={!cartItems || cartItems.length === 0}
                onMouseEnter={() => handleMouseEnter('checkoutBtn')}
                onMouseLeave={() => handleMouseLeave('checkoutBtn')}
              >
                🚀 Proceed to Checkout
              </button>
              
              <button 
                onClick={handleContinueShopping}
                style={{
                  ...styles.continueBtn,
                  width: '100%',
                  marginTop: '15px',
                  backgroundColor: 'transparent',
                  color: '#007bff',
                  border: '2px solid #007bff',
                  boxShadow: 'none',
                  ...(hoverStates.continueShoppingCart ? { 
                    backgroundColor: '#007bff', 
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 20px rgba(0, 123, 255, 0.3)'
                  } : {})
                }}
                onMouseEnter={() => handleMouseEnter('continueShoppingCart')}
                onMouseLeave={() => handleMouseLeave('continueShoppingCart')}
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

// Add default props for safety
Cart.defaultProps = {
  cartItems: [],
  onUpdateQuantity: (itemId, newQuantity) => {
    console.log(`Updating quantity for item ${itemId} to ${newQuantity}`);
  },
  onRemoveItem: (item) => {
    console.log('Removing item:', item);
  },
  onClose: () => {
    console.log('Closing cart');
  },
  totalPrice: 0
};

export default Cart;