"use client";

import Image from 'next/image'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const HomeSection = () => {
  return (
    <section id='home' className='relative pt-36 pb-24'>
        <div className='mt-12 md:mt-24 max-w-6xl mx-auto px-6'>
            {/*avatar and headline*/}
            <div className='flex flex-col md:flex-row gap-8 items-center md:items-center'>
                {/*greetings*/}
                <div className='relative flex justify-center md:justify-end'>
                    <div className='pointer-events-none absolute inset-10 md:-inset-24 rounded-full
                        bg-linear-to-b from-[#ecc28a] via-[#ff9200]/30 to-transparent blur-3xl opacity-90'>
                    </div>
                    <div className='relative'>
                        <Image src="/images/avatar_me.png" alt="avatar" width={240} height={240} 
                        className='relative' priority />

                        <div className='select-none pointer-events-none absolute -top-8 
                            md:-top-16 md:-right-92 text-xs text-white/80'>
                            <div className='relative flex items-center justify-end'>
                                <div className='-mt-6 md:-mt-10 shrink-0 text-lg md:text-2xl font-normal text-center'>
                                    <span>Hi! I'm {" "}</span>
                                    <span className='text-[#ecc28a]'>DENISE IRA JUBILO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*intro*/}
                <div className="md:pl-2 text-center md:text-left">
                    <p className="text-sm md:text-base mb-2 text-white/60 font-normal">A Developer who</p>

                    <h1 className="text-xl sm:text-5xl font-normal">Does not just make it work</h1>

                    <p className="text-4xl sm:text-4xl font-bold text-white/60 tracking-tight leading-normal 
                        max-w-md md:max-w-lg mx-auto md:mx-0 ">
                            <span className='block'>but makes it {" "}
                                <span className='relative inline-block align-baseline'>
                                    <span className='relative z-10 text-[#ecc28a]'>right</span>
                                    <span className='top-3 mb-2 pointer-events-none absolute -inset-x-20 -inset-y-20 rotate-180'>
                                        <Image src="/images/right.gif" alt="right" 
                                            fill className='object-contain' priority />
                                    </span>
                                </span>.
                            </span>
                    </p>
                </div>
            </div>

            {/*role and description*/}
            <div className='mt-16 max-w-3xl'>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-tight">
                    <Typewriter   
                    words={["I'm a Software Developer.", 
                        "I'm a Full-Stack Developer.", 
                        "I'm a Software QA Engineer."]}
                    typeSpeed={60}
                    deleteSpeed={50}
                    delaySpeed={800}
                    cursor
                    cursorStyle={'|'}
                    loop={true}
                    />
                </h2>

                {/* Styled Line Divider */}
                <div className="relative mt-6 mb-8 w-200max-w-md h-0.75 mx-auto">
                    <div className="absolute inset-0 rounded-full 
                        bg-linear-to-r from-red-500 via-[#de9e48] to-orange-400">
                    </div>

                    {/* soft shadow/glow */}
                    <div className="absolute inset-0 rounded-full blur-md opacity-60
                        bg-linear-to-r from-red-500 via-[#de9e48] to-orange-400">
                    </div>
                </div>

                <p>Currently, I'm seeking a role where I can contribute my skills and grow professionally.</p>
                <p className='mt-8 text-white/70 leading-7 text-justify'>Detail-oriented and motivated Computer Engineering graduate with hands-on experience in quality assurance, 
                    system development, and software testing through industry internships and academic projects. Skilled in 
                    manual and automated testing, web and mobile development, and collaborative Agile environments. 
                    Passionate about improving product quality, user experience, and delivering reliable technical solutions. 
                    Seeking an entry-level role where I can contribute effectively while continuously developing my technical 
                    and professional skills.</p>

            </div>
        </div>
    </section>
  )
}

export default HomeSection