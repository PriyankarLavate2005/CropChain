import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product, onAddToCart, imageUrl }) => {
  const extractPriceValue = (priceString) => {
    if (!priceString) return 0;
    const numericValue = priceString.match(/\d+\.?\d*/);
    return numericValue ? parseFloat(numericValue[0]) : 0;
  };

  const formatINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2
    }).format(amount);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={product.name}
          onError={(e) => {
            e.target.src = '/placeholder-image.jpg';
          }}
        />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p><strong>Price:</strong> {formatINR(extractPriceValue(product.price))}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Stock:</strong> 
          <span className={`stock-${product.stock.toLowerCase().replace(/\s+/g, '-')}`}>
            {product.stock}
          </span>
        </p>
        {product.description && <p>{product.description}</p>}
        <button className="add-to-cart" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './ProductItem.css';

// // Dummy fruits data
// export const dummyFruits = [
//   {
//     id: 1,
//     name: 'Fresh Apples',
//     price: '₹120.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Fresh and crunchy red apples'
//   },
//   {
//     id: 2,
//     name: 'Bananas',
//     price: '₹60.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Ripe yellow bananas'
//   },
//   {
//     id: 3,
//     name: 'Oranges',
//     price: '₹80.00',
//     category: 'Fruits',
//     stock: 'limited',
//     description: 'Juicy oranges with vitamin C'
//   },
//   {
//     id: 4,
//     name: 'Strawberries',
//     price: '₹200.00',
//     category: 'Fruits',
//     stock: 'out-of-stock',
//     description: 'Sweet fresh strawberries'
//   },
//   {
//     id: 5,
//     name: 'Grapes',
//     price: '₹150.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Sweet green seedless grapes'
//   },
//   {
//     id: 6,
//     name: 'Mangoes',
//     price: '₹180.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Seasonal sweet mangoes'
//   },
//   {
//     id: 7,
//     name: 'Pineapple',
//     price: '₹90.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Fresh tropical pineapple'
//   },
//   {
//     id: 8,
//     name: 'Watermelon',
//     price: '₹70.00',
//     category: 'Fruits',
//     stock: 'limited',
//     description: 'Juicy red watermelon'
//   },
//   {
//     id: 9,
//     name: 'Pomegranate',
//     price: '₹140.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Healthy pomegranate seeds'
//   },
//   {
//     id: 10,
//     name: 'Kiwi',
//     price: '₹110.00',
//     category: 'Fruits',
//     stock: 'available',
//     description: 'Vitamin rich kiwi fruits'
//   }
// ];

// const ProductItem = ({ product, onAddToCart, imageUrl }) => {
//   const navigate = useNavigate();

//   const extractPriceValue = (priceString) => {
//     if (!priceString) return 0;
//     const numericValue = priceString.match(/\d+\.?\d*/);
//     return numericValue ? parseFloat(numericValue[0]) : 0;
//   };

//   const formatINR = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2
//     }).format(amount);
//   };

//   const handleAddToCart = () => {
//     onAddToCart(product);
//   };

//   const handleBuyNow = () => {
//     onAddToCart(product);
//     navigate('/cart');
//   };

//   const getStockClassName = (stock) => {
//     switch (stock.toLowerCase()) {
//       case 'available':
//       case 'in stock':
//         return 'stock-available';
//       case 'limited':
//       case 'low stock':
//         return 'stock-limited';
//       case 'out-of-stock':
//       case 'out of stock':
//         return 'stock-out-of-stock';
//       default:
//         return 'stock-available';
//     }
//   };

//   return (
//     <div className="product-card">
//       <div className="product-image-container">
//         <img 
//           src={imageUrl} 
//           alt={product.name}
//           onError={(e) => {
//             e.target.src = '/placeholder-image.jpg';
//           }}
//         />
//       </div>
//       <div className="product-details">
//         <h3>{product.name}</h3>
//         <p><strong>Price:</strong> {formatINR(extractPriceValue(product.price))}</p>
//         <p><strong>Category:</strong> {product.category}</p>
//         <p><strong>Stock:</strong> 
//           <span className={getStockClassName(product.stock)}>
//             {product.stock}
//           </span>
//         </p>
//         {product.description && <p>{product.description}</p>}
//         <button className="add-to-cart" onClick={handleAddToCart}>
//           Add to Cart
//         </button>
//         <button className="buy-now" onClick={handleBuyNow}>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductItem;