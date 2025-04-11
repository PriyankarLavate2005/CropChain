import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <Link to="/">AgroGuide</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cropInfo">Crop Info</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
          auth ? (
            <li className="profile-container">
              <div className="profile-trigger" onClick={toggleProfile}>
                <div className="profile-avatar">
                  {JSON.parse(auth).name.charAt(0).toUpperCase()}
                </div>
                <span className="profile-name">{JSON.parse(auth).name}</span>
                <i className={`dropdown-icon ${isProfileOpen ? 'open' : ''}`}>▼</i>
              </div>
              {isProfileOpen && (
                <div className="profile-dropdown">
                  <Link to="/userprofile" className="dropdown-item">
                    <i className="icon">👤</i> My Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item">
                    <i className="icon">⚙️</i> Settings
                  </Link>
                  <div className="dropdown-divider"></div>
                  <button onClick={handleLogout} className="dropdown-item logout">
                    <i className="icon">🚪</i> Logout
                  </button>
                </div>
              )}
            </li>
          ) : (
            <>
              <li><Link to='/signup' className="auth-link signup">Signup</Link></li>
              <li><Link to='/login' className="auth-link login">Login</Link></li>
            </>
          )
        }
      </ul>
    </nav>
  );
};

export default Navbar;