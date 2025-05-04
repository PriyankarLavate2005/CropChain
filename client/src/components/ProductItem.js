import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart, imageUrl }) => {
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

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={product.name}
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p><strong>Price:</strong> {formatINR(extractPriceValue(product.price))}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> 
          <span className={`stock-${product.stock.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.stock}
          </span>
        </p>
        {product.description && <p>{product.description}</p>}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;