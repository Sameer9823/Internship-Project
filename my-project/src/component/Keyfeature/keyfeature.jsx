import React from 'react';
import { MdPrecisionManufacturing } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
import { GrServices } from "react-icons/gr";
import { GiDeliveryDrone, GiFarmer } from "react-icons/gi";
import { GoCopilot } from "react-icons/go";
import { FaRoute } from "react-icons/fa";
import img from '../../assets/demo.png'

function Keyfeature() {
  return (
    <div className="px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-sky-600 text-center mt-8 md:mt-[3rem]">
        Leading Figure
      </h1>
      <div
        className="hero max-w-full lg:w-[1230px] h-auto lg:ml-auto lg:h-[700px] mt-12 mx-auto"
        style={{
          backgroundImage: "url(https://th.bing.com/th/id/OIP.zXuo7vnjwiyRfo0qr_AMQwHaE8?w=282&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="flex flex-wrap justify-center gap-4 lg:gap-[4rem]">
            {/* Row 1 */}
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <MdPrecisionManufacturing className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Manufacturing Unit</p>
                <p className="text-sm sm:text-base">1</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <AiOutlineStock className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Sales Point</p>
                <p className="text-sm sm:text-base">30</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GrServices className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Service Center</p>
                <p className="text-sm sm:text-base">3</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GiDeliveryDrone className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Drones flying</p>
                <p className="text-sm sm:text-base">1000+</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GoCopilot className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Pilots Trained</p>
                <p className="text-sm sm:text-base">2000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <img src={img} alt="Demo" className='w-16 sm:w-20' />
                </div>
                <p className="text-sm sm:text-base">Demos</p>
                <p className="text-sm sm:text-base">20000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <FaRoute className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Drone travels</p>
                <p className="text-sm sm:text-base">25000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-40 sm:w-48 md:w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GiFarmer className='text-4xl sm:text-5xl' />
                </div>
                <p className="text-sm sm:text-base">Farmers Reached</p>
                <p className="text-sm sm:text-base">2 Lakh +</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyfeature;
