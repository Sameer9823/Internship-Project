import React from 'react';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer className="footer bg-[#bbecff] p-10 mt-[3rem] shadow-lg lg:pl-[15rem]">
      {/* Logo and Contact Details */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-between text-center lg:text-left mx-auto w-full max-w-screen-xl">
        <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0">
          <img className="w-[250px] mb-4" src={logo} alt="SurgiSol Logo" />
          <p className="text-blue-900 font-semibold">
            SurgiSol Healthcare Solution Pvt Ltd
          </p>
          <p className="text-blue-900">
            Flat No. 2 Prince Complex, Above Saini Travels, Chhatrapati Sq., Nagpur
          </p>
          <p className="text-blue-900">
            State: Maharashtra, Pin code: 440015
          </p>
        </div>

        {/* Get in Touch Section */}
        <div className="flex flex-col lg:w-1/2 items-center lg:items-end text-center lg:text-right">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">Get in Touch</h3>
          <p className="text-blue-900 mb-2">Mobile: +91 9049976655</p>
          <p className="text-blue-900 mb-2">E-Mail: enquiry@envirosoln.in</p>
        </div>

        <div className="text-center  text-gray-700 text-sm border-t  mx-auto w-full max-w-screen-xl">
        <h1 className="text-2xl font-bold text-[#003366] ">Follow Us</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-600">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a href="https://youtu.be/Y9DWYlGzMUE?si=GhiljAKhh9CUP0E2" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-600">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-blue-600">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>

     
      
    </footer>
  );
}

export default Footer;
