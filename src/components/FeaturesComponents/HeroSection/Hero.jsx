import React from "react";
import Group1 from "../../../assets/Groups/mail.png";
import Group2 from "../../../assets/Groups/phone.png";
import Group3 from "../../../assets/Groups/service.png";
import Group4 from "../../../assets/Groups/linkdin.png";
import Group5 from "../../../assets/Groups/instagram.png";
import Group6 from "../../../assets/Groups/service.png";

const Hero = () => {
  return (
    <section className="h-[500px]  transition-all max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-red-800 rounded-b-3xl  lg:rounded-b-2xl">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left side - Text content */}
        <div className="flex-1  mt-4 md:ml-10 transition-all lg:ml-20">
          <h1 className="text-5xl font-bold text-white mb-4">Features</h1>
          <div className="text-lg text-white mb-6">
            <p>
              Have questions or need assistance? Our dedicated team is here to
              help you find the perfect POS solution for your business. Whether
              you want a demo, support, or just want to learn more, reach out
              today - we're ready to support your success!
            </p>
          </div>
        </div>

        {/* Right side - 6 individually customized columns */}
        <div className="flex-1 lg:flex-1  hidden lg:grid grid-cols-6 gap-4 mr-16">
          {/* Column 1 - Customize this independently */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[300px]">
              {/* Vertical line */}
              <div className="w-0.5 h-24 bg-white"></div>
              {/* Small square */}
              <div className="w-2 h-3 bg-white my-2 -mt-1"></div>
              {/* Hollow circle with image and white inner shadow */}
              <div className="relative w-[70px] h-[70px] -mt-2">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group1}
                    alt="Easy Ordering"
                    className="w-8 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 2 - Different styling */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[250px]">
              <div className="w-0.5 h-64 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group2}
                    alt="Inventory Mgmt"
                    className="w-4 object-contain mr-1"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 3 - Another variation */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[200px]">
              <div className="w-0.5 h-48 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-14 h-14">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group3}
                    alt="Real-time Analytics"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[150px]">
              <div className="w-0.5 h-80 bg-white"></div>
              <div className="w-2 h-3 bg-white"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group4}
                    alt="Staff Management"
                    className="w-7 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[100px]">
              <div className="w-0.5 h-56 bg-white"></div>
              <div className="w-2 h-3 bg-white my-2 -mt-3"></div>
              <div className="relative w-14 h-14 -mt-2">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group5}
                    alt="Customer Loyalty"
                    className="w-6 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Column 6 */}
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center -mt-[112px] ml-[50px]">
              <div className="w-0.5 h-[90px] bg-white"></div>
              <div className="w-2 h-3 bg-white -mt-1"></div>
              <div className="relative w-[70px] h-[70px]">
                <div
                  className="absolute inset-0 rounded-full border-[5px] border-white"
                  style={{
                    boxShadow: "inset 0 0 10px rgba(255, 255, 255, 0.8)",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={Group6}
                    alt="Multi-location"
                    className="w-8 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
