import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyProfile.css';

const MyProfile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const [editMode, setEditMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: user?.name || 'John Doe',
    email: user?.email || 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Farm Street, Agroville',
    bio: 'Passionate farmer with 10+ years experience in sustainable agriculture',
    joinDate: 'Joined January 2023'
  });

  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: '$2.50/kg',
      category: 'Vegetables',
      stock: 'Available',
      image: 'https://images.unsplash.com/photo-1592841200221-a6895f5ba648?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Fresh Apples',
      price: '$3.20/kg',
      category: 'Fruits',
      stock: 'Limited',
      image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Premium Wheat',
      price: '$1.80/kg',
      category: 'Grains',
      stock: 'Available',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    const updatedUser = { ...user, name: profileData.name, email: profileData.email };
    localStorage.setItem('user', JSON.stringify(updatedUser));
     

  };

  const handleAddProduct = () => {
    // In a real app, this would open a product form modal
    navigate('/userUploadedProducts');      
  };
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>My Dashboard</h1>
        <p>Manage your profile and farm products</p>
      </div>

      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          Profile
        </button>
        <button 
          className={`tab-btn ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          My Products ({products.length})
        </button>
        <button 
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Statistics
        </button>
      </div>

      {activeTab === 'profile' && (
        <div className="profile-card">
          <div className="profile-avatar-section">
            <div className="profile-avatar">
              {profileData.name.charAt(0).toUpperCase()}
            </div>
            <div className="profile-meta">
              <h2>{profileData.name}</h2>
              <p>{profileData.joinDate}</p>
              <button 
                className="edit-btn"
                onClick={() => setEditMode(!editMode)}
              >
                {editMode ? 'Cancel' : 'Edit Profile'}
              </button>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-row">
              <div className="detail-group">
                <label>Full Name</label>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={profileData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{profileData.name}</p>
                )}
              </div>
              <div className="detail-group">
                <label>Email Address</label>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{profileData.email}</p>
                )}
              </div>
            </div>

            <div className="detail-row">
              <div className="detail-group">
                <label>Phone Number</label>
                {editMode ? (
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{profileData.phone}</p>
                )}
              </div>
              <div className="detail-group">
                <label>Address</label>
                {editMode ? (
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleInputChange}
                  />
                ) : (
                  <p>{profileData.address}</p>
                )}
              </div>
            </div>

            <div className="detail-group">
              <label>Bio</label>
              {editMode ? (
                <textarea
                  name="bio"
                  value={profileData.bio}
                  onChange={handleInputChange}
                  rows="3"
                />
              ) : (
                <p>{profileData.bio}</p>
              )}
            </div>

            {editMode && (
              <div className="action-buttons">
                <button className="save-btn" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'products' && (
        <div className="products-section">
          <div className="section-header">
            <h2>My Farm Products</h2>
            <button className="add-product-btn" onClick={handleAddProduct}>
              + Add Product
            </button>
          </div>
          
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-image" style={{ backgroundImage: `url(${product.image})` }}>
                  <span className={`stock-badge ${product.stock === 'Available' ? 'in-stock' : 'low-stock'}`}>
                    {product.stock}
                  </span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-meta">
                    <span className="price">{product.price}</span>
                    <span className="category">{product.category}</span>
                  </div>
                  <div className="product-actions">
                    <button className="edit-product">Edit</button>
                    <button className="delete-product">Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="stats-section">
          <h2>Farm Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon">🌱</div>
              <h3>Total Products</h3>
              <p>{products.length}</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">💰</div>
              <h3>Monthly Revenue</h3>
              <p>$2,450</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">📈</div>
              <h3>Growth Rate</h3>
              <p>+12%</p>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🏆</div>
              <h3>Customer Rating</h3>
              <p>4.8/5</p>
            </div>
          </div>
          
          <div className="recent-activity">
            <h3>Recent Activity</h3>
            <ul>
              <li>
                <span className="activity-icon">🔄</span>
                <span>Updated product "Organic Tomatoes"</span>
                <span className="activity-time">2 hours ago</span>
              </li>
              <li>
                <span className="activity-icon">💰</span>
                <span>New order received for Fresh Apples</span>
                <span className="activity-time">1 day ago</span>
              </li>
              <li>
                <span className="activity-icon">📦</span>
                <span>Shipped order #12345</span>
                <span className="activity-time">3 days ago</span>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;