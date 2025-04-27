import React from 'react'
import Button from './btn/Button'
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Contact() {
  return (
    <section id='contact' className='py-8 md:py-10 lg:py-15 bg-Section dark:bg-dark'>
     <div className='container gap-10 lg:gap-24 items-center grid grid-cols-1 md:grid-cols-2'>
         <div className='p-4 lg:p-10 bg-white dark:bg-[#1e132a] rounded-3xl'>
          <div className='flex pb-3 flex-col gap-4 text-start max-w-[500px] mx-auto text-Text dark:text-white font-base'>
          <h2 className='text-Text2 font-bold text-2xl md:text-3xl lg:text-4xl'>Let’s work together!</h2>
          <p className='text-[12px] md:text-[14px] lg:text-base'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
          </div>
          <form className='flex flex-col gap-4'>
            <Input type='text' placeholder='Enter your name'/>
            <Input type='email' placeholder='Enter your email'/>
            <Input type='number' placeholder='Enter your number'/>
            <textarea
             className=' h-[100px] md:h-[150px] lg:h-[200px] capitalize w-full py-3 px-2 rounded dark:bg-black bg-Section dark:text-white text-Text outline-none' 
             name="message" 
             id="message" placeholder='Messages' ></textarea>
             <div>
             <Button btnName='send message'/>
             </div>
          </form>
         </div>
         <div className='flex flex-col gap-5 md:gap-10'>
            <div className='flex items-center gap-3 lg:gap-6'>
                  <span className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 text-2xl md:text-3xl rounded-full  text-white bg-primary '><FaPhoneVolume /></span>
                  <div className='text-Text flex flex-col gap-2 font-semibold dark:text-white'>
                    <p className='text-[18px] md:text-[20px] lg:text-2xl'>Phone</p>
                    <p className='text-base lg:text-[20px]'>+8801322493182</p>
                    </div>   
            </div>
            <div className='flex items-center gap-3 lg:gap-6'>
                  <span className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 text-2xl md:text-3xl rounded-full  text-white bg-primary '><CiMail /></span>
                  <div className='text-Text flex flex-col gap-2 font-semibold dark:text-white'>
                    <p className='md:text-[20px] lg:text-2xl'>Email</p>
                    <p className='text-[12px] md:text-[14px] lg:text-[18px]'>rakib260.hossain@gmail.com</p>
                    </div>   
            </div>
            <div className='flex items-center gap-3 lg:gap-6'>
                  <span className='flex items-center justify-center w-10 h-10 md:w-12 md:h-12 lg:w-15 lg:h-15 text-2xl md:text-3xl rounded-full  text-white bg-primary '><CiLocationOn /></span>
                  <div className='text-Text flex flex-col gap-2 font-semibold dark:text-white'>
                    <p className='md:text-[20px] lg:text-2xl'>Address</p>
                    <p className='text-[12px] md:text-[14px] lg:text-[18px]'>Bangladesh, Dhaka</p>
                    </div>   
            </div>
            
         </div>
     </div>

    </section>
  )
}
function Input({type,placeholder}){
  return(
    <div>
      <input className=' text-[12px] md:text-[14px] lg:text-base w-full py-3 px-2 rounded dark:bg-black bg-Section dark:text-white text-Text outline-none' type={type} placeholder={placeholder} />
    </div>
  )
}

export default Contact