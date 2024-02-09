import React from 'react'
import './About.css'
import about from './Assets/AboutUs.JPG'

const About = () => {
  return (
    <div>
      <h2 className='heading1'>About Us</h2>
      <img src={about} alt="" className='about_img'/>
      <p className='heading-text'>
        We, Ebenezer Orphenage Center are situated at
        Giyani, Limpopo, RSA. We provide orphanage services
        to orphan, street children who belongs to different 
        family backgrounds, some do not have parent, and 
        some of their mothers died at an early age. And the 
        program aims at making them feels the same. 
      </p>
    </div>
  )
}

export default About
