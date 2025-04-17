// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const orderRoutes = require('./routes/orderRoutes')
const productRoutes = require("./routes/productRoutes")
const authMiddleware = require('./middleware/authMiddleware');
const connectDB = require('./config/DB');
app.use(cors({
	origin: 'http://localhost:3000',
	credentials: true
  }));
app.use(express.json());
connectDB()

 // Use the cors middleware
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
	console.log(
		`Server is running on port ${PORT}`
	);
});
