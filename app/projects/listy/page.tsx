import Image from "next/image";
import Link from "next/link";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { FloatingNavDemo } from "../../components/navbar";

import { BentoGridDemo } from "../../components/BentoGriddemo";
import MyScroll from "../../components/scroll";
import ParallaxImage from "../../components/scroll";


export default function Home() {
  return (
    <main className=" mx-5 md:mx-32 mt-5 ">
     
    <FloatingNavDemo/>
    <div >
        <p className="text-sm">Web Development <span className="dark:text-indigo-600 text-blue-600 align-text-top">.</span> </p>
      <h1 className="text-5xl md:text-7xl md:py-20 font-bold py-10  "> Listy</h1>
      <div className="flex justify-between">
      <p className="text-black-50 md:w-1/3 text-md font-serif"> Listy allows user to create a  to-do list and features a dashboard allowing users to focus on the most important tasks at hand. Some of the built-in features include options like creating labels(School, Soccer, Math-101 etc.), set tasks, modify tasks etc. Set task functionality includes a note taking option for further addition of tasks.  </p>
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
  
    
    
    </main>
  );
}
