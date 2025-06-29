import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='mt-32 flex justify-around items-center flex-col md:flex-row gap-5'>
            <div className='flex gap-20 items-center'>
                <div>
                    <Link className='flex items-center gap-2' to='/'>
                        <img className='lg:w-10 md:w-8' src="/assets/favicon_red.svg" />
                        <span className='font-bold lg:text-2xl'>Pictofy</span>
                    </Link>
                </div>
                <div className='lg:text-[20px]'>
                    <p>&copy; 2025 Pictofy. All rights reserved.</p>
                </div>
            </div>
            <div className='flex gap-5 '>
                <Link to={'https://x.com/rajscripts100x'}>
                    <img className='bg-sky-200 rounded-full h-[40px]' src="/assets/x.png" alt="" />
                </Link>
                <Link to={'/'}>
                    <img className='bg-sky-500 rounded-full h-[40px]' src="/assets/facebook_icon.svg" alt="" />
                </Link>
                <Link to={'/'}>
                    <img className='bg-red-700 rounded-full h-[40px]' src="/assets/instagram_icon.svg" alt="" />
                </Link>
            </div>
        </div>
    )
}

export default Footer
