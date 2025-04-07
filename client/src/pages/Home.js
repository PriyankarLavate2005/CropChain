import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const Navigate=useNavigate()
  const SHOP=()=>{
    const auth = localStorage.getItem('user');
    if(auth){
     Navigate('/products')
    }
    else{
      alert("create an Account")
      Navigate('/signup')
    }
  }
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to the Farmers' Market</h1>
        <p>Your one-stop destination for fresh, organic produce</p>
        <button className="cta-button"onClick={SHOP}>Shop Now</button>
      </header>
      <section className="home-features">
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1516685018646-5498d1627229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Fresh Produce" />
          <h2>Fresh Produce</h2>
          <p>We offer a wide variety of freshly harvested fruits and vegetables.</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1542838336-3b93f86c16af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Organic Products" />
          <h2>Organic Products</h2>
          <p>All our products are 100% organic and sustainably sourced.</p>
        </div>
        <div className="feature">
          <img src="https://images.unsplash.com/photo-1541420073364-4d6a645e2122?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400" alt="Local Vendors" />
          <h2>Local Vendors</h2>
          <p>Support local farmers and artisans by shopping at our market.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
