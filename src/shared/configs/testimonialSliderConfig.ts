import { CustomFlowbiteTheme } from "flowbite-react";

export const customTheme: CustomFlowbiteTheme['carousel'] = {

    "root": {
      "base": "relative h-full w-full text-white justify-end text-left ",
      "leftControl": " h-auto absolute bottom-n20 lg:left-0  hidden lg:flex flex  items-center justify-center px-4 focus:outline-none",
      "rightControl": " h-auto absolute bottom-n20 lg:left-[5%]  hidden lg:flex flex  items-center justify-center px-4 focus:outline-none", 
    },
    "indicators": {
      "active": {
        "off": "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        "on": "bg-white dark:bg-gray-800"
      },
      "base": "h-3 w-3 rounded-full",
      "wrapper": "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3"
    },
    "item": {
      "base": "",
      "wrapper": {
        "off": "w-full flex-shrink-0 transform cursor-default snap-center",
        "on": "w-full flex-shrink-0 transform cursor-grab snap-center"
      }
    },
    "control": {
      "base": "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none  group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      "icon": "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
 
    },
    "scrollContainer": {
      "base": "flex h-full snap-mandatory  overflow-x-scroll scroll-smooth rounded-lg",
      "snap": "snap-x"
    }
  }
