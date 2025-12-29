const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/UserprofileController');
const auth = require('../middleware/auth');
const upload = require('../config/multerConfig'); // Now this imports the Multer instance directly
const { body } = require('express-validator');
const authController=require('../controllers/authController')
// Validation rules
const updateProfileValidation = [
  body('name').optional().isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('phone').optional().isMobilePhone().withMessage('Please enter a valid phone number'),
  body('bio').optional().isLength({ max: 500 }).withMessage('Bio cannot exceed 500 characters')
];

// Apply auth middleware to all routes
//router.use(auth);

// Routes
router.get('/:userId', userProfileController.getUserProfile);
router.put('/:userId', updateProfileValidation, userProfileController.updateUserProfile);
router.patch('/:userId/password', userProfileController.changePassword);
router.get('/:userId/products', userProfileController.getUserProducts);
router.get('/:userId/stats', userProfileController.getUserStats);
router.post('/:userId/avatar', upload.single('avatar'), userProfileController.uploadProfilePicture);

module.exports = router;