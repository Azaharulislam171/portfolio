"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconFile, IconMessage, IconUser,IconComponents, IconHome } from "@tabler/icons-react";


export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-blue-500 dark:text-indigo-600" />,
    },
    {
      name: "Resume",
      link: "/resume",
      icon: <IconFile className="h-4 w-4 text-blue-500 dark:text-indigo-600" />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <IconComponents className="h-4 w-4 text-blue-500 dark:text-indigo-600" />,
    },
    {
      name: "Courses",
      link: "/courses",
      icon: (
        <IconMessage className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
      ),
    },
    {
      name: " Student Corner",
      link: "/student_corner",
      icon: <IconUser className="h-4 w-4 text-blue-500 dark:text-indigo-600" />,
    },
  ];

  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} /> 
         
    </div>
  );
}

