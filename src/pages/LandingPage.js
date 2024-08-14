// File: src/App.js
import React from 'react';
import Header from '../components/landingPage/Header';
import HeroSection from '../components/landingPage/HeroSection';
import FeaturesSection from '../components/landingPage/FeaturesSection';
import TestimonialsSection from '../components/landingPage/TestimonialsSection';
import CTASection from '../components/landingPage/CTASection';
import Footer from '../components/landingPage/Footer';


function LandingPage() {
  return (
    <div >
      <Header />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
     </div>
  );
}

export default LandingPage;
