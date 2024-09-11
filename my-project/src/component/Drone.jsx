import React, { useEffect, useState } from "react";

const AnimatedImage = () => {
  const [position, setPosition] = useState(10); // Starting position (top: 10px)

  useEffect(() => {
    const moveUpDown = () => {
      setPosition((prevPosition) => (prevPosition === 10 ? -30 : 10)); // Moves between 10px and -30px
    };

    const interval = setInterval(moveUpDown, 3550); // Animation interval time in milliseconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-auto">
      <div
        className="absolute transition-all duration-[3.55s] ease-in-out"
        style={{ top: `${position}px` }} // Apply top position dynamically
      >
        <img
          src="https://iotechworld.com/wp-content/uploads/2023/03/agribot.webp"
          alt="Drone"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AnimatedImage;
