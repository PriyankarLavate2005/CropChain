import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaFilter, FaSpinner } from 'react-icons/fa';
import ProductItem from './ProductItem';
import Cart from './Cart';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(3000);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data.products || data); // Handle both response formats
        setFilteredProducts(data.products || data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...filteredProducts].sort((a, b) => {
      const priceA = extractPriceValue(a.price);
      const priceB = extractPriceValue(b.price);
      return priceA - priceB;
    });
    setFilteredProducts(sorted);
  };

  const extractPriceValue = (priceString) => {
    if (!priceString) return 0;
    // Handle different price formats: "$2.50", "2.50/kg", "2.50 per kg", etc.
    const numericValue = priceString.match(/\d+\.?\d*/);
    return numericValue ? parseFloat(numericValue[0]) : 0;
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(product => {
      const price = extractPriceValue(product.price);
      return price >= minPrice && price <= maxPrice;
    });
    setFilteredProducts(filtered);
  };

  const handleFilterByCategory = () => {
    if (selectedCategory === 'all') {
      setFilteredProducts([...products]);
    } else {
      const filtered = products.filter(product => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  };

  const resetFilters = () => {
    setFilteredProducts([...products]);
    setMinPrice(0);
    setMaxPrice(3000);
    setSelectedCategory('all');
  };

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingItem = prevItems.find(item => item._id === product._id);
      if (existingItem) {
        return prevItems.map(item =>
          item._id === product._id 
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(prevItems => 
      prevItems.filter(product => product._id !== productToRemove._id)
    );
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = extractPriceValue(item.price);
      return total + (price * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p>Error loading products: {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Fresh Harvest Market</h2>
        <div 
          className="cart-icon-container" 
          onClick={() => setShowCart(true)}
          aria-label="View cart"
        >
          <FaShoppingCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0)}</span>
          )}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <button className="filter-btn" onClick={handleSortByPrice}>
            <FaFilter /> Sort by Price
          </button>
        </div>

        <div className="filter-group">
          <label className="filter-label">Price Range:</label>
          <div className="price-inputs">
            <input
              type="number"
              value={minPrice}
              min="0"
              onChange={(e) => setMinPrice(Math.max(0, Number(e.target.value)))}
              placeholder="Min"
              className="price-input"
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              value={maxPrice}
              min={minPrice}
              onChange={(e) => setMaxPrice(Math.max(minPrice, Number(e.target.value)))}
              placeholder="Max"
              className="price-input"
            />
          </div>
          <button className="filter-btn" onClick={handleFilterByPriceRange}>
            Apply
          </button>
        </div>

        <div className="filter-group">
          <label className="filter-label">Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-select"
          >
            <option value="all">All Products</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits">Fruits</option>
            <option value="Grains">Grains</option>
            <option value="Dairy">Dairy</option>
            <option value="Other">Other</option>
          </select>
          <button className="filter-btn" onClick={handleFilterByCategory}>
            Filter
          </button>
        </div>

        <button className="reset-btn" onClick={resetFilters}>
          Reset Filters
        </button>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="no-products">
          <p>No products found matching your filters.</p>
          <button onClick={resetFilters}>Reset Filters</button>
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product._id} className="product-card-wrapper">
              <ProductItem 
                product={product} 
                imageUrl={product.image.startsWith('http') ? product.image : `http://localhost:5000/${product.image}`}
              />
              <button 
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      {showCart && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <Cart 
              cartItems={cartItems}
              onRemoveItem={removeFromCart}
              onUpdateQuantity={updateQuantity}
              onClose={() => setShowCart(false)}
              totalPrice={calculateTotal()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;