import React from "react";
import WhoWeAreImage from "../../../assets/Aboutus/Plate.jpg"; // Import your image

const WhoWeAreSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-32">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image on the left */}
        <div className="md:w-1/2 ">
          <img
            src={WhoWeAreImage}
            alt="PlaceOS POS System"
            className="w-[500px] h-auto rounded-lg shadow-lg border-2 border-black"
          />
        </div>

        {/* Text content on the right */}
        <div className="md:w-1/2 ">
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
