import React from 'react'

const Header = () => {

    const navItems = [
        {
            id: 1,
            name: 'Home',
            url: '',
        },
        {
            id: 2,
            name: 'About',
            url: '',
        },
        {
            id: 3,
            name: 'Classes',
            url: '',
        },
        {
            id: 4,
            name: 'Trainers',
            url: '',
        },
        {
            id: 5,
            name: 'Pricing',
            url: '',
        },
        {
            id: 6,
            name: 'Contact',
            url: '',
        },
    ]

  return (
    <div className='bg-gray text-white flex items-center justify-between p-5'>
        <div className='text-4xl font-bold'>
            Pulse<span className='color-green'>Fit</span>
        </div>
        <div className='flex justify-center items-center'>
            <div className='flex text-xl font-bold gap-5'>
                {navItems.map((item, index)=>(
                    <div key={index} className={`pr-5 ${index!=navItems.length-1 && 'border-r'} border-r-gray-300 cursor-pointer`}>
                        {item.name}
                    </div>
                ))}
            </div>
            <div className='bg-green text-black rounded py-1 px-5 ml-40'>
                Join Now
            </div>
        </div>
    </div>
  )
}

export default Header