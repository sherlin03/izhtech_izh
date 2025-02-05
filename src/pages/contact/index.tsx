import CustomObject from "../../shared/components/CustomObjects";
import Contactus from "./components/Contactus";
import Inquiry from "./components/Inquiry";
import Map from "./components/Map";
import { fadeIn } from "../../shared/animation/variants";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section className="container mx-auto">
        <Contactus />
      </section>
      <Map />
      <section className="container relative pt-1 pb-6 mx-auto ">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView="show"
          exit="hidden"
        >
          {" "}
          <CustomObject
            className="absolute w-[45%] lg:w-[17%] right-4 -z-10 hidden md:block"
            variants="line-teal-up"
          />
        </motion.div>
        <div className="py-8">
          <Inquiry />
        </div>
      </section>
    </>
  );
}
