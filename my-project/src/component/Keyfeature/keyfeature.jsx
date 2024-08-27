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
    <div>
      <div
        className="hero lg:w-[1230px] h-auto lg:ml-[7.6rem] lg:h-[700px] mt-[5rem]"
        style={{
          backgroundImage: "url(https://th.bing.com/th/id/OIP.zXuo7vnjwiyRfo0qr_AMQwHaE8?w=282&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7)",
        }}
      >
          <h1 className="text-2xl font-bold mb-[39rem] text-black mt-2">Leading Figure</h1>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          {/* Added h1 here */}
          <div className="flex flex-wrap justify-center gap-[4rem]">
            {/* Row 1 */}
            <div className="card bg-white text-black w-50 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <MdPrecisionManufacturing className='text-5xl' />
                </div>
                <p>Manufacturing Unit</p>
                <p>1</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <AiOutlineStock className='text-5xl' />
                </div>
                <p>Sales Point</p>
                <p>30</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GrServices className='text-5xl' />
                </div>
                <p>Service Center</p>
                <p>3</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GiDeliveryDrone  className='text-5xl' />
                </div>
                <p>Drones flying</p>
                <p>1000+</p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body text-center">
                <div className='flex justify-center'>
                  <GoCopilot className='text-5xl' />
                </div>
                <p>Pilots Trained</p>
                <p>2000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body w-50 text-center">
                <div className='flex justify-center'>
                  <img src={img} alt="" className='w-20' />
                </div>
                <p>Demos</p>
                <p>20000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body w-50 text-center">
                <div className='flex justify-center'>
                  <FaRoute className='text-5xl' />
                </div>
                <p>Drone travels</p>
                <p>25000+</p>
              </div>
            </div>
            <div className="card bg-white text-black w-52 shadow-xl">
              <div className="card-body w-50 text-center">
                <div className='flex justify-center'>
                  <GiFarmer className='text-5xl' />
                </div>
                <p>Farmers Reached</p>
                <p>2 Lakh +</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Keyfeature;
