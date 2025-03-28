"use client";
import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";

const GetInTouch = () => {
  return (
    <div className="w-full pt-20 pb-4" id="contact">
      

      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl lg:max-w-[45vw]">
          Ready to take <span className=" text-blue-500 dark:text-indigo-500">your  digital
          presence</span> to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:azaharulislam171@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      
    </div>
  )
}

export default GetInTouch