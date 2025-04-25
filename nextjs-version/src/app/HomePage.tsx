import Facilities from '@/components/Facilities'
import Hero from '@/components/Hero'
import Review from '@/components/Review'
import Trainers from '@/components/Trainers'
import Trainings from '@/components/Trainings'
import Welcome from '@/components/Welcome'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <Hero />
      <Facilities />
      <Welcome />
      <Trainings />
      <Trainers />
      <Review />
    </>
  )
}

export default HomePage