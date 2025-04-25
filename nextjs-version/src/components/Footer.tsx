import React, { Component } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { LocationOn, Phone, Email } from '@mui/icons-material';

const Footer = () => {

  const footerItems = [
    {
      name: 'Company',
      subItems: [
        {name: 'Home'},
        {name: 'About Us'},
        {name: 'Trainers'},
        {name: 'Testimonial'},
        {name: 'Contact Us'},
      ]
    },
    {
      name: 'Resources',
      subItems: [
        {name: 'Fitness Tools'},
        {name: 'Workout Videos'},
        {name: 'Mutrition Guides'},
        {name: 'FAQ'},
        {name: 'Success Stories'},
        {name: 'Membership'}
      ]
    },
    {
      name: 'Resources',
      subItems: [
        {name: 'Personal Training'},
        {name: 'Group Fitness Classes'},
        {name: 'Nutritional Guidance'},
        {name: 'Wellness Programs'},
        {name: 'Cardio Workouts'},
        {name: 'Strength Training'}
      ]
    }
  ]

  const contactItems = [
    {
      name: 'Madipakkam,Cheenai',
      icon: LocationOn
    },
    {
      name: '1234-56789',
      icon: Phone
    },
    {
      name: 'PulseFit@Gmail.com',
      icon: Email
    },
  ]

  return (
    <div className="grid grid-cols-12 text-white gap-4 bg-gray p-10 color-gray">
      <div className="col-span-5">
        <p className='text-4xl text-white font-bold'>Pulse<span className='color-green'>Fit</span></p>
        <p className='text-white'>Train. Transform.Transcend</p>
        <p className='mt-5'>Transform Your Body with PulseFit, Your Trusted Partner in Fitness. With Over <span className='color-red'>5 Years</span> of Experience, We Offer Expert Coaching, Tailored Workout Plans, and Comprehensive Nutritional Guidance. <span className='color-orange'>Join Our Community</span> and Start Your Journey Towards a Healthier, Stronger You. Ready to Make a Change?</p>
        <div className='flex text-white mt-5 justify-evenly text-2xl'>
          <FacebookIcon fontSize='large' />
          <InstagramIcon fontSize='large'/>
          <XIcon fontSize='large'/>
          <YouTubeIcon fontSize='large'/>
        </div>
      </div>
      {footerItems.map((item, index)=>(
      <div key={index} className="col-span-1 rounded">
        <p className='color-red text-xl font-bold'>{item.name}</p>
        {item.subItems.map((subItem, index2)=>(
          <p key={index2} className='mt-5'>{subItem.name}</p>
        ))}
      </div>
      ))}
      <div className="col-span-4  px-20">
        <p className='color-orange font-bold text-xl'>Contact Us</p>
        {contactItems.map((item, index)=>(
          <div key={index} className='flex items-center mt-5'>
            <item.icon fontSize='medium' style={{color: 'white'}} />
            <p className='pl-2'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Footer