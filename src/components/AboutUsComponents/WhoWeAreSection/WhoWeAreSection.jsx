import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhoWeAreImage from "../../../assets/Aboutus/Plate.jpg"; // Import your image

gsap.registerPlugin(ScrollTrigger);

const WhoWeAreSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image (from left)
      gsap.from(".who-image", {
        opacity: 0,
        y: -100,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Animate teyt (from right)
      gsap.from(".who-text", {
        opacity: 0,
        y: 100,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-8 py-32">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image on the left */}
        <div className="who-image md:w-1/2">
          <img
            src={WhoWeAreImage}
            alt="PlaceOS POS System"
            className="w-[500px] h-auto rounded-lg shadow-lg border-2 border-black"
          />
        </div>

        {/* Text content on the right */}
        <div className="who-text md:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-6">Who We Are:</h1>
          <p className="text-base text-gray-800 leading-relaxed">
            We are PlaceOs, a cutting-edge Point of Sale (POS) system designed
            specifically for restaurants to simplify and optimize their
            operations. Our platform integrates digital ordering, inventory
            management, and analytics to help restaurants operate efficiently
            and grow. We focus on delivering fast setup, easy staff training,
            and mobile accessibility to empower modern dining businesses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;
