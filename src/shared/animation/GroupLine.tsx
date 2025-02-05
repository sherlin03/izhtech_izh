
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

type propsType={
    parentClassName?:string | '',
    svgClassName?:string | '',
    ringColor?:string | 'purple'
}

export default function GroupLine({parentClassName,  ringColor='purple'}:propsType) {
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
                                r="20"
                                fill="transparent"
                                style={{ pathLength: scrollYProgress }}
                                strokeDashoffset="calc(400 - (400 * 15) / 100)"
                            >
                            <motion.circle
                                className={` stroke-1 stroke-current text-${ringColor}-600 progress-ring__circle stroke-${ringColor}-600`}
                                strokeWidth="0.2"
                                strokeLinecap="round"
                                cx="50"
                                cy="30"
                                r="20"
                                fill="transparent"
                                style={{ pathLength: scrollYProgress }}
                                strokeDashoffset="calc(400 - (400 * 45) / 100)"
                            ></motion.circle>
                            </motion.circle>

                          
                        </svg>
                    </div>
          {/* <svg id="progress" className={` ${svgClassName} progress  stroke-${ringColor}-600`} width="75" height="75" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className={`stroke-${ringColor}-50`}  />
        
          </svg> */}
        </figure>
      </div>
    // </section>
  );
}