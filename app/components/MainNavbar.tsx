import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export const MainNavbar = () => {
  return (
    <div className='flex justify-center '>
        
        <div className='p-2 m-4'>
            <Link href="/"><span className='sm:text-sm md:text-lg m-2 dark:hover:text-indigo-400 hover:text-blue-600'> //<span className="  text-teal-400 "><sup>.</sup></span>Home </span></Link>    
            <Link href="/resume"><span className='sm:text-sm md:text-lg m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //<span className=" text-teal-400 "><sup>.</sup></span>Resume </span></Link>
            <Link href="/projects"> <span className='sm:text-sm md:text-lg m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //<span className=" text-teal-400 "><sup>.</sup></span>Projects </span></Link>
            <Link href="/courses"><span className='sm:text-sm md:text-lg m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //<span className=" text-teal-400 "><sup>.</sup></span>Courses </span></Link>
            <Link href="/student_corner"><span className='sm:text-sm md:text-lg m-2  dark:hover:text-indigo-400 hover:text-blue-600'> //<span className=" text-teal-400 "><sup>.</sup></span>Student Corner </span></Link>
        </div>

    </div>
  )
}
