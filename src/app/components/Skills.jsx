"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


function Skills() {
  const skills =[
    {image:'/images/html.png',complete:'95%', name:"HTML"},
    {image:'/images/css.png',complete:'90%', name:"CSS"},
    {image:'/images/js.png',complete:'65%', name:"JavaScript"},
    {image:'/images/react.png',complete:'70%', name:"React"},
    {image:'/images/next.png',complete:'60%', name:"Next.js"},
    {image:'/images/tailwind.png',complete:'90%', name:"Tailwind CSS"}
  ]
  useEffect(()=>{
       
  },[])
  return (
    <section id='skills' className='py-7 md:py-10 lg:py-15'>
      <div className='container'>
        <div className='flex flex-col gap-4 text-[12px] md:text-[14px] text-center lg:text-base dark:text-White text-Text max-w-[500px] mx-auto'>
          <h2 className='text-2xl text-Text2 md:text-3xl lg:text-4xl font-bold'>
            My Skills
          </h2>
          <p>Proficient in frontend development with a focus on modern technologies, ensuring seamless and responsive web experiences.</p>
        </div>
        <div className=' pt-10 grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
          {skills.map((skill,index)=>(
            <Skill key={index} skill={skill} />
          ))}
          
        </div>
      </div>
    </section>
  )
}

function Skill({skill}) {
  
  return (
    <div className='flex flex-col items-center gap-4'>
      <div className='flex group flex-col gap-5 items-center justify-center h-[150px] md:h-[200px] w-full text-white bg-Section hover:bg-primary transition-all duration-300 dark:bg-[#1e132a] rounded-3xl'>
       <Image 
       src={skill.image} 
       alt='html' 
       width={100}
       height={100}
       className=' w-[60px] h-[60px] grayscale-90 group-hover:grayscale-0'
       />
        <strong className='text-[20px] md:text-2xl lg:text-3xl text-White group-hover:text-white'>{skill.complete}</strong>
        </div>
      <h4 className='text-Text2 text-[16px] md:text-[18px] lg:text-[20px]'>{skill.name}</h4>
    </div>
  )
}

export default Skills