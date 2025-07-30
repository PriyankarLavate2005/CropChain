import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaLeaf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>
              <FaLeaf className="me-2" />
              CropChain
            </h5>
            <p className="text-muted">
              Empowering farmers and connecting them directly with customers 
              through intelligent agriculture solutions.
            </p>
          </Col>
          <Col md={2}>
            <h6>Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-muted text-decoration-none">Home</a></li>
              <li><a href="/marketplace" className="text-muted text-decoration-none">Marketplace</a></li>
              <li><a href="/weather" className="text-muted text-decoration-none">Weather</a></li>
              <li><a href="/about" className="text-muted text-decoration-none">About</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>For Farmers</h6>
            <ul className="list-unstyled">
              <li><a href="/farmer-signup" className="text-muted text-decoration-none">Join as Farmer</a></li>
              <li><a href="/farmer-dashboard" className="text-muted text-decoration-none">Dashboard</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Sell Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Price Analytics</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>For Customers</h6>
            <ul className="list-unstyled">
              <li><a href="/customer-signup" className="text-muted text-decoration-none">Join as Customer</a></li>
              <li><a href="/customer-dashboard" className="text-muted text-decoration-none">Dashboard</a></li>
              <li><a href="/marketplace" className="text-muted text-decoration-none">Buy Fresh</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Track Orders</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h6>Connect</h6>
            <div className="d-flex gap-3">
              <FaFacebook className="text-muted" style={{cursor: 'pointer'}} />
              <FaTwitter className="text-muted" style={{cursor: 'pointer'}} />
              <FaInstagram className="text-muted" style={{cursor: 'pointer'}} />
              <FaLinkedin className="text-muted" style={{cursor: 'pointer'}} />
            </div>
          </Col>
        </Row>
        <hr className="my-3" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">
              &copy; 2024 CropChain. All rights reserved. | 
              <a href="#" className="text-muted text-decoration-none ms-2">Privacy Policy</a> | 
              <a href="#" className="text-muted text-decoration-none ms-2">Terms of Service</a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;