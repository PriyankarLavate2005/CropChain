import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Agricultural Expert',
      bio: '10+ years experience in sustainable farming practices',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Maria Garcia',
      role: 'Data Scientist',
      bio: 'Specializes in crop yield prediction models',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'David Kim',
      role: 'Software Engineer',
      bio: 'Develops intuitive agricultural interfaces',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Aisha Patel',
      role: 'UX Designer',
      bio: 'Creates farmer-friendly digital experiences',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
    }
  ];

  const features = [
    {
      icon: '🌱',
      title: 'Crop Guidance',
      description: 'Personalized recommendations for your specific crops and region'
    },
    {
      icon: '⏰',
      title: 'Growth Tracking',
      description: 'Monitor your crops development stages and get timely alerts'
    },
    {
      icon: '🌦️',
      title: 'Weather Integration',
      description: 'Accurate local weather forecasts tailored to your farm'
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      description: 'Visualize your farm performance with easy-to-understand charts'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>Growing Smarter with AgroGuide</h1>
          <p className="hero-subtitle">
            Empowering farmers with data-driven agricultural solutions since 2020
          </p>
          <Link to="/cropInfo" className="cta-button">
            Explore Our Crop Guides
          </Link>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
            alt="Farm field with crops" 
          />
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p className="mission-statement">
            At AgroGuide, we're committed to bridging the gap between traditional farming knowledge 
            and modern technology. Our platform combines agricultural expertise with cutting-edge 
            data science to help farmers make informed decisions that increase yields, reduce waste, 
            and promote sustainable practices.
          </p>
          <div className="mission-stats">
            <div className="stat-item">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">Active Farmers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">120+</span>
              <span className="stat-label">Crop Varieties</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose AgroGuide?</h2>
        <p className="section-intro">
          Our platform offers comprehensive tools designed specifically for modern agricultural needs
        </p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet Our Team</h2>
        <p className="section-intro">
          Passionate experts combining agriculture and technology
        </p>
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-card" key={member.id}>
              <div className="team-image-container">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="image-overlay"></div>
              </div>
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Farming Experience?</h2>
          <p>
            Join thousands of farmers who are already benefiting from AgroGuide's smart solutions
          </p>
          <div className="cta-buttons">
            <Link to="/signup" className="cta-button primary">
              Sign Up Free
            </Link>
            <Link to="/contact" className="cta-button secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;