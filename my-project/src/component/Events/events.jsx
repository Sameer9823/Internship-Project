import React, { useState } from 'react';
import img from '../../assets/modiji.png'

function Events() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Set the clicked image URL to open modal
  };

  const closeModal = () => {
    setSelectedImage(null); // Close modal by resetting the selected image
  };

  return (
    <div className='pt-[4rem]'>

      {/* Background Image */}
      <div>
        <img 
          src={img} 
          alt="Background" 
          className='w-full'
        />
      </div>

      <h1 className='text-4xl font-bold text-center mt-[3rem] text-sky-700'>News & Events</h1>

      {/* Event Cards Row 1 */}
      <div className='flex justify-evenly flex-wrap items-center mt-8 gap-8 px-4'>
        
        {/* Event Card 1 */}
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Kisaan-Tak-09-01-2023-460x210.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Kisaan-Tak-09-01-2023-460x210.jpg.webp"
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
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Zee-Business_2-25-02-2023.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Zee-Business_2-25-02-2023.jpg.webp"
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
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Zee-Business_08-02-2023-460x210.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/Zee-Business_08-02-2023-460x210.jpg.webp"
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

      {/* Event Cards Row 2 */}
      <div className='flex justify-evenly flex-wrap items-center mt-8 gap-8 px-4'>
        
        {/* Event Card 4 */}
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/02/Financial-Express-460x210.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/02/Financial-Express-460x210.jpg.webp"
            alt="Event 4"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 4</h2>
            <p className="text-sm">Date: May 1, 2023</p>
          </div>
        </div>

        {/* Event Card 5 */}
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/business-line-08-02-2023-460x210.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/business-line-08-02-2023-460x210.jpg.webp"
            alt="Event 5"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 5</h2>
            <p className="text-sm">Date: June 12, 2023</p>
          </div>
        </div>
        <div 
          className="relative h-[200px] w-[400px] rounded-md border-2 border-blue-300 overflow-hidden shadow-2xl transition-all duration-500 hover:scale-105" 
          onClick={() => handleImageClick("https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/business-line-08-02-2023-460x210.jpg.webp")}
        >
          <img
            src="https://iotechworld.com/wp-content/webp-express/webp-images/uploads/2024/03/business-line-08-02-2023-460x210.jpg.webp"
            alt="Event 6"
            className="z-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
          <div className="absolute bottom-4 left-4 text-white">
            <h2 className="text-xl font-bold">Event Title 6</h2>
            <p className="text-sm">Date: June 12, 2023</p>
          </div>
        </div>
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative">
            <img src={selectedImage} alt="Selected Event" className="h-auto max-w-[90%] max-h-[90%] object-contain" />
            <button onClick={closeModal} className="absolute top-2 right-2 text-white text-3xl font-bold">×</button>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default Events;
