import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'
import { IconFile, IconMessage, IconUser,IconComponents } from "@tabler/icons-react";
export const MainNavbar = () => {
  return (
    <div className='flex  justify-center   w-full bg-inherit shadow-md dark:shadow-indigo-400 z-100  '>
        
        <div className='p-1 m-1  text-inherit '>
            <Link href="/"><span className='sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600'>// Home </span></Link>    
            <Link href="/resume"><span className='sm:text-xs md:text-sm m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //Resume </span></Link>
            <Link href="/projects"> <span className='sm:text-xs md:text-sm m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //Projects </span></Link>
            <Link href="/courses"><span className='sm:text-xs md:text-sm m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //Courses </span></Link>
            <Link href="/student_corner"><span className='sm:text-xs md:text-sm m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //Student Corner </span></Link>
            <ModeToggle/>
        </div>

    </div>
  )
}
