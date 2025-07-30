import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaShoppingCart, FaTractor, FaLeaf } from 'react-icons/fa';

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar bg="success" variant="dark" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <FaLeaf className="me-2" />
            CropChain
          </Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/marketplace">
              <Nav.Link>Marketplace</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/weather">
              <Nav.Link>Weather</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
          </Nav>
          
          <Nav>
            {user ? (
              <NavDropdown 
                title={
                  <span>
                    <FaUser className="me-1" />
                    {user.profile?.name || user.email}
                  </span>
                } 
                id="user-nav-dropdown"
              >
                <LinkContainer to={user.userType === 'farmer' ? '/farmer-dashboard' : '/customer-dashboard'}>
                  <NavDropdown.Item>
                    {user.userType === 'farmer' ? <FaTractor className="me-2" /> : <FaShoppingCart className="me-2" />}
                    Dashboard
                  </NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <NavDropdown title="Sign Up" id="signup-nav-dropdown">
                  <LinkContainer to="/farmer-signup">
                    <NavDropdown.Item>
                      <FaTractor className="me-2" />
                      As Farmer
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/customer-signup">
                    <NavDropdown.Item>
                      <FaShoppingCart className="me-2" />
                      As Customer
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;