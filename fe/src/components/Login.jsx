import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Login = () => {
    const [state, setState] = useState('Login')
    const { setShowLogin } = useContext(AppContext)

    useEffect(() => {
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [])

    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-99999 backdrop-blur-sm bg-black/50 flex justify-center items-center'>
            <motion.form
                initial={{ opacity: 0.2, y: 50 }}
                transition={{ duration: 0.3 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className='relative bg-slate-200 text-black border px-8 sm:px-12 py-5 sm:py-10 rounded-2xl'>
                <img onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' src="/assets/cross_icon.svg" />

                <div className='flex flex-col items-center gap-4 mb-5'>
                    <h1 className='text-3xl font-medium'>{state}</h1>
                    <p>{state === 'Login' ?
                        'Welcome back!  Please sign in to continue'
                        :
                        'Welcome!! Please signup to continue'
                    }</p>
                </div>
                <div>
                    <div className='flex flex-col items-center gap-2'>
                        {state !== 'Login' && <div className="relative w-full max-w-sm mb-4">
                            <img
                                src="/assets/profile_icon.png"
                                alt="profile"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6"
                            />
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                className="pl-12 pr-4 py-3 w-full rounded-3xl outline-none border focus:ring-2 focus:ring-blue-500"
                            />
                        </div>}

                        <div className="relative w-full max-w-sm mb-4">
                            <img
                                src="/assets/email_icon.svg"
                                alt="email"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 "
                            />
                            <input
                                type="email"
                                placeholder="Email id"
                                required
                                className="pl-12 pr-4 py-3 w-full rounded-3xl outline-none border focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div className="relative w-full max-w-sm">
                            <img
                                src="/assets/lock_icon.svg"
                                alt="lock"
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 "
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="pl-12 pr-4 py-3 w-full rounded-3xl outline-none border focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                    </div>
                </div>
                <p className='mt-8  text-violet-700 cursor-pointer hover:underline'>Forgot Password?</p>
                <button className='bg-blue-600 text-white px-32 py-2 mt-2 rounded-2xl outline-none hover:bg-blue-500'>{state === 'Login' ? "Login" : 'Sign Up'}</button>

                {state === 'Login'
                    ?
                    <p
                        className='mt-5 text-red-600'>Don't have an account? <span className='text-blue-600 underline cursor-pointer hover:no-underline'
                            onClick={() => setState("Sign Up")}
                        >Sign up</span></p>
                    :
                    <p className='mt-5'>Already have an account? <span className='text-blue-600 underline cursor-pointer hover:no-underline' onClick={() => setState("Login")}>Login</span></p>
                }
            </motion.form>
        </div>
    )
}

export default Login
