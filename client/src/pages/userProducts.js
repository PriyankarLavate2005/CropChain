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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProductData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append('name', productData.name);
      formData.append('price', productData.price);
      formData.append('category', productData.category);
      formData.append('description', productData.description);
      formData.append('stock', productData.stock);
      formData.append('image', productData.image);

      const token = localStorage.getItem('token');
      const response = await fetch('/api/products/upload', {
        method: 'POST',
        headers: {
          'x-auth-token': token
        },
        body: formData
      });

      const data = await response.json();
      
      if (response.ok) {
        navigate('/myprofile?tab=products');
      } else {
        console.error('Upload failed:', data.message);
      }
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <div className="upload-product-container">
      <div className="upload-product-header">
        <h1>Add New Product</h1>
        <button className="back-btn" onClick={() => navigate('/myprofile?tab=products')}>
          ← Back to Profile
        </button>
      </div>

      <form onSubmit={handleSubmit} className="product-form">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={productData.price}
              onChange={handleInputChange}
              placeholder="e.g. $2.50/kg"
              required
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              required
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
          <label>Stock Status</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="stock"
                value="Available"
                checked={productData.stock === 'Available'}
                onChange={handleInputChange}
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
          />
        </div>

        <div className="form-group">
          <label>Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Upload Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserUploadedProducts;