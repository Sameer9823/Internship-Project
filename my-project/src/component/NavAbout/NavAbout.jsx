import React from 'react'

function Navabout() {
  return (
    <div>
       <div className="carousel w-full mt-24 h-[600px] relative">
        
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/3119599/pexels-photo-3119599.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full" 
            alt="Slide 1"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold ">
          <p className='w-[500px] text-center'>
          The environment is where we all meet where we all have a mutual interest; it is the one thing all of us share.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/2157925/pexels-photo-2157925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full" 
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            <p className='w-[500px] text-center'>

          We do not inherit the earth from our ancestors; we borrow it from our children.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/2164417/pexels-photo-2164417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full" 
            alt="Slide 3"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            <p className="w-[500px] text-center">
            The best way to predict the future is to create it. Let’s create a sustainable future by protecting our environment today.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/1545754/pexels-photo-1545754.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="w-full" 
            alt="Slide 4"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold">
            <p className='w-[500px] text-center'>
            In nature, nothing exists alone. Every action we take affects the environment. Let’s strive to make those actions positive.
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navabout