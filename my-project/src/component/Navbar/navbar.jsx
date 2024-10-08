import React from 'react';
import img from '../../assets/logo.png';
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <div>
      <div className="navbar bg-[#bbecff] px-5 py-3 flex items-center fixed w-full z-30 shadow-lg">
      <div className="navbar-start flex items-center">
  {/* Main logo with responsive sizing */}
  <div className=' border-r border-black'>

  <img 
    className="w-[150px] h-[30px] lg:w-[225px] lg:h-[48px] object-contain" 
    src={img} 
    alt="Logo" 
  />
  </div>
  
  {/* Spacer and secondary logo */}
 
    <img 
      className="w-[80px] h-[30px] lg:w-[100px] lg:h-[48px] object-contain" 
      src="https://iotechworld.com/wp-content/uploads/2023/03/Logo_90x90.png" 
      alt="Secondary Logo" 
    />

</div>

        <div className="navbar-center text-[#003366] hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to="/">Home</Link></li>
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to="/about">About</Link></li>
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to="/products">Product</Link></li>
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to="/event">News & Events</Link></li>
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to='/govern'>Schemes</Link></li>
            <li className='text-[#003366] hover:text-white hover:bg-[#5957cf] transition duration-300'><Link to="/demo">Testimonials</Link></li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:inline-flex">
          <Link to="/contact" className="btn bg-green-400 hover:text-white hover:bg-green-500 transition duration-300">CONTACT US</Link>
        </div>
        <div className="navbar-end drawer drawer-end lg:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle lg:hidden" />
          <div className="drawer-content lg:hidden">
            <label htmlFor="my-drawer-4" className="drawer-button text-3xl"><IoMenu /></label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to='/event'>News & Events</Link></li>
              <li><Link to='/govern'>Schemes</Link></li>
              <li><Link to="/demo">Testimonials</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbars;
