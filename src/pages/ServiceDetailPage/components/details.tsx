import { motion } from "framer-motion" 
import { fadeIn } from "../../../shared/animation/variants"
interface propValues{
  header: string,
  description: string,
  izhtech:string
  featuredImagePath:string
}

export default function Details({izhtech,header,description,featuredImagePath}:propValues) {

  return (
    <section>
      <div className="container py-10 mx-auto lg:mx-auto ">
        <div className="flex flex-col gap-8 lg:flex-row xl:gap-16 md:items-center lg:justify-center">
          <div className="lg:w-3/6">
            <motion.img src={featuredImagePath} alt="" className="w-full rounded-xl" variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden"  />
          </div>
          <motion.div className="lg:w-3/6 md:px-14 lg:px-2"  variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            exit="hidden">
            <p className="text-xs font-medium tracking-wide">{ izhtech}</p>
            <p className="xl:text-6xl text-4xl font-bold pb-2.5">
            {header}
            </p>
            <p className="text-sm leading-7 tracking-wider text-justify" dangerouslySetInnerHTML={{ __html: description }}>
 

            </p>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
