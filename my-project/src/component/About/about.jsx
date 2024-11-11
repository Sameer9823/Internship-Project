import React from 'react';
import { FaChartLine, FaLeaf, FaRecycle, FaSatellite, FaTractor, FaWater } from 'react-icons/fa';
import { GiDeliveryDrone, GiFarmTractor } from 'react-icons/gi';

function About() {
  const features = [
    {
      id: 1,
      icon: <FaRecycle className="text-green-500 text-4xl" />,
      title: "Waste Management Solutions",
      description:
        "Our waste management solutions are designed to promote sustainability and environmental responsibility. We offer innovative methods to minimize waste impact, paving the way for a cleaner, greener future.",
    },
    {
      id: 2,
      icon: <GiDeliveryDrone className="text-blue-500 text-4xl" />,
      title: "Agriculture Drones",
      description:
        "We provide advanced agricultural drones that empower farmers with cutting-edge technology, enabling them to monitor crops, increase efficiency, and boost productivity.",
    },
  ];
  const services = [
    {
      id: 1,
      icon: <FaRecycle className="text-green-500 text-4xl" />,
      title: "Waste Management",
      description: "Innovative solutions for managing waste efficiently, promoting sustainability and reducing environmental impact.",
    },
    {
      id: 2,
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Organic Farming",
      description: "Supporting eco-friendly farming methods to improve soil health and reduce the use of synthetic chemicals.",
    },
    {
      id: 3,
      icon: <GiFarmTractor className="text-blue-500 text-4xl" />,
      title: "Smart Agriculture",
      description: "Technology-driven solutions for efficient farming, including precision agriculture and automated equipment.",
    },
    {
      id: 4,
  icon: <FaRecycle className="text-blue-600 text-4xl" />,
  title: "Waste Management",
  description: "Efficient waste management systems to promote sustainability and reduce environmental impact.",
    },
    {
      id: 5,
      icon: <FaChartLine className="text-yellow-500 text-4xl" />,
      title: "Crop Analytics",
      description: "Data-driven insights into crop health and growth patterns, allowing for better decision-making in farming.",
    },
    {
      id: 6,
      icon: <FaSatellite className="text-purple-500 text-4xl" />,
      title: "Drone Monitoring",
      description: "Advanced drones equipped with sensors for real-time monitoring of crop health and field conditions.",
    },
  ];
  return (
    <>
    
    <div className="bg-gray-50 py-[5rem]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-xl border border-gray-200 p-10">
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-3xl font-extrabold text-sky-600 uppercase">About Us</h1>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-center items-start gap-[3rem] lg:px-4 md:px-4 px-0">
          {/* Text Section */}
          <div className="w-full lg:w-[50%] text-left bg-white rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
            <p className="md:text-4xl text-2xl text-center font-bold text-sky-700 mb-6">What We Do</p>
            <p className="text-lg lg:text-xl text-gray-700 font-semibold mb-4 leading-relaxed">
              We are a proud authorized dealer of <span className="text-green-600 font-bold">Iotech</span> in Maharashtra, providing a wide range of Iotech drones, parts, and accessories tailored for modern farming. Our advanced products empower farmers to enhance productivity with cutting-edge technology.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 font-semibold mb-4 leading-relaxed">
              Additionally, we offer comprehensive support for <span className="text-blue-600 font-bold">government subsidy programs</span>, ensuring our customers maximize available financial assistance. From drone purchases to expert guidance on government initiatives, we deliver a seamless experience.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 font-semibold leading-relaxed">
              Beyond agriculture, we are committed to <span className="text-red-600 font-bold">waste management solutions</span>, promoting sustainable practices and environmental responsibility. Our solutions minimize environmental impact, paving the way for a cleaner, greener future.
            </p>
          </div>

          {/* Image Section */}
          <div className="w-full lg:w-[50%] grid grid-cols-1 gap-6 h-[600px]">
            <div className="h-[290px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://th.bing.com/th/id/OIP._T4M4ESVC74rcc-ELW10KQHaE8?w=278&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"  
                alt="Agricultural Drone"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
            <div className="h-[290px] rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://th.bing.com/th/id/OIP.8LyMrIKfhNlPZxvA2IDTGgHaE7?w=297&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"  
                alt="Waste Management"
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-10 px-4">
      <h1 className='md:text-4xl text-3xl text-center pb-[3rem] font-extrabold text-sky-600 uppercase '>Services</h1>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h2 className="text-2xl font-bold text-sky-700 mb-2">{feature.title}</h2>
            <p className="text-gray-600 text-lg">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="bg-gray-100 py-10 px-4">
    <h1 className='md:text-4xl text-3xl text-center pb-[3rem] font-extrabold text-sky-600 uppercase '>key features</h1>
      <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h2 className="text-xl font-bold text-sky-700 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default About;
