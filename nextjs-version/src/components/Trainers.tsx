import React from 'react'
import Trainer1 from '../assets/images/trainer1.png'
import Trainer2 from '../assets/images/trainer2.png'
import Trainer3 from '../assets/images/trainer3.png'
import Image from 'next/image'
import { Instagram, LinkedIn, YouTube } from '@mui/icons-material';

const Trainers = () => {

    const trainerItems = [
        {
            name: 'Rajesh',
            designation: 'Head Personal Trainer',
            image: Trainer1
        },
        {
            name: 'shyam',
            designation: 'Senior Fitness Instructor',
            image: Trainer2
        },
        {
            name: 'Sheela',
            designation: 'Yoga and Wellness Instructor',
            image: Trainer3
        },
    ]


    return (
        <div className='p-10 text-white bg-black text-center'>
            <p className='text-5xl font-bold'>Meet Our <span className='color-red'>Trainers</span></p>
            <p className='text-2xl md:px-72 mt-5'>Get to Know the Passionate and Skilled Professionals Dedicated to Helping You Achieve Your Fitness Goals</p>
            <div className="grid bg-black text-start text-white grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
                {trainerItems.map((trainer, index) => (
                    <div key={index} className="relative group rounded overflow-hidden shadow-lg">
                        <Image
                            src={trainer.image}
                            alt={trainer.name}
                            className=" h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black/85 p-4">
                            <p className="text-2xl font-semibold">{trainer.name}</p>
                            <p className="text-lg color-gray">{trainer.designation}</p>
                            <div className="flex gap-4 mt-3 text-2xl">
                                <Instagram sx={{ color: '#E1306C', cursor: 'pointer' }} />
                                <LinkedIn sx={{ color: '#0077b5', cursor: 'pointer' }} />
                                <YouTube sx={{ color: '#FF0000', cursor: 'pointer' }} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trainers