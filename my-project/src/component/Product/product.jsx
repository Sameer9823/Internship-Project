import React from 'react';
import img1 from '../../assets/img.png'
import img2 from '../../assets/imgs.png'

function Product() {
  return (
    <div>
      

      <div className="lg:mt-[8rem] mt-[2rem]">
      <h1 className='text-2xl text-center font-bold'>Our Product</h1>
      <div className='flex justify-center mt-[3rem]'>

        <img className='border-[1px] border-[black] w-[83%]' src={img1} alt="" />
      </div>

      <div className='mt-[5rem]'>
      <h1 className='text-2xl text-center font-bold'>Products Detail</h1>
      <div className="flex justify-center mt-[3rem]">

        <img className='w-[83%] border-[1px] border-[black]' src={img2} alt="" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Product;
