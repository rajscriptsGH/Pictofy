import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Link, useNavigate } from 'react-router-dom'


const Navbar = () => {
    const { user } = useContext(AppContext)
    const navigate = useNavigate()

    return (
        <div className='max-w[1000px] min-w[400px] bg-transparent border py-2 px-3 lg:px-8 rounded-full z-[999] opacity-100 flex justify-between hover:border-sky-600'>

            <Link className='flex items-center gap-2' to='/'>
                <img className='lg:w-10 md:w-8' src="/assets/favicon_red.svg" />
                <span className='font-bold lg:text-2xl'>Pictofy</span>
            </Link>

            {
                user ?
                    <div className='flex items-center gap-4 md:gap-7 transition-all duration-700'>
                        <div onClick={() => navigate('/buy')} className='flex items-center gap-3 bg-blue-300 px-2 py-2 lg:py-3 rounded-2xl hover:bg-blue-200 cursor-pointer transition-all duration-500'>
                            <img src="/assets/credit_star.svg" alt="" />
                            <p className='text-black'>Credits left: 0</p>
                        </div>
                        <p className='hidden sm:block'>Hii Razz</p>
                        <div className='cursor-pointer relative group'>
                            <img className='w-10 lg:w-12 group' src="/assets/profile_icon.png" />
                            <div className='absolute top-12 right-0 hidden group-hover:block'>
                                <button className='bg-blue-300 px-8 py-3 rounded-2xl text-black'>Logout</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex gap-2 lg:gap-12 items-center cursor-pointer'>
                        <p onClick={() => navigate('/buy')} className='lg:text-2xl cursor-pointer'>Pricing</p>
                        <div className='flex items-center justify-center h-10 lg:h-12  bg-slate-950 hover:bg-slate-800 px-12 lg:px-20  rounded-xl'>
                            <p className='text-center font-semibold '>Login</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default Navbar
Navbar