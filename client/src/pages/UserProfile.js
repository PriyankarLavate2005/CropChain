import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  //const { userId } = localStorage.getItem('_id');
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState(null);
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    bio: '',
    farmName: '',
    city: '',
    state: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
    emailNotifications: true,
    smsNotifications: false,
    newsletter: true
  });

  // API configuration
  const API_BASE_URL = 'http://localhost:5000/api';
  const token = localStorage.getItem('token');
  if (token){
    console.warn("token is present")
  }    
  const userDataFromStorage = JSON.parse(localStorage.getItem('user'));
  const userId = userDataFromStorage?._id || userDataFromStorage?.id;
  console.warn(userId)
  // Fetch user data
  const fetchUserData = async () => {
  try {
    setLoading(true);
    setError('');
    
    console.warn('🔍 Starting fetchUserData...');
    console.warn('📋 Request details:', {
      url: `${API_BASE_URL}/user-profile/${userId}`,
      userId: userId,
      hasToken: !!token,
      tokenLength: token ? token.length : 0
    });

    const response = await fetch(`${API_BASE_URL}/user-profile/${userId}`, {
      headers: {
        'Authorization': token ? `Bearer ${token}` : '',
      }
    });
    
    console.warn('📥 Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      url: response.url
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.warn('⚠️ 401 Unauthorized - Removing token and redirecting to login');
        //throw new Error('Please login to access your profile');
      }
      
      // Try to get error details from response
      let errorDetails = '';
      try {
        const errorData = await response.json();
        errorDetails = errorData.message || JSON.stringify(errorData);
        console.error('❌ Server error response:', errorData);
      } catch (parseError) {
        errorDetails = await response.text().catch(() => 'No error details available');
        console.error('❌ Non-JSON error response:', errorDetails);
      }
      
      throw new Error(`Failed to load profile: ${response.status} - ${errorDetails}`);
    }
    
    const result = await response.json();
    console.log('✅ Successful response:', {
      success: result.success,
      hasData: !!result.data,
      dataKeys: result.data ? Object.keys(result.data) : 'No data'
    });

    if (!result.success) {
      console.error('❌ API returned success: false:', result);
      throw new Error(result.message || 'Failed to fetch user data');
    }
    
    if (!result.data) {
      console.warn('⚠️ No data field in response:', result);
      throw new Error('No user data received from server');
    }
    
    const data = result.data;
    console.log('👤 User data received:', {
      name: data.name,
      email: data.email,
      hasLocation: !!data.location,
      hasSocialMedia: !!data.socialMedia
    });

    setUserData(data);
    
    // Set form data for editing
    const formDataUpdate = {
      name: data.name || '',
      phone: data.phone || '',
      address: data.address || '',
      bio: data.bio || '',
      farmName: data.farmName || '',
      city: data.location?.city || '',
      state: data.location?.state || '',
      website: data.socialMedia?.website || '',
      facebook: data.socialMedia?.facebook || '',
      instagram: data.socialMedia?.instagram || '',
      twitter: data.socialMedia?.twitter || '',
      emailNotifications: data.preferences?.emailNotifications !== false,
      smsNotifications: data.preferences?.smsNotifications || false,
      newsletter: data.preferences?.newsletter !== false
    };
    
    console.log('📝 Form data set:', formDataUpdate);
    setFormData(formDataUpdate);
   
    console.log('🎉 fetchUserData completed successfully');

  } catch (err) {
    console.error('💥 Error in fetchUserData:', {
      name: err.name,
      message: err.message,
      stack: err.stack
    });
    
    setError(err.message || 'Failed to load user profile');
    
  } finally {
    console.log('⏹️ fetchUserData finished - setting loading to false');
    setLoading(false);
  }
};

  // Fetch user products
  const fetchUserProducts = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user-profile/${userId}/products`);
      if (response.ok) {
        const result = await response.json();
        setProducts(result.data || []);
      }
    } catch (err) {
      console.error('Error fetching user products:', err);
      setProducts([]);
    }
  };
const handleDeleteProduct = async (productId) => {
  if (!window.confirm('Are you sure you want to delete this product? This action cannot be undone.')) {
    return;
  }

  try {
    setLoading(true);
    const token = localStorage.getItem('token');
    
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
  } finally {
    setLoading(false);
  }
};
  // Fetch user stats
  const fetchUserStats = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/user-profile/${userId}/stats`);
      if (response.ok) {
        const result = await response.json();
        setStats(result.data || {
          totalProducts: 0,
          totalStock: 0,
          totalValue: 0,
          joinDateFormatted: new Date().toLocaleDateString()
        });
      }
    } catch (err) {
      console.error('Error fetching user stats:', err);
      setStats({
        totalProducts: 0,
        totalStock: 0,
        totalValue: 0,
        joinDateFormatted: new Date().toLocaleDateString()
      });
    }
  };

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please login to view your profile');
      setLoading(false);
      return;
    }
    
    fetchUserData();
  }, [userId]);

  useEffect(() => {
    if (activeTab === 'products') {
      fetchUserProducts();
    } else if (activeTab === 'stats') {
      fetchUserStats();
    }
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    try {
      setError('');
      
      const response = await fetch(`${API_BASE_URL}/user-profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update profile');
      }
      
      const result = await response.json();
      setUserData(result.data);
      setEditMode(false);
      alert('Profile updated successfully!');
    } catch (err) {
      console.error('Error updating profile:', err);
      setError(err.message || 'Failed to update profile');
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    const form = e.target;
    const currentPassword = form.currentPassword.value;
    const newPassword = form.newPassword.value;
    const confirmPassword = form.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    try {
      setError('');
      
      const response = await fetch(`${API_BASE_URL}/user-profile/${userId}/password`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      
      if (!response.ok) {
        throw new Error('Failed to change password');
      }
      
      alert('Password changed successfully!');
      form.reset();
    } catch (err) {
      console.error('Error changing password:', err);
      setError(err.message || 'Failed to change password');
    }
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('avatar', file);

    try {
      setError('');
      
      const response = await fetch(`${API_BASE_URL}/user-profile/${userId}/avatar`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        throw new Error('Failed to upload profile picture');
      }

      const data = await response.json();
      setUserData(data.data);
      alert('Profile picture updated successfully!');
    } catch (err) {
      console.error('Error uploading avatar:', err);
      setError(err.message || 'Failed to upload profile picture');
    }
  };

  if (loading) {
    return (
      <div className="user-profile-container">
        <div className="loading-spinner">Loading profile...</div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="user-profile-container">
        <div className="error-message">
          {error || 'User not found'}
          <br />
          <button onClick={() => navigate('/login')} className="login-btn">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="user-profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p>Manage your account and preferences</p>
      </div>

      {error && (
        <div className="error-banner">
          {error}
          <button onClick={() => setError('')} className="close-error">×</button>
        </div>
      )}

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
          My Products
        </button>


        <button
          className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
          onClick={() => setActiveTab('stats')}
        >
          Statistics
        </button>
        <button
          className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
          onClick={() => setActiveTab('security')}
        >
          Security
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'profile' && (
          <div className="profile-content">
            <div className="profile-section">
              <div className="section-header">
                <h2>Personal Information</h2>
                <button
                  className="edit-btn"
                  onClick={() => setEditMode(!editMode)}
                >
                  {editMode ? 'Cancel' : 'Edit Profile'}
                </button>
              </div>

              {editMode ? (
                <form onSubmit={handleSaveProfile} className="profile-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>Farm Name</label>
                      <input
                        type="text"
                        name="farmName"
                        value={formData.farmName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group">
                      <label>State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label>Bio</label>
                      <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleInputChange}
                        rows="4"
                        maxLength="500"
                        placeholder="Tell us about yourself and your farm..."
                      />
                      <div className="char-count">{formData.bio.length}/500</div>
                    </div>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="save-btn">
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                <div className="profile-info">
                  <div className="avatar-section">
                    <div className="avatar">
                      {userData.avatar ? (
                        <img
                          src={`http://localhost:5000/uploads/avatars/${userData.avatar}`}
                          alt="Profile"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="avatar-placeholder" style={{ display: userData.avatar ? 'none' : 'flex' }}>
                        {userData.name?.charAt(0).toUpperCase()}
                      </div>
                      <label className="avatar-upload-btn">
                        Change Photo
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAvatarUpload}
                          hidden
                        />
                      </label>
                    </div>
                  </div>

                  <div className="info-grid">
                    <div className="info-item">
                      <label>Name</label>
                      <p>{userData.name}</p>
                    </div>
                    <div className="info-item">
                      <label>Email</label>
                      <p>{userData.email}</p>
                    </div>
                    <div className="info-item">
                      <label>Phone</label>
                      <p>{userData.phone || 'Not provided'}</p>
                    </div>
                    <div className="info-item">
                      <label>Address</label>
                      <p>{userData.address || 'Not provided'}</p>
                    </div>
                    <div className="info-item">
                      <label>Farm Name</label>
                      <p>{userData.farmName || 'Not provided'}</p>
                    </div>
                    <div className="info-item">
                      <label>Location</label>
                      <p>
                        {userData.location?.city && userData.location?.state
                          ? `${userData.location.city}, ${userData.location.state}`
                          : 'Not provided'}
                      </p>
                    </div>
                    <div className="info-item full-width">
                      <label>Bio</label>
                      <p>{userData.bio || 'No bio provided'}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {!editMode && (
              <div className="profile-section">
                <h2>Social Media</h2>
                <div className="social-links">
                  {userData.socialMedia?.website && (
                    <a href={userData.socialMedia.website} target="_blank" rel="noopener noreferrer">
                      🌐 Website
                    </a>
                  )}
                  {userData.socialMedia?.facebook && (
                    <a href={userData.socialMedia.facebook} target="_blank" rel="noopener noreferrer">
                      📘 Facebook
                    </a>
                  )}
                  {userData.socialMedia?.instagram && (
                    <a href={userData.socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                      📸 Instagram
                    </a>
                  )}
                  {userData.socialMedia?.twitter && (
                    <a href={userData.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
                      🐦 Twitter
                    </a>
                  )}
                  {!userData.socialMedia?.website &&
                   !userData.socialMedia?.facebook &&
                   !userData.socialMedia?.instagram &&
                   !userData.socialMedia?.twitter && (
                    <p>No social media links added</p>
                  )}
                </div>
              </div>
            )}
          </div>
        )}
        {activeTab === 'products' && (
  <div className="products-content">
    <div className="products-header">
      <h2>My Products</h2>
      <button
        className="primary-btn"
        onClick={() => navigate('/userproducts')}
      >
        <span className="btn-icon">+</span> view Products
      </button>
    </div>    
    {products.length === 0 ? (
      <div className="empty-state">
        <div className="empty-icon">🛍️</div>
        <h3>No Products Yet</h3>
        <p>You haven't added any products to your farm.</p>
        <button
          className="primary-btn"
          onClick={() => navigate('/userUploadedProducts')}
        >
          Add Your First Product
        </button>
      </div>
    ) : (
      <div className="products-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <div
              className="product-image"
              style={{
                backgroundImage: product.image
                  ? `url(http://localhost:5000/uploads/${product.image})`
                  : 'url(https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'
              }}
            >
              <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                {product.stock > 0 ? `${product.stock} In Stock` : 'Out of Stock'}
              </span>
              {product.isOrganic && <span className="organic-badge">🌱 Organic</span>}
            </div>
            
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-description">{product.description || 'No description available'}</p>
              
              <div className="product-details">
                <p className="price">${product.price} {product.unit && `/ ${product.unit}`}</p>
                <p className="category">{product.category}</p>
                {product.rating && (
                  <div className="rating">
                    <span className="stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
                    <span className="rating-value">({product.rating})</span>
                  </div>
                )}
              </div>
              
              <div className="product-meta">
                <span className="created-date">
                  Added: {new Date(product.createdAt).toLocaleDateString()}
                </span>
                {product.updatedAt !== product.createdAt && (
                  <span className="updated-date">
                    Updated: {new Date(product.updatedAt).toLocaleDateString()}
                  </span>
                )}
              </div>
              
              <div className="product-actions">
                <button
                  className="edit-btn"
                  onClick={() => navigate(`/edit-product/${product._id}`)}
                  title="Edit product details"
                >
                  ✏️ Edit
                </button>
                <button
                  className="view-btn"
                  onClick={() => navigate(`/product/${product._id}`)}
                  title="View product page"
                >
                  👁️ View
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteProduct(product._id)}
                  title="Delete product"
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
)}

        {/* {activeTab === 'products' && (
          <div className="products-content">
            <h2>My Products</h2>
            {products.length === 0 ? (
              <div className="empty-state">             
                <button
                  className="primary-btn"
                  onClick={() => navigate('/userUploadedProducts')}
                >
                  Add Your Product
                </button>
              </div>
            ) : (
              <div className="products-grid">
                {products.map(product => (
                  <div key={product._id} className="product-card">
                    <div
                      className="product-image"
                      style={{
                        backgroundImage: product.image
                          ? `url(http://localhost:5000/uploads/${product.image})`
                          : 'url(https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)'
                      }}
                    >
                      <span className={`stock-status ${product.stock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                        {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                      </span>
                    </div>
                    <div className="product-info">
                      <h3>{product.name}</h3>
                      <p className="price">${product.price}</p>
                      <p className="category">{product.category}</p>
                      <div className="product-actions">
                        <button
                          className="edit-btn"
                          onClick={() => navigate(`/edit-product/${product._id}`)}
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )} */}

        {activeTab === 'stats' && (
          <div className="stats-content">
            <h2>Farm Statistics</h2>
            {stats ? (
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon">📦</div>
                  <h3>Total Products</h3>
                  <p className="stat-number">{stats.totalProducts}</p>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📊</div>
                  <h3>Total Stock</h3>
                  <p className="stat-number">{stats.totalStock}</p>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">💰</div>
                  <h3>Total Value</h3>
                  <p className="stat-number">${stats.totalValue}</p>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">📅</div>
                  <h3>Member Since</h3>
                  <p className="stat-date">{stats.joinDateFormatted}</p>
                </div>
              </div>
            ) : (
              <div className="loading">Loading statistics...</div>
            )}
          </div>
        )}

        {activeTab === 'security' && (
          <div className="security-content">
            <h2>Security Settings</h2>
            
            <div className="security-section">
              <h3>Change Password</h3>
              <form onSubmit={handleChangePassword} className="password-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="currentPassword"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    required
                    minLength="6"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    minLength="6"
                  />
                </div>
                <button type="submit" className="save-btn">
                  Change Password
                </button>
              </form>
            </div>

            <div className="security-section">
              <h3>Login Activity</h3>
              <p>Last login: {userData.lastLogin ? new Date(userData.lastLogin).toLocaleString() : 'Never'}</p>
            </div>

            <div className="security-section">
              <h3>Account Status</h3>
              <p>Status: <span className="status-badge active">Active</span></p>
              <p>Email verified: {userData.emailVerified ? 'Yes' : 'No'}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;