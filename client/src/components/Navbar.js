import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const profileRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const getInitials = (name) => {
    if (!name) return '';
    return name.trim()[0].toUpperCase();
  };

  return (
    <>
      <style>
        {`
          :root {
            --primary-color: #4CAF50;
            --primary-dark: #388E3C;
            --primary-light: #C8E6C9;
            --text-dark: #2E3D42;
            --text-light: #F5F5F5;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            --transition: all 0.3s ease;
          }

          .navbar-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            background-color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            transition: var(--transition);
          }

          .navbar-container.scrolled {
            padding: 0.75rem 2rem;
            box-shadow: var(--shadow);
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(5px);
          }

          .navbar-logo {
            display: flex;
            align-items: center;
          }

          .navbar-logo a {
            display: flex;
            align-items: center;
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 700;
            font-size: 1.5rem;
            transition: var(--transition);
          }

          .logo-icon {
            font-size: 1.8rem;
            margin-right: 0.5rem;
            color: var(--primary-color);
          }

          .logo-text {
            background: linear-gradient(to right, var(--primary-color), var(--primary-dark));
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .navbar-links {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;
            align-items: center;
            gap: 1.5rem;
          }

          .nav-link {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            padding: 0.5rem 0;
            position: relative;
            transition: var(--transition);
          }

          .nav-link:hover {
            color: var(--primary-color);
          }

          .nav-link::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--primary-color);
            transition: var(--transition);
          }

          .nav-link:hover::after {
            width: 100%;
          }

          .nav-link.active {
            color: var(--primary-color);
            font-weight: 600;
          }

          .nav-link.active::after {
            width: 100%;
          }

          .auth-link {
            padding: 0.5rem 1.25rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            transition: var(--transition);
          }

          .auth-link.login {
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
          }

          .auth-link.login:hover {
            background-color: var(--primary-light);
          }

          .auth-link.signup {
            background-color: var(--primary-color);
            color: white;
            border: 1px solid var(--primary-color);
          }

          .auth-link.signup:hover {
            background-color: var(--primary-dark);
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(76, 175, 80, 0.3);
          }

          .profile-container {
            position: relative;
          }

          .profile-trigger {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            padding: 0.5rem 0.75rem;
            border-radius: 50px;
            transition: var(--transition);
          }

          .profile-trigger:hover {
            background-color: rgba(0, 0, 0, 0.05);
          }

          .profile-avatar {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 600;
          }

          .profile-name {
            font-weight: 500;
            color: var(--text-dark);
          }

          .dropdown-icon {
            transition: var(--transition);
          }

          .dropdown-icon.open {
            transform: rotate(180deg);
          }

          .profile-dropdown {
            position: absolute;
            right: 0;
            top: calc(100% + 0.5rem);
            background-color: white;
            border-radius: 8px;
            box-shadow: var(--shadow);
            min-width: 200px;
            overflow: hidden;
            z-index: 1000;
            opacity: 0;
            transform: translateY(-10px);
            visibility: hidden;
            transition: var(--transition);
          }

          .profile-dropdown {
            opacity: ${isProfileOpen ? '1' : '0'};
            transform: ${isProfileOpen ? 'translateY(0)' : 'translateY(-10px)'};
            visibility: ${isProfileOpen ? 'visible' : 'hidden'};
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            padding: 0.75rem 1rem;
            text-decoration: none;
            color: var(--text-dark);
            transition: var(--transition);
          }

          .dropdown-item:hover {
            background-color: #f5f5f5;
            color: var(--primary-color);
          }

          .dropdown-item .icon {
            font-size: 1.1rem;
          }

          .dropdown-divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 0.25rem 0;
          }

          .dropdown-item.logout {
            color: #e53935;
          }

          .dropdown-item.logout:hover {
            background-color: #ffebee;
          }

          @media (max-width: 768px) {
            .navbar-container {
              padding: 1rem;
            }
            
            .navbar-links {
              gap: 1rem;
            }
            
            .auth-link {
              padding: 0.5rem 0.75rem;
              font-size: 0.9rem;
            }
          }
        `}
      </style>

      <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`} aria-label="Main navigation">
        <div className="navbar-logo">
          <Link to="/" aria-label="Home">
            <span className="logo-icon">🌱</span>
            <span className="logo-text">CropChain</span>
          </Link>
        </div>

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
            </li>
          ) : (
            <>
              <li><AuthLink to="/login" type="login">Log In</AuthLink></li>
              <li><AuthLink to="/signup" type="signup">Sign Up</AuthLink></li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="nav-link" activeclassname="active">
    {children}
  </Link>
);

const AuthLink = ({ to, type, children }) => (
  <Link to={to} className={`auth-link ${type}`}>
    {children || (type === 'signup' ? 'Sign Up' : 'Log In')}
  </Link>
);

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