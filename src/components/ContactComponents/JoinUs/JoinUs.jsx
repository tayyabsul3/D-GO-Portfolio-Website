import React from "react";
import QRImage from "../../../assets/img/tableQR.jpg"; // Replace with your actual image path

const JoinUs = () => {
  return (
    <div className="max-w-[65rem] mx-auto p-8 bg-white ">
      <div className="flex flex-col  md:flex-row gap-8 items-center mt-20 mb-20">
        <div className=" flex flex-col gap-10 md:flex-row items-center text-center  ">
          <div className="mb-8 w-full flex-[1.5]">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 text-left">
              Empowering Your Business with Smart POS Solutions
            </h1>
            <p className="text-gray-800 text-left">
              From fast and secure payment processing to real-time inventory
              tracking and comprehensive customer management, our POS platform
              is designed to provide everything you need to run your business
              efficiently and effectively. Whether you operate a retail store,
              restaurant, salon, or any other type of business, our flexible and
              scalable solutions adapt seamlessly to your unique workflows and
              industry requirements, helping you save time, reduce errors, and
              deliver exceptional customer experiences every day.
            </p>
          </div>
          <div className=" flex-1 h-[400px] mt-4 ">
            <img
              src={QRImage}
              alt="QR Code Ordering System"
              className="w-full h-full object-cover rounded-xl shadow-lg"
              style={{ borderRadius: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
