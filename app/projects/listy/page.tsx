'use client'
import Image from "next/image";
import Link from "next/link";
import { MainNavbar } from "@/app/components/MainNavbar";
import Bubble from "@/app/components/Bubble";
import FooterMain from "@/app/components/FooterMain";
import FooterSmall from "@/app/components/FooterSmall";


export default function Listy() {
  return (
    < >
     
    <MainNavbar/>

    <div className=" mx-5 md:mx-32 mt-8 ">
        <div >
          <p className="text-sm">Web Development <span className="dark:text-indigo-600 text-blue-600 align-text-top">.</span> </p>
          <Bubble text="Listy | Your to-do scheduler..."/>
          <div className="flex flex-col md:flex-row md:justify-between items-end">
            <p className="text-black-50 md:w-1/2 text-md font-serif"> Listy allows user to create a  to-do list and features a dashboard allowing users to focus on the most important tasks at hand. Some of the built-in features include options like creating labels(School, Soccer, Math-101 etc.), set tasks, modify tasks etc. Set task functionality includes a note taking option for further addition of tasks.  </p>
            <Link href="https://listyai.vercel.app/">
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Live Website
              </span>
            </button>
            </Link>
          
          </div>
          <p className="dark:text-indigo-400 text-blue-600 text-sm pt-2 text-right pl-4" >Tech Stack: Figma, Next.Js, Firebase </p>
        </div>

        <div className=" flex items-center justify-center pt-8 ">  
          <Image
            src="/ListyBanner.png"
            width={12000}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <div className="flex justify-end my-4 ">
            <Link href="/projects/BagOfPopcorns">
              <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Bag of Popcorns DS Project
                </span>
              </button>
            </Link>
        </div>
        
      
    </div>
   

    
    </>
  );
}
