import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MenuManagementImage from "../../../assets/Roles/Role1.jpg";
import UserRolesImage from "../../../assets/Roles/Role2.jpg";
import BackgroundImage from "../../../assets/Roles/background.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const MenuManagementSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gsap-animate", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", // when section is 80% in viewport
          toggleActions: "play none none reverse",
        },
        y: -100, // slide from top to bottom
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative "
      style={{ background: "rgba(255, 253, 248, 0.85)" }}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={BackgroundImage}
          alt="Background"
          className="w-full h-full object-cover scale-y-150"
          style={{
            transform: "scale(1.0)",
            objectPosition: "center center",
          }}
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div className="gsap-animate border-2  w-full md:w-[350px] border-red-800 rounded-xl bg-white bg-opacity-95">
              <div className="overflow-hidden  rounded-t-xl shadow-md">
                <img
                  src={MenuManagementImage}
                  alt="Menu Management System"
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="p-4 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Menu Management :
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Easily create, update, and organize your restaurant's digital
                  menu in real time with our intuitive system. Whether you're
                  adding new dishes, adjusting prices, or rearranging
                  categories, you can make changes instantly to keep your menu
                  accurate and appealing. This flexibility helps you respond
                  quickly to customer preferences and seasonal offerings,
                  ensuring a seamless dining experience every time.
                </p>
              </div>
            </div>

            {/* Right Column - User Roles */}
            <div className="gsap-animate border-2   w-full md:w-[350px] border-red-800 rounded-xl bg-white bg-opacity-95">
              <div className="overflow-hidden rounded-t-xl shadow-md">
                <img
                  src={UserRolesImage}
                  alt="User Roles Management"
                  className="w-full h-60 object-cover"
                />
              </div>
              <div className="p-4 rounded-xl">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  User Roles and Access :
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Easily manage your team with customizable user roles and
                  access levels. Assign different permissions to admins,
                  managers, and staff to ensure secure collaboration while
                  keeping sensitive information protected. This way, everyone
                  has the right access to do their job efficiently without
                  compromising your business's security.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information - Horizontal layout */}
        <div className="max-w-8xl mx-auto px-8 py-8 border-t-2 border-gray-300 bg-opacity-95">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="gsap-animate flex items-center gap-4 ">
              <div className="bg-red-800 p-3 rounded-full">
                <FaPhone className="text-white text-xl" />
              </div>
              <p className="text-lg font-medium text-gray-800">
                +92320-5601858
              </p>
            </div>

            <div className="gsap-animate flex items-center gap-4 ">
              <div className="bg-red-800 p-3 rounded-full">
                <FaEnvelope className="text-white text-xl" />
              </div>
              <p className="text-lg font-medium text-gray-800">
                info@dassoft.org
              </p>
            </div>

            <div className="gsap-animate flex items-center gap-4">
              <div className="bg-red-800 p-3 rounded-full">
                <FaMapMarkerAlt className="text-white text-xl" />
              </div>
              <p className="text-lg font-medium text-gray-800">
                Siber Kora, NASTP, Islamabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuManagementSection;
