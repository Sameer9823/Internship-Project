import React from 'react'

function Events() {
  return (
    <div className='pt-[5rem]'>

      <div>
        <img 
          src="https://i.pinimg.com/originals/94/a3/c0/94a3c09ca076b4d4df90654889f6d431.jpg" 
          alt="" 
          className='h-[700px] w-full object-cover'
        />
      </div>

      <h1 className='text-4xl font-bold text-center mt-[3rem] text-sky-700'>News & Events</h1>

      <div className='flex justify-evenly flex-wrap items-center mt-8 gap-8 px-4'>
        
        {/* Event Card 1 */}
        <div className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Hindustan-Times-11-02-2023-460x210.jpg.webp"
            alt="Event 1"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 1</h2>
            <p className="text-sm">Date: Feb 11, 2023</p>
          </div>
        </div>

        {/* Event Card 2 */}
        <div className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Hindustan-Times-11-02-2023-460x210.jpg.webp"
            alt="Event 2"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 2</h2>
            <p className="text-sm">Date: Mar 10, 2023</p>
          </div>
        </div>

        {/* Event Card 3 */}
        <div className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Hindustan-Times-11-02-2023-460x210.jpg.webp"
            alt="Event 3"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 3</h2>
            <p className="text-sm">Date: Apr 5, 2023</p>
          </div>
        </div>
      </div>

      <div className='flex justify-evenly flex-wrap items-center mt-8 gap-8 px-4'>
        {/* Repeat for more event cards */}
        <div className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Hindustan-Times-11-02-2023-460x210.jpg.webp"
            alt="Event 4"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 4</h2>
            <p className="text-sm">Date: May 1, 2023</p>
          </div>
        </div>

        <div className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105">
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Hindustan-Times-11-02-2023-460x210.jpg.webp"
            alt="Event 5"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 5</h2>
            <p className="text-sm">Date: June 12, 2023</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events;
