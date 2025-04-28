import React from 'react'
// import Resume from '../../assets/resume.pdf'

function Button({type,onClick,btnName,icon,className="bg-primary text-white"}) {
  return (
    <button type={type} onClick={onClick} className={`flex items-center gap-2 cursor-pointer capitalize py-2 px-5 md:py-3 md:px-6 rounded-3xl  text-[14px] lg:text-[16px] font-semibold ${className}`}>
       
       <span>{btnName}</span> <span>{icon}</span>
       
    </button>
  )
}

export default Button