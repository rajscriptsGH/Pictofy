import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const BuyCredit = () => {
    const { user } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center mt-10'>
            <div className='flex flex-col items-center gap-8 mb-5'>
                <p className='border border-sky-200 px-12 py-2 rounded-full'>OUR PLAN</p>
                <h1 className='text-3xl'>Choose the plan</h1>
            </div>
            <div className='mt-4 flex flex-col md:flex-row gap-5 md:gap-10'>
                <div className='border px-5 md:px-10 py-5 md:py-7 flex flex-col items-start rounded-xl transition-all duration-300 hover:scale-105 gap-3'>
                    <img src="/assets/favicon_red.svg" />
                    <h1 className='font-medium'>Basic</h1>
                    <p className='font-light mb-3'>Best for personal use</p>

                    <p className=''><span className='text-2xl font-semibold'>$10</span> / 100 credits</p>
                    <button className='bg-black px-8 py-2 rounded-3xl'>{user ? 'Purchase' : 'Get Started'} </button>
                </div>
                <div className='border px-5 md:px-10 py-5 md:py-7 flex flex-col items-start rounded-xl transition-all duration-300 hover:scale-105 gap-3'>
                    <img src="/assets/favicon_red.svg" />
                    <h1 className='font-medium'>Advance</h1>
                    <p className='font-light mb-3'>Best for bussiness use</p>

                    <p className=''><span className='text-2xl font-semibold'>$30</span> / 100 credits</p>
                    <button className='bg-black px-8 py-2 rounded-3xl'>{user ? 'Purchase' : 'Get Started'}</button>
                </div>
                <div className='border px-5 md:px-10 py-5 md:py-7 flex flex-col items-start rounded-xl transition-all duration-300 hover:scale-105 gap-3'>
                    <img src="/assets/favicon_red.svg" />
                    <h1 className='font-medium'>Basic</h1>
                    <p className='font-light mb-3'>Best for enterprise use</p>

                    <p className=''><span className='text-2xl font-semibold'>$50</span> / 100 credits</p>
                    <button className='bg-black px-8 py-2 rounded-3xl'>{user ? 'Purchase' : 'Get Started'}</button>
                </div>
            </div>
        </div>
    )
}

export default BuyCredit
