import React from 'react'

function About() {
  return (
    <div>
        <div className='mt-[5rem]'>
            <h1 className='text-3xl font-bold text-center'>ABOUT US</h1>
            <div className='lg:mt-[4rem] mt-[2rem] px-3 gap-[3rem] items-center flex justify-center flex-wrap'>
    <div className='w-[500px] p-5 text-center'>
        <p className='text-2xl font-bold'>What We Do?</p>
        <p className='text-lg'>Our drones are designed to transform modern farming practices. Equipped with state-of-the-art sensors and imaging technologies, they offer precise data collection, real-time monitoring, and actionable insights that optimize crop management, increase yields, and reduce resource wastage. From aerial surveys to crop health monitoring, our drones provide farmers with the tools they need to make informed decisions and achieve sustainable growth.</p>
    </div>
    <img
        src="https://www.aonic.com/my/wp-content/uploads/2022/12/BI5A3565-1024x655.png.webp"
        alt=""
       
        className='lg:w-[700px] rounded-lg transition-transform duration-300 ease-in-out transform shadow-lg hover:scale-105 '
    />
</div>

    </div>
    
    </div>
  )
}

export default About