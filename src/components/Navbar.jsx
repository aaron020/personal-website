import React from 'react'
import Logo from '../assests/logo1.png'
import {FaBars, FaTimes} from 'react-icons/fa'

export const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt='Logo Image' style={{ width: '50px' }} />
      </div>

        {/* menu */}
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Contact</li>
            </ul>
        </div>

        {/* Hamburger Menu */}
        <div class='hidden'>
            <FaBars/>
        </div>

        <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
        {/* Mobile Menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

