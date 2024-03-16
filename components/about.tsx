'use client';

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './section-heading'

export default function About() {
  return (
    <motion.section
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.185 }}
    id="about"
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            I graduated with a degree in {" "}<span className="font-medium">Psychology</span>. However, I have a strong interest in programming since I was young. I decided to pursue this passion by enrolling in a coding bootcamp where I learned {" "}<span className="font-medium">full-stack web development</span>. I enjoy writing code and solving complex problems. Pursuing this skillset led to me to discover {" "}<span className="font-medium">UX Design</span>, which I received training in through a UX Design and Research bootcamp. My goal is to create fully-functional websites and applications with good UI and UX. My primary stack includes {" "}<span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also familiar with Typescript and Tailwind. I am constantly improving my skillset and staying informed on the advancements in technology. Currently, I am actively seeking a {" "}<span className="font-medium">full-time</span> position as a {" "}<span className="font-medium">software developer</span>.
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I love spending my time reading good books, playing video games,  and sketching! I also enjoy {" "}<span className="font-medium">learning new things</span>.
        </p>

    </motion.section>
  )
}
