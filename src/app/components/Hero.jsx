'use client'
import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Button from './btn/Button'
import { GoDownload } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Hero() {
    motion
    return (
        <div id='top' className=' relative container py-5 md:py-10 lg:py-15 grid grid-cols-1 gap-10 lg:grid-cols-2'>
            <span className='hidden md:block animate-bounce -z-10 absolute lg:top-[50%] md:top-[25%] md:left-[65%] lg:left-[46%] transform -translate-[50%]'>
                <svg width="365" height="250" xmlns="http://www.w3.org/2000/svg">
                    <text className='dark:fill-dark fill-[#FBFAFE] start-2 stroke-[rgba(126,74,231,0.5)]' x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="180" fontFamily="Arial, sans-serif" fontWeight="bold" fill="#000">
                        HEY
                    </text>
                </svg>
            </span>
            <div className='flex flex-col gap-7.5 lg:gap-10 py-5.5'>
                <div className='flex flex-col gap-3 lg:gap-5 text-Text dark:text-White font-bold'>
                    <h2 className='text-[20px] md:text-2xl lg:text-3xl'>I am Rakib</h2>
                    <h1
                        className='text-3xl md:text-4xl lg:text-5xl text-Text2 flex flex-col'>Front-End Web
                        <span>
                            D
                            <Typewriter words={['eveloper.']} loop={true} cursor cursorColor='_' typeSpeed={80} delaySpeed={1000} deleteSpeed={50} />
                        </span></h1>
                    <p className='max-w-[400px] font-normal text-[14px] md:text-[16px] lg:text-[18px]'>"Frontend developer with expertise in React, Next.js, and building responsive, modern web interfaces focused on great user experience."</p>
                </div>
                <div className='flex items-center gap-3'>
                    <a href='/pdf/Rakib.pdf' download>
                        <Button className=' dark:bg-dark bg-white border border-primary text-Text2  hover:text-White hover:bg-primary transition-all duration-300' btnName='download cV' icon={<GoDownload />} />
                    </a>
                    <a href="https://github.com/MRP-rakib" target='_blank' className=' flex items-center justify-center dark:bg-dark text-Text2 hover:bg-primary hover:text-White text-[20px] transition-colors duration-800 ease-in-out border w-10 h-10 rounded-full border-primary'>
                        <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/mdrakib260/" target='_blank' className=' flex items-center justify-center dark:bg-dark text-Text2 hover:bg-primary hover:text-White text-[20px] transition-colors duration-800 ease-in-out border w-10 h-10 rounded-full border-primary'>
                        <FaLinkedinIn />
                    </a>


                </div>
            </div>
            <div className='flex cursor-pointer justify-center'>
                <div
                    className='overflow-hidden w-[250px] h-[300px] md:h-[500px] md:w-[450px] lg:h-[450px] lg:w-[400px] border-4 border-Text hover:border-Text2 rounded-3xl rotate-8 hover:rotate-0 transition-all duration-500'>
                    <Image src='/images/Rakib.jpg' alt='Rakib' width={1200} height={800} className='w-full h-full' />
                </div>
            </div>
        </div>
    )
}

export default Hero