import React from "react";
import RestaurantImage from "../../../assets/img/RestaurantImage.jpg";
import BackgroundImage from "../../../assets/img/Background.png";

const Order = () => {
  return (
    <div
      className="relative py-12"
      style={{
        backgroundColor: "",
      }}
    >
      {/* Zoomed-in background image moved more to the right */}
      <div className="absolute   inset-y-0 right-0 w-1/2 h-full z-0 overflow-hidden">
        <div
          className="w-full h-full scale-[2.2] -translate-y-10" // Added translate-x-10 to move right
          style={{
            backgroundImage: `url(${BackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Content container (rest remains the same) */}
      <div className="relative max-w-7xl my-16   mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Title - Centered */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-[2.5rem] font-bold text-gray-900">
            How PlateOS Works
          </h2>
          <p className="text-[1.065rem] mt-4 mx-auto max-w-2xl font-medium">
            Run your restaurant smarter with our quick and intuitive setup.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2  flex-1 order-first">
            <img
              src={RestaurantImage}
              alt="Restaurant POS System"
              className="w-full h-auto max-w-[900px] object-cover rounded-xl "
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="flex-1 lg:pl-12 mt-20 md:mt-8 lg:mt-0">
            <div className="flex flex-col gap-14">
              {/* Step 1 */}
              <div className="flex items-center gap-6">
                <div className=" bg-red-800 rounded-full shadow-md flex items-center justify-center p-2">
                  <span className="text-white text-2xl w-20 h-20 text-center flex justify-center items-center font-bold">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Create Your Menu
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Build and customize your menu in minutes — add images,{" "}
                    prices, and special offers with ease.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-6">
                <div className=" bg-red-800 rounded-full shadow-md flex items-center justify-center p-2">
                  <span className="text-white text-2xl w-20 h-20 text-center flex justify-center items-center font-bold">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Take Orders Anywhere
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Serve customers faster with orders from tables, counters,
                    <br /> QR codes, or your mobile app.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-6">
                <div className=" bg-red-800 rounded-full shadow-md flex items-center justify-center p-2">
                  <span className="text-white text-2xl w-20 h-20 text-center flex justify-center items-center font-bold">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Manage & Grow
                  </h3>
                  <p className="text-gray-600 font-medium">
                    Monitor sales, track inventory, and understand customer{" "}
                    <br /> trends — all from one dashboard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
