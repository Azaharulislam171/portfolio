'use client'
import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'
import Link from 'next/link'
import Image from 'next/image'

const Experience = () => {
  return (
    <div id="experience " className='mx-auto'>
    <div className=" py-20  text-3xl md:text-5xl font-semibold font-serif font-family:Georgia">
      My  <span className="text-blue-400 dark:text-indigo-300"> work experience...</span>
    </div>

    <div className="w-full mt-12 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
         
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            className="flex-1 text-black bg-inherit dark:text-white border-neutral-200 dark:border-slate-800"
            onClick={() => window.open(card.link, '_blank')} // Open in a new tab
            
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Link key={card.id} href={card.link}>
              <Image
                width={100}
                height={100}
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-48  md:w-20 w-16"
              />
              </Link>
              
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        
        ))}
  </div>

  </div>
  )
}

export default Experience