"use client";
import React from 'react'
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";

const FooterSmall = () => {
  return (
    <footer className="w-full pt-20 pb-4" id="contact">
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Azaharul Islam
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              onClick={() => info.link && window.open(info.link, "_blank")} // Open link in a new tab
            >
              <img src={info.img} alt="icons" width={20} height={20} 
             />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterSmall