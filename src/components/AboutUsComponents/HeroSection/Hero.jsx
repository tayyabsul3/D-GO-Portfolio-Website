import React from 'react';
import HeroImage from '../../../assets/img/Aboutus.png';
import BackgroundPattern from '../../../assets/img/Background-About.png'; // Add your background image path

const Hero = () => {
  return (
    <section className="h-[530px] py-28 px-4 sm:px-6 lg:px-8 bg-red-800 ml-5 mr-5 rounded-b-2xl">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="md:w-[673px] h-[150px] mt-4 ml-20">
          <h1 className="text-6xl font-bold text-white mb-8">About Us</h1>
          <div className="text-2xl text-white mb-6">
            <p>
              PlateOS is a modern POS system built for restaurants, offering easy ordering, inventory management, and real-time analytics. We help streamline your operations so you can focus on serving great food.
            </p>
          </div>
        </div>

        {/* Right side - Image with background */}
        <div className="w-[700px] h-[500px] flex items-center justify-center mr-16 relative -mt-[97px]">
          {/* Background image/pattern */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundPattern})` }}
          ></div>
          
          {/* Foreground image */}
          <img 
            src={HeroImage} 
            alt="PlateOS POS System" 
            className="relative z-10 max-w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;