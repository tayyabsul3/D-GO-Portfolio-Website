import React from 'react';
import RestaurantImage from '../../../assets/img/Restaurant.png';
import { FaCheck } from 'react-icons/fa'; // Import check icon from react-icons

const RestaurantSoftware = () => {
    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(248, 245, 240)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Built for Modern Restaurants
                    </h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        An all-in-one platform that adapts to you — from cozy cafés to nationwide chains.
                    </p>
                </div>

                {/* Content Row - Features Left, Image Right */}
                <div className="flex flex-col lg:flex-row items-center gap-12 ml-0 lg:ml-32">
                    {/* Left Side - Features Grid with Red Circles */}
                    <div className="lg:w-1/2">
                        <div className="flex flex-col gap-12">
                            {/* Feature 1 */}
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheck className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">Fast, Always-On Service</h3>
                                    <p className="text-gray-600">Works seamlessly offline and syncs instantly when back online.</p>
                                </div>
                            </div>
                            
                            {/* Feature 2 */}
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheck className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">Quick Staff Onboarding</h3>
                                    <p className="text-gray-600">A simple, intuitive interface your team can master in minutes.</p>
                                </div>
                            </div>
                            
                            {/* Feature 3 */}
                            <div className="flex items-start gap-6">
                                <div className="w-20 h-20 bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                                    <FaCheck className="text-white text-2xl" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-2">Manage From Anywhere</h3>
                                    <p className="text-gray-600">Full mobile access to control menus, orders, and branches on the go.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Side - Image */}
                    <div className="lg:w-1/2">
                        <img 
                            src={RestaurantImage} 
                            alt="Restaurant Management Dashboard" 
                            className="w-full max-w-[400px] h-auto rounded-3xl shadow-lg object-cover border-2 border-black"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantSoftware;