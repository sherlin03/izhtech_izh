import { motion } from "framer-motion"
import { fadeIn } from "../../../shared/animation/variants";


type titleValue = {
  title:string
  
}


export default function ServiceDetailHeader({ title }: titleValue) {

  return (
    <motion.section className="pt-4 bg-transparent  lg:py-4" variants={fadeIn("right", 0.3)}
      initial="hidden"
      whileInView="show"
      exit="hidden"
    >
      <div className=" lg:w-full sm:w-[75%] ">
        <div className="flex flex-col justify-end h-full ">
          <p className="pt-4 text-base font-semibold">Our Service</p>
          <h1 className="pt-2 text-5xl font-bold lg:w-3/4 2xl:text-7xl lg:text-6xl">
            {title}
          </h1>
        </div>
      </div>
    </motion.section>
  );
}
