import React, { useEffect, useRef } from 'react';
import Hero from '../PricingComponents/HeroSection/Hero';
import PricingSection from '../PricingComponents/PricingSection/PricingSection';
import Contactform from '../PricingComponents/Contactform/Contactform';
import Footer from '../Footer';
import { useLocation } from 'react-router-dom';

const Pricing = () => {
  const pricingSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#pricingsection' && pricingSectionRef.current) {
      pricingSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="pricing-page">
      <Hero/>
      <div ref={pricingSectionRef} id="pricingsection">
        <PricingSection/>
      </div>
      <Contactform/>
      <Footer/>
    </div>
  );
};

export default Pricing;