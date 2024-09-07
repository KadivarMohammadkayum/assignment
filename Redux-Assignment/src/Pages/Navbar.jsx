import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <header>
            <nav className='bg-black text-white'>
        
                <div>
                    <ul className='inline-flex space-x-16'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contect'>Contect Us</NavLink></li>
                        <li><NavLink to='/services'>Services</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
    </>
  )
}

export default Navbar