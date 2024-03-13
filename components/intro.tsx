'use client';

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section>
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
        <p>
            
        </p>
    </section>
  )
}
