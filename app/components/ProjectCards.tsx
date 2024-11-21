"use client";

import React from "react";
import { projects } from "@/data"; // Import your project data
import { PinContainer } from "../components/ui/Pin"; 
import { IconLocationFilled } from "@tabler/icons-react";
import Link from "next/link";

interface ProjectCardsProps {
  category: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ category }) => {
  // Filter projects based on selected category
  const filteredProjects = category === "all" ? projects : projects.filter((project) => project.category === category);

  return (
    <div className="flex flex-wrap items-center justify-center ms-2 gap-12">
      {filteredProjects.map(({ id, title, des, img, iconLists, link, caseLink }) => (
        <div key={id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]">
          <PinContainer title={link} href={link} className="relative z-50" containerClassName="relative group z-50 cursor-pointer">
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <img src={img} alt={title} className="z-10 absolute bottom-0" />
            </div>

            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>

            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
              {des}
            </p>

            <div className="flex items-center justify-between mt-7 mb-3">
              <div className="flex items-center">
                {iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                    style={{
                      transform: `translateX(-${5 * index + 2}px)`,
                    }}
                  >
                    <img src={icon} alt={`icon-${index}`} className="p-2" />
                  </div>
                ))}
              </div>

             
                <div className="flex justify-center items-center border-2 border-rose-100 rounded-lg p-1 cursor-pointer hover:bg-rose-100">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                  <Link href={caseLink} >
                  View Case
                  </Link>
                  </p>
                  <IconLocationFilled className="ms-3 text-indigo-400" />
                </div>
              
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
