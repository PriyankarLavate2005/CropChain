import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(localStorage.getItem('user'));
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setAuth(null);
    navigate('/login');
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">AgroGuide</span>
        </Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/about" className="nav-link">About</Link></li>
        <li><Link to="/cropInfo" className="nav-link">Crop Info</Link></li>
        <li><Link to="/contact" className="nav-link">Contact</Link></li>
        {
          auth ? (
            <li className="profile-container">
              <div className="profile-trigger" onClick={toggleProfile}>
                <div className="profile-avatar">
                  {JSON.parse(auth).name.charAt(0).toUpperCase()}
                </div>
                <span className="profile-name">{JSON.parse(auth).name}</span>
                <i className={`dropdown-icon ${isProfileOpen ? 'open' : ''}`}>
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </i>
              </div>
              {isProfileOpen && (
                <div className="profile-dropdown">
                  <Link to="/userprofile" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
                    <i className="icon">👤</i> My Profile
                  </Link>
                  <Link to="/settings" className="dropdown-item" onClick={() => setIsProfileOpen(false)}>
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
              <li><Link to='/signup' className="auth-link signup">Sign Up</Link></li>
              <li><Link to='/login' className="auth-link login">Log In</Link></li>
            </>
          )
        }
      </ul>
    </nav>
  );
};

export default Navbar;