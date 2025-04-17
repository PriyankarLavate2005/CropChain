import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(itemContext);
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product);
  };

  return (
    <div className="product-card">
      <img 
        className="product-image"
        src={`http://localhost:5000/${product.image}`} 
        alt={product.name} 
      />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Description:</strong> {product.description}</p>
        {product.user && (
          <p><strong>Uploaded by:</strong> {product.user.name}</p>
        )}
        <div className="product-actions">
          <button onClick={handleAddToCart}>+</button>
          <button onClick={handleRemoveFromCart}>-</button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;