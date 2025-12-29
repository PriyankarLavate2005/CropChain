const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number']
  },
  zip: {
    type: String,
    required: [true, 'ZIP code is required'],
    match: [/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code']
  },
  address: {
    type: String,
    trim: true,
    maxlength: [200, 'Address cannot exceed 200 characters'],
    default: ''
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'Bio cannot exceed 500 characters'],
    default: 'Passionate farmer with experience in sustainable agriculture'
  },
  avatar: {
    type: String,
    default: ''
  },
  farmName: {
    type: String,
    trim: true,
    maxlength: [100, 'Farm name cannot exceed 100 characters'],
    default: ''
  },
  location: {
    city: {
      type: String,
      trim: true,
      default: ''
    },
    state: {
      type: String,
      trim: true,
      default: ''
    },
    coordinates: {
      latitude: Number,
      longitude: Number
    }
  },
  role: {
    type: String,
    enum: ['farmer', 'buyer', 'admin'],
    default: 'farmer'
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'suspended'],
    default: 'active'
  },
  emailVerified: {
    type: Boolean,
    default: false
  },
  verificationToken: String,
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  lastLogin: {
    type: Date,
    default: Date.now
  },
  preferences: {
    emailNotifications: {
      type: Boolean,
      default: true
    },
    smsNotifications: {
      type: Boolean,
      default: false
    },
    newsletter: {
      type: Boolean,
      default: true
    }
  },
  socialMedia: {
    website: {
      type: String,
      trim: true,
      default: ''
    },
    facebook: {
      type: String,
      trim: true,
      default: ''
    },
    instagram: {
      type: String,
      trim: true,
      default: ''
    },
    twitter: {
      type: String,
      trim: true,
      default: ''
    }
  },
  stats: {
    totalProducts: {
      type: Number,
      default: 0
    },
    totalSales: {
      type: Number,
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviewsCount: {
      type: Number,
      default: 0
    }
  },
  // Explicitly define createdAt and updatedAt to ensure they always exist
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  // Remove timestamps: true since we're defining them manually
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      delete ret.verificationToken;
      delete ret.resetPasswordToken;
      delete ret.resetPasswordExpires;
      return ret;
    }
  }
});

// Indexes for better query performance
UserSchema.index({ email: 1 });
UserSchema.index({ role: 1, status: 1 });
UserSchema.index({ 'location.city': 1, 'location.state': 1 });
UserSchema.index({ createdAt: -1 });

// Hash password before saving
UserSchema.pre('save', async function(next) {
  // Update updatedAt timestamp
  this.updatedAt = new Date();
  
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Update updatedAt timestamp before any update operation
UserSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: new Date() });
  next();
});

// Compare password method
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Update last login timestamp
UserSchema.methods.updateLastLogin = function() {
  this.lastLogin = new Date();
  return this.save();
};

// Virtual for formatted address
UserSchema.virtual('formattedAddress').get(function() {
  const parts = [];
  if (this.address) parts.push(this.address);
  if (this.location?.city) parts.push(this.location.city);
  if (this.location?.state) parts.push(this.location.state);
  if (this.zip) parts.push(this.zip);
  
  return parts.join(', ') || 'Address not provided';
});

// Virtual for join date (formatted) - FIXED with null check
UserSchema.virtual('joinDateFormatted').get(function() {
  // Check if createdAt exists and is a valid date
  if (!this.createdAt || !(this.createdAt instanceof Date) || isNaN(this.createdAt)) {
    return 'Join date not available';
  }
  
  return this.createdAt.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long',
    day: 'numeric'
  });
});

// Static method to find active users
UserSchema.statics.findActiveUsers = function() {
  return this.find({ status: 'active' });
};

// Instance method to get public profile - FIXED with safe date handling
UserSchema.methods.getPublicProfile = function() {
  // Safe date formatting function
  const safeFormatDate = (date) => {
    if (!date || !(date instanceof Date) || isNaN(date)) {
      return 'Date not available';
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return {
    _id: this._id,
    name: this.name,
    email: this.email,
    phone: this.phone,
    address: this.address,
    bio: this.bio,
    avatar: this.avatar,
    farmName: this.farmName,
    location: this.location,
    zip: this.zip,
    role: this.role,
    status: this.status,
    stats: this.stats,
    preferences: this.preferences,
    socialMedia: this.socialMedia,
    createdAt: this.createdAt,
    lastLogin: this.lastLogin,
    formattedAddress: this.formattedAddress,
    joinDateFormatted: this.joinDateFormatted,
    // Additional safe formatted dates
    createdAtFormatted: safeFormatDate(this.createdAt),
    lastLoginFormatted: safeFormatDate(this.lastLogin)
  };
};

// Method to generate password reset token
UserSchema.methods.generatePasswordReset = function() {
  this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
  this.resetPasswordExpires = Date.now() + 3600000; // 1 hour
  return this.save();
};

// Method to generate email verification token
UserSchema.methods.generateVerificationToken = function() {
  this.verificationToken = crypto.randomBytes(20).toString('hex');
  return this.save();
};

// JWT Token generation methods
UserSchema.methods.generateAuthToken = function() {
  return jwt.sign(
    { 
      id: this._id, 
      email: this.email,
      role: this.role 
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '1h' }
  );
};

UserSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    { id: this._id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE || '7d' }
  );
};

// Debugging middleware to catch documents without createdAt
UserSchema.post('init', function(doc) {
  if (!doc.createdAt) {
    console.warn('Document initialized without createdAt:', doc._id);
    doc.createdAt = new Date();
  }
});

UserSchema.post('save', function(doc) {
  if (!doc.createdAt) {
    console.warn('Document saved without createdAt:', doc._id);
    doc.createdAt = new Date();
    doc.save(); // Auto-fix the missing createdAt
  }
});

module.exports = mongoose.model('User', UserSchema);