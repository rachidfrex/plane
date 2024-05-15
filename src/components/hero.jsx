import React from 'react'
import airplaint from '../assets/images/Airplane.png'
import sky from '../assets/images/sky.jpg'
function Hero() {
  return (
    <div className='flex flex-col font-sofia justify-center items-center w-full'>
        <h1 className='flex text-5xl text-center text-bold justify-center items-center h-[200px] w-full' >
            Find And Book
            <br />
             A  Greact Experience
        </h1>
        <div className='w-full justify-center items-center flex flex-col'>
            <div className=' relative'>
                <img className='h-[360px] w-[1000px] rounded-full' src={sky} alt="airplaint" />
            </div>
            <div className=' absolute'>
                <img className='w-[1150px]' src={airplaint} alt="airplaint" />
            </div>
        </div>
    </div>
  )
}

export default Hero