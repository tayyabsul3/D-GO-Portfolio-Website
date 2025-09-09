import React, { useEffect, useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      restaurant: "Jon Snow",
      name: "Alfredo P. Kozlov",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      restaurant: "Ocean Breeze",
      name: "Maria Sanchez",
      quote:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      restaurant: "Golden Wok",
      name: "James Chen",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto switch testimonial with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // change every 10s
    return () => clearInterval(interval);
  }, [currentIndex]); // reset timer when index changes

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setFade(true);
    }, 500);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <div
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "rgb(254, 249, 238)" }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-[2.5rem] mb-4 font-bold text-gray-900">
            Loved by Restaurant Owners
          </h1>
          <p className="text-[1.075rem] text-gray-600 max-w-2xl mx-auto">
            See What Our Customers have to say about how DGO has Transformed
            Their Business.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className={`bg-white my-16 rounded-lg shadow-lg overflow-hidden h-[350px] flex transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className="w-1/3 h-full">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <div className="mb-2">
              <h3 className="font-bold text-gray-900 text-lg mb-1">
                {testimonial.restaurant}
              </h3>
              <p className="text-gray-600 text-md">{testimonial.name}</p>
            </div>
            <p className="text-gray-700 text-sm leading-snug">
              {testimonial.quote}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={handlePrev}
            className="px-4 py-2 bg-white hover:bg-gray-100 rounded"
          >
            <BiChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-white hover:bg-gray-100 rounded"
          >
            <BiChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
