import React from 'react';
import img1 from '../../assets/eknath.png'
import img2 from '../../assets/mod.jpg'
import img3 from '../../assets/nitin.jpg'

function News() {

  return (
    <div className="bg-gray-50 py-16">
      <h1 className="text-4xl font-extrabold text-center text-sky-600 mb-12">News & Articles</h1>
      <div className="flex justify-center flex-wrap gap-[1rem] lg:gap-8 px-4">
        
        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={img1}
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2"> AGRIBOT Drone Scheme Launch in Maharashtra</h2>
            <p className="text-gray-700 leading-relaxed">
            Maharashtra CM Eknath Shinde has launched the AGRIBOT Drone Subsidy under the SMAM initiative, introducing the first subsidized drone to enhance farming with advanced technology. This program aims to boost productivity and modernize agricultural practices, promoting sustainable farming and resource efficiency across the state.
            </p>
          </div>
        </div>
        
        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src={img2}
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2"> Prime Minister Narendra Modi Observes AGRIBOT Drone Technology Display</h2>
            <p className="text-gray-700 leading-relaxed">
            PM Modi expressed interest in the advancements and discussed the impact of such innovations on India's journey towards sustainable and modern farming practices. This event underscores the government's commitment to integrating cutting-edge technology in agriculture for enhanced productivity.
            </p>
          </div>
        </div>

        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48"
              src={img3}
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">Demonstration for Shri Nitin Gadkari</h2>
            <p className="text-gray-700 leading-relaxed">
            A live AGRIBOT drone demonstration was presented to Shri Nitin Gadkari, showcasing advancements in agricultural technology. The drones support precision farming, improve crop management, and promote sustainable agriculture. Shri Gadkari praised the initiative for its potential to boost productivity and modernize Indian farming practices.

            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default News;
