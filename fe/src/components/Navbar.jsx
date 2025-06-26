import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='bg-slate-700 py-2 px-2 lg:px-8 rounded-lg z-[999] opacity-100 flex justify-between'>

            <Link className='flex items-center gap-3' to='/'>
                <img className='lg:w-10 md:w-8' src="/assets/favicon_red.svg" />
                <span className='font-bold lg:text-2xl'>Pictofy</span>
            </Link>


            <div className='flex gap-3 lg:gap-12 items-center cursor-pointer'>
                <p className='lg:text-2xl cursor-pointer'>Pricing</p>
                <div className='flex items-center justify-center h-10 lg:h-12  bg-slate-950 hover:bg-slate-800 px-16  rounded-xl'>
                    <p className='text-center font-semibold '>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
Navbar