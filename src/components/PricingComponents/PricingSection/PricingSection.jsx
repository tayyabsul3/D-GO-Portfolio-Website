import React, { useState, useRef, useEffect } from "react";
import HeadingImage from "../../../assets/PricingSection/Pricing.png";
import SaveImage from "../../../assets/PricingSection/Arrow.png";
import { Switch } from "../../ui/switch";
import { gsap } from "gsap";

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  const priceRefs = useRef([]);

  const plans = [
    {
      name: "Basic",
      price: 120,
      features: [
        "Point of Sales",
        "Order Management",
        "Online Presence (WEB)",
        "Inventory Management",
        "Branch Management",
        "Staff Management",
        "Analytics",
        "Table QR Code Ordering",
        "Takeaway / Delivery Management",
      ],
    },
    {
      name: "Secondary",
      price: 150,
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphic & video in up to 4K",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
    {
      name: "Premium",
      price: 180,
      features: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4K",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
  ];

  const getYearlyPrice = (price) => (price * 12 * 0.8).toFixed(0);

  useEffect(() => {
    priceRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const monthly = plans[index].price;
      const yearly = getYearlyPrice(plans[index].price);

      const targetValue = isYearly ? yearly : monthly;

      gsap.to(ref, {
        innerText: targetValue,
        duration: 0.8,
        snap: { innerText: 1 }, // ensures smooth number rolling
        ease: "power2.out",
      });
    });
  }, [isYearly]);

  return (
    <div className="max-w-7xl my-20 mx-auto sm:px-8 py-16 relative">
      {/* Left border image */}
      <div className="absolute hidden lg:flex flex-col items-center">
        <img src={HeadingImage} alt="Icon" className="w-40 h-40 bg-white" />
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-3xl md:text-[2.5rem] font-bold text-gray-800 text-center">
          Powerful features for powerful creators
        </h1>
        <p className="text-base text-center mt-2">
          Choose a plan that's right for you
        </p>
      </div>

      {/* Pay Monthly/Yearly toggle */}
      <div className="flex flex-col items-center mb-28 ">
        <div className="flex justify-center items-center mb-2  mr-3 gap-4">
          <span
            className={`text-lg font-medium ${
              !isYearly ? "text-red-800" : "text-gray-700"
            }`}
          >
            Pay Monthly
          </span>
          <Switch checked={isYearly} onCheckedChange={setIsYearly} />
          <span
            className={`text-lg relative  font-medium ${
              isYearly ? "text-red-800" : "text-gray-700"
            }`}
          >
            Pay Yearly
            {
              <div className="flex items-center absolute justify-end mt-2 top-10 -right-20">
                <img
                  src={SaveImage}
                  alt="Save"
                  className="w-20 h-20 -mt-5 rotate-12"
                />
                <span className="text-base text-red-600 font-medium">
                  Save 20%
                </span>
              </div>
            }
          </span>
        </div>

        {/* Save badge */}
      </div>

      {/* Pricing Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:px-2">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`sm:p-8 p-4 hover:shadow-lg rounded-xl transition-all ${
              idx === 1 ? "bg-red-800 text-white" : ""
            }`}
          >
            <h2 className="text-3xl font-bold mb-2 md:mb-4 mt-1">
              {plan.name}
            </h2>
            <p className="mb-4 md:mb-6">What You Will Get in this Price:</p>

            {/* Animated Price */}
            <div className="mb-4 md:mb-6 flex items-baseline">
              <span className="text-5xl md:text-6xl font-bold">$</span>
              <span
                ref={(el) => (priceRefs.current[idx] = el)}
                className="text-5xl md:text-6xl font-bold"
              >
                {plan.price}
              </span>
              <span className="ml-2">{isYearly ? "/Year" : "/Month"}</span>
            </div>

            {/* Button */}
            <button
              className={`w-full rounded-lg py-2 md:py-3 mb-6 md:mb-8 ${
                idx === 1
                  ? "bg-white text-red-800"
                  : "border-2 border-red-800 text-red-800 bg-white"
              }`}
            >
              Get Started Now
            </button>

            {/* Features */}
            <ul className="space-y-2 md:space-y-3">
              {plan.features.map((item) => (
                <li key={item} className="flex items-center">
                  <span
                    className={`w-8 h-8 rounded-full mr-3 flex items-center justify-center ${
                      idx === 1
                        ? "bg-gray-200 text-red-800"
                        : "border-2 border-red-800 bg-red-800 text-white"
                    }`}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
