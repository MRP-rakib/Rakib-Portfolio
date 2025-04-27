'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const menus = [
        { id: 0, menu: "services", path: '#services' },
        { id: 1, menu: "projects", path: '#projects' },
        { id: 2, menu: "resume", path: '#resume' },
        { id: 3, menu: "skills", path: '#skills' },
        { id: 4, menu: "contact", path: '#contact' },
    ]
    return (
        <footer className="bg-white dark:bg-dark">
            <div className=" container flex flex-col items-center justify-center gap-5 p-4 md:py-8">
                <Link href='/'>
                    <Image src='/images/Rakib.jpg' alt='Rakib' width={60} height={60} className='rounded-full border-2 border-primary cursor-pointer' />
                </Link>
                <ul className='flex gap-3 items-center lg:gap-10 xl:gap-15 text-Text dark:text-White capitalize text-[14px] md:text-[16px] lg:text-[18px] font-semibold'>
                    {menus.map(menu => (
                        <li key={menu.id}>
                            <Link href={menu.path}>{menu.menu}</Link>
                        </li>
                    ))}
                </ul>
                <span className=" pt-7.5 text-[12px] text-Text dark:text-White">© 2023 Rakib All Rights Reserved.</span>
            </div>
        </footer>




    )
}

export default Footer