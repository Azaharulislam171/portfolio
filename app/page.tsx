import { FloatingNavDemo } from "./components/navbar";
import RecentProjeccts from "./components/RecentProjeccts";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import { BackgroundBeams } from "./components/ui/background-beams";
import AnimatedImage from "./components/Animated_image";
import { TypewriterEffectSmooth } from "./components/ui/typewritter-effect";
import AnimatedButton from "./components/ui/animatedButton";
import MyGrid from "./components/MyGrid";
import GetInTouch from "./components/FooterMain";

export default function Home() {
  const words = [
    {
      text: "Seeker |",
      className: "text-blue-400 dark:text-indigo-300",
    },
    {
      text: "Developer |",
      className: "text-blue-500 dark:text-indigo-400",
    },
    {
      text: "Educator...",
      className: "text-blue-600 dark:text-indigo-500",
    },
  ];

  return (
    <>
      <div className="mx-auto">
        <FloatingNavDemo />
        <div className="w-full flex flex-col items-center justify-center min-h-screen">
          <div>
            <BackgroundBeams />
          </div>
          <div className="mt-32">
            <AnimatedImage
              src="/logo_ai.png"
              alt="Description of the image"
              className="w-80 h-80"
            />
          </div>
          <div>
            <TypewriterEffectSmooth words={words} />
          </div>
          <div>
            <AnimatedButton />
          </div>
        </div>

        <div className="md:m-20 m-4">
          <section id="Grid" className="dark:bg-inherit">
            <MyGrid />
          </section>

          <section id="recent_projects" className="dark:bg-inherit">
            <RecentProjeccts />
          </section>

          <section id="experience" className="dark:bg-inherit">
            <Experience />
          </section>

          <section id="approach" className="dark:bg-inherit">
            <Approach />
          </section>

          <section id="footer" className="dark:bg-inherit">
            <GetInTouch />
          </section>
        </div>
      </div>
    </>
  );
}
