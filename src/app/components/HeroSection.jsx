"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  
    const handleHireMe = () => {
    const emailSection = document.getElementById('EmailSection');
    emailSection.scrollIntoView({behavior:'smooth'})
  }

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1NDGYamxiHSFBhcEOu6EqzG0-ndbC-Zf2/view', '_blank')
  }
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] via-[#fefae0] to-[#ccd5ae]">Hello, I&#39;m{" "}
                    </span>
                    <br/>
                        <TypeAnimation
                        sequence={[
                        'Aadarsh Sharma',
                        1000,
                        'Web Developer',
                        1000,
                        'Problem Solver',
                        1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Seeking a summer internship to advance my skills in problem-solving, machine learning, and software development, aiming to excel.
                </p>
                <div>
                    <button
                        onClick={handleHireMe} 
                        className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-[#d4a373] via-[#fefae0] to-[#ccd5ae] hover:bg-slate-400 text-black'>
                        Hire Me
                    </button>
                    <button
                        onClick={handleResumeClick} 
                        className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-[#d4a373] via-[#fefae0] to-[#ccd5ae] hover:bg-slate-400 text-white mt-3'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                            My Resume
                        </span>
                    </button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[500px] h-[500px] lg:w-[400px] lg:h-[400px] relative overflow-hidden'> 
                    <Image 
                        src = "/images/aniket.png"
                        alt = "Aniket Sharma Image"
                        className='absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2' 
                        width = {300}
                        height = {300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection