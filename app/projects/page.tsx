'use client'
import React, { useState } from 'react'
import Sidebar from "../components/Sidebar";
import ProjectCards from "../components/ProjectCards";
import { MainNavbar } from '../components/MainNavbar';

const Page = () => { // Renamed from 'page' to 'Page'
  const [category, setCategory] = useState<string>("all");

  return (
    <>
      <MainNavbar />
      <div className="flex h-screen">
        <div className="col-span-1">
          <Sidebar setCategory={setCategory} />
        </div>
        <div className="col-span-4 h-screen overflow-auto m-4">
          <ProjectCards category={category} />
        </div>
      </div>
    </>
  );
}

export default Page;