import React, { useEffect, useRef } from "react";
import Hero from "../PricingComponents/HeroSection/Hero";
import PricingSection from "../PricingComponents/PricingSection/PricingSection";
import Footer from "../Footer";
import { useLocation } from "react-router-dom";
import ContactUs from "../HomeComponents/ContactForm/ContactForm";

const Pricing = () => {
  const pricingSectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#pricingsection" && pricingSectionRef.current) {
      pricingSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="pricing-page">
      <Hero />
      <div ref={pricingSectionRef} id="pricingsection">
        <PricingSection />
      </div>
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Pricing;
