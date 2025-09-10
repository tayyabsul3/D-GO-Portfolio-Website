import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Group1 from "../../../assets/Groups/mail.png";
import Group2 from "../../../assets/Groups/phone.png";
import Group3 from "../../../assets/Groups/service.png";
import Group4 from "../../../assets/Groups/linkdin.png";
import Group5 from "../../../assets/Groups/instagram.png";
import Group6 from "../../../assets/Groups/service.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const icons = gsap.utils.toArray("[data-hero-icon]", heroRef.current);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      });

      // Animate heading and text
      tl.from(headingRef.current, { y: -80, opacity: 0, duration: 0.6 })
        .from(textRef.current, { y: -60, opacity: 0, duration: 0.6 }, "-=0.4")
        // Animate icons one by one
        .from(
          icons,
          { y: -100, opacity: 0, duration: 0.8, stagger: 0.1 },
          "-=0.3"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-[500px] transition-all max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-red-800 rounded-b-3xl lg:rounded-b-2xl"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 mt-4 md:ml-10 transition-all lg:ml-20">
          <h1 ref={headingRef} className="text-5xl font-bold text-white mb-4">
            Pricing
          </h1>
          <div ref={textRef} className="text-lg text-white mb-6">
            <p>
              Choose the plan that fits your restaurant’s needs. From essential
              order and payment tools to advanced features like inventory and
              staff management, our flexible pricing helps your business grow
              smoothly with reliable support.
            </p>
          </div>
        </div>

        {/* Right side - 6 individually customized columns */}
        <div className="flex-1 lg:flex-1 hidden lg:grid grid-cols-6 gap-4 mr-16">
          {/* Column 1 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[300px]">
              <div className="w-0.5 h-24 bg-white"></div>
              <div className="w-2 h-3 bg-white my-2 -mt-1"></div>
              <div className="relative w-[70px] h-[70px] -mt-2">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group1}
                    alt="Easy Ordering"
                    className="w-8 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[250px]">
              <div className="w-0.5 h-64 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group2}
                    alt="Inventory Mgmt"
                    className="w-4 object-contain mr-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[200px]">
              <div className="w-0.5 h-48 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-14 h-14">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group3}
                    alt="Real-time Analytics"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[150px]">
              <div className="w-0.5 h-80 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group4}
                    alt="Staff Management"
                    className="w-7 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[100px]">
              <div className="w-0.5 h-56 bg-white"></div>
              <div className="w-2 h-3 bg-white my-2 -mt-3"></div>
              <div className="relative w-14 h-14 -mt-2">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group5}
                    alt="Customer Loyalty"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 6 */}
          <div className="flex flex-col items-center" data-hero-icon>
            <div className="flex flex-col items-center -mt-[112px] ml-[50px]">
              <div className="w-0.5 h-[90px] bg-white"></div>
              <div className="w-2 h-3 bg-white -mt-1"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group6}
                    alt="Multi-location"
                    className="w-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
