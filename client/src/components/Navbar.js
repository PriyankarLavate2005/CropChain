import React, { use } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from '../pages/Logout';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const handleLogout = () => {
    // Add your logout logic here
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* <Link to="/">Logo</Link> */}
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cropInfo">Crop Info</Link></li>
        {/* <li><Link to="/products">Products</Link></li> */}
        <li><Link to="/contact">Contact</Link></li>
        {
          auth
          ? <li><button onClick={handleLogout} className='btn-logout'>Logout ({JSON.parse(auth).name})</button></li>
          : <>
              <li><Link to='/signup'>Signup</Link></li>
              <li><Link to='/login'>Login</Link></li>
            </>
        }
      </ul>
    </nav>
  );
};

export default Navbar;
