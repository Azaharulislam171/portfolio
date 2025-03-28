"use client";
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from "react-icons/fa6";
import Image from 'next/image'; // Import the Image component from next/image
import { socialMedia } from "@/data";
import { FaKaggle,FaGithub, FaLinkedin } from "react-icons/fa6";

const FooterSmall = () => {
  return (
    <footer className="w-full p-2" id="contact">
      <hr></hr>
      <div className="flex mt-4 p-4 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light font-audiowide">
          © Azaharul Islam | 2025
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-16 h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75  rounded-lg border-4 border-black ;"
              onClick={() => info.link && window.open(info.link, "_blank")} // Open link in a new tab
            >
              
              
            <div className='text-3xl text-black dark:text-indigo-500'> {info.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default FooterSmall;