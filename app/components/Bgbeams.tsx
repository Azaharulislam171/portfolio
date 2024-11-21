"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { TypewriterEffectSmooth } from "./ui/typewritter-effect";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import AnimatedImage from "./animated_image";
import AnimatedButton from "./ui/animatedButton";

export function BackgroundBeamsDemo() {
    const words = [
        {
          text: "Seeker |",
          className:" text-blue-400 dark:text-indigo-300",
        },
        {
          text: "Developer |",
          className:" text-blue-500 dark:text-indigo-400",
        },
        
        {
          text: "Educator...",
          className: "text-blue-600 dark:text-indigo-500",
        },
      ];
      const hero_paragraph=" Tansforming ideas into reality";
  return (
    <div className="h-[48rem] w-full rounded-md bg-black-100 relative flex flex-col items-center justify-center antialiased">
      
      <div className="max-w-2xl mx-auto p-4">
     

      <Spotlight/>
      <div className="pt-32">
      <AnimatedImage
        src="/ai.png"
        alt="Description of the image"
        className="w-84 h-80 "
      />
      </div>

        <h1 className="relative   z-10 text-xl text-upper md:text-7xl  bg-clip-text text-transparent dark:bg-gradient-to-b from-neutral-200 to-neutral-600 bg-gradient-to-b from-gray-800 to-neutral-600  text-center font-sans font-bold">
          AZAHARUL ISLAM
        </h1>
       
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          
        </p>
       
      </div>
      <div>
      <TextGenerateEffect
        className='text-white font-semibold font-sans'
        words={hero_paragraph}
        />
      </div>
      <div className=" ">
      <TypewriterEffectSmooth words={words} />
      </div>
     
        <div className="h-48">
        <BackgroundBeams />
        </div>
        <div>
       

      <AnimatedButton/>
        </div>
      
    </div>
  );
}
