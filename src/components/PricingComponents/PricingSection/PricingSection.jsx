import React from "react";
import HeadingImage from "../../../assets/PricingSection/Pricing.png"; // Your heading left image
import ToggleImage from "../../../assets/PricingSection/Switch.png"; // Your toggle center image
import SaveImage from "../../../assets/PricingSection/Arrow.png"; // Your save badge image

const PricingSection = () => {
  return (
    <div className="max-w-7xl my-20 mx-auto sm:px-8 py-16 relative">
      {/* Left border image */}
      <div className="absolute hidden  lg:flex flex-col items-center">
        <img src={HeadingImage} alt="Icon" className="w-40 h-40  bg-white" />
      </div>

      {/* Main content */}
      <div className="">
        {/* Heading */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-[2.5rem] font-bold text-gray-800 text-center">
            Powerful features for powerful creators
          </h1>
          <p className="text-base  text-center  mt-2 ">
            Choose a plan that's right for you
          </p>
        </div>

        {/* Pay Monthly/Yearly toggle with center image */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex justify-center items-center mb-2 mr-3">
            <span className="text-lg font-medium text-gray-700">
              Pay Monthly
            </span>
            <img src={ToggleImage} alt="Toggle" className="w-12 h-7 mx-4" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium text-gray-700">
                Pay Yearly
              </span>
            </div>
          </div>
          {/* Save badge */}
          <div className="flex items-center mt-2">
            <img
              src={SaveImage}
              alt="Save"
              className="w-20 h-20  -mt-5 rotate-12"
            />
            <span className="text-base text-red-600 font-medium">Save 20%</span>
          </div>
        </div>

        {/* Three Pricing Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Basic Plan */}
          <div className="sm:p-8 p-4 hover:shadow-lg rounded-xl transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-2 md:mb-4 mt-1">
              Basic
            </h2>
            <p className="text-gray-600 mb-4 md:mb-6">
              What You Will Get in this Price:
            </p>

            <div className="mb-4 md:mb-6 transition-all">
              <span className=" transition-all text-5xl md:text-6xl font-bold text-black">
                $120
              </span>
              <span className="text-gray-600 ml-4">/Month</span>
            </div>

            <button className="  w-full border-2 rounded-lg border-red-800 py-2 md:py-3 mb-6 md:mb-8 text-red-800 transition">
              Get Started Now
            </button>

            <ul className="  transition-all space-y-2 md:space-y-3">
              {[
                "Point of Sales",
                "Order Management",
                "Online Presence (WEB)",
                "Inventory Management",
                "Branch Management",
                "Staff Management",
                "Analytics",
                "Table QR Code Ordering",
                "Takeaway / Delivery Management",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 border-2 border-red-800 bg-red-800 rounded-full mr-3 flex items-center justify-center text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Plan */}
          <div className="bg-red-800 rounded-xl m-2 p-6  md:p-8 hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-white mb-3 md:mb-5">
              Secondary
            </h2>
            <p className="text-white mb-4 md:mb-6">
              What You Will Get in this Price:
            </p>

            <div className="mb-4 md:mb-6">
              <span className="text-5xl md:text-6xl font-bold text-white">
                $150
              </span>
              <span className="text-gray-200 sm:ml-2">/Month</span>
            </div>

            <button className=" w-full bg-white text-red-800 rounded-lg py-2 md:py-3 mb-6 md:mb-8">
              Get Started Now
            </button>

            <ul className="space-y-2 md:space-y-3">
              {[
                "20,000+ of PNG & SVG graphics",
                "Access to 100 million stock images",
                "Upload custom icons and fonts",
                "Unlimited Sharing",
                "Upload graphic & video in up to 4K",
                "Unlimited Projects",
                "Instant Access to our design system",
                "Create teams to collaborate on designs",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-red-800">
                    ✓
                  </span>
                  <span className="text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="sm:p-8 p-4 hover:shadow-lg rounded-xl transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium</h2>
            <p className="text-gray-600 mb-4 md:mb-6">
              What You Will Get in this Price:
            </p>

            <div className="mb-4 md:mb-6">
              <span className="text-5xl md:text-6xl font-bold text-black">
                $180
              </span>
              <span className="text-gray-500 ml-2">/Month</span>
            </div>

            <button className="w-full rounded-lg border-2 border-red-800 bg-white text-red-800 py-2 md:py-3 mb-6 md:mb-8">
              Get Started Now
            </button>

            <ul className="space-y-2 md:space-y-3">
              {[
                "20,000+ of PNG & SVG graphics",
                "Access to 100 million stock images",
                "Upload custom icons and fonts",
                "Unlimited Sharing",
                "Upload graphics & video in up to 4K",
                "Unlimited Projects",
                "Instant Access to our design system",
                "Create teams to collaborate on designs",
              ].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 border-2 border-red-800 bg-red-800 rounded-full mr-3 flex items-center justify-center text-white">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
