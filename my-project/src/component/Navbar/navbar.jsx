import React from 'react'
import img from '../../assets/logo.jpg'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Navbars() {
  return (
    <div>
        <div className="navbar bg-[#7cc0f4] px-5 py-3 flex items-center fixed w-full z-30 shadow-lg">
  <div className="navbar-start">
  <img  className='w-[225px] h-[48px]' src={img} alt="" srcset="" />
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      
      </ul>
    </div>
    
  </div>
  <div className="navbar-center text-[#003366] hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><Link to="/">Home</Link> </li>
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><Link to="/about">About</Link></li>
      
        <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><Link to="/products">Product</Link></li>
         
      
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><a>News & Events</a></li>
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><a>Awards</a></li>
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><a>Our Clients</a></li>
      <li className='text-[#003366] hover:text-[#ffff] hover:bg-[#5957cf] hover:font-semibold hover:border-2 hover:border-[#67e46d] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)] hover:duration-500'><a>Career</a></li>
    </ul>
  </div>
  <div className="navbar-end hidden lg:inline-flex">
    <Link to="/contact" className="btn hover:text-[#0066B3] hover:bg-[#E0E0E0] hover:shadow-[0_4px_6px_rgba(0,0,0,0.2)]">CONTACT US</Link>
   
  </div>
  <div className="navbar-end drawer drawer-end lg:hidden">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle lg:hidden" />
  <div className="drawer-content lg:hidden">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button text-3xl"><IoMenu /></label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-52 p-4">
      {/* Sidebar content here */}
      <li><Link to="/">Home</Link> </li>
      <li><a>About</a></li>
      <li>
        <details>
          <summary>Product</summary>
          <ul className="p-2">
          <li><Link to="/products">Products</Link></li>
           
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Network</summary>
          <ul className="p-2">
            <li><a>Submenu </a></li>
            <li><a>Submenu </a></li>
            <li><a>Submenu </a></li>
            <li><a>Submenu </a></li>
          </ul>
        </details>
      </li>
      <li><a>News & Events</a></li>
      <li><a>Awards</a></li>
      <li><a>Our Clients</a></li>
      <li><a>Career</a></li>
      <li><Link to="/contact">Contact Us</Link> </li>
    </ul>
  </div>
</div>
</div>
    </div>
  )
}

export default Navbars;