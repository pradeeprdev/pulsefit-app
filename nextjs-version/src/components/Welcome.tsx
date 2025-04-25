import React from 'react'
import Image from 'next/image'
import WelcomeWomenImg from '../assets/images/welcome_women.png'

const Welcome = () => {
  return (
    <div className='flex bg-black text-white p-20'>
      <div>
        <Image src={WelcomeWomenImg} alt='welcome' className='w-[30rem]' />
      </div>
      <div className='flex justify-center items-center pl-20'>
        <div>
          <p className='text-5xl font-bold'>Welcome to  Pulse<span className='color-green'>Fit</span></p>
          <p className='text-4xl mt-7 font-bold w-[55rem]'>Your Ultimate Destination for Strength and Wellness</p>
          <p className='text-sm mt-7'>Discover a place where fitness meets motivation. At Fitness Club, we provide state-of-the-art equipment, expert guidance, and a supportive community to help you achieve your health and wellness goals. Whether you're building strength, boosting endurance, or transforming your lifestyle, we're here to inspire your journey every step of the way</p>
        </div>
      </div>
    </div>
  )
}

export default Welcome