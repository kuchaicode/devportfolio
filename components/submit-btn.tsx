import React from 'react'
import { useFormStatus } from 'react-dom';
import { LuSend } from 'react-icons/lu'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
  return (
    <button 
    type='submit' 
    className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-60'
    disabled={pending}>{
        pending ? <div className='h-5 w-5 rounded-full border-b-2 border-white animate-spin'></div> : (
            <>
            Submit{' '}<LuSend
            className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>{' '}
            </>
        )
    }
        
    </button>
  )
}