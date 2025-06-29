import React from 'react'

const Result = () => {
    return (
        <form action="#" className='flex flex-col items-center gap-4'>
            <div className='mt-7'>
                <div className='relative'>
                    <img className='h-[250px] rounded-lg' src="/assets/sample1.png" alt="" />
                    <spam className='absolute bottom-0 left-0 bg-blue-400 h-1 w-full rounded-full transition-all duration-[10s]'></spam>
                </div>
                <p>Loading....</p>
            </div>

            <div className='flex  w-full max-w-xl bg-slate-700 text-white rounded-full px-4 py-2 mt-3'>
                <input
                    className='flex-1 bg-transparent outline-none px-4 py-2 placeholder-white'
                    type="text"
                    placeholder='Describe what you want to generate' />
                <button type='submit' className=' bg-blue-700 px-6 sm:px-10 py-2 rounded-full whitespace-nowrap transition-all duration-500 hover:scale-105'>Generate</button>
            </div>

            <div className='flex justify-center items-center mt-5 gap-3'>
                <p className='bg-orange-700 px-5 py-2 rounded-full cursor-pointer transition-all duration-500 hover:scale-105'>Generate Another</p>
                <a className='bg-green-700 px-12 py-2 rounded-full cursor-pointer transition-all duration-500 hover:scale-105' href="#">Dowload</a>
            </div>

        </form>
    )
}

export default Result
Result