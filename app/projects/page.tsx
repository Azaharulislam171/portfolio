'use client'
import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import ProjectCards from "../components/ProjectCards";
import { FloatingNavDemo } from '../components/navbar';
const page = () => {
  const [category, setCategory] = useState<string>("all");
  return (
    <>
    <FloatingNavDemo/>
    <div className="grid grid-cols-5 h-screen">
        {/* Sidebar takes 1/5th of the grid */}
        <div className="col-span-1 ">
          <Sidebar setCategory={setCategory} />
        </div>
        {/* ProjectCards takes 4/5th of the grid */}
        <div className="col-span-4 h-screen overflow-auto">
          <ProjectCards category={category} />
        </div>
      </div>

    </>
    
  )
}

export default page