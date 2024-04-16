'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import { LuArrowRight, LuDownload, LuGithub, LuLinkedin } from 'react-icons/lu';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
    const {ref, inView} = useInView({
        threshold: 0.5,
    });
  const { setActiveSection} = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('Home');
    }
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-100'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image 
                    src='/portrait.png' 
                    alt="Kristen" 
                    width={200} 
                    height={200} 
                    quality={95} 
                    priority={true}
                    className='border-[0.35rem] border-white rounded-full h-24 w-24 object-cover shadow-xl'
                    />
                </motion.div>
                <motion.span 
                className='absolute bottom-0 right-0 text-4xl'
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale:1 }}
                transition={{
                    type: "spring",
                    stiffness: 125, 
                    delay: 0.1, 
                    duration: 0.7,
                }}
                >
                    👋
                </motion.span>
            </div>
        </div>
        {/* Portrait end */}        
        <motion.h1 
            className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0}}
            >
            <span className="font-bold">Hello, I'm Kristen!</span> I'm a{" "}
            <span className="font-bold">full-stack developer. </span> I enjoy
            building responsive <span className="italic">sites & apps</span> with beautiful <span className='font-bold'>UI</span> and proper <span className='font-bold'>UX.</span>{" "} My focus right now is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>
        {/* Intro text end */}
        <motion.div 
            className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 font-medium text-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.2,
            }}
            >
            <Link 
            href='#contact'
            className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'
            >
                Contact me here! <LuArrowRight className='opacity-65 group-hover:translate-x-1 transition'
                />
            </Link>
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10 cursor-pointer' href='/KT_CV.pdf' download={true}>
                Download CV 
                <LuDownload 
            className='opacity-60 group-hover:translate-y-1 transition'
            />
            </a>
            <a 
            className='group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer'
            href='https://linkedin.com'
            target="_blank"
            >
                <LuLinkedin />
            </a>
            <a className='group bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer'
            href='https://github.com'
            target="_blank"
            >
                <LuGithub />
            </a>
        </motion.div>
        {/* Buttons section end */}
    </section>
  )
}
