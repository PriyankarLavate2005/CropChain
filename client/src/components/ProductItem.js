import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';

const ProductItem = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(itemContext);
  
  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product._id); // Better to use ID for removal
  };

  // Improved image URL handling
  const getImageUrl = () => {
    if (!product.image) return '/placeholder-image.jpg';
    
    // Handle full URLs (like from cloud storage)
    if (product.image.startsWith('http')) {
      return product.image;
    }
    
    // Handle local file paths
    return `http://localhost:5000/${product.image.replace(/\\/g, '/')}`;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          className="product-image"
          src={getImageUrl()} 
          alt={product.name}
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg'; // Fallback if image fails to load
          }}
        />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> 
          <span className={`stock-status ${product.stock.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.stock}
          </span>
        </p>
        {product.description && (
          <p><strong>Description:</strong> {product.description}</p>
        )}
        <div className="product-actions">
          <button 
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
          <button 
            onClick={handleRemoveFromCart}
            aria-label={`Remove ${product.name} from cart`}
            className="remove-btn"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;