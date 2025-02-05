import { CustomFlowbiteTheme, Progress } from "flowbite-react"
import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"


type progress = {
    progressTime: number;
    className?: string;
}

export default function ProgressBar({progressTime, className}:progress) {

    const themeCustom:CustomFlowbiteTheme['progress']={
        "base": "w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700",
        "label": "mb-1 flex justify-between font-medium dark:text-white",
        "bar": "space-x-2 rounded-full text-center font-medium leading-none text-cyan-300 dark:text-cyan-100",
        "color": {
          "dark": "bg-gray-600 dark:bg-gray-300",
          "blue": "bg-blue-600",
          "red": "bg-red-600 dark:bg-red-500",
          "green": "bg-green-600 dark:bg-green-500",
          "yellow": "bg-yellow-400",
          "indigo": "bg-indigo-600 dark:bg-indigo-500",
          "purple": "bg-purple-600 dark:bg-purple-500",
          "cyan": "bg-cyan-600",
          "gray": "bg-gray-500",
          "lime": "bg-lime-600",
          "pink": "bg-pink-500",
          "teal": "bg-teal-600",
          "gradient":"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        },
        "size": {
          "sm": "h-1.5",
          "md": "h-2",
          "lg": "h-4",
          "xl": "h-6"
        }
    }
    


    const ref = useRef<HTMLDivElement>(null)
    const [progressValue,setProgressValue]=useState<number >(0)
    
    const motionValue = useMotionValue(0)
    
    const springvalue = useSpring(motionValue, {
      stiffness: 100,
      damping:100,
    })
  
    const inView = useInView(ref, { once: true })
    
  
    useEffect(() => {
      springvalue.on("change", latest => {
        const value= parseFloat(Intl.NumberFormat('en-US').format(latest.toFixed(0)))
        setProgressValue(value)
        
        
      })
  
    },[springvalue])
    
  
    if (inView) motionValue.set(progressTime)
    
      

    return <>
         <div ref={ref} >
            <Progress
                
                theme={themeCustom}
                 progress={progressValue}
                size="md"
                color="gradient"
              // className="bg-gradient-to-r mt-5 from-indigo-500 via-purple-500 to-pink-500 h-1 rounded-full w-[50%] relative"
                className={` mt-5  rounded-full relative ${className} `}
                
          
            /></div>
    </>
}