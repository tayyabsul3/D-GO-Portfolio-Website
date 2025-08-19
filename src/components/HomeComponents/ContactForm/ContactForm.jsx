import React, { useState } from 'react';
import Image from '../../../assets/img/Contact-Img.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    restaurantName: '',
    branches: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Enhanced validation
      if (!formData.name.trim()) {
        throw new Error('Please enter your name');
      }
      if (!formData.email.trim()) {
        throw new Error('Please enter your email');
      }
      if (!formData.restaurantName.trim()) {
        throw new Error('Please enter your restaurant name');
      }

      // Create more structured message
      const messageContent = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        restaurant: formData.restaurantName.trim(),
        branches: formData.branches.trim() || 'Not specified',
        message: formData.message.trim() || 'No message',
        timestamp: new Date().toLocaleString()
      };

      // Debugging: Log what will be sent
      console.log('Preparing to send:', messageContent);

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "App 9af008f783cb63ecd80c9baaeb34f20f-99de416e-3153-42b4-af9b-a29d8c66dffb");
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Accept", "application/json");

      const raw = JSON.stringify({
        "messages": [
          {
            "from": "447860088970",
            "to": `923161431233`,
            "content": {
              "templateName": "test_whatsapp_template_en",
              "templateData": {
                "body": {
                  "placeholders": [JSON.stringify(messageContent)]
                }
              },
              "language": "en"
            }
          }
        ]
      });

      // Debugging: Show the raw payload
      console.log('API Payload:', raw);

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      // API call with better error handling
      const response = await fetch("https://38p5g1.api.infobip.com/whatsapp/1/message/template", requestOptions);
      
      if (!response.ok) {
        const errorResult = await response.json();
        console.error('API Error Details:', errorResult);
        
        // More specific error messages
        if (errorResult.requestError?.serviceException?.text) {
          throw new Error(`WhatsApp API Error: ${errorResult.requestError.serviceException.text}`);
        } else if (response.status === 401) {
          throw new Error('Authentication failed - check your API key');
        } else if (response.status === 404) {
          throw new Error('Template not found - verify template name');
        } else {
          throw new Error(`API request failed with status ${response.status}`);
        }
      }

      const result = await response.json();
      console.log('API Success:', result);

      // Reset form only after successful submission
      setFormData({
        name: '',
        email: '',
        restaurantName: '',
        branches: '',
        message: ''
      });
      setSubmitSuccess(true);
      
    } catch (error) {
      console.error('Full Error:', error);
      setErrorMessage(error.message || 'There was an error submitting your form. Please try again.');
      
      // Additional user guidance based on error type
      if (error.message.includes('template')) {
        setErrorMessage(prev => prev + ' Please contact support about template setup.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 py-20" style={{background: "rgb(250, 250, 250)"}}>
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Have a Question or Ready to get Started? Our Team is Here to help.
        </p>
      </div>
      
      <div className="w-[1200px] bg-white rounded-[50px] border-2 border-black drop-shadow-xl overflow-hidden p-8 md:p-16 ml-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Demo Book:</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-[430px] px-4 py-2 border border-black rounded-md focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter @Email.com"
                  className="w-[430px] px-4 py-2 border border-black rounded-md focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Restaurant Name</label>
                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  placeholder="Your Restaurant Name"
                  className="w-[430px] px-4 py-2 border border-black rounded-md focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Total Branches</label>
                <input
                  type="text"
                  name="branches"
                  value={formData.branches}
                  onChange={handleChange}
                  placeholder="Your Restaurant Branches"
                  className="w-[430px] px-4 py-2 border border-black rounded-md focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us About Your Restaurant and Needs."
                  rows="4"
                  className="w-[430px] px-4 py-2 border border-black rounded-md focus:outline-none"
                ></textarea>
              </div>
              
              {errorMessage && (
                <div className="text-red-600 mb-4">{errorMessage}</div>
              )}
              
              {submitSuccess && (
                <div className="text-green-600 mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-[430px] bg-red-800 text-white py-3 px-4 rounded-md transition duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <svg 
                      className="w-6 h-6 mr-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" 
                      />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
          
          {/* Right side - Image and Contact Info */}
          <div className="flex flex-col">
            {/* Image Section */}
            <div className="w-full mb-8 rounded-lg overflow-hidden mt-5">
              <img 
                src={Image} 
                alt="Contact background"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact Info Section */}
            <div className="p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Us</h2>
                <hr className="w-36 border-1 border-red-800 mb-4 ml-[153px]"/>
                <p className="text-gray-600 mb-6 w-[350px] items-center justify-center ml-14">
                    Our Team is Available Monday to Friday, on Day Time to Answer Your Questions.
                </p>
                
                <div className="flex flex-wrap gap-6 items-center justify-center">
                    <div className="flex items-center border-2 border-red-800 rounded-lg px-4 py-1">
                    <div className="flex-shrink-0">
                        <svg className="h-10 w-10 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-700">info@dassoft.org</p>
                    </div>
                    </div>
                    
                    <div className="flex items-center border-2 border-red-800 rounded-lg px-4 py-1">
                    <div className="flex-shrink-0">
                        <svg className="h-10 w-10 text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-gray-700">+92320-5601858</p>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;