// CropServices.js

import { cropData } from './CropData';

// Function to get crop info by crop name
export const getCropInfo = (cropName) => {
  // Ensure the crop name is in lowercase for case-insensitive matching
  const cropInfo = cropData[cropName.toLowerCase()];

  // Return a promise or data based on availability
  if (cropInfo) {
    return Promise.resolve(cropInfo); // Simulate async fetching (optional)
  } else {
    return Promise.reject("Crop not found");
  }
};
