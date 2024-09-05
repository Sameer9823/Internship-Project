import React from 'react';
import { motion } from 'framer-motion';

function Navabout() {
  return (
    <div className="bg-gray-50 py-24 px-4 font-poppins">
      {/* Hero Section */}
      <div className="text-center">
        <motion.h1
          className="text-4xl font-extrabold text-blue-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700 font-medium"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          Revolutionizing Agriculture with Precision and Technology
        </motion.p>
      </div>

      {/* Product Overview Section */}
      <div className="mt-10 flex flex-col lg:flex-row items-center lg:justify-between">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src="https://www.agrifarming.in/wp-content/uploads/2021/08/dji-4204800_1280.jpg" alt="Agribot A6 Drone" className="rounded-lg shadow-lg" />
        </motion.div>
        <motion.div
          className="lg:w-1/2 lg:pl-16 mt-8 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl font-semibold text-gray-800 leading-snug text-center">
            The Future of Farming is Here
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed font-normal">
            Agribot A6 is designed to support farmers in adopting precision agriculture techniques
            that boost crop yield, save time, and reduce costs. Our mission is to empower farmers
            by providing them with cutting-edge drone technology to optimize their farming
            practices.
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed font-normal">
            We’re proud to be a key player in the agricultural ecosystem, distributing drones all
            over Maharashtra and assisting farmers in securing government subsidies for modern
            farming equipment.
          </p>
        </motion.div>
      </div>

      {/* Assistance Section */}
      <div className="mt-16 text-center">
        <motion.h2
          className="text-3xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Helping Farmers with Government Subsidies
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-700 font-medium leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Our dedicated team helps farmers apply for government subsidies, simplifying the process
          of filling forms and accessing financial aid to invest in drone technology.
        </motion.p>
      </div>

    </div>
  );
}

export default Navabout;
