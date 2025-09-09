import React from "react";
import Hero from "../FeaturesComponents/HeroSection/Hero";
import QROrderingSection from "../FeaturesComponents/QROrderingSection/QROrdering";
import FeaturesSection from "../FeaturesComponents/FeaturesSection/FeaturesSection";
import MenuManagementSection from "../FeaturesComponents/MenuManagementSection/MenuManagementSection";
import Footer from "../Footer";

const Features = () => {
  return (
    <div className="features-page">
      <Hero />
      <QROrderingSection />
      <FeaturesSection />
      <MenuManagementSection />
      <Footer />
      {/* Add more features-specific components */}
    </div>
  );
};

export default Features;
