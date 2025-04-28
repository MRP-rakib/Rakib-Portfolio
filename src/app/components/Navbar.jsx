'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from './btn/Button'
import { TfiMenu } from "react-icons/tfi";
import {Link as ScrollLink } from 'react-scroll'

function Navbar() {
    const [menuTrue, setMenuisTrure] = useState(false)
 
    const menus =[
        {id:0, menu:"services", path:'services'},
        {id:1, menu:"projects", path:'projects'},
        {id:2, menu:"resume", path:'resume'},
        {id:3, menu:"skills", path:'skills'},
        {id:4, menu:"contact", path:'contact'},
    ]
    const handelMenuBar =()=>{
        setMenuisTrure(prev=>!prev)
    }
    const handelMobileMenu=()=>{
        setMenuisTrure(false)
    }
    
   
    
    return (
        <nav className=' py-2 lg:py-4 sticky top-0 z-50 bg-white dark:bg-dark'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                <ScrollLink to='top' smooth={true} duration={500} offset={-50}>
                <Image src='/images/Rakib.jpg' alt='Rakib' width={48} height={48} className='rounded-full border-2 border-primary cursor-pointer' />
                </ScrollLink>
                <p className='text-Text dark:text-White text-[18px] font-semibold hidden md:block'>rakib260.hossain@gmail.com</p>
                </div>
                <div className='flex items-center gap-7.5 md:gap-10 lg:gap-15'>
                <ul className='hidden lg:flex items-center lg:gap-8 xl:gap-15 text-Text dark:text-White capitalize md:text-[16px] lg:text-[18px] font-semibold'>
                   <li>
                     <ScrollLink
                      to='services'
                      smooth={true}
                      duration={500}
                      offset={-60}
                      activeClass='underline underline-offset-4 decoration-primary'
                      spy={true}
                      className='cursor-pointer'
                      >services</ScrollLink>
                 </li>
                   <li>
                     <ScrollLink
                      to='projects'
                      smooth={true}
                      duration={500}
                      offset={-60}
                      activeClass='underline underline-offset-4 decoration-primary'
                      spy={true}
                      className='cursor-pointer'
                      >projects</ScrollLink>
                 </li>
                   <li>
                     <ScrollLink
                      to='resume'
                      smooth={true}
                      duration={500}
                      offset={-50}
                      activeClass='underline underline-offset-4 decoration-primary'
                      spy={true}
                      className='cursor-pointer'
                      >resume</ScrollLink>
                 </li>
                   <li>
                     <ScrollLink
                      to='skills'
                      smooth={true}
                      duration={500}
                      offset={-50}
                      activeClass='underline underline-offset-4 decoration-primary'
                      spy={true}
                      className='cursor-pointer'
                      >skills</ScrollLink>
                 </li>
                   <li>
                     <ScrollLink
                      to='contact'
                      smooth={true}
                      duration={500}
                      offset={-40}
                      activeClass='underline underline-offset-4 decoration-primary'
                      spy={true}
                      className='cursor-pointer'
                      >contact</ScrollLink>
                 </li>
                   
                </ul>
                <ScrollLink to='contact' smooth={true} duration={500} offset={-40}>
                <Button btnName='Hire Me!'/>
                </ScrollLink>
                <button onClick={handelMenuBar} className='cursor-pointer text-Text dark:text-White text-4xl lg:hidden'>
                <TfiMenu />
                </button>
                <ul className={`${menuTrue?' visible h-[100vh] p-5':" invisible h-0 p-0"} z-50 overflow-hidden transition-all duration-500 lg:hidden absolute top-16 left-0 bg-Text w-full pl-5 flex flex-col gap-10 text-White capitalize text-2xl font-bold`}>
                   {menus.map(menu=>(
                     <li key={menu.id}>
                     <ScrollLink 
                     onClick={handelMobileMenu} 
                     to={menu.path}
                     smooth={true}
                     duration={500}
                     offset={-50}
                     spy={true}
                     className='cursor-pointer'
                     >{menu.menu}</ScrollLink>
                 </li>
                   ))}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar