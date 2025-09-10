import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import restaurantImage from "../../../assets/img/img1.jpg";
import OIP1 from "../../../assets/min-logo/OIP1.jpg";
import OIP2 from "../../../assets/min-logo/OIP2.jpg";
import OIP3 from "../../../assets/min-logo/OIP3.jpg";
import OIP4 from "../../../assets/min-logo/OIP4.jpg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const logosRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(logosRef.current, {
        opacity: 0,
        scale: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5,
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        x: 80,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ backgroundColor: "rgb(248, 245, 240)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex max-md:py-5">
          {/* Left side - Text content */}
          <div
            ref={textRef}
            className="flex-1 px-5 sm:pr-10 py-12 sm:py-16 lg:py-20 sm:ml-10"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight mb-8">
              Run your business,
              <br />
              not your
              <span className="text-red-800">
                {" "}
                tech
                <br />
              </span>
            </h1>

            <p className="text-base text-gray-600 mb-10">
              D-Go is an all-in-one restaurant management platform that unifies
              POS, QR ordering, inventory, branding, and AI voice agents — no
              tech expertise needed
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-red-800 text-white px-5 py-2 rounded-md font-medium text-base">
                Take Demo
              </button>
              <button className="border-2 border-red-800 text-red-800 hover:bg-blue-50 px-5 py-2 rounded-md font-medium text-base">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-3">
              {/* Restaurant owner logos/images */}
              <div className="flex -space-x-3 cursor-pointer">
                {[OIP1, OIP2, OIP3, OIP4].map((logo, i) => (
                  <img
                    key={i}
                    ref={(el) => (logosRef.current[i] = el)}
                    src={logo}
                    alt="Restaurant Owner"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                ))}
              </div>

              <p className="text-gray-500 w-1/2">
                Trusted by 2500+ Restaurant Owners
              </p>
            </div>
          </div>

          {/* Right side - Full height Image with overlay image */}
          <div ref={imageRef} className="flex-1 max-md:hidden max-h-[70vh]">
            <img
              src={restaurantImage}
              alt="Restaurant POS System"
              className="w-full h-full rounded-l-3xl object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
