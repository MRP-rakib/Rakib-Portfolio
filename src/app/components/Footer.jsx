'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

function Footer() {
    const menus = [
        { id: 0, menu: "services", path: 'services' },
        { id: 1, menu: "projects", path: 'projects' },
        { id: 2, menu: "resume", path: 'resume' },
        { id: 3, menu: "skills", path: 'skills' },
        { id: 4, menu: "contact", path: 'contact' },
    ]
    return (
        <footer className="bg-white dark:bg-dark py-7 md:py-10 lg:py-15">
            <div className=" container flex flex-col items-center justify-center gap-5">
                <ScrollLink to='top' smooth={true} duration={500} offset={-75}>
                    <Image src='/images/Rakib.jpg' alt='Rakib' width={60} height={60} className='rounded-full border-2 border-primary cursor-pointer' />
                </ScrollLink>
                <ul className='flex gap-3 items-center lg:gap-10 xl:gap-15 text-Text dark:text-White capitalize text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>
                    {menus.map(menu => (
                        <li key={menu.id}>
                            <ScrollLink
                                to={menu.path}
                                smooth={true}
                                duration={500}
                                offset={-85}
                                activeClass='underline underline-offset-4 decoration-primary'
                                spy={true}
                                className='cursor-pointer'
                            >{menu.menu}</ScrollLink>
                        </li>
                    ))}
                </ul>
                <span className=" pt-7.5 text-[12px] text-Text dark:text-White">© 2025 Rakib All Rights Reserved.</span>
            </div>
        </footer>




    )
}

export default Footer