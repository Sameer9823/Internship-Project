import React from 'react'
import video1 from '../../assets/Demo1.mp4'
import video2 from '../../assets/Demo2.mp4'
import video3 from '../../assets/Demo3.mp4'
import video4 from '../../assets/Demo4.mp4'

function Demo() {
  return (
    <div>
        <div className='pt-[8rem]'>
          <h1 className='text-2xl font-bold text-center'>Demo</h1>
        </div>
        <div>
          <div className='flex justify-center gap-[4rem] flex-wrap mt-[3rem] px-4'>
        
            <div className='border-sky-500 flex justify-center'>

            <video className='h-[400px]' controls controlsList='nodownload' src={video2}></video>
            </div>
            <div className='border-sky-500 flex justify-center'>

            <video className='h-[400px]' controls controlsList='nodownload' src={video3}></video>
            </div>
            <div className='border-sky-500 flex justify-center'>

            <video className='h-[400px]' controls controlsList='nodownload' src={video4}></video>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Demo