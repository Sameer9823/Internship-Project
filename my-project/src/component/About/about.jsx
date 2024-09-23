import React from 'react';

function About() {
  return (
    <div className="bg-gray-50 py-[5rem]">
      <div className="max-w-[1400px] mx-auto bg-white rounded-lg shadow-xl border border-gray-200 p-8">
        <div className='text-center mb-12'>
          <h1 className='md:text-4xl text-2xl font-extrabold text-sky-600'>ABOUT US</h1>
        </div>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-[3rem] lg:px-4 md:px-4 px-0'>
          
          {/* Text Section */}
          <div className='w-full lg:w-[500px] md:p-5 p-0 text-center bg-white rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
            <p className='md:text-3xl text-2xl font-bold text-sky-700 mb-4'>What We Do?</p>
            <p className='text-lg text-gray-700 font-bold md:text-left '>
            We are proud to be an authorized dealer of Iotech in Maharashtra, offering a wide range of Iotech drones, parts, and accessories. Our products are designed to meet the needs of modern farmers, enabling them to optimize productivity with cutting-edge technology. In addition to sales, we provide comprehensive support for government subsidy programs and schemes, helping customers take full advantage of available financial assistance. Whether you're looking to purchase drones or need expert guidance on government initiatives, our team is here to assist you in every step of the process to ensure a smooth and successful experience.
            </p>
          </div>

          {/* Image Section */}
          <div className='w-full lg:w-[700px] rounded-lg overflow-hidden shadow-lg'>
            <img
              src="https://www.aonic.com/my/wp-content/uploads/2022/12/BI5A3565-1024x655.png.webp"
              alt="Agricultural Drone"
              className='w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-105'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
