import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cols">
          <div className="footer-col">
            <h3>Adrenaline</h3>
            <p>The premium performance enhancement supplement designed to maximize your energy, focus, and athletic performance.</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/#benefits">Benefits</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li>
                <a 
                  href="https://www.anrdoezrs.net/click-9083409-15825114" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Shop Now
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Connect</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Adrenaline. All Rights Reserved.</p>
          <p>This website contains affiliate links. If you purchase through these links, we may earn a commission.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;