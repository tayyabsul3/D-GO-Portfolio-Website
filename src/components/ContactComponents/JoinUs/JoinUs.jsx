import React from 'react';
import QRImage from '../../../assets/img/tableQR.jpg'; // Replace with your actual image path

const JoinUs = () => {
  return (
    <div className="max-w-8xl mx-auto p-8 bg-white shadow-md">
      <div className="flex flex-col md:flex-row gap-8 items-center mt-20 mb-20"> {/* Added items-center */}
        {/* Combined content container */}
        <div className="md:w-1/2 flex flex-col items-center text-center ml-44 mt-16"> {/* Centered content */}
          <div className="mb-8 w-full"> {/* Full width for centering content */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-left">
                Empowering Your Business with Smart POS Solutions
            </h1>
          </div>

          <div className="space-y-6 mb-8 w-[500px] text-left mr-28"> {/* Full width */}
            <div className="text-xl">
              <p className="text-gray-800">
                From fast and secure payment processing to real-time inventory tracking and comprehensive customer management,
                our POS platform is designed to provide everything you need to run your business efficiently and effectively. 
                Whether you operate a retail store, restaurant, salon, or any other type of business, our flexible and scalable 
                solutions adapt seamlessly to your unique workflows and industry requirements, helping you save time, reduce errors, 
                and deliver exceptional customer experiences every day.
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="md:w-1/2 flex items-end justify-center mt-4 mr-20"> {/* Changed to items-end and added mt-4 */}
          <img 
            src={QRImage} 
            alt="QR Code Ordering System" 
            className="w-[400px] h-[400px] object-cover rounded-xl shadow-lg" 
            style={{ borderRadius: '40px' }} // More rounded corners
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;