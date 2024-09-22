import React from 'react';
import img1 from '../../assets/offer.png'
import img2 from '../../assets/img4.png'

function Product() {
  return (
    <div className='text-center'>
      

      <div className="lg:mt-[8rem] mt-[2rem]">
      <h1 className='text-4xl font-extrabold text-sky-600'>Products Offering</h1>
      <div className='flex justify-center mt-[3rem]'>

        <img className='border-[1px] border-[black] w-[83%]' src={img1} alt="" />
      </div>

      <div className='mt-[5rem] text-center'>
      <h1 className='text-4xl font-extrabold text-sky-600 text-center'>Products Detail</h1>
      <div className="flex justify-center mt-[3rem]">

        <img className='w-[83%] border-[1px] border-[black]' src={img2} alt="" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Product;
