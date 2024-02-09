import React from 'react'
import './Services.css'
import home_img from './Assets/Home.JPG'
import education from './Assets/Education.JPG'
import day_care from './Assets/Day-Care.JPG'
import skills from './Assets/Skills-development.JPG'
import health from './Assets/health.JPG'
import disaster from './Assets/disaster-relief.JPG'

const Services = () => {
  return (
      <div>
        <h1 className='heading1'>Services</h1>
        <p className='heading-text'>Our team of care taker and volunteers make
             sure that proper services are delivered to
             children.
        </p>
       
       
        <div className='all-services'>
            <div>
                <img src={home_img} alt="" className='img' />
                <h3>Orphanage Home</h3>
                <p className='services-text'>
                    We provide shelter along with feed to
                    orphans, street children and make them
                    be a part of the family.
                </p>
                <button className='btn'>Enqure Now</button>
            </div>

            <div>
                <img src={education} alt="" className='img'/>
                <h3>Education</h3>
                <p className='services-text'>
                    We take care of educational needs of our 
                    children and make them well educated 
                    citizens of our country.
                </p>
                <button className='btn'>Enquire Now</button>
            </div>
            </div>

            <div className='all-services'>
            <div>
                <img src={day_care} alt="" className='img'/>
                <h3>Day Care</h3>
                <p className='services-text'>
                    We provide shelter along with feed to
                    orphans, street children and make them
                    be a part of the family.
                </p>
                <button className='btn'>Enquire Now</button>
            </div>

            <div>
                <img src={skills} alt="" className='img'/>
                <h3>Skills Development</h3>
                <p className='services-text'>
                    We provide shelter along with feed to
                    orphans, street children and make them
                    be a part of the family.
                </p>
                <button className='btn'>Enquire Now</button>
            </div>
            </div>
      
            <div className='all-services'>
            <div>
                <img src={health} alt="" className='img'/>
                <h3>Health</h3>
                <p className='services-text'>
                   We continue to address the health needs
                   underprivileged children through our 
                   health services.
                </p>
                <button className='btn'>Enquire Now</button>
            </div>

            <div>
                <img src={disaster} alt="" className='img'/>
                <h3>Disaster Relief</h3>
                <p className='services-text'>
                   Our team along with volunteers and 
                   docters are always first to respond
                   in the situation of natural disasters.
                </p>
                <button className='btn'>Enquire Now</button>
            </div>
            </div>
        
    </div>
  )
}

export default Services
