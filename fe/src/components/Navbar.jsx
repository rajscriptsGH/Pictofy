import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='bg-slate-700 py-3 px-2 lg:px-8 rounded-lg z-[999] opacity-100 flex justify-between'>

            <Link className='flex items-center gap-3' to='/'>
                <img className='lg:w-12 md:w-8' src="/assets/favicon_red.svg" />
                <span className='text-1xl lg:text-3xl md:text-2xl font-bold'>Pictofy</span>
            </Link>

            <div className='flex gap-3 lg:gap-8 items-center'>
                <p>Pricing</p>
                <div className='flex items-center justify-center h-10 lg:h-14  bg-slate-950 hover:bg-slate-800 px-16  rounded-xl'>
                    <p className='text-center'>Login</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
Navbar