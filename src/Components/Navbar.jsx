import React from 'react'
import './Navbar.css'
import menu from './Assets/menu.jpg'
import cancel from './Assets/cancel.PNG'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="app_navbar">
      <div className='app_navbar-logo'>
         <h3>ORPHANAGE</h3>
      </div>
      <ul className='app_navbar-links'>
          <li className="p_opensans"><a href="#home">Home</a></li>
          <li className="p_opensans"><a href="#about">About</a></li>
          <li className="p_opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className='app_navbar-smallcreen'>
          <img src={menu} alt="" className='menu-btn' color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>
          
          {toggleMenu && (
              <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
              <img src={cancel} alt="" className='overlay_close' color='#fff' fontSize={27} onClick={() => setToggleMenu(false)}/>
            <ul className='app_navbar-smallscreen_links'>
            <li className="p_opensans"><a href="#home">Home</a></li>
            <li className="p_opensans"><a href="#about">About</a></li>
            <li className="p_opensans"><a href="#contact">Contact</a></li>
            </ul>
            </div>
          )}
         
         
      </div>
    </nav>
  )
}

export default Navbar

