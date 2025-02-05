import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import ProgressBar from "./Progress";
// import Shapes from "../../../shared/animation/Shapes";
import CustomObject from "../../../shared/components/CustomObjects";

export default function Banner() {
  return (
    <section className="flex gap-5 py-3 mx-auto ">
      <div className="relative gap-10 mx-auto lg:flex ">
        <div className="absolute top-0 flex right-20 ">
     
        </div>
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="relative bg-transparent lg:w-1/2"
        >
          <img
            src="images/Aboutpage/img/banner.png"
            alt="Example Image"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.span
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <CustomObject
            className="absolute top-[calc(25%-10px)] left-[calc(45%-10px)] transform -translate-x-1/2 -translate-y-1/2 -z-10 max-w-screen-2xl h-[150vw] lg:h-[100vh]" // Increased size here
            variants="green"
          />
        </motion.span>

        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="flex-col justify-center gap-10 pt-5 md:pe-20 lg:w-1/2 lg:flex"
        >
          <div>
            <h1 className="pb-4 text-4xl font-bold ">
              Business Growth Solution
            </h1>
            <p className="text-justify sm:text-xs lg:text-base md:text-md">
              At IZHTech we help businesses grow. Whether you’re a startup,
              traditional business, or entrepreneur, our service enhance your
              digital presence From app development to branding and marketing,
              we customize solutions to fit your needs
            </p>

            <ProgressBar progressTime={95} />
          </div>

          <div>
            <h1 className="pb-4 text-4xl font-bold">
              Customized Business Success
            </h1>
            <p className="text-justify sm:text-xs lg:text-base md:text-md">
              Get expert help for your business, whether it's in e-commerce or
              healthcare. We customize our services to fit your unique goals,
              always keeping you updated and making sure you see real results.
            </p>
            <ProgressBar progressTime={90} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
