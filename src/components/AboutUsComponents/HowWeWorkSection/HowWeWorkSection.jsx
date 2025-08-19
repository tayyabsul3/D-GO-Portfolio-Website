import React from 'react';
import WhoWeAreImage from '../../../assets/Aboutus/Plate2.jpg'; // Import your image

const HowWeAreSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-32">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Text content on the right */}
        <div className="md:w-1/2 mr-10">
          <h1 className="text-4xl font-bold text-black mb-6">
            How We Work:
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Our system seamlessly integrates with your restaurant’s operations by connecting order taking,
            payment processing, and inventory management into one platform. Orders from dine-in, takeout,
            and delivery are managed in real-time, ensuring smooth communication between front-of-house and 
            kitchen staff. This streamlines workflows, reduces errors, and provides valuable insights through 
            real-time reporting, helping you deliver great service efficiently. This explanation highlights 
            the core functionality of a restaurant POS system and how it improves operational efficiency.
          </p>
        </div>

        {/* Image on the left */}
        <div className="md:w-1/2 ml-10">
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