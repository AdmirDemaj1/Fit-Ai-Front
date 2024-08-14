// File: src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

import { useNavigate } from 'react-router-dom';


const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Your Personal Diet and Exercise Plan</h1>
        <p>Transform your life with our customized diet and exercise plans</p>
        <button className="cta-button" onClick={() =>  navigate('/register')}>Start Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
