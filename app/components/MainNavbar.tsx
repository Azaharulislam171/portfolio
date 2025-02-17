import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { IconFile, IconMessage, IconUser, IconComponents, IconHome } from '@tabler/icons-react';

export const MainNavbar = () => {
  return (
    <div className="flex justify-center mb-1 w-full bg-inherit shadow-md dark:shadow-indigo-400/40 z-100">
      <div className="p-1 m-1 text-inherit flex items-center space-x-4">     
        <Link href="/">
          <div className="flex flex-col items-center sm:flex-row sm:space-x-1">
            <IconHome className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
            <span className="hidden sm:inline sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600">
              Home
            </span>
          </div>
        </Link>
        <Link href="/resume">
          <div className="flex flex-col items-center sm:flex-row sm:space-x-1">
            <IconFile className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
            <span className="hidden sm:inline sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600">
              Resume
            </span>
          </div>
        </Link>
        <Link href="/projects">
          <div className="flex flex-col items-center sm:flex-row sm:space-x-1">
            <IconComponents className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
            <span className="hidden sm:inline sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600">
              Projects
            </span>
          </div>
        </Link>
        <Link href="/courses">
          <div className="flex flex-col items-center sm:flex-row sm:space-x-1">
            <IconMessage className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
            <span className="hidden sm:inline sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600">
              Courses
            </span>
          </div>
        </Link>
        <Link href="/student_corner">
          <div className="flex flex-col items-center sm:flex-row sm:space-x-1">
            <IconUser className="h-4 w-4 text-blue-500 dark:text-indigo-600" />
            <span className="hidden sm:inline sm:text-xs md:text-sm m-2 dark:hover:text-indigo-400 hover:text-blue-600">
              Student Corner
            </span>
          </div>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
};
