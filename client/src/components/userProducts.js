import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './userproducts.css';

const UserProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [stockFilter, setStockFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const navigate = useNavigate();

  // Mock data with Google Images URLs
  const mockProducts = [
    {
      _id: '1',
      name: 'Organic Apples',
      description: 'Fresh organic apples from local farm, rich in fiber and vitamins',
      price: '₹120 per kg',
      category: 'Fruits',
      stock: 25,
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-15T10:30:00Z'
    },
    {
      _id: '2',
      name: 'Fresh Carrots',
      description: 'Sweet and crunchy carrots, perfect for salads and cooking',
      price: '₹40 per kg',
      category: 'Vegetables',
      stock: 0,
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&h=300&fit=crop',
      isOrganic: false,
      createdAt: '2024-01-10T14:20:00Z'
    },
    {
      _id: '3',
      name: 'Basmati Rice',
      description: 'Premium quality basmati rice with long grains and aromatic flavor',
      price: '₹80 per kg',
      category: 'Grains',
      stock: 15,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-20T09:15:00Z'
    },
    {
      _id: '4',
      name: 'Fresh Milk',
      description: 'Pure cow milk, pasteurized and rich in calcium',
      price: '₹60 per liter',
      category: 'Dairy',
      stock: 8,
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop',
      isOrganic: false,
      createdAt: '2024-01-18T16:45:00Z'
    },
    {
      _id: '5',
      name: 'Ripe Bananas',
      description: 'Sweet and nutritious bananas, great for energy and digestion',
      price: '₹50 per dozen',
      category: 'Fruits',
      stock: 30,
      image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-22T11:00:00Z'
    },
    {
      _id: '6',
      name: 'Tomatoes',
      description: 'Fresh red tomatoes, perfect for cooking and salads',
      price: '₹30 per kg',
      category: 'Vegetables',
      stock: 45,
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-25T08:20:00Z'
    },
    {
      _id: '7',
      name: 'Whole Wheat Bread',
      description: 'Healthy whole wheat bread, freshly baked daily',
      price: '₹35 per packet',
      category: 'Bakery',
      stock: 12,
      image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop',
      isOrganic: false,
      createdAt: '2024-01-24T07:30:00Z'
    },
    {
      _id: '8',
      name: 'Organic Eggs',
      description: 'Farm fresh organic eggs from free-range chickens',
      price: '₹90 per dozen',
      category: 'Poultry',
      stock: 20,
      image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-23T12:15:00Z'
    },
    {
      _id: '9',
      name: 'Spinach',
      description: 'Fresh green spinach leaves, rich in iron and vitamins',
      price: '₹25 per bunch',
      category: 'Vegetables',
      stock: 18,
      image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-21T15:40:00Z'
    },
    {
      _id: '10',
      name: 'Orange Juice',
      description: '100% pure orange juice without any added sugar',
      price: '₹120 per liter',
      category: 'Beverages',
      stock: 0,
      image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=300&fit=crop',
      isOrganic: false,
      createdAt: '2024-01-19T13:25:00Z'
    },
    {
      _id: '11',
      name: 'Almonds',
      description: 'Premium California almonds, rich in protein and healthy fats',
      price: '₹600 per kg',
      category: 'Nuts',
      stock: 22,
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop',
      isOrganic: true,
      createdAt: '2024-01-17T11:50:00Z'
    },
    {
      _id: '12',
      name: 'Greek Yogurt',
      description: 'Creamy Greek yogurt with high protein content',
      price: '₹150 per 500g',
      category: 'Dairy',
      stock: 14,
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop',
      isOrganic: false,
      createdAt: '2024-01-16T09:35:00Z'
    }
  ];

  // Mock fetch function
  const fetchUserProducts = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate random error for testing (10% chance)
      if (Math.random() < 0.1) {
        throw new Error('Network error: Failed to load products');
      }
      
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to load products. Please check your connection.');
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

  // Mock delete function
  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
      return;
    }

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Simulate random error for testing (20% chance)
      if (Math.random() < 0.2) {
        throw new Error('Server error: Failed to delete product');
      }

      // Remove the product from the local state
      setProducts(products.filter(product => product._id !== productId));
      
      alert('Product deleted successfully!');
    } catch (err) {
      console.error('Error deleting product:', err);
      alert('Failed to delete product. Please try again.');
    }
  };

  // Mock navigation functions
  const handleAddProduct = () => {
    console.log('Navigate to add product page');
    Navigate('/add-product');
  };

  const handleEditProduct = (productId) => {
    console.log(`Navigate to edit product: ${productId}`);
    alert(`Navigate to edit product: ${productId}`);
  };

  const handleViewProduct = (productId) => {
    console.log(`Navigate to view product: ${productId}`);
    alert(`Navigate to view product: ${productId}`);
  };

  // Handle image error
  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop';
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading your products...</p>
        <p className="loading-subtext">This may take a few seconds</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <div className="error-icon">⚠️</div>
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
          onClick={handleAddProduct}
        >
          + Add New Product
        </button>
      </div>

      {/* Filters and Search */}
      <div className="products-controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search products by name or description..."
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
          <span>Organic: {products.filter(p => p.isOrganic).length} products</span>
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
              onClick={handleAddProduct}
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
                  src={product.image} 
                  alt={product.name}
                  onError={handleImageError}
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
                <p className="product-price">{product.price}</p>
                <p className="product-category">{product.category}</p>
                
                {product.description && (
                  <p className="product-description">{product.description}</p>
                )}
                
                <p className="product-date">
                  Added: {new Date(product.createdAt).toLocaleDateString('en-IN')}
                </p>
                
                <div className="product-actions">
                  <button 
                    className="edit-btn"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    Edit
                  </button>
                  <button 
                    className="view-btn"
                    onClick={() => handleViewProduct(product._id)}
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