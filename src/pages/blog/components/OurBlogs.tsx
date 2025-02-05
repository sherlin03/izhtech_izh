import { motion } from "framer-motion";
import CustomObject from "../../../shared/components/CustomObjects";
import { LinkButton } from "../../../shared/components/buttons/LinkButton";
import { fadeIn } from "../../../shared/animation/variants";

export default function OurBlogs() {
  return (
    <section className="relative py-5 bg-transparent lg:py-10 ">
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        exit={"hidden"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex-col justify-center gap-4 my-auto h-4/5 lg:flex lg:flex-row"
      >
        <div className="w-full mx-auto ">
          <div className="flex flex-col justify-end h-full ">
            <CustomObject className="absolute -z-40" variants="green-disk" />
            <h1 className="pt-4 text-5xl font-bold lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
              Our Blogs
            </h1>
            <p className="pt-4 pb-4 text-base">
              Leave us a little info, and we’ll be in touch.
            </p>
            <LinkButton href={`/contact`} className="mt-0 bg-black" size={"sm"}>
              Contact Us
            </LinkButton>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
