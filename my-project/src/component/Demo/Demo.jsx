import React from 'react'
import video1 from '../../assets/Demo1.mp4'
import video2 from '../../assets/Demo2.mp4'
import video3 from '../../assets/Demo3.mp4'
import video4 from '../../assets/Demo4.mp4'
import video5 from '../../assets/Demo5.mp4'
import video6 from '../../assets/Demo6.mp4'

function Demo() {
  return (
    <div>
      <div className='pt-[8rem]'>
        <h1 className='text-4xl font-extrabold text-center text-sky-600'>Testimonials</h1>
      </div>
      <div className='flex justify-center flex-wrap gap-[3rem] mt-[3rem] px-4'>
      
        {/* Card 1 */}
        <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video1}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 1: Introduction to Features</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video2}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 2: Advanced Techniques</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video3}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 3: Expert Insights</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video4}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 4: Customer Experience</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
            </p>
          </div>
        </div>

        {/* Card 5 */}
        <div className='border-2 border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[250px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video6}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 5: How It Works</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis velit quis neque dictum lacinia. Nullam eget pharetra orci.
            </p>
          </div>
        </div>

        {/* Card 6 */}
        <div className='border-2 w-[500px]  border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[300px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video5}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700'>Demo 6: Best Practices</h2>
            <p className='text-gray-600 mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Demo
