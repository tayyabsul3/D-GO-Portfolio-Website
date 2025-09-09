import React from "react";
import Hero from "../HomeComponents/HeroSection/Hero";
import Features from "../HomeComponents/FeaturesSection/Features";
import TrustedRestaurants from "../HomeComponents/TrustedSection/TrustedRestaurants";
import Order from "../HomeComponents/OrderSection/Order";
import RestaurantSoftware from "../HomeComponents/RestaurantSoftware/RestaurantSoftware";
import Testimonials from "../HomeComponents/Testimonials/Testimonials";
import ContactUs from "../HomeComponents/ContactForm/ContactForm";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home-page   mx-auto">
      <Hero />
      <Features />
      <TrustedRestaurants />
      <Order />
      <RestaurantSoftware />
      <Testimonials />
      <ContactUs />
      <Footer />
      {/* Add more home-specific components */}
    </div>
  );
};

export default Home;
