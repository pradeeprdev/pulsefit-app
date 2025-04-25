import React from 'react'
import Training1 from '../assets/images/training1.png'
import Training2 from '../assets/images/training2.png'
import Training3 from '../assets/images/training3.png'
import Training4 from '../assets/images/training4.png'
import Training5 from '../assets/images/training5.png'
import Training6 from '../assets/images/training6.png'
import Image from 'next/image'

const Trainings = () => {
    const trainings = [
        {
            name: 'Personal Training',
            description: 'Get customized workouts and one-on-one coaching from our expert trainers to achieve your specific fitness goals.',
            image: Training1
        },
        {
            name: 'Group Fitness Classes',
            description: 'Join our dynamic and motivating group classes, ranging from yoga to high-intensity interval training, designed for all fitness levels.',
            image: Training2
        },
        {
            name: 'Nutritional Guidance',
            description: 'Nutrition plans and advice from our certified nutritionists to complement your fitness routine and enhance your results.',
            image: Training3
        },
        {
            name: 'Wellness Programs',
            description: 'Wellness programs that include stress management, mental well-being, and recovery techniques to support your overall health.',
            image: Training4
        },
        {
            name: 'Cardio Workouts',
            description: 'Boost your endurance and cardiovascular health with our variety of cardio classes and equipment, tailored to all fitness levels.',
            image: Training5
        },
        {
            name: 'Strength Training',
            description: 'Build muscle and increase strength with our structured strength training programs and state-of-the-art weightlifting equipment.',
            image: Training6
        },
    ]
  return (
    <div className='bg-black p-5'>
        <p className='text-5xl font-bold text-center text-white mb-20'>Explore Our Dynamic Training Programs</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-34 text-white">
            {trainings.map((item, index) => (
                <div key={index} className="p-4 rounded bg-gray">
                <div>
                    <Image src={item.image} alt="training" className="w-full h-48 object-cover rounded" />
                </div>
                <p className="text-2xl font-semibold mt-10">{item.name}</p>
                <p className="text-md py-5">{item.description}</p>
                <div className="bg-green text-black text-center mt-3 py-2 rounded cursor-pointer hover:bg-green-600 transition">
                    View Training
                </div>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Trainings