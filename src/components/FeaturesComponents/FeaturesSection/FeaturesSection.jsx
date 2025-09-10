import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBg from "../../../assets/img/ping.png";

const FeaturesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray("[data-feature-card]");

      gsap.from(cards, {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative py-16 min-h-screen">
      {/* Top Horizontal Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-800 z-10 -mt-1"></div>

      {/* Full section background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={SectionBg}
          alt="Background"
          className="w-full h-full object-cover scale-150"
          style={{ transform: "scale(1.0)" }}
        />
        <div className="absolute inset-0 bg-slate-300 bg-opacity-30"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Feature 1 */}
          <div
            data-feature-card
            className="bg-red-800 bg-opacity-90 p-8 sm:p-16 lg:p-14 h-fit rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Custom Branding
            </h2>
            <p className="text-base text-white leading-relaxed">
              With our Custom Branding feature, you can easily personalize your
              digital menu by adding your restaurant's logo, choosing your brand
              colors, and displaying promotional banners. This creates a
              cohesive and professional look that reflects your unique identity,
              helping your business stand out and making a lasting impression on
              customers. Customizing your menu not only strengthens brand
              recognition but also enhances the overall customer experience,
              encouraging loyalty and repeat visits—all without needing any
              design skills.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            data-feature-card
            className="bg-red-800 bg-opacity-90 p-8 sm:p-16 lg:p-14 h-fit rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Order & Inventory
            </h2>
            <p className="text-base text-white leading-relaxed">
              With our Custom Branding feature, you can personalize your digital
              menu by adding your restaurant's logo, choosing your brand colors,
              and displaying promotional banners. This creates a professional
              look that reflects your unique identity, helping your business
              stand out and making a lasting impression on customers.
              Customizing your menu not only strengthens brand recognition but
              also enhances the overall experience, encouraging loyalty and
              repeat visits—all without needing any design skills.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            data-feature-card
            className="bg-red-800 bg-opacity-90 p-8 sm:p-16 lg:p-14 h-fit rounded-2xl shadow-lg"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Digital Experience
            </h2>
            <p className="text-base text-white leading-relaxed">
              Deliver a seamless digital experience with a mobile-friendly,
              fully branded menu that customers can access instantly via QR
              code. This touch-free solution lets your guests browse your
              offerings anytime, anywhere, using their smartphones. Customize
              the menu to reflect your brand's look and feel, making ordering
              easy, fast, and enjoyable while enhancing customer satisfaction
              and boosting sales.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-800 z-10 -mb-1"></div>
    </div>
  );
};

export default FeaturesSection;
