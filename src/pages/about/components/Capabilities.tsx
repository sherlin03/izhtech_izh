import { motion } from "framer-motion";
import CustomObject from "../../../shared/components/CustomObjects";
import { fadeIn } from "../../../shared/animation/variants";

export default function PlatformInsights() {
  return (
    <section className="flex gap-5 pt-3 mx-auto row">
      <div className="flex flex-col w-full pt-3 mx-auto lg:gap-20 lg:flex-row">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex flex-col justify-center w-full py-10 lg:py-0 md:flex-1 lg:w-1/2 lg:w-1/4 lg:ps-5 2xl:ps-48 "
        >
          <CustomObject className="absolute -z-10" variants="green-disk" />
          <p className="text-base">CAPABILITIES </p>
          <h1 className="pt-2 text-4xl font-bold lg:text-5xl ">
            Versatile expertise, tailored strategies, and innovative solutions
            for transparent, impactful outcomes
          </h1>
        </motion.div>
        <motion.span
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        ></motion.span>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="relative lg:w-1/2"
        >
          <img
            src="images/Aboutpage/img/capabilities.png"
            className="relative z-20 w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
