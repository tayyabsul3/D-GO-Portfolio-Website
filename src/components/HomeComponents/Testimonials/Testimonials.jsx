import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      restaurant: "Jon Snow",
      name: "Alfredo P. Kozlov",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      restaurant: "Ocean Breeze",
      name: "Maria Sanchez",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      restaurant: "Golden Wok",
      name: "James Chen",
      quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60",
    },
  ]);

  const [editingTestimonial, setEditingTestimonial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carousel setup with centered slides
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  // Auto-scroll every 5 seconds with smooth transition to center
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      const nextIndex = (selectedIndex + 1) % testimonials.length;
      scrollTo(nextIndex);
    }, 3000);
    return () => clearInterval(autoplayInterval);
  }, [selectedIndex, scrollTo, testimonials.length]);

  // Edit functions
  const handleEdit = (testimonial) => {
    setEditingTestimonial({...testimonial});
    setIsModalOpen(true);
  };

  const handleSave = () => {
    setTestimonials(testimonials.map(t => 
      t.id === editingTestimonial.id ? editingTestimonial : t
    ));
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingTestimonial({
      ...editingTestimonial,
      [name]: value
    });
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(254, 249, 238)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            Loved by Restaurant Owners
          </h1>
          <p className="text-md text-gray-600 max-w-2xl mx-auto">
            See What Our Customers have to say about how DGO has Transformed Their Business.
          </p>
        </div>

        <div className="relative">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {testimonials.map((testimonial, index) => (
                <div 
                  className={`embla__slide flex-shrink-0 min-w-0 px-2 transition-all duration-500 ${
                    index === selectedIndex ? 'scale-105 z-10' : 'scale-90 opacity-80'
                  }`}
                  key={testimonial.id}
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-[350px] w-full mx-auto relative">
                    {/* Edit button */}
                    <button 
                      onClick={() => handleEdit(testimonial)}
                      className="absolute top-2 right-2 bg-blue-500 text-white p-1 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-200 z-20"
                      title="Edit testimonial"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    </button>
                    
                    <div className="flex flex-row h-full">
                      <div className="w-1/3 h-full">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className={`w-2/3 p-4 flex flex-col justify-center transition-opacity duration-300 ${
                        index === selectedIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}>
                        <div className="mb-2">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">
                            {testimonial.restaurant}
                          </h3>
                          <p className="text-gray-600 text-md">
                            {testimonial.name}
                          </p>
                        </div>
                        <p className="text-gray-700 text-sm leading-snug">
                          {testimonial.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-4 w-full max-w-md">
            <h2 className="text-xl font-bold mb-3">Edit Testimonial</h2>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input
                  type="text"
                  name="restaurant"
                  value={editingTestimonial.restaurant}
                  onChange={handleChange}
                  className="w-full p-1.5 border rounded text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Person Name</label>
                <input
                  type="text"
                  name="name"
                  value={editingTestimonial.name}
                  onChange={handleChange}
                  className="w-full p-1.5 border rounded text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Quote</label>
                <textarea
                  name="quote"
                  value={editingTestimonial.quote}
                  onChange={handleChange}
                  className="w-full p-1.5 border rounded text-sm"
                  rows="2"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={editingTestimonial.image}
                  onChange={handleChange}
                  className="w-full p-1.5 border rounded text-sm"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-3 py-1 bg-gray-300 rounded text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1 bg-blue-500 text-white rounded text-sm"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Embla CSS */}
      <style jsx global>{`
        .embla {
          --slide-spacing: 1rem;
          --slide-size: 80%;
          --slide-height: auto;
          padding: 1rem;
        }
        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
          margin-left: calc(var(--slide-spacing) * -1);
        }
        .embla__slide {
          flex: 0 0 var(--slide-size);
          min-width: 0;
          padding-left: var(--slide-spacing);
          transition: transform 0.5s ease, opacity 0.5s ease;
        }
        @media (min-width: 768px) {
          .embla {
            --slide-size: 60%;
          }
        }
        @media (min-width: 1024px) {
          .embla {
            --slide-size: 50%;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;