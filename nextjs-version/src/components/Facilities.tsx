import React from 'react'
import Facility1 from '../assets/images/facility_1.png'
import Facility2 from '../assets/images/facility_2.png'
import Facility3 from '../assets/images/facility_3.png'
import Image from 'next/image'

const Facilities = () => {
  const facilities = [
    { image: Facility1 },
    { image: Facility2 },
    { image: Facility3 },
  ]

  return (
    <div className="flex bg-gray justify-evenly items-center gap-6 flex-wrap py-8">
      {facilities.map((item, index) => (
        <div key={index} className="w-1/4 flex justify-center">
          <Image src={item.image} alt={`facility-${index}`} className="rounded-lg object-cover" />
        </div>
      ))}
    </div>
  )
}

export default Facilities
