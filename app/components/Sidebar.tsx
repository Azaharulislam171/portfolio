import { DatabaseZapIcon, GalleryVerticalEndIcon, Globe, LucideGanttChart } from "lucide-react";
import React from "react";

interface SidebarProps {
  setCategory: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setCategory }) => {
  return (
    <div className="h-screen fixed top-0 left-0 bg-slate-200 dark:bg-gray-900 border-e-4 rounded-e-lg shadow-2xl dark:text-gray-400 border-r flex flex-col p-2 transition-all duration-300 ease-in-out w-16 hover:w-64 md:w-48">
      <h2 className=" text-xsm sm md:text-2xl font-bold mb-4 dark:text-indigo-400 text-blue-500 ">My Projects</h2>

      <div className="flex flex-col gap-2 mt-4">
        <button 
          className="flex items-center rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 w-full text-left px-2 py-1 transition-all duration-300 ease-in-out relative"
          onClick={() => setCategory('all')}>
          <GalleryVerticalEndIcon className="text-blue-600 dark:text-indigo-500" />
          <span className="absolute left-16 hidden hover:block md:inline-block truncate overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out">
            All
          </span>
        </button>

        <button 
          className="flex items-center rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 w-full text-left px-2 py-1 transition-all duration-300 ease-in-out relative"
          onClick={() => setCategory('web')}>
          <Globe className="text-blue-600 dark:text-indigo-500" />
          <span className="absolute left-16 hidden hover:block md:inline-block truncate overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out">
            Web Dev
          </span>
        </button>

        <button 
          className="flex items-center rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 w-full text-left px-2 py-1 transition-all duration-300 ease-in-out relative"
          onClick={() => setCategory('data-analysis')}>
          <DatabaseZapIcon className="text-blue-600 dark:text-indigo-500" />
          <span className="absolute left-16 hidden hover:block md:inline-block truncate overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out">
            Data Analysis
          </span>
        </button>

        <button 
          className="flex items-center rounded-md hover:bg-blue-100 dark:hover:bg-gray-800 w-full text-left px-2 py-1 transition-all duration-300 ease-in-out relative"
          onClick={() => setCategory('data-science')}>
          <LucideGanttChart className="text-blue-600 dark:text-indigo-500" />
          <span className="absolute left-16 hidden hover:block md:inline-block truncate overflow-hidden whitespace-nowrap transition-opacity duration-300 ease-in-out">
            Data Science
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
