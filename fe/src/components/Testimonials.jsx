import React from 'react'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='mt-20 flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center mb-12'>
                <h1 className='text-3xl lg:text-5xl font-medium mb-3'>Customer testimonials</h1>
                <p className='font-light lg:text-2xl'>What our users are saying</p>
            </div>
            <div className='flex flex-col md:flex-row gap-5'>
                <div className='text-center flex flex-col items-center gap-2 border px-10 py-3 rounded-xl hover:border-sky-500 max-w-[300px] transition-all duration-300 hover:scale-105'>
                    <img className='h-[85px] rounded-full' src="assets/sample1.png" />
                    <p>Graphic Designer</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
                <div className='text-center flex flex-col items-center gap-2 border px-10 py-3 rounded-xl hover:border-sky-500 max-w-[300px] transition-all duration-300 hover:scale-105'>
                    <img src="assets/profile_img_2.png" />
                    <p>Content Creater</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
                <div className='text-center flex flex-col items-center gap-2 border px-10 py-3 rounded-xl hover:border-sky-500 max-w-[300px] transition-all duration-300 hover:scale-105'>
                    <img src="assets/profile_img_1.png" />
                    <p>Co-founder</p>
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>I've been using imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Testimonials
