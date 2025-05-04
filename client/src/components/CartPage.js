import React from 'react';
import { useLocation } from 'react-router-dom';
import Cart from './Cart';

const CartPage = () => {
  const location = useLocation();
  const { cartItems = [] } = location.state || {}; // Default to empty array

  return (
    <div className="cart-page">
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default CartPage;