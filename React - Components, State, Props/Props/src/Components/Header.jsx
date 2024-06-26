import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
import logo from '../Image/logo.png'
import { PiShoppingCartFill } from "react-icons/pi";



const Header = () => {
  return (
    <>
      <header>
        <div className='menu-frame'>
          <div className='test-menu'>
            <img src={logo} alt="company logo" className='logo' />
            <nav>
              <ul className='menus'>
                <li><NavLink to={''}>home</NavLink></li>
                <li><NavLink to={'about'}>about</NavLink></li>
                <li><NavLink to={'menu'}>menu</NavLink></li>
                <li><NavLink to={'blog'}>blog</NavLink></li>
                <li><NavLink to={'reserve'}>reserve</NavLink></li>
                <li><NavLink to={'shop'}>shop</NavLink></li>
                <li><NavLink to={'contact'}>contact</NavLink></li>
              </ul>
            </nav>
            <div className='menu-right'>
              <ul >
                <li><button className='reservation'>reservation</button></li>
                <li className='cart'><PiShoppingCartFill /></li>
              </ul>
            </div>
          </div>

        </div>

      </header>
    </>
  )
}

export default Header
