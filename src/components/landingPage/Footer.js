// File: src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 FitLife. All rights reserved.</p>
        <div className="social-icons">
          <a href="#!">Facebook</a>
          <a href="#!">Twitter</a>
          <a href="#!">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
