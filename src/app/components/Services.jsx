'use client'
import React, { useEffect, useState } from 'react'
import { GoArrowDownRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)



function Services() {
  const information = [
    { no: '01', header: "Responsive Design", des: "Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly." },
    { no: '02', header: "Ecommerce Website", des: "Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly." },
    { no: '03', header: "Website Optimization", des: "Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly." },
    { no: '04', header: "Website Maintenance", des: "Ensure your website looks great on any device,with layouts that adapt to different screen sizes seamlessly." },
  ]
  const [hover, setHover] = useState(0)
  const [lastHover,setLastHover] = useState(null)
  const handelHoverOn = (index) => {
    setHover(index)
    setLastHover(index)

  }
  const handelHoverOff = () => {
    if(lastHover!== null){
      setHover(lastHover)
    }else{
      setHover(0)
    }
    
  }
  useEffect(()=>{
    gsap.fromTo(".animation",{
    opacity:0,
    y:100
    },{
      opacity:1,
      y:0,
      duration:0.5,
      stagger:0.3,
      ease:"linear",
      scrollTrigger:{
        trigger:'#services',
        start:'top 80%',
        end:"top 30%",
        toggleActions:'play none none none',
        markers:false

      }
    })
  },[])
  return (
    <section id='services' className='py-7 md:py-10 lg:py-15 bg-Section dark:bg-black'>
      <div className='container'>
        <div className='flex flex-col gap-2 md:gap-3 lg:gap-4 text-[12px] text-center md:text-[14px] lg:text-base dark:text-White text-Text max-w-[500px] mx-auto'>
          <h2 className='text-2xl text-Text2 md:text-3xl lg:text-4xl font-bold'>My Quality Services</h2>
          <p>We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
        </div>
        <div className='pt-8 lg:pt-10 divide-y-2 divide-white dark:divide-Text'>
          {information.map((info, index) => (
            <Info  className="animation" hover={hover === index} key={index} info={info} handelHoverOff={() => handelHoverOff(index)} handelHoverOn={() => handelHoverOn(index)} />
          ))}

        </div>
      </div>
    </section>
  )
}
function Info({className, info, handelHoverOff, handelHoverOn, hover }) {


  return (
    <div
    
      onMouseEnter={handelHoverOn}
      onMouseLeave={handelHoverOff}
      className={`${className} cursor-pointer flex flex-col group gap-1 lg:flex-row  lg:items-center lg:justify-between ${hover && 'bg-primary text-white'} transition-all duration-500 p-2 rounded text-Text2 hover:text-white  dark:text-white text-[16px] md:text-[18px] lg:text-[20px] font-bold`}>
      <div className='w-[300px] flex items-center gap-3'>
        <h3 className=''>{info.no}</h3>
        <h2 className=''>{info.header}</h2>
      </div>
      <p className={`max-w-[400px] font-normal transition-all duration-300 text-[12px] md:text-[14px] lg:text-base  ${hover ? 'text-white' : "dark:text-White"} text-Text `}>{info.des}</p>
      <span className='flex items-center justify-end lg:block'>
        {hover ? <GoArrowUpRight /> : <GoArrowDownRight />}

      </span>
    </div>
  )
}

export default Services