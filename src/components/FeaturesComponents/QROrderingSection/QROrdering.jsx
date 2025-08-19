import React from 'react';
import QRImage from '../../../assets/img/tableQR.jpg'; // Replace with your actual image path

const QROrderingSection = () => {
  return (
    <div className="max-w-8xl mx-auto p-8 bg-white shadow-md">
      <div className="flex flex-col md:flex-row gap-8 items-center mt-20 mb-20"> {/* Added items-center */}
        {/* Combined content container */}
        <div className="md:w-1/2 flex flex-col items-center text-center ml-44 mt-16"> {/* Centered content */}
          <div className="mb-8 w-full"> {/* Full width for centering content */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-left">
              Table QR Ordering
            </h1>
          </div>

          <div className="space-y-6 mb-8 w-[500px] text-left mr-28"> {/* Full width */}
            <div className="text-xl">
              <h2 className="text-xl font-semibold text-black">
                Order Directly from Your Table:
              </h2>
              <p className="text-gray-800">
                Place unique QR codes on every table so your customers can easily view the menu and place their orders right from their smartphones—no need to wait for a server. This speeds up service, reduces errors, and lets your staff focus on delivering a great experience.
              </p>
              <h2 className="text-xl font-semibold text-black">
                Convenient & Contactless :
              </h2>
              <p className="text-gray-800">
                Customers enjoy a safe, touch-free way to browse and order, making dining smoother and more enjoyable for everyone.
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

export default QROrderingSection;