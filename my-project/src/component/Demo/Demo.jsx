import React from 'react'
import video1 from '../../assets/Demo1.mp4'
import video2 from '../../assets/Demo2.mp4'
import video3 from '../../assets/Demo3.mp4'
import video4 from '../../assets/Demo4.mp4'
import video5 from '../../assets/Demo5.mp4'
import video6 from '../../assets/Demo6.mp4'
import video7 from '../../assets/Demo7.mp4'
import video8 from '../../assets/Demo8.mp4'

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
            <h2 className='text-xl font-bold text-sky-700 text-center'>How it works!</h2>
            <p className='text-gray-600 mt-2'>
            Agricultural drones play a crucial role in modern farming by leveraging advanced technology to improve efficiency and productivity            </p>
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
            <h2 className='text-xl font-bold text-sky-700 text-center'>Features of drone</h2>
            <p className='text-gray-600 mt-2'>
            Drones are revolutionizing agriculture by offering innovative and efficient solutions for farm management
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
            <h2 className='text-xl font-bold text-sky-700 text-center' >Training for Farmers</h2>
            <p className='text-gray-600 mt-2'>
            At enviro solutions, we believe in empowering farmers with the latest technology to enhance productivity and sustainability. Our comprehensive training programs help farmers become proficient in using drones for agriculture, ensuring they can fully benefit from this innovative tool.
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
            <h2 className='text-xl font-bold text-sky-700 text-center'>How Drones Enhance Agriculture</h2>
            <p className='text-gray-600 mt-2'>
            Drones have revolutionized agriculture by introducing precision farming techniques and providing farmers with the tools they need to monitor crops, manage resources, and improve yields.
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
            <h2 className='text-xl font-bold text-sky-700'>Easy Integration of Drones with Bikes</h2>
            <p className='text-gray-600 mt-2'>
            Drones are highly portable and can be easily carried using bikes, especially in rural areas where access to farmland may be limited.
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
            <h2 className='text-xl font-bold text-sky-700 text-center'>Customer Experience</h2>
            <p className='text-gray-600 mt-2'>
            Drones are revolutionizing the agricultural industry by providing farmers with advanced tools and technology that streamline operations and improve the customer experience. 
            </p>
          </div>
        </div>
        <div className='border-2 w-[500px]  border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[300px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video7}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700 text-center'>Testimonials</h2>
            <p className='text-gray-600 mt-2'>
            The integration of drones into our farming operations has completely transformed the way we work. We can monitor crop health more efficiently and with precision. This has saved us countless hours and increased our yield. A truly game-changing technology for agriculture.
            </p>
          </div>
        </div>
        <div className='border-2 w-[500px]  border-sky-500 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-[400px]'>
          <video 
            className='h-[350px] w-full object-cover rounded-t-lg hover:scale-105 transition-transform duration-300 ease-in-out' 
            controls 
            controlsList='nodownload' 
            src={video8}
            onMouseOver={event => event.target.play()} 
            onMouseOut={event => event.target.pause()}
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold text-sky-700 text-center'>Testimonials</h2>
            <p className='text-gray-600 mt-2'>
            The integration of drones into our farming operations has completely transformed the way we work. We can monitor crop health more efficiently and with precision. This has saved us countless hours and increased our yield. A truly game-changing technology for agriculture.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Demo
