import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../Images/logo-dark.png'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md"
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className='text-zinc-950'>
            {/* Top Header */}
            <div className='flex my-3 container align-baseline justify-between text-xs'>
              <ul className='flex gap-5 font-semibold'>
                <li><NavLink to={'about'}>About Us</NavLink></li>
                <li><NavLink to={'account'}>My Account</NavLink>
                </li>
                <li><NavLink to={'wishlist'}>Wishlist</NavLink></li>
                <li className='font-light'>| We deliver to you every day from <span className='text-red-700 font-semibold'>7:00 to 23:00</span></li>
              </ul>
              <ul className='flex gap-4'>
                <li>English</li>
                <li>USD</li>
                <li>Order Tracking</li>
              </ul>
            </div>
            <hr />
            

            {/* Middel Header */}
            <div className='flex container justify-between py-4 align-baseline mx-auto'>
              
              <ul className='flex gap-3 text-xs'>
              <img src={logo} alt="" className='h-10' />
                <li className='flex align-baseline'><CiLocationOn className='mx-auto align-baseline text-5xl bg-slate-200 py-2 rounded-full me-2'/><p>Deliver to <b><br />all</b></p></li>
                <li><input type="text" placeholder='Search for products, categories or brands...' className='w-full bg-slate-100 px-5 py-4 border-none rounded-md text-white placeholder-black '/></li>
              </ul>
              <ul className='flex gap-3'>
                <li className=''><NavLink><MdOutlinePersonOutline className='mx-auto text-2xl'/>Account</NavLink></li>
                <li><NavLink><FaRegHeart className='mx-auto text-xl'/>Wishlist</NavLink></li>
                <li><NavLink><FaCartShopping className='mx-auto text-xl'/>Your Cart</NavLink></li>
              </ul>
            </div>
            <hr />

            {/* Main Header */}
            <div className='flex gap-4 container py-3 justify-between'>
              <ul className='flex gap-5 font-semibold'>
                <li><NavLink to={''}>Home</NavLink></li>
                <li><NavLink to={'shop'}>Shop</NavLink></li>
                <li><NavLink to={'fruits'}>Fruits & Vegetables</NavLink></li>
                <li><NavLink to={'beverages'}>Beverages</NavLink></li>
                <li><NavLink to={'blog'}>Blog</NavLink></li>
                <li><NavLink to={'contact'}>Contact</NavLink></li>
              </ul>
              <ul className='flex gap-5 justify-items-end'>
                <li>Trending Products</li>
                <li>Almost Finished <span>SALE</span></li>
              </ul>
            </div>
            <hr className='mb-4' />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
