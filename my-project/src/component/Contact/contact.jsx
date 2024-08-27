import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      alert(response.data.message);
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className='pt-20 pb-10'>
      <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Form Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Contact Us</h2>
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
                <i className="absolute left-3 top-3 text-blue-500"><FaRegUser/></i>
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
                <i className="absolute left-3 top-3 text-blue-500"><MdOutlineMail/></i>
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
                <i className="absolute left-3 top-3 text-blue-500"><HiPhone/></i>
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
              <button type="submit" className="w-full p-3 bg-green-600 text-white rounded-md hover:bg-green-700">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="md:w-1/2 p-4 flex flex-col items-center text-center mt-8 md:mt-0">
            <img
              src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?b=1&s=612x612&w=0&k=20&c=9JKcAJ9LnoGwYfEyGjOsh9cj6p1nHvH4ZCXPNpAJF1o="
              alt="Customer Service Team"
              className="w-full max-w-xs rounded-lg mb-6"
            />
            <p className="text-blue-800 font-semibold mb-2">
              1234 Your Street, Your City, Your State, 12345
            </p>
            <p className="text-blue-800 mb-4">
              Phone: (123) 456-7890 | Email: info@yourcompany.com
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Map and Additional Info */}
        <div className="mt-10">
          <h3 className="text-xl font-bold text-blue-800 mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8402769212875!2d144.96315781534965!3d-37.81362797975144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1b2f093%3A0xfbb1be432d0e0e1f!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1636621728423!5m2!1sen!2sus"
            className="w-full h-64 rounded-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
