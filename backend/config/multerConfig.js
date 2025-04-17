const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory if it doesn't exist
const uploadDir = path.join(__dirname, '../uploads/products');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${req.user.id}-${Date.now()}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
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
    let message = err.message;
    
    if (err instanceof multer.MulterError) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        message = 'File too large (max 5MB)';
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