import React from 'react'
import video1 from '../../assets/Demo1.mp4'
import video2 from '../../assets/Demo2.mp4'
import video3 from '../../assets/Demo3.mp4'
import video4 from '../../assets/Demo4.mp4'

function Demo() {
  return (
    <div>
        <div className='pt-[8rem]'>
          <h1 className='text-4xl font-extrabold text-center text-sky-600'>Demo Videos</h1>
        </div>
        <div className='flex justify-center flex-wrap gap-[3rem] mt-[3rem] px-4'>
        
            <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
              <video 
                className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
                controls 
                controlsList='nodownload' 
                src={video2}
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold text-sky-700'>Demo 1: Introduction to Features</h2>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
                </p>
              </div>
            </div>
        
            <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
              <video 
                className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
                controls 
                controlsList='nodownload' 
                src={video3}
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold text-sky-700'>Demo 2: Advanced Techniques</h2>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
                </p>
              </div>
            </div>
        
            <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
              <video 
                className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
                controls 
                controlsList='nodownload' 
                src={video4}
              />
              <div className='p-4'>
                <h2 className='text-xl font-bold text-sky-700'>Demo 3: Expert Insights</h2>
                <p className='text-gray-600 mt-2'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Demo
