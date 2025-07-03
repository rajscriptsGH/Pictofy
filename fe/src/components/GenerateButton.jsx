import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const GenerateButton = () => {
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
        <motion.div
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='flex flex-col items-center justify-center mt-20'>
            <h1 className='text-3xl md:text-5xl font-medium'>See the magic. Try now</h1>
            <button onClick={onClickHandler}
                className='flex text-center gap-2 bg-blue-700 px-7 py-3 sm:px-12 psm:y-4 rounded-3xl mt-8 cursor-pointer hover:bg-blue-800 transition-all duration-500 hover:scale-x-105 '>
                <p>Generate images</p>
                <img className='w-6' src="/assets/star_group.png" alt="" />
            </button>
        </motion.div>
    )
}

export default GenerateButton
