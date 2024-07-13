import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <header className='bg-blue-700 text-white px-16'>
                <nav className='container mx-auto flex justify-between py-4'>
                    <div className='text-3xl font-bold'>
                        <NavLink to='/'  className={({ isActive }) => isActive ? " text-[#dfe20b]" : " hover:text-indigo-900"}>Crud</NavLink>
                    </div>
                    <div>
                        <ul className='flex space-x-6 font-semibold text-xl items-center'>
                            <li><NavLink to='/input' className={({ isActive }) => isActive ? " text-[#fff] bg-black py-2 px-3 rounded-md" : " hover:text-indigo-900"}>Input Data</NavLink></li>
                            <li><NavLink to='/manage' className={({ isActive }) => isActive ? " text-[#fff] bg-black py-2 px-3 rounded-md"  : " hover:text-indigo-900"}>Manage Data</NavLink></li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar
