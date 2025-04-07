import React, { useState, useEffect } from 'react';
import { FaShoppingCart, FaFilter } from 'react-icons/fa';
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
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    // Fetch products from API
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleSortByPrice = () => {
    const sorted = [...filteredProducts].sort((a, b) => a.price - b.price);
    setFilteredProducts(sorted);
  };

  const handleFilterByPriceRange = () => {
    const filtered = products.filter(
      product => product.price >= minPrice && product.price <= maxPrice
    );
    setFilteredProducts(filtered);
  };

  const handleFilterByType = () => {
    if (selectedType === 'all') {
      setFilteredProducts([...products]);
    } else {
      const filtered = products.filter(product => product.type === selectedType);
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product._id !== productToRemove._id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <h2>Fresh Harvest Market</h2>
        <div className="cart-icon-container" onClick={() => setShowCart(true)}>
          <FaShoppingCart className="cart-icon" />
          {cartItems.length > 0 && (
            <span className="cart-badge">{cartItems.length}</span>
          )}
        </div>
      </div>

      <div className="filter-section">
        <div className="filter-group">
          <FaFilter className="filter-icon" />
          <button className="filter-btn" onClick={handleSortByPrice}>
            Sort by Price
          </button>
        </div>

        <div className="filter-group">
          <label className="filter-label">Price Range:</label>
          <div className="price-inputs">
            <input
              type="number"
              value={minPrice}
              min="0"
              onChange={(e) => setMinPrice(Number(e.target.value))}
              placeholder="Min"
              className="price-input"
            />
            <span className="range-separator">-</span>
            <input
              type="number"
              value={maxPrice}
              min={minPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
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
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="category-select"
          >
            <option value="all">All Products</option>
            <option value="Fruit">Fruits</option>
            <option value="Vegetable">Vegetables</option>
          </select>
          <button className="filter-btn" onClick={handleFilterByType}>
            Filter
          </button>
        </div>
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product._id} className="product-card">
            <ProductItem product={product} />
            <button 
              className="add-to-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {showCart && (
        <div className="cart-modal">
          <div className="cart-modal-content">
            <Cart 
              cartItems={cartItems}
              onRemoveItem={removeFromCart}
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