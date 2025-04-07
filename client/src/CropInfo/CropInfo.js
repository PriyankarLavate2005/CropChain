import React, { useState } from 'react';
import { getCropInfo } from './CropService'; // Import the service
import './CropInfo.css';

const CropInfo = () => {
  const [cropName, setCropName] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [images, setImages] = useState([]);  // State to store images
  const [imageError, setImageError] = useState('');  // State for image fetching errors

  // Function to handle input changes
  const handleInputChange = (e) => {
    setCropName(e.target.value);
  };

  // Function to fetch crop info based on the crop name
  const fetchCropInfo = () => {
    if (!cropName.trim()) {
      setError('Please enter a crop name.');
      setData(null);
      setImages([]);
      return;
    }

    // Call getCropInfo from CropServices.js
    getCropInfo(cropName)
      .then((cropInfo) => {
        setData(cropInfo);
        setError('');
        fetchImages(cropName);  // Fetch images after successful crop info
      })
      .catch(() => {
        setError('Crop not found. Please try another name.');
        setData(null);
        setImages([]);
      });
  };

  // Function to fetch crop images using Pixabay API
  const fetchImages = (cropName) => {
    const apiKey = '47620593-5d7d395d6e57b211cdc556dd7';  // Replace with your actual Pixabay API key
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${cropName}&image_type=photo&per_page=3`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.hits.length > 0) {
          setImages(data.hits);  // Store up to 3 images in state
          setImageError('');
        } else {
          setImageError('No images found for this crop.');
          setImages([]);
        }
      })
      .catch(() => {
        setImageError('Error fetching images. Please try again later.');
        setImages([]);
      });
  };

  return (
    <div className="crop-info">
      <h2>Crop Information</h2>

      {/* Input field to type crop name */}
      <input
        type="text"
        placeholder="Enter crop name"
        value={cropName}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && fetchCropInfo()} // Trigger fetch on 'Enter' key
      />
      <button onClick={fetchCropInfo}>Search</button>

      {/* Displaying error message if no crop is found */}
      {error && <p className="error">{error}</p>}

      {/* Displaying images */}
      {images.length > 0 && (
        <div className="image-gallery">
          
          <div className="images">
            {images.map((image, index) => (
              <div key={index} className="image-card">
                <img src={image.webformatURL} alt={image.tags} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Displaying crop info if available */}
      {data && (
        <div className="results">
          <h3>{data.name}</h3>
          <p><strong>Climate:</strong> {data.climate}</p>
          <p><strong>Soil Type:</strong> {data.soil}</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            {data.practices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>

          <p><strong>Pests and Solutions:</strong></p>
          <ul>
            {data.pests.map((pest, index) => (
              <li key={index}>
                <strong>{pest.name}:</strong> {pest.about}
                <br />
                <strong>Solution:</strong> <span className="highlight">{pest.solution}</span>
              </li>
            ))}
          </ul>

          <p><strong>Market Demand:</strong> {data.market_demand}</p>
          <p><strong>Origin:</strong> {data.origin}</p>

          <p><strong>Uses:</strong></p>
          <ul>
            {data.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>

          <p><strong>Nutritional Value:</strong> {data.nutritional_value}</p>
        </div>
      )}

      

      {/* Displaying error for images */}
      {imageError && <p className="error">{imageError}</p>}
    </div>
  );
};

export default CropInfo;
