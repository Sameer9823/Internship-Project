import React from 'react';
import vid from '../../assets/video.mp4';
import poster from '../../assets/drone.png'

function Main() {
  return (
    <div className="bg-gray-50 h-auto py-7">
      <div className='pt-[5.5rem] flex justify-center gap-[2rem] items-center mb-[5rem] flex-wrap px-4'>
       
      <div className='w-full md:w-[800px] flex justify-center shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
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


        <div className='w-full md:w-[500px] font-bold text-gray-800 px-4'>
          <h2 className='text-3xl text-sky-600 mb-4 text-center'>Agribot MX: Revolutionizing Modern Farming</h2>
          <p className='text-md leading-relaxed lg:text-left md:text-left text-center'>
            Introducing the <span className="text-green-700">Agribot MX</span>, a groundbreaking agricultural drone designed to revolutionize modern farming practices. This state-of-the-art drone is engineered with cutting-edge technology to significantly enhance agricultural productivity and sustainability.
          </p>
          <p className='text-md leading-relaxed mt-4 lg:text-left md:text-left text-center'>
            The Agribot MX is equipped with advanced sensors and imaging systems for precise crop monitoring. Its high-resolution cameras and multispectral sensors provide real-time, detailed insights into crop health and soil conditions, enabling farmers to make informed decisions and take proactive measures. This precision allows for targeted interventions, minimizing waste and maximizing crop yield.
          </p>
       
        </div>
        
      </div>
    </div>
  );
}

export default Main;
