const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadDir = 'uploads/products/';
if (!fs.existsSync(uploadDir)) {
  console.log('Creating upload directory:', uploadDir);
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Setting upload destination to:', uploadDir);
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`;
    console.log('Generated filename:', uniqueName);
    cb(null, uniqueName);
  }
});

// File type validation
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  console.log('File MIME type:', file.mimetype);
  
  if (allowedTypes.includes(file.mimetype)) {
    console.log('File type accepted');
    cb(null, true);
  } else {
    console.warn('Invalid file type:', file.mimetype);
    cb(new Error('Only images (JPEG, JPG, PNG, GIF) are allowed'), false);
  }
};

// Initialize Multer
const upload = multer({
  storage,
  limits: { fileSize: 15 * 1024 * 1024 }, // 5MB limit
  fileFilter
});

// Error handler
const handleMulterErrors = (err, req, res, next) => {
  if (err) {
    console.error('Multer error:', err);
    let message = err.message;
    
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        message = 'File too large (max 5MB)';
      } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
        message = 'Unexpected file field';
      }
    }
    
    return res.status(400).json({ 
      success: false,
      message
    });
  }
  next();
};

module.exports = { upload, handleMulterErrors };