// File: src/components/TestimonialsSection.js
import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Users Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <p>"This app changed my life! The plans are easy to follow."</p>
          <h4>— Alex</h4>
        </div>
        <div className="testimonial-card">
          <p>"I've never felt healthier. The exercise plans are fantastic!"</p>
          <h4>— Jordan</h4>
        </div>
        <div className="testimonial-card">
          <p>"I love how personalized everything is. Highly recommend!"</p>
          <h4>— Casey</h4>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
