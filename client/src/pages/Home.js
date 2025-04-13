// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css';
// // Import images
// import vegiImage from '../Assets/vegi.jpg';
// import vegi2Image from '../Assets/vegi2.jpg';
// import vegi3Image from '../Assets/vegi3.jpg';
// const Home = () => {
//   const Navigate = useNavigate();
  
//   const SHOP = () => {
//     const auth = localStorage.getItem('user');
//     if(auth) {
//       Navigate('/products');
//     } else {
//       alert("Create an Account");
//       Navigate('/signup');
//     }
//   };

//   return (
//     <div className="home">
//       <header className="home-header"><br></br><br></br>
//         <h1>Welcome to the Farmers' Market</h1>
//         <p>Your one-stop destination for fresh, organic produce</p><br></br> <br></br>
//         <button className="cta-button" onClick={SHOP}>Shop Now</button>
//       </header>
//       <section className="home-features">
//         <div className="feature">
//           <img src={vegiImage} alt="Fresh Produce" />
//           <h2>Fresh Produce</h2>
//           <p>We offer a wide variety of freshly harvested fruits and vegetables.</p>
//         </div>
//         <div className="feature">
//           <img src={vegi2Image} alt="Organic Products" />
//           <h2>Organic Products</h2>
//           <p>All our products are 100% organic and sustainably sourced.</p>
//         </div>
//         <div className="feature">
//           <img src={vegi3Image} alt="Local Vendors" />
//           <h2>Local Vendors</h2>
//           <p>Support local farmers and artisans by shopping at our market.</p>
//         </div>
//       </section> 
//     </div>
//   );
// };

// export default Home;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
// Import images
import farmerImage from '../Assets/farmer.jpg'; // Add this new image import
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
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Fresh From Farm to Your Table</h1>
          <p className="hero-subtitle">Experience the difference with our locally sourced, organic produce delivered with care</p>
          <div className="hero-buttons">
            <button className="primary-button" onClick={SHOP}>Shop Now</button>
            <button className="secondary-button" onClick={() => Navigate('/about')}>Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={farmerImage} alt="Happy farmer with fresh produce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Our Market</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={vegiImage} alt="Fresh Produce" />
            </div>
            <h3>Farm Fresh Quality</h3>
            <p>Harvested at peak ripeness and delivered to you within hours, not days.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={vegi2Image} alt="Organic Products" />
            </div>
            <h3>100% Organic</h3>
            <p>Certified organic produce grown without harmful pesticides or chemicals.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src={vegi3Image} alt="Local Vendors" />
            </div>
            <h3>Support Local</h3>
            <p>Directly supporting family farms and local food producers in your community.</p>
          </div>
        </div>
      </section>

      

      {/* Testimonials */}
      {/* <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"The freshest vegetables I've ever tasted! You can really tell the difference."</p>
            <div className="customer-name">- Sarah J.</div>
          </div>
          <div className="testimonial-card">
            <p>"I love knowing exactly which farm my food comes from. Great service!"</p>
            <div className="customer-name">- Michael T.</div>
          </div>
        </div>
      </section> */}



      <section className="testimonials-section">
  <div className="testimonials-container">
    {/* Left Column - Content */}
    <div className="testimonial-content">
      <h2>Meet Our Farmers</h2>
      <p>
        "At Farmers' Market, we believe in the power of community and connection. Each vegetable 
        and fruit in our market tells a story of hard work, dedication, and love for the land. 
        We partner with over 50 local family farms who share our commitment to sustainable 
        agriculture and ethical farming practices."
      </p>
    </div>
    
    {/* Right Column - Farmer Card */}
    <div className="farmer-signature-card">
      <div className="farmer-profile">
        <img src={farmerImage} alt="Farmer" className="farmer-photo" />
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