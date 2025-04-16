const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Product name is required'], trim: true },
  price: { type: String, required: [true, 'Price is required'] },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Vegetables', 'Fruits', 'Grains', 'Dairy', 'Other']
  },
  description: { type: String, trim: true },
  stock: {
    type: String,
    required: true,
    enum: ['Available', 'Limited', 'Out of Stock'],
    default: 'Available'
  },
  image: { type: String, required: [true, 'Product image is required'] },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);