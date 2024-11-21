"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { IconArrowMoveDown } from "@tabler/icons-react";
import Link from "next/link";

const AnimatedButton = () => {
  const arrowRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      arrowRef.current,
      { y: -10, opacity: 1}, // Initial position and fully visible
      {
        y: 5, // End position
        opacity: 0, // Fully transparent
        duration: 1, // Duration of the animation
        ease: "power1.inOut", // Easing function
        repeat: -1, // Infinite repeat
        yoyo: true, // Reverse animation on repeat
      }
    );
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center">
      <button className="relative inline-flex h-16 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-8 cursor-pointer items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
        <div ref={arrowRef} className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <IconArrowMoveDown className="dark:text-white text-indigo-600" size={36} />
      </div>
        </span>
      </button>
     
      <Link href="#dev">
      
      </Link>
    </div>
  );
};

export default AnimatedButton;
