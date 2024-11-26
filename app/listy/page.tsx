'use client'
import Image from "next/image";
import Link from "next/link";
import { MainNavbar } from "../components/MainNavbar";
import Bubble from "../components/Bubble";
import { FloatingNavDemo } from "../components/navbar";
import Experience from "../components/Experience";
import ProjectCards from "../components/ProjectCards";
import Approach from "../components/Approach";
import { Grid } from "../components/Grid";
import RecentProjeccts from "../components/RecentProjeccts";
import { Clients } from "../components/Clients";
import Hero from "../components/Hero";
import { BackgroundBeamsDemo } from "../components/BackgroundBeamsDemo";


export default function Listy() {
  return (
    < >
     
    
    <div className=" mx-auto">
    <FloatingNavDemo/>
    <BackgroundBeamsDemo/>
    <div className="  md:m-20 m-4">
   <section id="dev" className=" dark:bg-inherit">
    <Grid />
    </section>

    <section id="recent_projects" className=" dark:bg-inherit">
      <RecentProjeccts/>
    </section>

    <section id="clients" className=" dark:bg-inherit">
      <Clients/>
    </section>

    <section id="experience" className=" dark:bg-inherit">
      <Experience/>
    </section>

    <section id="approach" className=" dark:bg-inherit">
      <Approach/>
    </section>

    

   </div>
    
    </div>


    
   </>
  );
}
