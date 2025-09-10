import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeroImage from "../../../assets/img/Aboutus.png";
import BackgroundPattern from "../../../assets/img/Background-About.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left text
      gsap.from(".hero-text", {
        opacity: 0,
        x: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      // Animate right image
      gsap.from(".hero-image", {
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-[500px] transition-all max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-red-800 rounded-b-3xl lg:rounded-b-2xl relative overflow-hidden"
    >
      <div className="max-w-7xl  mx-auto flex flex-co l md:flex-row items-center h-full gap-8 relative z-10">
        {/* Left side - Text content */}
        <div className="hero-text  flex-1 mt-4 md:ml-10 lg:ml-20">
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
        <div className="hero-image h-full  flex-1 z-20 hidden lg:flex items-center justify-center  mr-16 relative">
          {/* Background pattern only for the image area */}
          {/* <div
            className="absolute inset-0 bg-cover bg-center rounded-full opacity-70"
            style={{ backgroundImage: `url(${BackgroundPattern})` }}
          ></div> */}

          {/* Foreground image */}
          <img
            src={HeroImage}
            alt="PlateOS POS System"
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
