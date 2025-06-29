import React from 'react'

const HowItWorks = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-20'>
            <div className='flex flex-col items-center mb-12'>
                <h1 className='text-3xl lg:text-5xl font-semibold mb-4'>How its Works</h1>
                <p className='font-light lg:text-2xl'>Transform Words into stunning images</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-5'>
                <div className='flex gap-5 items-center max-w-[500px] lg:max-w-[1000px] min-h-[120px] lg:min-h-[140px] border px-5 lg:px-12 py-2 lg:py-9 rounded-2xl shadow-xl text-left hover:border-sky-600'>
                    <img src="/assets/step_icon_1.svg" alt="" />
                    <div>
                        <h1 className='font-medium text-[18px]'>Describe Your Vision</h1>
                        <p className='font-extralight max-w-full'>"Type a phrase, sentence, or paragraph that describes the image you want to create."</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center max-w-[500px] lg:max-w-[1000px] min-h-[120px] lg:min-h-[140px] border px-5 lg:px-12 py-2 lg:py-9 rounded-2xl shadow-xl text-left hover:border-sky-600'>
                    <img src="/assets/step_icon_2.svg" alt="" />
                    <div>
                        <h1 className='font-medium text-[18px]'>Watch the Magic</h1>
                        <p className='font-extralight max-w-full'>"Our AI-powered engine will transform your text into a high-quality images in seconds"</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center max-w-[500px] lg:max-w-[1000px] min-h-[120px] lg:min-h-[140px] border px-5 lg:px-12 py-2 lg:py-9 rounded-2xl shadow-xl text-left hover:border-sky-600'>
                    <img src="/assets/step_icon_3.svg" alt="" />
                    <div>
                        <h1 className='font-medium text-[18px]'>Download & Share</h1>
                        <p className='font-extralight max-w-full'>"Instantly download your creation or share it with the world directly from our platform."</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWorks
