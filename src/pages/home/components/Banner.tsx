import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import MissionStatement from "./Missionstatement";
import CustomObject from "../../../shared/components/CustomObjects";

import { LinkButton } from "../../../shared/components/buttons/LinkButton";

export default function banner() {
  return (
    <section className="lg:px-10 pb-12 pt-12  bg-[#F5F7FF] rounded">
      <div className="flex-col justify-center gap-4 px-5 my-auto h-4/5 lg:flex lg:flex-row">
        <motion.div variants={fadeIn("right", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className=" lg:w-4/6 sm:w-[75%] sm:pe-7 lg:m-0 mx-auto relative">
          <div className="relative flex flex-col justify-end h-full pb-5 ">
            <p className="z-10 text-base">
              #Grow_Your_Business
            </p>
            <CustomObject className="absolute top-10 " variants="orange-disk" />
            <h1 className="relative pt-4 text-4xl font-bold 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
            Innovate in Software and Excel in Digital
            </h1>
            <p className="z-10 pt-4 pb-4 text-base text-justify">
            We are dedicated to advancing your business. Whether you're a growing startup, a traditional business adapting to digital transformation, or an individual entrepreneur, our tailored suite of services is strategically crafted to enhance your online visibility and elevate your digital presence.
            </p>
            <LinkButton href={'/about'} variant={"outline"} size={"xs"}>
              Explore More
            </LinkButton> 
            
          
          </div>

        </motion.div>
        <motion.div variants={fadeIn("left", 0.2)}
  initial="hidden"
  whileInView={"show"}
  exit={"hidden"}
  viewport={{ once: false, amount:0.1 }} className="relative flex flex-col justify-end h-full pb-5 mx-auto my-auto lg:w-3/6 sm:w-full ">
    <CustomObject
          className="absolute hidden -left-28 w-100 h-80 -z-1 -top-18 lg:-top-[50px] max-w-screen-2xl lg:block"
          variants="blue-short-line-left"
        />
       
          <img className=" sm:w-[50%] lg:w-[100%] z-10 lg:m-0 mx-auto h-auto" src="/images/bannar1/img.png" />
        </motion.div>
      </div>

      <MissionStatement />
    </section>
  );
}