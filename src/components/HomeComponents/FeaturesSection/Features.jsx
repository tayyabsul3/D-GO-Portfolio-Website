import React from 'react';
import Vector1 from '../../../assets/Features/Vector1.png';
import Vector2 from '../../../assets/Features/Vector2.png';
import Vector3 from '../../../assets/Features/Vector3.png';
import Vector4 from '../../../assets/Features/Vector4.png';
import Vector5 from '../../../assets/Features/Vector5.png';
import Vector6 from '../../../assets/Features/Vector6.png';

const FeaturesSection = () => {
    const features = [
        {
            id: "qr-ordering",
            title: "QR Table Ordering",
            description: "Let customers scan, browse, and order directly from their smartphones — no app needed, no delays.",
            link: "See More →",
            borderColor: "bg-[#f9e3d9]",
            imageBorderColor: "border-[#9b4125]",
            imageBgColor: "bg-[#f9e3d9]",
            image: Vector1
        },
        {
            id: "user-roles",
            title: "AI Voice Agents",
            description: "Answer calls, take orders, manage reservations, and handle table service with intelligent, always-available AI assistants.",
            link: "See More →",
            borderColor: "bg-[#fbeed2]",
            imageBorderColor: "border-[#f1b731]",
            imageBgColor: "bg-[#fbeed2]",
            image: Vector2
        },
        {
            id: "custom-branding",
            title: "All-in-One POS & Inventory",
            description: "Track sales, manage stock, and process payments — all from one easy-to-use dashboard.",
            link: "See More →",
            borderColor: "bg-[#f4f3ca]",
            imageBorderColor: "border-[#d4d400]",
            imageBgColor: "bg-[#f4f3ca]",
            image: Vector3
        },
        {
            id: "inventory-sync",
            title: "Multi-Branch Management",
            description: "Control menus, prices, staff, and analytics across all locations from a single platform.",
            link: "See More →",
            borderColor: "bg-[#e7e6f8]",
            imageBorderColor: "border-[#6666ff]",
            imageBgColor: "bg-[#e7e6f8]",
            image: Vector4
        },
        {
            id: "menu-management",
            title: "Real-Time Customization",
            description: "Update menus, themes, and promotions instantly on your website and app — no tech skills required.",
            link: "See More →",
            borderColor: "bg-[#f9e0f9]",
            imageBorderColor: "border-[#801580]",
            imageBgColor: "bg-[#f9e0f9]",
            image: Vector5
        },
        {
            id: "point-of-sales",
            title: "Fully Managed & Secure",
            description: "We handle hosting, updates, and security so your business stays fast, safe, and always online.",
            link: "See More →",
            borderColor: "bg-[#f8dad8]",
            imageBorderColor: "border-[#ec8785]",
            imageBgColor: "bg-[#f8dad8]",
            image: Vector6
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'rgb(248, 245, 240)' }}>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12 mt-8">  {/* Reduced margin */}
                    <h1 className="text-4xl sm:text-5xl font-semibold text-gray-950 mb-4">  {/* Reduced margin */}
                        Everything Your Restaurant Needs
                    </h1>
                    <p className="text-xl text-gray-700 font-normal max-w-3xl mx-auto">
                        From QR ordering to AI voice agents, manage your entire restaurant faster,<br />
                        smarter, and without complexity
                    </p>
                </div>

                {/* Features Grid - 2 rows of 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  {/* Reduced gap */}
                {features.map((feature) => (
                    <div 
                        key={feature.id} 
                        id={feature.id}
                        className="p-0 bg-[#fbfaf7] rounded-xl shadow-lg h-auto flex flex-col"
                        >
                        {/* Content area */}
                        <div className="p-6 flex-grow">  {/* Reduced padding */}
                            {/* Image container with colored border and background */}
                            <div className={`mb-3 w-14 h-14 rounded-lg flex items-center justify-center border-2 ${feature.imageBorderColor} ${feature.imageBgColor}`}>  {/* Reduced size */}
                                <img 
                                    src={feature.image} 
                                    alt={feature.title}
                                    className="w-9 h-9 object-contain"
                                />
                            </div>
                        
                            {/* Text content */}
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold text-gray-800 mb-1">{feature.title}</h2>  {/* Reduced text size */}
                                <p className="text-gray-600 text-sm">{feature.description}</p>  {/* Reduced text size */}
                            </div>
                        </div>
                        
                        {/* Full-width bordered "See More" section */}
                        <div className={`border-t ${feature.borderColor} px-6 py-3 mt-auto rounded-b-xl`}>  {/* Reduced padding */}
                            <a href="#" className="text-gray-900 font-medium hover:text-blue-800 flex items-center justify-between w-full">
                                <span className='text-md'>{feature.link}</span>  {/* Reduced text size */}
                            </a>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;