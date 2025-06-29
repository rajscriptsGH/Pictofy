import React from 'react'
import Header from '../components/Header'
import HowItWorks from '../components/HowItWorks'
import ImageDesc from '../components/ImageDesc'
import Testimonials from '../components/Testimonials'
import GenerateButton from '../components/GenerateButton'

const Home = () => {
    return (
        <div>
            <Header />
            <HowItWorks />
            <ImageDesc />
            <Testimonials />
            <GenerateButton />
        </div>
    )
}

export default Home
Home