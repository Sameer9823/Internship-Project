import React, { useState } from 'react';
import img from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Navbars() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false); // State for News & Events dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      <div className="navbar bg-[#bbecff] px-5 py-3 flex items-center fixed w-full z-30 shadow-lg">
        <div className="navbar-start flex items-center">
          <div>
            <img
              className="w-[150px] h-[30px] lg:w-[225px] lg:h-[48px] object-contain"
              src={img}
              alt="Logo"
            />
          </div>
          
        </div>

        <div className="navbar-center text-[#003366] hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300">
              <Link to="/about">About</Link>
            </li>

            {/* Offerings with Dropdown */}
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300 relative">
              <button 
                onClick={toggleDropdown} 
                className="flex items-center justify-between w-full"
              >
                Offerings 
                {isDropdownOpen ? (
                  <AiOutlineUp className="ml-2 text-sm" />
                ) : (
                  <AiOutlineDown className="ml-2 text-sm" />
                )}
              </button>
              {isDropdownOpen && (
                <ul className="absolute w-[250px] top-full left-0 bg-white shadow-lg border border-gray-200 rounded-lg py-2 mt-1">
                  <li className="hover:bg-gray-100 transition duration-200">
                    <Link to="products" className="px-4 py-2 block text-[#003366]">Agriculture Drone</Link>
                  </li>
                  <li className="hover:bg-gray-100 transition duration-200">
                    <Link to="waste" className="px-4 py-2 block text-[#003366]">Waste Management</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* News & Events with Dropdown */}
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300 relative">
              <button 
                onClick={toggleNewsDropdown} 
                className="flex items-center justify-between w-full"
              >
                News & Events
                {isNewsDropdownOpen ? (
                  <AiOutlineUp className="ml-2 text-sm" />
                ) : (
                  <AiOutlineDown className="ml-2 text-sm" />
                )}
              </button>
              {isNewsDropdownOpen && (
                <ul className="absolute w-[250px] top-full left-0 bg-white shadow-lg border border-gray-200 rounded-lg py-2 mt-1">
                  <li className="hover:bg-gray-100 transition duration-200">
                    <Link to="event" className="px-4 py-2 block text-[#003366]">Drone News</Link>
                  </li>
                  <li className="hover:bg-gray-100 transition duration-200">
                    <Link to="/news/waste-news" className="px-4 py-2 block text-[#003366]">Waste News</Link>
                  </li>
                </ul>
              )}
            </li>

            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300">
              <Link to="/govern">Schemes</Link>
            </li>
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300">
              <Link to="/demo">Testimonials</Link>
            </li>
            <li className="text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300">
            <Link to="">Certificates</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:inline-flex">
          <Link to="/contact" className="btn bg-green-400 hover:text-white hover:bg-green-500 transition duration-300">
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="navbar-end drawer drawer-end lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle lg:hidden" />
          <div className="drawer-content lg:hidden">
            <label htmlFor="my-drawer-4" className="drawer-button text-3xl">
              <IoMenu />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>

              {/* Mobile Dropdown for Offerings */}
              <li>
                <button onClick={toggleDropdown} className="flex items-center w-full">
                  Offerings
                  {isDropdownOpen ? (
                    <AiOutlineUp className="ml-2 text-xl" />
                  ) : (
                    <AiOutlineDown className="ml-2 text-xl" />
                  )}
                </button>
                {isDropdownOpen && (
                  <ul className="p-2">
                    <li><Link to="products">Agriculture Drone</Link></li>
                    <li><Link to="/products/waste-management">Waste Management</Link></li>
                  </ul>
                )}
              </li>

              {/* Mobile Dropdown for News & Events */}
              <li>
                <button onClick={toggleNewsDropdown} className="flex items-center w-full">
                  News & Events
                  {isNewsDropdownOpen ? (
                    <AiOutlineUp className="ml-2 text-xl" />
                  ) : (
                    <AiOutlineDown className="ml-2 text-xl" />
                  )}
                </button>
                {isNewsDropdownOpen && (
                  <ul className="p-2">
                    <li><Link to="event">Drone News</Link></li>
                    <li><Link to="/news/waste-news">Waste News</Link></li>
                  </ul>
                )}
              </li>

              <li><Link to="/govern">Schemes</Link></li>
              <li><Link to="/demo">Testimonials</Link></li>
              <li><Link to="">Certificates</Link></li>

              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
