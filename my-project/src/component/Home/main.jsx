import React from 'react';
import vid from '../../assets/video.mp4'

function Main() {
  return (
    <div>
     

      <div className='pt-[5.5rem] flex justify-center gap-[2rem] items-center mb-[5rem] flex-wrap'>
       
        <div className='w-[800px]'>
          <video src={vid} autoPlay controls controlsList='nodownload' loop ></video>

      </div>
        <div className='w-[500px] font-bold text-black px-2'>
          <p>Introducing the Agribot MX, a groundbreaking agricultural drone designed to revolutionize modern farming practices. This state-of-the-art drone is engineered with cutting-edge technology to significantly enhance agricultural productivity and sustainability.

The Agribot MX is equipped with advanced sensors and imaging systems for precise crop monitoring. Its high-resolution cameras and multispectral sensors provide real-time, detailed insights into crop health and soil conditions, enabling farmers to make informed decisions and take proactive measures. This precision allows for targeted interventions, minimizing waste and maximizing crop yield.



The Agribot MX also excels in real-time data collection and analysis. Its integrated data management system aggregates information from various sensors and provides actionable insights through a user-friendly interface. This data-driven approach helps farmers to optimize their operations, monitor crop growth, and assess field conditions with unparalleled accuracy.
</p>
        </div>
        
      </div>
    </div>
  );
}

export default Main;
