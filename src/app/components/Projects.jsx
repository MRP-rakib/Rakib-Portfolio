"use client"
import Image from 'next/image'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
function Projects() {
  const projects =
    [
      { id: 1, image: '/images/web1.png', name: 'Ecommerce Website', des: "This website about ecomemrce", link: 'https://ecom-verse.vercel.app/' }
    ]
const handelLink =(id)=>{
  const projectLink = projects.find(project=>project.link !== id)
  if(projectLink){
    window.open(projectLink.link,'_blank')
  }
  
}
  return (
    <section id='projects' className='py-7 md:py-10 lg:py-15'>
      <div className='container'>
        <div className='flex flex-col gap-4 text-[12px] md:text-[14px] text-center lg:text-base dark:text-White text-Text max-w-[500px] mx-auto'>
          <h2 className='text-2xl text-Text2 md:text-3xl lg:text-4xl font-bold'>My Recent Projects</h2>
          <p>A collection of my recent web development projects, demonstrating expertise in creating dynamic and engaging websites.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 pt-8 lg:pt-10'>
          {projects.map(project => (
            <Card onClick={()=>handelLink(project.id)} key={project.id} project={project} />
          ))}

        </div>
      </div>
    </section>
  )
}

function Card({ onClick, project }) {
  return (
    <div className='group relative h-[250px] lg:h-[450px] overflow-hidden w-full rounded-[16px] shadow-2xl'>
      <Image
        src={project.image}
        width={1200}
        height={800}
        className=' object-fill w-full  h-full'
      />
      <div onClick={onClick} 
      className='cursor-pointer transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible flex items-center justify-between bg-primary w-[90%] transform -translate-x-[50%] p-2 absolute bottom-2 md:bottom-3 lg:bottom-5 left-[50%] rounded-2xl text-white'>
        <div className='flex flex-col gap-1 md:gap-2'>
          <h4 className='text-[16px] font-bold md:text-[18px] lg:text-[20px]'>{project.name}</h4>
          <p className='text-[12px] md:text-[14px] lg:text-base'>{project.des}</p>
        </div>
        <span className='pr-5 text-white text-3xl'>
          <GoArrowUpRight />
        </span>
      </div>
    </div>
  )
}

export default Projects