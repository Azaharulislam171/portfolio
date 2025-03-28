"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { IconLocationFilled } from "@tabler/icons-react";

const RecentProjects = () => {
  return (
    <div className="py-20 mx-auto">
      <h2 className=" text-3xl md:text-5xl font-semibold font-serif font-family:lato">
        A small selection of{" "}
        <span className=" text-blue-400 dark:text-indigo-300">recent projects...</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({id,title,des,img,iconLists,link,caseLink}) => (
          <div key={id} 
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer
              title={link}
              href={link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image src="/bg.png" width={100} height={100} alt="bgimg" />
                </div>
                <Image
                  width={800}
                  height={800}
                  src={img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
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
                      <Image src={icon} width={100} height={100} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center border-2 border-rose-100 rounded-lg p-1">
                  
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple ">
                   View Case
                  </p>
                  <IconLocationFilled className="ms-3 text-indigo-400 "  />
                
                  
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;