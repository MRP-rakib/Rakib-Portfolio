import React from 'react'

function Resume() {
  return (
    <section id='resume' className='bg-Section dark:bg-black py-7 md:py-10 lg:py-15'>
      <div className='container grid grid-cols-1 md:grid-cols-2 gap-5 text-2xl md:text-3xl lg:text-4xl font-bold text-Text2'>
        <div className=''>
          <h2>Experience</h2>
          <div className='flex flex-col transition-all duration-300 gap-2 group hover:bg-primary hover:text-white text-Text2  bg-white dark:bg-[#1e132a] rounded-[16px] text-[18px] md:text-[20px] lg:text-2xl mt-5 md:mt-10  p-4'>
            <h4 className=''>2024-2025</h4>
            <div>
            <h3 className='text-black transition-all duration-300 group-hover:text-white dark:text-white'>Front-End Development with React.js - Training</h3>
            <p className='font-semibold text-[14px] text-White' >Creative It Institute | <span className='text-[12px]'>july 2024 - April 2025</span></p>
            </div>
            <ul className='flex flex-col gap-2 text-black font-normal pt-5 group-hover:text-white dark:text-white text-[12px] md:text-[14px] lg:text-base list-disc pl-10'>
              <li>Learned HTML, CSS, Tailwind, JavaScript, React, Next.js, GitHub.</li>
              <li>Built multiple real-life projects like Portfolio, E-commerce,.</li>
              <li>Used Firebase, REST API, and responsive design techniques.</li>
            </ul>
            </div>
            
        </div>
        <div>
          <h2>Education</h2>
          <div className='flex flex-col transition-all duration-300 gap-2g group hover:bg-primary hover:text-white text-Text2  bg-white dark:bg-[#1e132a] rounded-[16px] text-[18px] md:text-[20px] lg:text-2xl mt-5 md:mt-10  p-4'>
            <h4 className=''>2021-Present</h4>
            <div>
            <h3 className='text-black transition-all duration-300 group-hover:text-white dark:text-white'>Diploma in Computer Science & Technology</h3>
            <p className='font-semibold text-[14px] text-White' >Daffodil Technical Institute | <span className='text-[12px]'>Currently in 7th Semester</span></p>
            </div>
          </div>
          <div className='flex flex-col transition-all duration-300 gap-2g group hover:bg-primary hover:text-white text-Text2  bg-white dark:bg-[#1e132a] rounded-[16px] text-[18px] md:text-[20px] lg:text-2xl mt-5 md:mt-10  p-4'>
            <h4 className=''>2018-2019</h4>
            <div>
            <h3 className='text-black transition-all duration-300 group-hover:text-white dark:text-white'>Sristy Central School and Collage(SSC)</h3>
            <p className='font-semibold text-[14px] text-White' >Deparment of Science | <span className='text-[12px]'>January 2018 - December 2019</span></p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Resume