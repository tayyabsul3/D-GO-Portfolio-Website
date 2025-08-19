import React from 'react';
import HeadingImage from '../../../assets/PricingSection/Pricing.png'; // Your heading left image
import ToggleImage from '../../../assets/PricingSection/Switch.png'; // Your toggle center image
import SaveImage from '../../../assets/PricingSection/Arrow.png'; // Your save badge image

const PricingSection = () => {
  return (
    <div className="max-w-8xl mx-auto px-8 py-16 relative">
      {/* Left border image */}
      <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center">
        <img 
          src={HeadingImage} 
          alt="Icon" 
          className="w-80 h-72 mt-5 bg-white" 
        />
      </div>

      {/* Main content */}
      <div className="pl-16">
        {/* Heading */}
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 text-center">
            Powerful features for powerful creators
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-2xl mt-4">
            Choose a plan that's right for you
          </p>
        </div>

        {/* Pay Monthly/Yearly toggle with center image */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex justify-center items-center mb-2 mr-3">
            <span className="text-lg font-medium text-gray-700">Pay Monthly</span>
            <img src={ToggleImage} alt="Toggle" className="w-12 h-7 mx-4" />
            <div className="flex flex-col items-center">
              <span className="text-lg font-medium text-gray-700">Pay Yearly</span>
            </div>
          </div>
          {/* Save badge */}
          <div className="flex items-center mt-2">
            <img src={SaveImage} alt="Save" className="w-20 h-20 ml-72 -mt-5 rotate-12" />
            <span className="text-base text-red-600 font-medium">Save 20%</span>
          </div>
        </div>

        {/* Three Pricing Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-10">
          {/* Basic Plan */}
          <div className="p-8 hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 mt-1">Basic</h2>
            <p className="text-gray-600 mb-6">What You Will Get in this Price:</p>
            
            <div className="mb-6">
              <span className="text-6xl font-bold text-black">$120</span>
              <span className="text-gray-600 ml-4">/Month</span>
            </div>
            
            <button className="w-full border-2 border-red-800 py-3 mb-8 text-red-800 transition">
              Get Started Now
            </button>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="inline-block w-8 h-8 border-2 border-gray-300 rounded-full mr-3"></span>
                <span>Point of Sales</span>
              </li>
              {['Order Management', 'Online Presence (WEB)', 'Inventory Management', 
                'Branch Management', 'Staff Management', 'Analytics', 
                'Table QR Code Ordering', 'Takeaway / Delivery Management'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 border-2 border-red-800 bg-red-800 rounded-full mr-3 flex items-center justify-center text-white">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary Plan */}
          <div className="bg-red-800 rounded-xl p-8 hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-white mb-5">Secondary</h2>
            <p className="text-white mb-6">What You Will Get in this Price:</p>
            
            <div className="mb-6">
              <span className="text-6xl font-bold text-white">$150</span>
              <span className="text-gray-200 ml-2">/Month</span>
            </div>
            
            <button className="w-full bg-white text-red-800 py-3 mb-8">
              Get Started Now
            </button>
            
            <ul className="space-y-3">
              {['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images', 
                'Upload custom icons and fonts', 'Unlimited Sharing', 
                'Upload graphic & video in up to 4K', 'Unlimited Projects', 
                'Instant Access to our design system', 'Create teams to collaborate on designs'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-red-800">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="p-8 hover:shadow-lg transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Premium</h2>
            <p className="text-gray-600 mb-6">What You Will Get in this Price:</p>
            
            <div className="mb-6">
              <span className="text-6xl font-bold text-black">$180</span>
              <span className="text-gray-500 ml-2">Month</span>
            </div>
            
            <button className="w-full border-2 border-red-800 bg-white text-red-800 py-3 mb-8">
              Get Started Now
            </button>
            
            <ul className="space-y-3">
              {['20,000+ of PNG & SVG graphics', 'Access to 100 million stock images', 
                'Upload custom icons and fonts', 'Unlimited Sharing', 
                'Upload graphics & video in up to 4K', 'Unlimited Projects', 
                'Instant Access to our design system', 'Create teams to collaborate on designs'].map((item) => (
                <li key={item} className="flex items-center">
                  <span className="w-8 h-8 border-2 border-red-800 bg-red-800 rounded-full mr-3 flex items-center justify-center text-white">✓</span>
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