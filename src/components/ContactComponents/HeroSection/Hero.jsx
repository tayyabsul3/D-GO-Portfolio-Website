import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Group1 from "../../../assets/Groups/mail.png";
import Group2 from "../../../assets/Groups/phone.png";
import Group3 from "../../../assets/Groups/service.png";
import Group4 from "../../../assets/Groups/linkdin.png";
import Group5 from "../../../assets/Groups/instagram.png";
import Group6 from "../../../assets/Groups/service.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Animate Left Content (Heading + Paragraph) - from top to bottom
    gsap.fromTo(
      el.querySelector(".contact-text"),
      { opacity: 0, y: -100 }, // start higher (above)
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // faster
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );

    // Animate Right Content (Icons) - all from top to bottom
    gsap.fromTo(
      el.querySelectorAll(".contact-icon"),
      { opacity: 0, y: -100 }, // start from top
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2, // delay between each icon
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-[500px] transition-all max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-red-800 rounded-b-3xl lg:rounded-b-2xl"
    >
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="flex-1 mt-4 md:ml-10 transition-all lg:ml-20 contact-text">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <div className="text-lg text-white mb-6">
            <p>
              Have questions or need assistance? Our dedicated team is here to
              help you find the perfect POS solution for your business. Whether
              you want a demo, support, or just want to learn more, reach out
              today – we’re ready to support your success!
            </p>
          </div>
        </div>

        {/* Right side - Icons */}
        <div className="flex-1 hidden lg:grid grid-cols-6 gap-4 mr-16">
          {/* Each column already has contact-icon class */}
          <div className="flex flex-col items-center contact-icon">
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
                  <img src={Group1} alt="Email" className="w-8 object-cover" />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center contact-icon">
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
                    alt="Phone"
                    className="w-4 object-contain mr-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center contact-icon">
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
                    alt="Service"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center contact-icon">
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
                    alt="LinkedIn"
                    className="w-7 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center contact-icon">
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
                    alt="Instagram"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 6 */}
          <div className="flex flex-col items-center contact-icon">
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
                    alt="Support"
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
