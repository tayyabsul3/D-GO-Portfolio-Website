import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RestaurantImage from "../../../assets/img/Restaurant.png";
import { FaCheck } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const RestaurantSoftware = () => {
  const featuresRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate Features (Left Side)
    featuresRef.current.forEach((feature, index) => {
      if (feature) {
        gsap.fromTo(
          feature,
          { y: -100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2, // stagger each feature
            ease: "power3.out",
            scrollTrigger: {
              trigger: feature,
              start: "top 80%",
            },
          }
        );
      }
    });

    // Animate Image (Right Side)
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
          },
        }
      );
    }
  }, []);

  return (
    <divv
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgb(248, 245, 240)" }}
    >
      <div className="max-w-7xl  my-10 mx-auto px-4 ">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-[2.5rem] font-bold text-gray-900 mb-4">
            Built for Modern Restaurants
          </h1>
          <p className="text-[1.065rem] text-gray-600 max-w-3xl mx-auto">
            An all-in-one platform that adapts to you — from cozy cafés to
            nationwide chains.
          </p>
        </div>

        {/* Content Row */}
        <div className="flex lg:pl-28 flex-col-reverse lg:flex-row items-center gap-12 md:gap-20 ">
          {/* Left Features */}
          <div className="lg:w-1/2">
            <div className="flex flex-col gap-12">
              {/* Feature 1 */}
              <div
                className="flex items-start gap-6"
                ref={(el) => (featuresRef.current[0] = el)}
              >
                <div className="w-20 h-20  bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                    Fast, Always-On Service
                  </h3>
                  <p className="text-gray-600">
                    Works seamlessly offline and syncs instantly when back
                    online.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div
                className="flex items-start gap-6"
                ref={(el) => (featuresRef.current[1] = el)}
              >
                <div className="md:w-20 md:h-20 w-[4.5rem] h-[4.5rem] bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                    Quick Staff Onboarding
                  </h3>
                  <p className="text-gray-600">
                    A simple, intuitive interface your team can master in
                    minutes.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div
                className="flex items-start gap-6"
                ref={(el) => (featuresRef.current[2] = el)}
              >
                <div className="md:w-20 md:h-20 w-[4.5rem] h-[4.5rem] bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 mt-2">
                    Manage From Anywhere
                  </h3>
                  <p className="text-gray-600">
                    Full mobile access to control menus, orders, and branches on
                    the go.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2 max-md:my-5" ref={imageRef}>
            <img
              src={RestaurantImage}
              alt="Restaurant Management Dashboard"
              className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg object-cover border-2 border-black"
            />
          </div>
        </div>
      </div>
    </divv>
  );
};

export default RestaurantSoftware;
