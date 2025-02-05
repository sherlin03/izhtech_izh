
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

type propsType={
    parentClassName?:string | '',
    innerText?:string | '',
    ringColor?:string | 'purple'
} 

export default function PieScroll({parentClassName, innerText, ringColor='purple'}:propsType) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });



  return (
    // <section>
      <div ref={ref}>
        
        <figure className={` ${parentClassName}`}>
        <div className="relative w-40 h-40 ml-4">
                        <svg  className="w-full h-full" viewBox="0 0 100 100">
                            <motion.circle
                                className={` stroke-1 stroke-current text-${ringColor}-600 progress-ring__circle stroke-${ringColor}-600`}
                                strokeWidth="0.2"
                                strokeLinecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                style={{ pathLength: scrollYProgress }}
                                strokeDashoffset="calc(400 - (400 * 45) / 100)"
                            />
                            <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" className="font-bold" alignmentBaseline="middle">{innerText}</text>
                        </svg>
                    </div>
          
        </figure>
      </div>
    // </section>
  );
}