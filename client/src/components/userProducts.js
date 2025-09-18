import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './userproducts.css';

const  UserProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const navigate = useNavigate();
  const API_BASE_URL = 'http://localhost:5000/api';
  const token = localStorage.getItem('token');

  // Fetch user's products
  const fetchUserProducts = async () => {
    try {
      setLoading(true);
      setError('');
         
      const response = await fetch(`${API_BASE_URL}/products/my-products`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        if (response.status === 401) {
          navigate('/login');
          throw new Error('Please login to view your products');
        }
        throw new Error('Failed to fetch products');
      }

      const result = await response.json();
      setProducts(result.data || []);
      setFilteredProducts(result.data || []);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  // Extract price value from string
  const extractPriceValue = (priceString) => {
    if (!priceString) return 0;
    const numericValue = priceString.match(/\d+\.?\d*/);
    return numericValue ? parseFloat(numericValue[0]) : 0;
  };

  // Format price as INR
  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products];
    
    // Apply search filter
    if (searchTerm) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (product.description && product.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply category filter
    if (categoryFilter !== 'all') {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Apply stock filter
    if (stockFilter !== 'all') {
      if (stockFilter === 'inStock') {
        result = result.filter(product => product.stock > 0);
      } else if (stockFilter === 'outOfStock') {
        result = result.filter(product => product.stock === 0);
      }
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'priceHigh':
        result.sort((a, b) => extractPriceValue(b.price) - extractPriceValue(a.price));
        break;
      case 'priceLow':
        result.sort((a, b) => extractPriceValue(a.price) - extractPriceValue(b.price));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [products, searchTerm, categoryFilter, stockFilter, sortBy]);

  // Get unique categories for filter dropdown
  const categories = ['all', ...new Set(products.map(product => product.category).filter(Boolean))];

  // Handle product deletion
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/products/${productId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Failed to delete product');
      }

      // Remove the product from the local state
      setProducts(products.filter(product => product._id !== productId));
      
      alert('Product deleted successfully!');
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-message">{error}</div>
        <button onClick={fetchUserProducts} className="retry-btn">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="my-products-container">
      <div className="my-products-header">
        <h1>My Uploaded Products</h1>
        <button 
          className="primary-btn"
          onClick={() => navigate('/add-product')}
        >
          + Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="products-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-group">
          <select 
            value={categoryFilter} 
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.filter(cat => cat !== 'all').map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select 
            value={stockFilter} 
            onChange={(e) => setStockFilter(e.target.value)}
          >
            <option value="all">All Stock Status</option>
            <option value="inStock">In Stock</option>
            <option value="outOfStock">Out of Stock</option>
          </select>

          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="priceHigh">Price: High to Low</option>
            <option value="priceLow">Price: Low to High</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {/* Products Summary */}
      <div className="products-summary">
        <p>Showing {filteredProducts.length} of {products.length} product{products.length !== 1 ? 's' : ''}</p>
        <div className="summary-stats">
          <span>Total Value: {formatINR(products.reduce((sum, product) => sum + (extractPriceValue(product.price) * (product.stock || 0)), 0))}</span>
          <span>In Stock: {products.filter(p => p.stock > 0).length} products</span>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📦</div>
          <h2>No Products Found</h2>
          <p>{products.length === 0 ? "You haven't uploaded any products yet." : "No products match your search criteria."}</p>
          {products.length === 0 && (
            <button 
              className="primary-btn"
              onClick={() => navigate('/add-product')}
            >
              Add Your First Product
            </button>
          )}
        </div>
      ) : (
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product._id} className="product-card">
              <div className="product-image-container">
                <img 
                  src={product.image ? `${API_BASE_URL}/uploads/${product.image}` : '/placeholder-image.jpg'} 
                  alt={product.name}
                  onError={(e) => {
                    e.target.src = '/placeholder-image.jpg';
                  }}
                />
                <div className="product-badges">
                  {product.isOrganic && <span className="organic-badge">🌱 Organic</span>}
                  <span className={`stock-badge ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                    {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
                  </span>
                </div>
              </div>
              
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-price">{formatINR(extractPriceValue(product.price))}</p>
                <p className="product-category">{product.category}</p>
                
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}
                
                <p className="product-date">
                  Added: {new Date(product.createdAt).toLocaleDateString()}
                </p>
                
                <div className="product-actions">
                  <button 
                    className="edit-btn"
                    onClick={() => navigate(`/edit-product/${product._id}`)}
                  >
                    Edit
                  </button>
                  <button 
                    className="view-btn"
                    onClick={() => navigate(`/product/${product._id}`)}
                  >
                    View
                  </button>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserProducts;