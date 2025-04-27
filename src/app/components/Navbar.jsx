'use client'
import Link from 'next/link'
import React, { useState } from 'react'

import Image from 'next/image'
import Button from './btn/Button'
import { TfiMenu } from "react-icons/tfi";
import {Router} from 'next/router'

function Navbar() {
    const [menuTrue,setMenuisTrure] =useState(false)
    const menus =[
        {id:0, menu:"services", path:'#services'},
        {id:1, menu:"projects", path:'#projects'},
        {id:2, menu:"resume", path:'#resume'},
        {id:3, menu:"skills", path:'#skills'},
        {id:4, menu:"contact", path:'#contact'},
    ]
    const handelMenuBar =()=>{
        setMenuisTrure(prev=>!prev)
    }
    const handelMobileMenu=()=>{
        setMenuisTrure(false)
    }
    
    const handelClick=()=>{
        window.location.hash='#contact'
        console.log('click');
        
    }
    return (
        <nav className='py-6 lg:py-10 relative'>
            <div className='container flex items-center justify-between'>
                <div className='flex items-center gap-4'>
                <Link href='/'>
                <Image src='/images/Rakib.jpg' alt='Rakib' width={48} height={48} className='rounded-full border-2 border-primary cursor-pointer' />
                </Link>
                <p className='text-Text dark:text-White text-[18px] font-semibold hidden md:block'>rakib260.hossain@gmail.com</p>
                </div>
                <div className='flex items-center gap-7.5 md:gap-10 lg:gap-15'>
                <ul className='hidden lg:flex items-center lg:gap-10 xl:gap-15 text-Text dark:text-White capitalize md:text-[16px] lg:text-[18px] font-semibold'>
                   {menus.map(menu=>(
                     <li key={menu.id}>
                     <Link href={menu.path}>{menu.menu}</Link>
                 </li>
                   ))}
                </ul>
                <Button onClick={handelClick}  btnName='Hire Me!'/>
                <button onClick={handelMenuBar} className='cursor-pointer text-Text dark:text-White text-4xl lg:hidden'>
                <TfiMenu />
                </button>
                <ul className={`${menuTrue?' visible h-[100vh] pt-5':" invisible h-0 p-0"} z-50 overflow-hidden transition-all duration-500 lg:hidden absolute top-20 left-0 bg-Text w-full pl-5 flex flex-col gap-10 text-White capitalize text-2xl font-bold`}>
                   {menus.map(menu=>(
                     <li key={menu.id}>
                     <Link onClick={handelMobileMenu} href={menu.path}>{menu.menu}</Link>
                 </li>
                   ))}
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar