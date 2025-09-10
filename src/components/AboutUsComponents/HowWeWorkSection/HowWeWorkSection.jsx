import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WhoWeAreImage from "../../../assets/Aboutus/Plate2.jpg"; // Import your image

gsap.registerPlugin(ScrollTrigger);

const HowWeAreSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Animate Text
    gsap.fromTo(
      el.querySelector(".how-text"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );

    // Animate Image
    gsap.fromTo(
      el.querySelector(".how-image"),
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-8 py-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text content */}
        <div className="md:w-1/2 how-text">
          <h1 className="text-4xl font-bold text-black mb-6">How We Work:</h1>
          <p className="text-base text-gray-800 leading-relaxed">
            Our system seamlessly integrates with your restaurant’s operations
            by connecting order taking, payment processing, and inventory
            management into one platform. Orders from dine-in, takeout, and
            delivery are managed in real-time, ensuring smooth communication
            between front-of-house and kitchen staff. This streamlines
            workflows, reduces errors, and provides valuable insights through
            real-time reporting, helping you deliver great service efficiently.
            This explanation highlights the core functionality of a restaurant
            POS system and how it improves operational efficiency.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2 how-image">
          <img
            src={WhoWeAreImage}
            alt="PlaceOS POS System"
            className="w-[500px] h-auto rounded-lg shadow-lg border-2 border-black"
          />
        </div>
      </div>
    </div>
  );
};

export default HowWeAreSection;
