import React from 'react';
import Hero from '../AboutUsComponents/HeroSection/Hero';
import WhoWeAreSection from '../AboutUsComponents/WhoWeAreSection/WhoWeAreSection';
import TrustedRestaurants from '../AboutUsComponents/TrustedSection/TrustedRestaurants';
import HowWeWorkSection from '../AboutUsComponents/HowWeWorkSection/HowWeWorkSection';
import FeatureSection from '../AboutUsComponents/FeatureSection/FeatureSection';
import WhyChooseUs from '../AboutUsComponents/WhyChooseUs/WhyChooseUs';
import Footer from '../Footer';

const AboutUs = () => {
  return (
    <div className="about-page">
      <Hero/>
      <WhoWeAreSection/>
      <TrustedRestaurants/>
      <HowWeWorkSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

export default AboutUs