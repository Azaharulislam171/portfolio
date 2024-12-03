"use client";

import React, { useEffect, useState } from "react";
import { projects } from "@/data"; // Import your project data
import { PinContainer } from "../components/ui/Pin";
import { IconLocationFilled } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardsProps {
  category: string;
}

const ProjectCards: React.FC<ProjectCardsProps> = ({ category }) => {
  const [filteredProjects, setFilteredProjects] = useState<typeof projects>([]);

  useEffect(() => {
    const filtered = category === "all" ? projects : projects.filter((project) => project.category === category);
    setFilteredProjects(filtered);
  }, [category]);

  return (
    <div className="flex flex-wrap items-center justify-center m-4 gap-12">
      {filteredProjects.map(({ id, title, des, img, iconLists, link, caseLink }) => (
        <div
          key={id}
          className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
        >
          <PinContainer
            title={link}
            href={link}
            className="relative z-50"
            containerClassName="relative group z-50 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
              <Image
                src={img}
                alt={title}
                layout="fill"
                objectFit="cover"
                className="z-10 absolute bottom-0"
              />
            </div>

            {/* Title and Description */}
            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
            <p
              className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
              style={{ color: "#BEC1DD", margin: "1vh 0" }}
            >
              {des}
            </p>

            {/* Icons and Case Link */}
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
                    <Image
                      src={icon}
                      alt={`icon-${index}`}
                      width={24}
                      height={24}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
              <Link href={caseLink} prefetch={false} className="flex justify-center items-center border-2 border-orange-100 rounded-lg p-1 cursor-pointer hover:bg-rose-100">
                  <span className="flex lg:text-xl md:text-xs text-sm text-purple">View Case</span>
                  <IconLocationFilled className="ms-3 text-orange-100" />
                
              </Link>
            </div>
          </PinContainer>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
