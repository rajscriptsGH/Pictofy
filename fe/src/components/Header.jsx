import React from 'react'

const Header = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center justify-center mt-12 gap-2 border border-blue-300 w-[300px] sm:w-[400px] px-4 py-2 rounded-2xl cursor-pointer hover:border-sky-500'>
                <p> Best text to image generator</p>
                <img src="/assets/star_icon.svg" alt="" />
            </div>

            <h1 className='text-center mt-10 max-w-[300px] sm:max-w-[600px] text-4xl sm:text-7xl  mx-auto '>Turn text to <span className='text-red-500'>image</span>, in seconds.</h1>

            <p className='text-center mt-6 max-w-[350px] sm:max-w-[560px]'>Unleash your creativity with AI. Turn your imagination into visual art in seconds just type, and watch the magic happen.</p>

            <button className='flex text-center gap-2 bg-blue-800 px-7 py-3 sm:px-12 psm:y-4 rounded-3xl mt-8 cursor-pointer hover:bg-blue-700 transition-all duration-500 hover:scale-x-105 '>
                <p>Generate images</p>
                <img className='w-6' src="/assets/star_group.png" alt="" />
            </button>

            

        </div>
    )
}

export default Header
