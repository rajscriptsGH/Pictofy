import React from 'react'

const GenerateButton = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-3xl md:text-5xl font-medium'>See the magic. Try now</h1>
            <button className='flex text-center gap-2 bg-blue-700 px-7 py-3 sm:px-12 psm:y-4 rounded-3xl mt-8 cursor-pointer hover:bg-blue-800 transition-all duration-500 hover:scale-x-105 '>
                <p>Generate images</p>
                <img className='w-6' src="/assets/star_group.png" alt="" />
            </button>
        </div>
    )
}

export default GenerateButton
