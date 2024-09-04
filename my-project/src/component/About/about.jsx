import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 py-[5rem]">
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-extrabold text-sky-600'>ABOUT US</h1>
      </div>
      <div className='flex justify-center items-center flex-wrap gap-[3rem] px-4'>
        <div className='w-full lg:w-[500px] p-5 text-center bg-white rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
          <p className='text-3xl font-bold text-sky-700 mb-4'>What We Do?</p>
          <p className='text-lg text-gray-700 leading-relaxed'>
            Our drones are designed to transform modern farming practices. Equipped with state-of-the-art sensors and imaging technologies, they offer precise data collection, real-time monitoring, and actionable insights that optimize crop management, increase yields, and reduce resource wastage. From aerial surveys to crop health monitoring, our drones provide farmers with the tools they need to make informed decisions and achieve sustainable growth.
          </p>
        </div>
        <div className='w-full lg:w-[700px] rounded-lg overflow-hidden shadow-lg'>
          <img
            src="https://www.aonic.com/my/wp-content/uploads/2022/12/BI5A3565-1024x655.png.webp"
            alt="Agricultural Drone"
            className='w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105'
          />
        </div>
      </div>
    </div>
  )
}

export default About;
