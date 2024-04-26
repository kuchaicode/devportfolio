'use client';

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
    const { ref } = useSectionInView("Contact");

  return (
    <motion.section 
    id='contact'
    ref={ref}
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}
    viewport={{
        once:true,
    }}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p 
        className='text-gray-700 -mt-7'>Please contact me directly at <a className='underline' href='mailto:example@gmail.com'>
            example@gmail.com</a>{' '} or through this form.</p>
        <form 
        className='mt-10 flex flex-col'
        action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error){
                toast.error(error);
                return;
            }
            toast.success('Email send successfully');
        }}>
         {/* action is a NextJS feature: Server Actions */}
            <input 
            className='h-13 rounded-lg borderBlack' 
            name='senderEmail'
            type='email' 
            required
            maxLength={500}
            placeholder='Your email'></input>
            <textarea 
            className='h-52 my-3 rounded-lg borderBlack p-4'
            name='message'
            placeholder='Your message' 
            required
            maxLength={5000}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
