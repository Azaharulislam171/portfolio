'use client'
import { FloatingNavDemo } from "../components/navbar";
import Experience from "../components/Experience";
import Approach from "../components/Approach";
import { Grid } from "../components/Grid";
import RecentProjeccts from "../components/RecentProjeccts";
import { Clients } from "../components/Clients";
import { BackgroundBeams } from "../components/ui/background-beams";
import AnimatedImage from "../components/animated_image";
import { TypewriterEffectSmooth } from "../components/ui/typewritter-effect";
import AnimatedButton from "../components/ui/animatedButton";
import FooterMain from "../components/FooterMain";
import { MainNavbar } from "../components/MainNavbar";


export default function Listy() {
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
  return (
    < >
     
    
    <div className=" mx-auto">
    <MainNavbar/>
    <Grid/>
   
    </div>
   </>
  );
}
