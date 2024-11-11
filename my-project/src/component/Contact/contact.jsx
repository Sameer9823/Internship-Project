import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import AnimatedImage from '../Drone'
import validator from 'validator'; // Import the validator library

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const [messageType, setMessageType] = useState(''); // To differentiate success/error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!validator.isEmail(formData.email)) {
      setStateMessage('Please enter a valid email address.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    if (!validator.isMobilePhone(formData.phone, 'any')) {
      setStateMessage('Please enter a valid phone number.');
      setMessageType('error');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost/backend/send_email.php', { // Update the URL to match your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Check if the response is OK
      if (!response.ok) {
        const errorText = await response.text(); // Get the response text
        console.error('Error response:', errorText); // Log the error response
        setStateMessage('Something went wrong, please try again later.');
        setMessageType('error');
        setIsSubmitting(false);
        return;
      }

      // Parse the JSON response if OK
      const data = await response.json();
      if (data.success) {
        setStateMessage('Message sent successfully!');
        setMessageType('success');
      } else {
        setStateMessage(data.message);
        setMessageType('error');
      }

    } catch (error) {
      setStateMessage('Error sending message, please try again later.');
      setMessageType('error');
      console.error('Error:', error);
    }

    setIsSubmitting(false);
    e.target.reset();
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="relative pt-[2rem]">
      
      <div className="pt-20 pb-10" style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/1164084.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}>
        <div className='hidden md:block'>

        <AnimatedImage />
        </div>
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg" style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="md:w-1/2 p-4 w-full">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className="absolute left-3 top-3 text-blue-900"><FaRegUser /></i>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="absolute left-3 top-3 text-blue-900"><MdOutlineMail /></i>
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    className="w-full p-3 pl-12 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <i className="absolute left-3 top-3 text-blue-900"><HiPhone /></i>
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className={`w-full p-3 ${isSubmitting ? 'bg-gray-400' : 'bg-green-600'} text-white rounded-md hover:bg-green-700`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {stateMessage && (
                <p className={`mt-4 ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                  {stateMessage}
                </p>
              )}
            </div>

            <div className="md:w-1/2 p-4 flex flex-col items-center text-center mt-8 md:mt-0">
              <p className="text-[#0d0d4b] font-semibold mb-2">SurgiSol Healthcare Solution Pvt Ltd</p>
              <p className="text-[#0d0d4b] mb-2">Flat No. 2 Prince Complex, Above Saini Travels, Chhatrapati Sq., Nagpur</p>
              <p className="text-[#0d0d4b] mb-2">State: Maharashtra, Pin code: 440015</p>
              <p className="text-[#0d0d4b] mb-2">Mobile: +91 9049976655<br />Mobile: +91 9579903629</p>
              <p className="text-[#0d0d4b] mb-4">E-Mail: enquiry@envirosoln.in</p>
            </div>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-bold text-blue-900 mb-4">Our Location</h3>
            <iframe
              src="https://www.google.com/maps?q=21%C2%B006'35.9%22N+79%C2%B004'12.5%22E&z=15&output=embed"
              className="w-full h-64 rounded-lg"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
