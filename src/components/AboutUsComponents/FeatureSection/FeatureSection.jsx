import React, { useState, useEffect } from "react";
import CenterImage from "../../../assets/Aboutus/Circle.png";
import CenterInnerImage from "../../../assets/Aboutus/inside-Circle.png";
import BackgroundImage from "../../../assets/Aboutus/Background.png";
import Image1 from "../../../assets/Aboutus/img1.png";
import Image2 from "../../../assets/Aboutus/img2.png";
import Image3 from "../../../assets/Aboutus/img3.png";
import Image4 from "../../../assets/Aboutus/img4.png";
import Image5 from "../../../assets/Aboutus/img5.png";
import Image6 from "../../../assets/Aboutus/img6.png";

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [distance, setDistance] = useState(150); // default distance for mobile

  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Adjust distance based on screen size
  useEffect(() => {
    const updateDistance = () => {
      if (window.innerWidth < 640) {
        setDistance(120); // mobile
      } else if (window.innerWidth < 1024) {
        setDistance(200); // tablet
      } else {
        setDistance(300); // desktop
      }
    };

    updateDistance();
    window.addEventListener("resize", updateDistance);
    return () => window.removeEventListener("resize", updateDistance);
  }, []);

  const positions = [
    { angle: 30 },
    { angle: 90 },
    { angle: 150 },
    { angle: 210 },
    { angle: 270 },
    { angle: 330 },
  ];

  const getPositionStyle = (angle, distance) => {
    const rad = angle * (Math.PI / 180);
    return {
      left: `calc(50% + ${Math.cos(rad) * distance}px)`,
      top: `calc(50% + ${Math.sin(rad) * distance}px)`,
      transform: "translate(-50%, -50%)",
    };
  };

  const centerRotation = currentIndex * 60 + 180;

  return (
    <div
      className=" px-6 py-16 sm:py-20 md:py-28 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-slate-200 bg-opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center  text-black">
          Our Features
        </h2>
        <p className="text-center mt-2 text-sm sm:text-base md:text-lg font-medium text-black ">
          Kiokun Display System (XDS)
        </p>

        <div className="relative h-[500px] sm:h-[700px] md:h-[850px] lg:h-[1000px]">
          {/* Static inner image */}
          <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <img
              src={CenterInnerImage}
              alt="Inner Feature"
              className="w-20 relative h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mx-auto"
            />
            <p className="text-red-800 absolute  top-[40%] left-[25%] font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
              DGO
            </p>
          </div>

          {/* Rotating center image */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000"
            style={{
              transform: `translate(-50%, -50%) rotate(${centerRotation}deg)`,
            }}
          >
            <img
              src={CenterImage}
              alt="Kiokun Display System (XDS)"
              className="w-32 h-32 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-72 lg:h-72 object-contain"
            />
          </div>

          {/* Surrounding images */}
          {images.map((image, index) => {
            const adjustedIndex = (index + currentIndex) % images.length;
            const { angle } = positions[adjustedIndex];
            return (
              <div
                key={index}
                className="absolute transition-all duration-1000"
                style={getPositionStyle(angle, distance)}
              >
                <img
                  src={image}
                  alt={`Feature ${index + 1}`}
                  className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-44 lg:h-44 object-contain"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
