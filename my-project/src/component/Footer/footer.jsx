import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer flex justify-evenly flex-wrap text-black bg-[#7cc0f4]  p-10 mt-8">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover hover:text-[#fff] hover:font-semibold">Branding</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Design</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Marketing</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">About us</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Contact</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Jobs</a>
    <a className="link link-hover hover:text-[#ffff] hover:font-semibold">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover hover:text-[#ffff]">Terms of use</a>
    <a className="link link-hover hover:text-[#ffff]">Privacy policy</a>
    <a className="link link-hover hover:text-[#ffff]">Cookie policy</a>
  </nav>
  <form className='hidden sm:block lg:block md:block'>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form>
  <footer className="footer footer-center text-base-content font-extrabold">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
</footer>
    </div>
  )
}

export default Footer