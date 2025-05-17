'use client'
import React, { useEffect, useState } from 'react'
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

function DarkBtn() {
    const [dark, setDark] = useState("light")
    const handelDarkMode = () => {
        setDark(prev => prev === 'dark' ? "light" : "dark")
    }
    useEffect(() => {
        if (dark === 'dark') {
            document.body.classList.add('dark')
        }
        else {
            document.body.classList.remove('dark')
        }
    }, [dark])
    return (
        <button onClick={handelDarkMode}
            className='z-100 cursor-pointer fixed flex gap-2.5 items-center top-[50%] group -right-13 hover:right-0 py-1 px-2  transition-all duration-300 rounded-tl-3xl rounded-bl-3xl bg-primary text-White text-[16px] lg:text-[18px] font-semibold '>
            <span>
                {dark === "dark" ? <IoSunnyOutline /> : <IoMoonOutline />}
            </span>
            <span className=' capitalize'>
                {dark === 'dark' ? "light" : "dark"}
            </span>
        </button>
    )
}

export default DarkBtn