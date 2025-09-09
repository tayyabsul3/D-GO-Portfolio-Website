import React, { useState } from "react";
import Image from "../../../assets/Aboutus/ContactForm.jpg";
import BackgroundImage from "../../../assets/Aboutus/Background2.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    subject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    try {
      if (!formData.name.trim()) throw new Error("Please enter your name");
      if (!formData.phone.trim())
        throw new Error("Please enter your phone number");

      let formattedPhone = formData.phone.replace(/\D/g, "");
      if (!formattedPhone.startsWith("92")) {
        formattedPhone = `92${formattedPhone}`;
      }
      if (formattedPhone.length < 12) {
        throw new Error("Please enter a valid phone number");
      }

      console.log("Sending:", formData);

      setFormData({
        name: "",
        email: "",
        phone: "",
        location: "",
        subject: "",
      });
      setSubmitSuccess(true);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className=" px-4 sm:px-6 lg:px-8 py-10"
      style={{ background: "rgb(248, 245, 240)" }}
    >
      <div
        className="w-full rounded-3xl border-2 border-gray-100 overflow-hidden p-6 sm:p-10 md:p-16"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left side */}
          <div className="flex flex-col">
            <div className="w-full mb-6 sm:mb-8 rounded-3xl overflow-hidden">
              <img
                src={Image}
                alt="Contact background"
                className="w-full h-60 sm:h-72 md:h-96 object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaPhone className="text-white text-xl sm:text-2xl" />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  +92320-5601858
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl sm:text-2xl" />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-800 break-words">
                  info@dassoft.org
                </p>
              </div>

              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-xl sm:text-2xl" />
                </div>
                <p className="text-base sm:text-lg font-medium text-gray-800">
                  Siber Kora, NASTP, Islamabad
                </p>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="border-2 rounded-3xl p-6 sm:p-8 bg-white bg-opacity-90">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
              Contact Us:
            </h3>

            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll contact you
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 bg-red-800 text-white py-2 px-6 rounded-md hover:bg-red-900 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {["name", "email", "phone", "location"].map((field, idx) => (
                  <div key={idx}>
                    <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1 capitalize">
                      Your {field}
                    </label>
                    <input
                      type={field === "email" ? "email" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Enter ${field}`}
                      className="w-full px-4 py-2 border border-black rounded-md focus:outline-none text-sm sm:text-base"
                      required
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm sm:text-base font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="4"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none text-sm sm:text-base"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-800 text-white py-3 px-4 rounded-md hover:bg-red-900 transition duration-300 flex items-center justify-center ${
                    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send via WhatsApp"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
