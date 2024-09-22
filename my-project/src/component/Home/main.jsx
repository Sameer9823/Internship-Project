import React from 'react';
import vid from '../../assets/video.mp4';
import poster from '../../assets/drone.png';

function Main() {
  return (
    <div className="bg-gray-50 h-auto py-7 pt-[5.5rem]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-xl border border-gray-200 p-8">
        {/* Flex container for row alignment, with responsive classes */}
        <div className='flex flex-col md:flex-row justify-center gap-[2rem] items-center px-4'>

          {/* Video Section */}
          <div className='w-full md:w-2/3 lg:w-[65%] flex justify-center shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <video 
              src={vid} 
              autoPlay 
              controls 
              controlsList='nodownload' 
              loop 
              className='w-full h-auto rounded-lg'
              poster={poster}
            />
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/3 lg:w-[35%] font-bold text-gray-800 px-4'>
            <h2 className='text-2xl text-sky-600 mb-4 text-center'>Agribot MX: Revolutionizing Modern Farming</h2>
            <p className='text-sm leading-relaxed lg:text-left md:text-left text-center'>
              Introducing the <span className="text-green-700">Agribot MX</span>, a groundbreaking agricultural drone designed to revolutionize modern farming practices. This state-of-the-art drone is engineered with cutting-edge technology to significantly enhance agricultural productivity and sustainability.
            </p>
            <p className='text-sm leading-relaxed mt-4 lg:text-left md:text-left text-center'>
              The Agribot MX is equipped with advanced sensors and imaging systems for precise crop monitoring. Its high-resolution cameras and multispectral sensors provide real-time, detailed insights into crop health and soil conditions, enabling farmers to make informed decisions and take proactive measures.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Main;
