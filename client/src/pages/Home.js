import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  const handleShopClick = () => {
    const auth = localStorage.getItem('user');
    if(auth) {
      navigate('/products');
    } else {
      alert("Please create an account to shop");
      navigate('/signup');
    }
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Fresh From Farm to Your Table</h1>
          <p className="hero-subtitle">Experience the difference with our locally sourced, organic produce</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={handleShopClick}>Shop Now</button>
            <button className="secondary-button" onClick={() => navigate('/about')}>Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/farmer.jpg" alt="Happy farmer with fresh produce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Our Market</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/vegetables.jpg" alt="Fresh Produce" />
            </div>
            <h3>Farm Fresh Quality</h3>
            <p>Harvested at peak ripeness and delivered to you within hours, not days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/organic.jpg" alt="Organic Products" />
            </div>
            <h3>100% Organic</h3>
            <p>Certified organic produce grown without harmful pesticides or chemicals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="/images/local.jpg" alt="Local Vendors" />
            </div>
            <h3>Support Local</h3>
            <p>Directly supporting family farms and local food producers in your community.</p>
          </div>
        </div>
      </section>

      {/* Farmers Section */}
      <section className="farmers-section">
        <div className="farmers-container">
          <div className="farmers-content">
            <h2>Meet Our Farmers</h2>
            <p>
              "At Farmers' Market, we believe in the power of community and connection. Each vegetable 
              and fruit in our market tells a story of hard work, dedication, and love for the land. 
              We partner with local family farms who share our commitment to sustainable 
              agriculture and ethical farming practices."
            </p>
          </div>
          
          <div className="farmer-signature-card">
            <div className="farmer-profile">
              <img src="/images/farmer-profile.jpg" alt="Farmer" className="farmer-photo" />
              <div className="farmer-details">
                <p className="farmer-name">Rajesh Patel</p>
                <p className="farmer-title">Founder & Lead Farmer</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;