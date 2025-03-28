import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { HomeIcon, UserIcon } from 'lucide-react'
import Image from 'next/image';
import { IconBoxAlignRightFilled } from '@tabler/icons-react';

const MyGrid = () => {
    const leftLists = ["Java", "NextJS", "Typescript"];
    const rightLists = ["Django", "Firebase", "GraphQL","Tableau"];
    const centerLists = ["R", "Node.JS", "Docker"];
    
    const  TechStack = () => {
  

        return (
            <>
            <div className="flex justify-between gap-1 w-full relative ">
              {/* Text Section */}
              <div className="flex flex-col flex-grow z-30 items-start justify-center overflow-visible text-left">
                <h1 className="text-sm  text-gray-400">Constantly improving</h1>
                <h1 className="text-sm md:text-3xl lg:text-7xl max-w-[75vw] overflow-hidden whitespace-nowrap text-ellipsis text-gray-400">
                 Tech Stack
                </h1>
              </div>

              <div className='gap-4 flex flex-row'>
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-8 ml-auto">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-slate-200 dark:bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-slate-200 dark:bg-[#10132E]"></span>
              </div>
          
              
                {/* right Lists */}
              <div className="flex flex-col gap-1  lg:gap-8 ml-auto">
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-slate-200 dark:bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              {/* center Lists */}
              <div className="flex flex-col gap-1 md:gap-3 lg:gap-8 ml-auto">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-slate-200 dark:bg-[#10132E]"></span>
                {centerLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-slate-200 dark:bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
          
              {/* Left Lists */}
              
            </div>
          </>
          
        );
      };

      const SkeletonUX = () => {
  

        return (
           <>
           <div className=" flex min-w-full h-full items-start dark:border justify-center rounded-r-lg  " >
            <div className=" bg-white-/20 dark:bg-black/95 backdrop-blur-md dark:backdrop-blur-none border border-white/20 dark:border-none rounded-lg shadow-xl p-2  ">
             <Image src='/asset/asset_ux@4x.png' width={400} height={300} alt='UX' className='rounded-sm'/>
             
                  < ul className='list-disc list-inside p-1'>
                      <li >Experience with research design and methodology.
</li>
                      <li> Proficiency in survey design and conducting user interviews.
</li>
                      <li> Knowledge of quantitative analysis, including OLS regression.

</li>
                      <li> Familiarity with affinity diagramming for data organization.</li>
                      <li>Expertise in creating personas and mapping user journeys.
                      </li>
                      <li> Ability to present insights effectively through data storytelling.</li>
                  </ul>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Qualtrics
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               IBM SPSS
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Overleaf
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Notion
              </button>
            </div>
          </div>

           
           </>
          
        );
      };

      const SkeletonWeb = () => {
  

        return (
           <>
           <div className=" flex min-w-full h-full items-start   dark:border justify-center  " >
            <div className=" bg-white-/20 dark:bg-black/95 backdrop-blur-md dark:backdrop-blur-none border border-white/20 dark:border-none rounded-lg shadow-xl p-2  ">
             <Image src='/asset/asset_web@4x.png' width={400} height={400} alt='UX' className='rounded-sm'/>
             
                  < ul className='list-disc list-inside p-1'>
                      <li > Experience with Next.js and Django for full-stack web development.</li>
                      <li>Proficiency in Git for version control and collaborative development.</li>
                      <li> Familiarity with MySQL and Firebase for database management and real-time applications.</li>
                      <li> Knowledge of Docker for containerized deployments and scalable applications.</li>
                      <li> Understanding of cloud platforms like Vercel, AWS, or Google Cloud for hosting and deployment</li>
                      
                  </ul>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               NextJS
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Tailwind CSS
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Firebase
              </button>
              <button className=" text-sm m-1 px-1 py-1 hover:border-2  hover:border-blue-400 text-blue-400     rounded-lg ">
               Django
              </button>
            </div>
          </div>

           
           </>
          
        );
      };

      const SkeletonGoal = () => {
        return (
          <>
            <div className="flex min-w-full h-full items-start  dark:border justify-center  rounded-lg">
              <div className="bg-white-/20 dark:bg-black/95 backdrop-blur-md dark:backdrop-blur-none border border-white/20 dark:border-none rounded-lg shadow-xl p-2">
                <Image src="/asset/asset_goals@4x.png" width={400} height={300} alt="AI & ML Goals" className="rounded-sm" />
      
                <ul className="list-disc list-inside p-1">
                  <li> Build and fine-tune large language models (LLMs) using transformers. </li>
                  <li> Improve feature engineering techniques for better model performance. </li>
                  <li> Optimize and deploy machine learning models using MLOps practices. </li>
                  <li> Develop generative AI models for text and image generation. </li>
                  <li> Enhance deep learning skills with advanced architectures like GANs and diffusion models. </li>
                </ul>
      
                <button className="text-sm m-1 px-1 py-1 hover:border-2 hover:border-blue-400 text-blue-400 rounded-lg">
                  Hugging Face
                </button>
                <button className="text-sm m-1 px-1 py-1 hover:border-2 hover:border-blue-400 text-blue-400 rounded-lg">
                  TensorFlow
                </button>
                <button className="text-sm m-1 px-1 py-1 hover:border-2 hover:border-blue-400 text-blue-400 rounded-lg">
                  PyTorch
                </button>
                <button className="text-sm m-1 px-1 py-1 hover:border-2 hover:border-blue-400 text-blue-400 rounded-lg">
                  FastAPI
                </button>
              </div>
            </div>
          </>
        );
      };
      


      const SkeletonCurrentProject=()=>{
        return(
        <>
        
<div className='flex items-center justify-center  h-full rounded-md bg-gradient-to-r from-pink-500 to-violet-500 '>
    <div className='bg-slate-200/30 dark:bg-black/10 shadow-xl   backdrop-blur-sm rounded-xl border-white/20 py-16 mt-16'>
      <p className=' text-center  backdrop-blur-7xl p-4'>Creating a quiz application for practicing  <strong> CS concepts</strong> with Firebase</p>
      
    </div>
  </div>
        
        </>);
      };

     



  return (
    <div className=' p-3'>
    
  <BentoGrid>
  <BentoGridItem
    header={<SkeletonUX/>}
    className="custom-class"
  />
  <BentoGridItem
    header={<SkeletonWeb/>}
    className="custom-class"
  />
  <BentoGridItem
    header={<SkeletonGoal/>}
    className="custom-class"
  />
  
  <BentoGridItem
    header= {< TechStack />}
    className="md:col-span-2  bg-white-linear dark:bg-black dark:border  rounded-xl bg-blend-overlay"
  />
  
  
  <BentoGridItem
    header={<SkeletonCurrentProject/>}
    title="Currently working on"
    icon={<IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500"  />}
    className="dark:border  rounded-xl bg-blend-overlay p-4 shadow-xl ">

    </BentoGridItem>

</BentoGrid>

    </div>
  )
}

export default MyGrid