import { students2024,students2025 } from '@/data'
import React from 'react'
import { MainNavbar } from '../components/MainNavbar'
import Image from 'next/image'

const page = () => {
  return (
 <>
 <MainNavbar/>
 <section id="classOf2025" className='py-4'>
 <div className='md:mx-12 lg:mx-16'>
  <h2 className='  sm:text-2xl md:text-3xl lg:text-5xl font-bold notable-headings m-4 tracking-widest underline underline-offset-4 py-5'> Graduating Class of 2025</h2>
  <div className="m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {students2025.map(student => (
      <div key={student.id} className="bg-inherit border-2 w-full h-200 p-6 rounded-xl shadow-lg">
            
            
            <div className="relative group w-full h-80  flex justify-end">
                {/* Image in the foreground */}

                <Image
                      src={student.img as string}
                      width={500}
                      height={500}
                      alt="Picture of the author"
                />
                {/* Overlay for text on hover */}
                <div className="absolute inset-0 bg-white dark:bg-black  flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center ">
                    <h2 className="text-3xl md:text-5xl  font-bold notable-headings  my-1 ms-2">{student.first_name}</h2>
                    <h2 className="text-3xl md:text-5xl   flex justify-end  font-bold notable-headings  my-1 ms-2">{student.last_name}</h2>
                  </div>
                </div>
            </div>
                  <div className='flex justify-end mt-16 mb-4'>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    <a 
                      href={student.portfolio} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                    >
                      View Portfolio
                    </a>
                    </span>
                  </button>
                  
                  </div>
        
        <p className="font-serif text-clip	 ">{student.intro}</p>
      </div>
    ))}
  </div>
</div>
</section>
 <section id="classOf2024" className='py-12'>
 <div className='md:mx-12 lg:mx-16'>
  <h2 className='   sm:text-3xl md:text-3xl lg:text-5xl font-bold notable-headings m-4 tracking-widest underline underline-offset-4 pt-8 pb-4'> Graduating Class of 2024</h2>
  <div className="m-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {students2024.map(student => (
      <div key={student.id} className="bg-inherit border-2  p-6 rounded-xl shadow-lg">
        <h2 className="text-5xl  font-bold notable-headings  my-1 ms-2">
              {student.first_name}
            </h2>
        <h2 className="text-5xl flex justify-end  font-bold notable-headings  my-1 ms-2">
              {student.last_name}
            </h2>
        <div className='flex justify-end mt-16 mb-4'>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <a 
              href={student.portfolio} 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              View Portfolio
            </a>
            </span>
          </button>
        
        </div>
        
        <p className="font-serif text-clip overflow-hidden ">{student.intro}</p>
      </div>
    ))}
  </div>
</div>
</section>



 </>   

   
  )
}

export default page