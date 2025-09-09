import React from "react";
import HeroImage from "../../../assets/img/Aboutus.png";
import BackgroundPattern from "../../../assets/img/Background-About.png";

const Hero = () => {
  return (
    <section className="h-[500px] transition-all max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-red-800 rounded-b-3xl lg:rounded-b-2xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-full gap-8 relative z-10">
        {/* Left side - Text content */}
        <div className="flex-1 mt-4 md:ml-10 transition-all lg:ml-20">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <div className="text-lg text-white mb-6">
            <p>
              PlateOS is a modern POS system built for restaurants, offering
              easy ordering, inventory management, and real-time analytics. We
              help streamline your operations so you can focus on serving great
              food.
            </p>
          </div>
        </div>

        {/* Right side - Image with background */}
        <div className="flex-1 z-20 hidden lg:flex items-center justify-center mr-16 relative -mt-[97px]">
          {/* Background pattern only for the image area */}
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl opacity-70"
            style={{ backgroundImage: `url(${BackgroundPattern})` }}
          ></div>

          {/* Foreground image */}
          <img
            src={HeroImage}
            alt="PlateOS POS System"
            className="relative z-10 max-w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
