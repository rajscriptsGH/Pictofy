import React, { useContext } from 'react'
import {motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    function onClickHandler() {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div className='flex flex-col items-center'
            initial={{ opacity: 0.3, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div className='flex items-center justify-center mt-12 gap-2 border border-blue-300 w-[300px] sm:w-[400px] px-4 py-2 rounded-2xl cursor-pointer hover:border-sky-500'
                initial={{ opacity: 0, y: -25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
            >
                <p> Best text to image generator</p>
                <img src="/assets/star_icon.svg" alt="" />
            </motion.div>

            <motion.h1
                className='text-center mt-10 max-w-[300px] sm:max-w-[600px] text-4xl sm:text-7xl mx-auto'
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                Turn text to <span className='text-red-500'>image</span>, in seconds.
            </motion.h1>


            <motion.p className='text-center mt-6 max-w-[350px] sm:max-w-[560px]'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            >Unleash your creativity with AI. Turn your imagination into visual art in seconds just type, and watch the magic happen.</motion.p>

            <motion.button onClick={onClickHandler} className='flex text-center gap-2 bg-blue-700 px-7 py-3 sm:px-12 psm:y-4 rounded-3xl mt-8 cursor-pointer'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ default: { duration: 0.4 }, opacity: { delay: 0.8, duration: 1 } }}
            >
                Generate images
                <img className='w-6' src="/assets/star_group.png" alt="" />
            </motion.button>

            <motion.div className='flex items-center justify-center gap-2 mt-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                {[
                    "/assets/sample5.jpg",
                    "/assets/sample1.png",
                    "/assets/sample6.jpg",
                    "/assets/sample2.jpg",
                    "/assets/sample3.png",
                    "/assets/sample4.jpg",
                ].map((src, index) => (
                    <motion.img className='rounded-lg hover:scale-105 transition-all duration-500 cursor-pointer max-sm:w-12 mt-3'
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        src={src}
                        key={index}
                        width={70}
                        height={70}
                        style={{ width: "70px", height: "70px" }}
                        alt={`sample-${index + 1}`}
                    />
                ))}
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.8 }}
                className='text-center mt-4 font-light'
            >Generated images from imagify</motion.p>

        </motion.div>
    )
}

export default Header
