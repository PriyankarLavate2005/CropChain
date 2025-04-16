import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserUploadedProducts.css';

const UserUploadedProducts = () => {
  const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: '',
    price: '',
    category: '',
    description: '',
    stock: 'Available',
    image: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      
      // Validate file type
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
      if (!validTypes.includes(file.type)) {
        setError('Only JPEG, JPG, PNG, or GIF images are allowed');
        return;
      }
      
      // Validate file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }
      
      setProductData(prev => ({ ...prev, image: file }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    console.log('Submitting product data:', productData);
    
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('description', productData.description);
      formData.append('stock', productData.stock);
      formData.append('image', productData.image);

      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No authentication token found');
      }

      console.log('Sending request to server...');
      const response = await fetch('http://localhost:5000/api/products/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'x-auth-token': token
        }
      });

      // First check if the response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Received non-JSON response:', text);
        throw new Error('Server returned an unexpected response');
      }

      const responseData = await response.json();
      console.log('Server response:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to upload product');
      }

      if (responseData.success) {
        navigate('/myprofile?tab=products');
      }
    } catch (error) {
      console.error('Upload error:', error);
      
      let errorMessage = 'Failed to upload product. Please try again.';
      if (error.message) {
        errorMessage = error.message;
      }
      
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="upload-product-container">
      <div className="upload-product-header">
        <h1>Add New Product</h1>
        <button 
          className="back-btn" 
          onClick={() => navigate('/myprofile?tab=products')}
          disabled={isSubmitting}
        >
          ← Back to Profile
        </button>
      </div>

      {error && (
        <div className="error-message">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="product-form" encType="multipart/form-data">
        <div className="form-group">
          <label>Product Name *</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
            disabled={isSubmitting}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price *</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              placeholder="e.g. $2.50/kg"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label>Category *</label>
            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
              disabled={isSubmitting}
            >
              <option value="">Select category</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Fruits">Fruits</option>
              <option value="Grains">Grains</option>
              <option value="Dairy">Dairy</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Stock Status *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="stock"
                value="Available"
                checked={productData.stock === 'Available'}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              Available
            </label>
            <label>
              <input
                type="radio"
                name="stock"
                value="Limited"
                checked={productData.stock === 'Limited'}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              Limited
            </label>
            <label>
              <input
                type="radio"
                name="stock"
                value="Out of Stock"
                checked={productData.stock === 'Out of Stock'}
                onChange={handleInputChange}
                disabled={isSubmitting}
              />
              Out of Stock
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            rows="4"
            disabled={isSubmitting}
          />
        </div>

        <div className="form-group">
          <label>Product Image *</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
            disabled={isSubmitting}
          />
          <small>Max file size: 5MB (JPEG, JPG, PNG, GIF)</small>
          
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Preview" />
            </div>
          )}
        </div>

        <div className="form-actions">
          <button 
            type="submit" 
            className="submit-btn"
            disabled={isSubmitting || !productData.image}
          >
            {isSubmitting ? 'Uploading...' : 'Upload Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserUploadedProducts;