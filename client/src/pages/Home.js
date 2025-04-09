import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
// Import images
import vegiImage from '../Assets/vegi.jpg';
import vegi2Image from '../Assets/vegi2.jpg';
import vegi3Image from '../Assets/vegi3.jpg';
const Home = () => {
  const Navigate = useNavigate();
  
  const SHOP = () => {
    const auth = localStorage.getItem('user');
    if(auth) {
      Navigate('/products');
    } else {
      alert("Create an Account");
      Navigate('/signup');
    }
  };

  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Farmers' Market</h1>
        <p>Your one-stop destination for fresh, organic produce</p>
        <button className="cta-button" onClick={SHOP}>Shop Now</button>
      </header>
      <section className="home-features">
        <div className="feature">
          <img src={vegiImage} alt="Fresh Produce" />
          <h2>Fresh Produce</h2>
          <p>We offer a wide variety of freshly harvested fruits and vegetables.</p>
        </div>
        <div className="feature">
          <img src={vegi2Image} alt="Organic Products" />
          <h2>Organic Products</h2>
          <p>All our products are 100% organic and sustainably sourced.</p>
        </div>
        <div className="feature">
          <img src={vegi3Image} alt="Local Vendors" />
          <h2>Local Vendors</h2>
          <p>Support local farmers and artisans by shopping at our market.</p>
        </div>
      </section> 
    </div>
  );
};

export default Home;