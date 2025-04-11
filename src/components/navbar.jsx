import React from 'react'
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import logo from "../assets/Benzifi-logo.png"
import dubaiFlag from "../assets/dubai-flag.png"
const Navbar = () => {
  return (
    <div className='menu-wrapper'>
    <div className='nav'>
        <div className='left-side'>
            <img src={logo} alt="logo" />
            <div className='proud-title'>
                Proudly made in UAE <img src={dubaiFlag} className='dubai-flag' height="20px"alt='flag'/>
            </div>
        </div>
        <div className='right-side'>
            <div className='link-wrapper'>
                <ul className='link-list'>
                    <li className='list-item'><Link to="/events">Events</Link></li>
                    <li className='list-item'><Link to="/about-us">About Us</Link></li>
                    <li className='list-item'><Link to="/features">Features</Link></li>
                    <li className='list-item'><Link to="/gears">GEARS</Link></li>
                </ul>
            </div>
            <Link className='join-button'>Get the app</Link>
        </div>
    </div>
    </div>
  )
}

export default Navbar