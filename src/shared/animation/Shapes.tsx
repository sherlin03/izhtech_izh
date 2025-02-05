
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "../../utils";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    const delay = 1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export default function Shapes({ color='green-700', className='rotate-45',shape = "circle", height =150, width=150 }: {color?:string, className?:string, shape?: string, height?:number, width?:number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <motion.svg
    className={cn(className)}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileInView={"visible"}
    >
      {shape === "circle" && (
        <motion.circle
          cx="100"
          cy="100"
          r={width/4}
          stroke="#00cc88"
          className={`stroke-${color} `}
          variants={draw}
          custom={1}
        />
      )}
      {shape === "cross" && (
        <>
          <motion.line
            x1="220"
            y1="30"
            x2="360"
            y2="170"
            stroke="#00cc88"
            variants={draw}
            custom={2}
          />
          <motion.line
            x1="220"
            y1="170"
            x2="360"
            y2="30"
            stroke="#00cc88"
            variants={draw}
            custom={2.5}
          />
        </>
      )}
      {shape === "rectangle" && (
        <motion.rect
          className={`stroke-[5px] fill-transparent stroke-${color} w-8 h-8"`}
          x="410"
          y="30"
          rx="5"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      )}

      {shape === "triangle" && (
        <motion.polygon
          className={`stroke-[5px] fill-transparent stroke-${color}`}
          points="50,15 90,85 10,85"
          stroke="#0099ff"
          variants={draw}
          custom={3}
        />
      )}
    </motion.svg>
  );
}
