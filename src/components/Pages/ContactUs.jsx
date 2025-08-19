import React from 'react'
import Hero from '../ContactComponents/HeroSection/Hero';
import JoinUs from '../ContactComponents/JoinUs/JoinUs';
import Form from '../ContactComponents/form/Form';
import Footer from '../Footer';

const ContactUs = () => {
  return (
    <div className="contact-page">
      <Hero/>
      <JoinUs/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default ContactUs