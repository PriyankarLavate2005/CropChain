import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);

  // Initialize auth state and handle storage changes
  useEffect(() => {
    const user = localStorage.getItem('user');
    setAuth(user ? JSON.parse(user) : null);

    const handleStorageChange = () => {
      const user = localStorage.getItem('user');
      setAuth(user ? JSON.parse(user) : null);
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setAuth(null);
    setIsProfileOpen(false);
    navigate('/login');
  };

  const toggleProfile = (e) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return '';
    // Take only the first letter of the first name
    return name.trim()[0].toUpperCase();
  };

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
      <div className="navbar-logo">
        <Link to="/" aria-label="Home">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">AgroGuide</span>
        </Link>
      </div>

      {/* Mobile menu button (hidden on desktop) */}
      <button 
        className="navbar-mobile-toggle" 
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span className="navbar-toggle-icon"></span>
      </button>

      <ul className="navbar-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cropInfo">Crop Info</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        
        {auth ? (
          <li className="profile-container" ref={profileRef}>
            <div 
              className="profile-trigger" 
              onClick={toggleProfile}
              aria-haspopup="true"
              aria-expanded={isProfileOpen}
            >
              <div className="profile-avatar">
                {getInitials(auth.name)}
              </div>
              <span className="profile-name">{auth.name}</span>
              <i className={`dropdown-icon ${isProfileOpen ? 'open' : ''}`}>
                <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </i>
            </div>
            
            {isProfileOpen && (
              <div className="profile-dropdown" role="menu">
                <DropdownLink 
                  to="/userprofile" 
                  icon="👤" 
                  text="My Profile" 
                  closeMenu={() => setIsProfileOpen(false)}
                />
                <DropdownLink 
                  to="/settings" 
                  icon="⚙️" 
                  text="Settings" 
                  closeMenu={() => setIsProfileOpen(false)}
                />
                <div className="dropdown-divider"></div>
                <button 
                  onClick={handleLogout} 
                  className="dropdown-item logout"
                  role="menuitem"
                >
                  <span className="icon" aria-hidden="true">🚪</span> 
                  <span>Logout</span>
                </button>
              </div>
            )}
          </li>
        ) : (
          <>
            <li><AuthLink to="/signup" type="signup">Sign Up</AuthLink></li>
            <li><AuthLink to="/login" type="login">Log In</AuthLink></li>
          </>
        )}
      </ul>
    </nav>
  );
};

// Reusable NavLink component
const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link" activeclassname="active">
    {children}
  </Link>
);

// Reusable AuthLink component
const AuthLink = ({ to, type, children }) => (
  <Link to={to} className={`auth-link ${type}`}>
    {children || (type === 'signup' ? 'Sign Up' : 'Log In')}
  </Link>
);

// Reusable DropdownLink component
const DropdownLink = ({ to, icon, text, closeMenu }) => (
  <Link 
    to={to} 
    className="dropdown-item" 
    onClick={closeMenu}
    role="menuitem"
  >
    <span className="icon" aria-hidden="true">{icon}</span>
    <span>{text}</span>
  </Link>
);

export default Navbar;