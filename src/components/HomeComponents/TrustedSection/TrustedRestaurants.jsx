import React from "react";
import Wing1 from "../../../assets/img/wing1.png";
import Wing2 from "../../../assets/img/wing2.png";
import Wing3 from "../../../assets/img/wing3.png";

const TrustedRestaurants = () => {
  return (
    <div
      className="py-12 px-4  sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgb(254, 249, 238)" }}
    >
      <div className="max-w-7xl my-10 mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-[2.5rem] font-bold text-center text-gray-900 mb-12">
          Trusted By Restaurants of all Sizes
        </h2>

        {/* Restaurant Logos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Independent Cafés & Eateries */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full flex items-center justify-center mb-4">
              {/* Replace with actual logo image */}
              <span className="text-xl font-bold text-gray-800">
                <img src={Wing1} alt="" className="object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              Independent Cafés & Eateries
            </h3>
          </div>

          {/* Gulf Restaurant */}
          <div className="flex flex-col items-center">
            <div className="w-28 h-auto rounded-full flex items-center justify-center mb-4">
              {/* Replace with actual logo image */}
              <span className="text-xl font-bold text-gray-800 mt-5">
                <img src={Wing2} alt="" className="object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              Multi-Branch Chains
            </h3>
          </div>

          {/* Spicy Restaurant */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-auto rounded-full flex items-center justify-center mb-4">
              {/* Replace with actual logo image */}
              <span className="text-xl font-bold text-gray-800">
                <img src={Wing3} alt="" className="object-contain" />
              </span>
            </div>
            <h3 className="text-xl font-medium text-gray-800">
              Franchise Operators
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedRestaurants;
