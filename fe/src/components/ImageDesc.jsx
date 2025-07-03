import React from 'react'
import { motion } from 'framer-motion'

const ImageDesc = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className=' mt-20 flex flex-col items-center '>
            <div className='flex flex-col items-center mb-12'>
                <h1 className='text-4xl lg:text-5xl font-medium mb-4'>Create AI Images</h1>
                <p className='font-light lg:text-2xl'>Turn your Imagination into Visuals</p>
            </div>
            <div className='flex items-center justify-center flex-col md:flex-row gap-5 md:gap-12'>
                <img className='h-[260px] w-[250px] lg:h-[350px] lg:w-[300px] rounded-xl transition-all duration-300 hover:scale-105' src="/assets/sample2.jpg" />
                <div className='flex flex-col items-center gap-3 max-w-[400px] lg:max-w-[650px]'>
                    <h1 className='text-3xl md:text-4xl'>Introducing the AI-Powered Text to Image Generator</h1>
                    <p className='font-light mt-3'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                    <p className='font-light mt-3 hidden sm:block'>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
                </div>
            </div>
        </motion.div>
    )
}

export default ImageDesc
