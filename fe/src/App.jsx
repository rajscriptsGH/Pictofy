import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import Result from './pages/Result'

const App = () => {
  return (
    <div className='px-5 sm:px-10 md:px-15 lg:px-32 min-h-screen bg-gradient-to-br from-[#04030e] via-[#1a0ea1] to-[#050511] text-white custom-stars'>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<BuyCredit />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
