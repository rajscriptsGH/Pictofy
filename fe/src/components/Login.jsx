import React from 'react'

const Login = () => {
    return (
        <div className='absolute top-0 left-0 right-0 bottom-0 z-9 backdrop-blur-sm bg-black/50 flex justify-center items-center'>
            <form className='bg-slate-200 text-black border px-8 sm:px-12 py-5 sm:py-10 rounded-2xl'>
                <img className='relative top-0 left-72 cursor-pointer' src="/assets/cross_icon.svg" />
                <div className='flex flex-col items-center gap-4 mb-5'>
                    <h1 className='text-3xl font-medium'>Sign up</h1>
                    <p>Welcome back!  Please sign in to continue</p>
                </div>
                <div>
                    <div className='flex flex-col items-center gap-2'>
                        <div className="relative w-full max-w-sm mb-4">
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
                        </div>

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
                <button className='bg-blue-600 text-white px-24 py-2 mt-2 rounded-2xl outline-none hover:bg-blue-500'>Create account</button>

                <p className='mt-5 text-red-600'>Don't have an account? <span className='text-blue-600 underline cursor-pointer hover:no-underline'>Sign up</span></p>
                <p className='mt-5'>Already have an account? <span className='text-blue-600 underline cursor-pointer hover:no-underline'>Login</span></p>
            </form>
        </div>
    )
}

export default Login
