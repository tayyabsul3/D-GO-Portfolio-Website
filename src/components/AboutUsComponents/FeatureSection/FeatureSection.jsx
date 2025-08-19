import React, { useState, useEffect } from 'react';
import CenterImage from '../../../assets/Aboutus/Circle.png';
import CenterInnerImage from '../../../assets/Aboutus/inside-Circle.png';
import BackgroundImage from '../../../assets/Aboutus/Background.png';
import Image1 from '../../../assets/Aboutus/img1.png';
import Image2 from '../../../assets/Aboutus/img2.png';
import Image3 from '../../../assets/Aboutus/img3.png';
import Image4 from '../../../assets/Aboutus/img4.png';
import Image5 from '../../../assets/Aboutus/img5.png';
import Image6 from '../../../assets/Aboutus/img6.png';

const FeaturesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image1, Image2, Image3, Image4, Image5, Image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Rotate every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Positions arranged in a circle around center
  const positions = [
    { angle: 30, distance: 300 },   // Top-right (1 o'clock)
    { angle: 90, distance: 300 },   // Right (3 o'clock)
    { angle: 150, distance: 300 },  // Bottom-right (5 o'clock)
    { angle: 210, distance: 300 },  // Bottom-left (7 o'clock)
    { angle: 270, distance: 300 },  // Left (9 o'clock)
    { angle: 330, distance: 300 }   // Top-left (11 o'clock)
  ];

  const getPositionStyle = (angle, distance) => {
    const rad = angle * (Math.PI / 180);
    return {
      left: `calc(50% + ${Math.cos(rad) * distance}px)`,
      top: `calc(50% + ${Math.sin(rad) * distance}px)`,
      transform: 'translate(-50%, -50%)'
    };
  };

  // Calculate rotation angle for center image (60 degrees per step) with initial offset
  const centerRotation = (currentIndex * 60) + 180; // Added 180 degrees to start from left

  return (
    <div 
      className="max-w-8xl h-[1000px] mx-auto px-10 py-32 relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-200 bg-opacity-25"></div>
      
      <div className="relative z-10 h-full">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">Our Features</h2>
        <p className="text-center mt-2 font-medium text-black mb-10">Kiokun Display System (XDS)</p>
        
        <div className="relative h-full">
          {/* Static inner image (DGO) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
            <img 
              src={CenterInnerImage} 
              alt="Inner Feature" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain mx-auto -mt-16"
            />
            <p className="text-red-800 font-bold text-4xl -mt-24">DGO</p>
          </div>

          {/* Rotating center image - now starting from left */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 transition-all duration-1000"
            style={{ transform: `translate(-50%, -50%) rotate(${centerRotation}deg)` }}
          >
            <img 
              src={CenterImage} 
              alt="Kiokun Display System (XDS)" 
              className="w-48 h-48 md:w-72 md:h-72 object-contain"
            />
          </div>

          {/* Surrounding images */}
          {images.map((image, index) => {
            const adjustedIndex = (index + currentIndex) % images.length;
            const { angle, distance } = positions[adjustedIndex];
            return (
              <div 
                key={index}
                className="absolute transition-all duration-1000"
                style={getPositionStyle(angle, distance)}
              >
                <img 
                  src={image} 
                  alt={`Feature ${index + 1}`} 
                  className="w-32 h-32 md:w-44 md:h-44 object-contain"
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