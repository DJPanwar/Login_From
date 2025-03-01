import React, { useState, useEffect } from 'react';
import image from './assets/image.jpg';
import loginImage from './assets/sign.jpg';
import google from './assets/google.png';
import apple from './assets/apple.png';
import { motion, AnimatePresence } from 'framer-motion';

export function Login() {
    const [isLogin, setIsLogin] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='bg-[#575268] min-h-screen flex items-center justify-center overflow-hidden'>
            <div className='relative flex flex-col md:flex-row w-full max-w-3xl bg-[#2d2638] min-h-screen md:min-h-0 md:h-[400px] md:max-h-[600px] md:rounded-xl flex-grow rounded-xl shadow-md overflow-hidden shadow-[#332e3d] m-6'>

                {/* Left Image Section */}

                <motion.div
                    className="md:w-1/2 p-4 flex flex-col justify-center relative"
                    initial={isMobile ? { opacity: 0, y: 10 } : { x: 0 }}
                    animate={isMobile ? { opacity: 1, y: 0 } : { x: isLogin ? "100%" : "0%" }}
                    exit={isMobile ? { opacity: 0, y: -10 } : { x: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={isLogin ? 'loginImage' : 'signupImage'}
                            src={isLogin ? loginImage : image}
                            alt="Friskence AI"
                            className="w-full h-[200px] object-cover rounded-sm md:h-full md:rounded-xl"
                            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0.5, scale: 1.02 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1 }}
                            exit={isMobile ? { opacity: 0, y: -10 } : { opacity: 0.5, scale: 1.02 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>

                    {/* Animated Text */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'loginText' : 'signupText'}
                            className="absolute top-0 left-0 md:left-[-18px] w-full h-full flex flex-col justify-between p-6 text-white"
                            initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: 0 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 10 }}
                            exit={isMobile ? { opacity: 0, y: -10 } : { opacity: 0, x: 0 }}
                            transition={{ duration: 0.1, ease: 'easeInOut' }}
                        >
                            <motion.h2
                                className="text-sm font-semibold pt-2"
                                initial={isMobile ? { opacity: 0, y: -10 } : { opacity: 0, x: 0 }}
                                animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 10 }}
                                exit={isMobile ? { opacity: 0, y: -10 } : { opacity: 0, x: 0 }}
                                transition={{ duration: 0.1, ease: 'easeInOut', delay: 0.1 }}
                            >
                                Friskence <span className="text-purple-800">AI</span>
                            </motion.h2>

                            <motion.p
                                className="text-sm font-medium flex justify-center text-center pb-2"
                                initial={isMobile ? { opacity: 0, y: 10 } : { opacity: 0, x: -12 }}
                                animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, x: 10 }}
                                exit={isMobile ? { opacity: 0, y: -10 } : { opacity: 0, x: -12 }}
                                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                            >
                                {isLogin ? "Frame Life's" : "Capturing Moments,"} <br /> {isLogin ? "Best Moments" : "Creating Memories"}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>



                {/* Right Section with Form */}
                
                <motion.div
                    className="w-full md:w-1/2 flex items-center justify-center relative"
                    initial={isMobile ? {} : { x: 0 }}
                    animate={isMobile ? {} : { x: isLogin ? "-100%" : "0%" }}
                    transition={isMobile ? {} : { duration: 1, ease: "easeInOut" }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'loginForm' : 'signupForm'}
                            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, y: 6 }}
                            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                            exit={isMobile ? { opacity: 0, y: -20 } : { opacity: 0, y: -6 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className='absolute top-1 md:top-auto pr-6 pl-6 md:pr-17 md:pl-17 flex flex-col justify-center text-white'
                        >
                            <h1 className='font-bold text-[23px]'>
                                {isLogin ? "Welcome Back!" : "Create an Account"}
                            </h1>
                            <p className='mt-2 text-[9px] text-gray-400 cursor-pointer' onClick={toggleForm}>
                                {isLogin ? "New User? " : "Already have an account? "}
                                <span className='text-[#b08bf8] cursor-pointer'>
                                    {isLogin ? "Sign Up" : "Log in"}
                                </span>
                            </p>

                            <form className="mt-6">
                                {!isLogin && (
                                    <motion.input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full bg-[#3b364c] p-2 rounded-sm text-[10px] text-white mb-2 focus:outline-none"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-[#3b364c] p-2 rounded-sm text-[10px] text-white mb-2 focus:outline-none"
                                />
                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full bg-[#3b364c] p-2 rounded-sm text-[10px] text-white mb-2 focus:outline-none"
                                />

                                <div className="flex items-center mt-2 justify-center md:justify-normal">
                                    <input type="checkbox" id="terms" className="mr-2" />
                                    <label htmlFor="terms" className="text-gray-400 text-[8px]">
                                        I agree to the <a href="#" className="text-purple-400">Terms and Conditions</a>
                                    </label>
                                </div>

                                <button className='bg-[#6d53b4] rounded-sm text-white py-1 mt-4 w-full text-[15px] font-medium hover:bg-[#612bff]'>
                                    {isLogin ? "Log In" : "Create Account"}
                                </button>

                                <div className="flex items-center my-4">
                                    <div className="flex-grow border-t border-gray-400"></div>
                                    <span className="px-2 text-gray-400 text-[12px]"> {isLogin ? "Or Login with" : "Or Register with"}</span>
                                    <div className="flex-grow border-t border-gray-400"></div>
                                </div>

                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-400 px-3 py-1 rounded-sm text-white text-[10px] w-[80px]">
                                        <img className='h-3' src={google} alt="Google" />Google
                                    </button>
                                    <button className="flex items-center justify-center gap-2 bg-transparent border border-gray-400 px-3 py-1 rounded-sm text-white text-[10px] w-[80px]">
                                        <img className='h-3' src={apple} alt="Apple" />Apple
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
