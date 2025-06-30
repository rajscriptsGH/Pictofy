import React, { useState } from 'react'

const Result = () => {
    const [image, setImage] = useState('/assets/sample1.png')
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState()

    const onSubmitHandler = async (e) => {

    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center gap-4'>
            <div className='mt-7'>
                <div className='relative'>
                    <img className='h-[250px] rounded-lg' src={image} />
                    <spam className={`absolute bottom-0 left-0 bg-blue-400 h-1 ${loading ? 'w-full rounded-full transition-all duration-[10s]' : 'w-0'}`} ></spam>
                </div>
                <p className={!loading ? 'hidden' : ''} >Loading....</p>
            </div>

            {isImageLoaded
                ?
                <div className='flex justify-center items-center mt-5 gap-3'>
                    <p onClick={() => { setIsImageLoaded(false) }}
                        className='bg-orange-700 px-5 py-2 rounded-full cursor-pointer transition-all duration-500 hover:scale-105'>Generate Another</p>
                    <a href={image} download className='bg-green-700 px-12 py-2 rounded-full cursor-pointer transition-all duration-500 hover:scale-105'>Dowload</a>
                </div>

                :
                <div className='flex  w-full max-w-xl bg-slate-700 text-white rounded-full px-4 py-2 mt-3'>
                    <input
                        onChange={e => setInput(e.target.value)} value={input}
                        className='flex-1 bg-transparent outline-none px-4 py-2 placeholder-white'
                        type="text"
                        placeholder='Describe what you want to generate' />
                    <button type='submit' className=' bg-blue-700 px-6 sm:px-10 py-2 rounded-full whitespace-nowrap transition-all duration-500 hover:scale-105'>Generate</button>
                </div>


            }




        </form>
    )
}

export default Result
Result