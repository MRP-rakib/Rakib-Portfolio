'use client'
import Image from 'next/image'

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

function Footer() {

    return (
        <footer className="bg-white dark:bg-dark py-7 md:py-10 lg:py-15">
            <div className=" container flex flex-col items-center justify-center gap-5">
                <ScrollLink to='top' smooth={true} duration={500} offset={-75}>
                    <Image src='/images/Rakib.jpg' alt='Rakib' width={60} height={60} className='rounded-full border-2 border-primary cursor-pointer' />
                </ScrollLink>
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
                                      offset={-50}
                                      activeClass='underline underline-offset-4 decoration-primary'
                                      spy={true}
                                      className='cursor-pointer'
                                      >contact</ScrollLink>
                                 </li>
                                   
                                </ul>
                <span className=" pt-7.5 text-[12px] text-Text dark:text-White">© 2025 Rakib All Rights Reserved.</span>
            </div>
        </footer>




    )
}

export default Footer