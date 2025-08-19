import React, { useState } from 'react';
import Image from '../../../assets/Aboutus/ContactForm.jpg';
import BackgroundImage from '../../../assets/Aboutus/Background2.png';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    subject: ''
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
    if (!formData.phone.trim()) {
      throw new Error('Please enter your phone number');
    }

    // Format phone number properly
    let formattedPhone = formData.phone.replace(/\D/g, '');
    if (!formattedPhone.startsWith('92')) {
      formattedPhone = `92${formattedPhone}`; // Ensure Pakistan country code
    }
    if (formattedPhone.length < 12) {
      throw new Error('Please enter a valid phone number');
    }

    // Create more structured message
    const messageContent = {
      name: formData.name.trim(),
      email: formData.email.trim() || 'Not provided',
      phone: formattedPhone,
      location: formData.location.trim() || 'Not provided',
      message: formData.subject.trim() || 'No message',
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
      phone: '',
      location: '',
      subject: ''
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
    <div className="max-w-8xl mx-auto sm:px-6 lg:px-8 py-10" style={{background: "rgb(248, 245, 240)"}}>
      {/* Remove any jsx or global attributes from this div */}
      <div 
        className="w-[1200px] rounded-[50px] border-2 border-gray-100 overflow-hidden p-8 md:p-16 ml-40"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.5)'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Image and Contact Info */}
          <div className="flex flex-col">
            <div className="w-full mb-8 rounded-3xl overflow-hidden">
              <img 
                src={Image} 
                alt="Contact background"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaPhone className="text-white text-2xl" />
                </div>
                <p className="text-lg font-medium text-gray-800">+92320-5601858</p>
              </div>
              
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <p className="text-lg font-medium text-gray-800">info@dassoft.org</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-red-800 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-white text-2xl" />
                </div>
                <p className="text-lg font-medium text-gray-800">Siber Kora, NASTP, Islamabad</p>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className='border-2 rounded-3xl p-8 bg-white bg-opacity-90'>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us:</h3>
            
            {submitSuccess ? (
              <div className="text-center py-8">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                <p className="text-gray-600">Your message has been sent successfully. We'll contact you shortly.</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 bg-red-800 text-white py-2 px-6 rounded-md hover:bg-red-900 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Name"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
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
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Your Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Your Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Your Location"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows="4"
                    className="w-full px-4 py-2 border border-black rounded-md focus:outline-none"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-800 text-white py-3 px-4 rounded-md hover:bg-red-900 transition duration-300 flex items-center justify-center ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
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
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
                        />
                      </svg>
                      Send via WhatsApp
                    </>
                  )}
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