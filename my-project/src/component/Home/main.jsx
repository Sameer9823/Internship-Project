import React from 'react';
import vid from '../../assets/waste.mp4';

function Main() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Full-screen background video */}
      <video 
        src={vid} 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay with centered text */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sky-400">
          Leading Waste Management Solution
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl">
          Our innovative solutions leverage cutting-edge technology to effectively manage waste, reduce environmental impact, and promote sustainability. Join us in creating a cleaner and greener future.
        </p>
      </div>
    </div>
  );
}

export default Main;
