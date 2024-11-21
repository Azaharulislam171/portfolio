"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinte-moving-cards";
import {testimonials } from "../../data/index";

export function Clients() {
  return (
    <div>
      <div className=" text-3xl md:text-5xl font-semibold font-serif font-family:Georgia">
        Kind Words From  <span className="text-blue-400 dark:text-indigo-300"> Patrons...</span>
      </div>

    <div className="h-[32rem] rounded-md flex flex-col antialiased bg-inherit dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>

    </div>
   
  );
}

