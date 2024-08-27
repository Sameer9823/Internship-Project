import React from 'react'

function News() {
  return (
    <div>
      <div className=' py-2'>
        <h1 className='text-3xl mt-12 font-bold text-center'>News & Articles</h1>
        <div className='flex justify-center flex-wrap gap-[1rem] lg:gap-8 mt-10 mb-8'>
          <div className="card bg-base-100 lg:w-96 w-80 shadow-xl">
            <figure>
              <img
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
                src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Shoes" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">News</h2>
              <p>July 22, 2024</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?</p>
            </div>
          </div>
          <div className="card bg-base-100 lg:w-96 w-80 shadow-xl">
            <figure>
              <img
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
                src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Shoes" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">News</h2>
              <p>July 22, 2024</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?</p>
            </div>
          </div>
          <div className="card bg-base-100 lg:w-96 w-80 shadow-xl">
            <figure>
              <img
                className='transition-transform duration-300 ease-in-out transform hover:scale-105'
                src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                alt="Shoes" 
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">News</h2>
              <p>July 22, 2024</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News
