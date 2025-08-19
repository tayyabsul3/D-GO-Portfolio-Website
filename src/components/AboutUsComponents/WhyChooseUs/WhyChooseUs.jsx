import React from 'react';
import WhyChooseUsImage from '../../../assets/Aboutus/QuestionMark.png'; // Replace with your image path
import FullWidthImage from '../../../assets/Aboutus/Line.png'; // Replace with your image path

const WhyChooseUs = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 py-12" style={{background: "rgb(248, 245, 240)"}}>
      {/* Main content section */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        {/* Left side - Text content */}
        <div className="md:w-1/2 ml-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 mb-4">
            We offer a modern POS system that boosts restaurant efficiency by automating order processing, 
            payment, and inventory management. Our platform reduces errors, speeds up service, and provides 
            real-time insights to help you optimize operations and increase profits. With easy menu updates, 
            integrated payments, and customer loyalty features, we help you deliver a seamless dining experience 
            that keeps customers coming back.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src={WhyChooseUsImage} 
            alt="POS System in Action" 
            className="w-[350px] max-h-72 rounded-lg  object-cover ml-4"
          />
        </div>
      </div>

      {/* Full width image below */}
      <div className="w-full">
        <img 
          src={FullWidthImage} 
          alt="Additional POS Features" 
          className="w-[1850px] h-auto rounded-lg -mt-24 object-contain"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;