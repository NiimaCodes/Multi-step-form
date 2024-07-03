import React from 'react'
import './Navbar.css'
import Logo from "../../assets/Preview.png"

function Navbar() {

  return (
    <nav className='nav'>
      <div className='container nav-container'>
        {/* nav logo */}
        <div className='nav-logo'>
          <img src={Logo} alt="logo" />
        </div>
        <ul className='nav-list'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Recources</a></li>
          <li><a href="#">Our Services</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <button className='btn-nav'>Sign Up</button>
      </div>

    </nav >

  )
}

export default Navbar
