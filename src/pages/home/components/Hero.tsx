import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import CustomObject from "../../../shared/components/CustomObjects";

export default function Hero() {
  return (
    <>
      <div className="md:container relative flex justify-center md:h-full h-[60vh] mx-auto ">
        <div className="flex flex-col justify-center gap-4 px-5 my-auto md:flex md:flex-row md:pb-20 lg:pb-0">
          <div className=" flex flex-col  justify-end lg:w-4/6 sm:w-[75%] sm:px-11 md:px-0 lg:px-11 lg:m-0 mx-auto">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }}
              className="flex flex-col xl:pl-36 lg:pl-16"
            >
              <p className="text-[#0C1C28]  order-2 lg:order-1 text-justify pt-5 text-base md:text-xs lg:text-sm">
                Don't navigate the digital world alone. We're your trusted
                partner, providing comprehensive solutions to ignite your online
                journey. Let's unlock your true potential and fuel your brand's
                growth together!
                {/* Explore our one-stop digital solutions, offering top-notch services for all your needs.Our varied services boost online success */}
              </p>
              <h1 className="order-1 text-[46px] font-black  lg:order-2 lg:text-5xl 2xl:text-7xl sm:text-4xl">
                Want to elevate your business?
              </h1>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            exit={"hidden"}
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="relative flex flex-col justify-end hidden h-full pb-5 mx-auto md:block lg:w-3/6 sm:w-full "
          >
            <img
              className=" sm:w-[50%] md:w-[80%] lg:w-[75%] lg:m-0 mx-auto h-auto "
              src="/images/hero/bg-1.png"
            />
            {/* <Lottie animationData={dot} loop={true} className="absolute bottom-[-14rem] w-[75%] left-[5rem]"/> */}
          </motion.div>
        </div>
        {/* <Lottie
          animationData={dot}
          loop={true}
          className="absolute bottom-0 right-0 w-[75%] md:bottom-[-14rem] md:w-[25%] md:right-[-9rem] z-[-1]"
        /> */}
      </div>
      <motion.span
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <CustomObject
          className="absolute -top-60 md:-top-64 -z-10 md:-left-80 lg:-left-[290px] xl:-left-90 -left-[700px] max-w-screen-2xl h-[220vw] md:h-[85vh] lg:h-[125vh] hidden md:block"
          variants="full"
        />
      </motion.span>
      
    </>
  );
}
