const mongoose=require('mongoose')
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
  });
  const Product=mongoose.export('uploadproductitem',productSchema)