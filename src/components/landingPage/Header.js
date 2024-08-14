// File: src/components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">FitLife</div>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
