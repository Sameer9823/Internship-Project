import React from 'react';

function News() {
  return (
    <div className="bg-gray-50 py-16">
      <h1 className="text-4xl font-extrabold text-center text-sky-600 mb-12">News & Articles</h1>
      <div className="flex justify-center flex-wrap gap-[1rem] lg:gap-8 px-4">
        
        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">Latest News</h2>
            <p className="text-gray-500 mb-4">July 22, 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?
            </p>
          </div>
        </div>
        
        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">Industry Updates</h2>
            <p className="text-gray-500 mb-4">July 22, 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?
            </p>
          </div>
        </div>

        {/* News Card */}
        <div className="card bg-white lg:w-96 w-80 shadow-xl rounded-lg overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105">
          <figure>
            <img
              className="w-full h-48 object-cover"
              src="https://th.bing.com/th/id/OIP.pLdhoJ1d2z_MKT1XmNl8AQHaEK?w=316&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="News"
            />
          </figure>
          <div className="card-body p-6">
            <h2 className="card-title text-2xl font-bold text-gray-800 mb-2">Technology Insights</h2>
            <p className="text-gray-500 mb-4">July 22, 2024</p>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro soluta neque dolore saepe sed, quae eligendi rem corrupti in error odio consequatur doloribus ut nisi quas repellendus nemo necessitatibus amet labore quam! Tenetur vitae dicta dolores, eligendi dolore molestias corporis?
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default News;
