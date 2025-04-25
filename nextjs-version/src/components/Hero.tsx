import React from 'react'
import HeroModel from '../assets/images/hero_model.png'
import PlayIcon from '../assets/images/play_icon.png'
import Image from 'next/image'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Hero = () => {
  return (
    <>
        <div className='flex justify-between bg-black text-lg text-white pt-10'>
            <div className='w-1/2 flex justify-center items-center'>
                <div className='p-20'>
                    <p className='text-5xl font-bold mt-5'>Become Stronger Than Ever</p>
                    <p className='mt-5'>Join PulseFit today to improve your well-being and transform your body and mind through guided workouts.</p>
                    <div className='mt-5 flex'>
                        <div className='flex items-center bg-green text-black rounded px-7 py-2 cursor-pointer'>
                            <p>Get Started</p>
                            <ArrowForwardIosIcon fontSize='small' className='ml-1' />
                        </div>
                        <div className='flex items-center ml-10 cursor-pointer'>
                            <div className=''>
                                <Image src={PlayIcon} alt="Hero model" className='w-8 h-8'  />
                            </div>
                            <p className='px-2'>Watch Demo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center'>
                <Image src={HeroModel} alt="Hero model"/>
            </div>
        </div>
    </>
  )
}

export default Hero