import Image from "next/image";
import Hero from "./components/Hero";
import { FloatingNavDemo } from "./components/navbar";
import RecentProjeccts from "./components/RecentProjeccts";
import { Clients } from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import FooterMain from "./components/FooterMain";
import { Grid } from "./components/Grid";





export default function Home() {
  return (
    <main className="min-h-screen  bg-black-100 dark: text-sm">
     
    <FloatingNavDemo/>
    <Hero/>
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

    <section id="footer" className=" dark:bg-inherit">
      <FooterMain/>
    </section>

   </div>
    
    


    
    
    </main>
  );
}
