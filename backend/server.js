// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require('cors');

const connectDB = require('./config/DB');
mongoose.connect('mongodb://localhost/fruitvegmarke',
{
	useNewUrlParser: true,
	useUnifiedTopology: true
}
);


app.use(express.json());
app.use(cors()); // Use the cors middleware

app.use('/api/auth', require('./routes/authRoutes'));

const productSchema = new mongoose.Schema({
name: String,
type: String,
description: String,
price: Number,
image: String,
});

const Product = mongoose.model('Product', productSchema);

// Function to seed initial data into the database
const seedDatabase = async () => {
try {
	await Product.deleteMany(); // Clear existing data

	const products = [
	{
		name: 'Apple', type: 'Fruit',
		description: 'Fresh and crispy',
		price: 150,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142542/apple.jpg'
	},
	{
		name: 'Banana',
		type: 'Fruit',
		description: 'Rich in potassium',
		price: 75,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142554/banana.jpg'
	},
	{
		name: 'Orange',
		type: 'Fruit',
		description: 'Packed with vitamin C',
		price: 200,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142641/orange.jpg'
	},
	{
		name: 'Carrot',
		type: 'Vegetable',
		description: 'Healthy and crunchy',
		price: 100,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142613/carrot.jpg'
	},
	{
		name: 'Broccoli',
		type: 'Vegetable',
		description: 'Nutrient-rich greens',
		price: 175,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142601/brocoli.jpg'
	},
	{
		name: 'Grapes',
		type: 'Fruit',
		description: 'Sweet and juicy',
		price: 250,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142629/grapes.jpg'
	},
	{
		name: 'Strawberry',
		type: 'Fruit',
		description: 'Delicious red berries',
		price: 300,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142657/strawberry.jpg'
	},
	{
		name: 'Lettuce',
		type: 'Vegetable',
		description: 'Crisp and fresh',
		price: 120,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142635/lettue.jpg'
	},
	{
		name: 'Tomato',
		type: 'Vegetable',
		description: 'Versatile and flavorful',
		price: 180,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142704/tomato.jpg'
	},
	{
		name: 'Cucumber',
		type: 'Vegetable',
		description: 'Cool and hydrating',
		price: 130,
		image:
'https://media.geeksforgeeks.org/wp-content/uploads/20240104142621/cocumber.jpg'
	},

	];

	await Product.insertMany(products);
	console.log('Database seeded successfully');
} catch (error) {
	console.error('Error seeding database:', error);
}
};

// Seed the database on server startup
seedDatabase();

// Define API endpoint for fetching all products
app.get('/api/products', async (req, res) => {
try {
	// Fetch all products from the database
	const allProducts = await Product.find();

	// Send the entire products array as JSON response
	res.json(allProducts);
} catch (error) {
	console.error(error);
	res.status(500)
	.json({ error: 'Internal Server Error' });
}
});

app.listen(PORT, () => {
console.log(
	`Server is running on port ${PORT}`
);
});
