'use client'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from './ui/canvas-reveal-effect';

export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };

  const AceternityIcon = ({order}:{order:String}) => {
    return (
      <div>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white dark:bg-slate-950 px-3 py-1 text-xl font-semibold px-5  backdrop-blur-3xl text-blue-500 dark:text-white">
            {order}
        </span>
        </button>
      </div>
    );
  };

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  description:string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
 
      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white  text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <h2 className="dark:text-white  text-center text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {description}
        </h2>
      </div>
    </div>
  );
};

const Approach = () => {
  return (
    <div id="Approach">
    <div className=" py-20  text-3xl md:text-5xl font-semibold font-serif font-family:Georgia">
      My  <span className="text-blue-400 dark:text-indigo-300"> Approach...</span>
    </div>

    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-inherit w-full gap-4 mx-auto px-8">
  <Card 
    title="Requirement Analysis" 
    icon={<AceternityIcon order="Phase-1" />}
    description="Collaborating with you to define project goals, gather technical requirements, and outline key functionalities for your application."
  >
    <CanvasRevealEffect
      animationSpeed={5.1}
      containerClassName="bg-gray-900"
    />
  </Card>
  <Card 
    title="Architecture and Design" 
    icon={<AceternityIcon order="Phase-2" />}
    description="Crafting scalable architectures and designing intuitive user interfaces while focusing on performance and security."
  >
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-black"
      colors={[
        [236, 72, 153],
        [232, 121, 249],
      ]}
      dotSize={2}
    />
  </Card>
  <Card 
    title="Development and Deployment" 
    icon={<AceternityIcon order="Phase-3" />}
    description="Building, testing, and deploying your application with a focus on clean code, best practices, and seamless user experience."
  >
    <CanvasRevealEffect
      animationSpeed={3}
      containerClassName="bg-sky-600"
      colors={[[125, 211, 252]]}
    />
  </Card>
</div>


    </div>

  )
}

export default Approach