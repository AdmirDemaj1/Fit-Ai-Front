
// File: src/components/FeaturesSection.js
import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-cards">
        <div className="feature-card">
        <div className="emoji">🥗</div> 
          <h3>Custom Diet Plans</h3>
          <p>Get a diet plan tailored to your needs.</p>
        </div>
        <div className="feature-card">
          <div className="emoji">🏋️‍♂️</div>  
          <h3>Personalized Exercise Plans</h3>
          <p>Work out with plans designed for your goals.</p>
        </div>
        <div className="feature-card">
          <div className="emoji">📈</div> 
          <h3>Progress Tracking</h3>
          <p>Track your progress and stay motivated.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
