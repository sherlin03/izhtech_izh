import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import CustomObject from "../../../shared/components/CustomObjects";
import Accordion from "../../../shared/components/Accordion";

export default function Process() {
  const processContentSetOne = [
    {
      title: "Putting You First",
      description:
        "We start by getting to know you and your needs. We focus on what matters to you as our client. Our aim is to suggest practical, scalable solutions that match your vision.",
    },
    {
      title: "Crafting Visual Blueprints",
      description:
        "   Our screen mockups make ideas real. These designs show a preview of whats coming, giving you a clear look at the future.",
    },
    {
      title: "Artistry Meets Utility",
      description:
        " We blend creativity and functionality in our designs to elevate aesthetics, highlighting key elements for maximum impact .",
    },
  ];
  const processContentSetTwo = [
    {
      title: "Simplify and Elegance in Development",
      description:
        " It powers digital innovation, transforming ideas into practical solutions for users and businesses. Our developer-friendly approach ensures smooth customer experiences, driven by these forces.",
    },
    {
      title: "Meticulous Testing for Perfection",
      description:
        " We thoroughly test at every level—unit, integration, user acceptance—strengthening the softwares reliability and performance to ensure it stands strong.",
    },
    {
      title: "Unveiling Excellence",
      description:
        "Its the big reveal. We prepare by setting up servers, optimizing databases, and ensuring a flawless live performance. Its the moment when your vision becomes reality.",
    },
  ];
  return (
    <div className="py-10">
      <div className="relative flex-col gap-4 py-10 h-4/5 lg:flex lg:flex-row">
        <div className="lg:w-3/4 sm:w-[75%]">
          <div className="flex flex-col h-full py-5 pl-5 ">
            <motion.div
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }}
            >
              {" "}
              <p className="z-10 text-base">OUR PROCESS</p>
              <CustomObject className="absolute -z-10 " variants="green-disk" />
              <h1 className="py-2 text-4xl font-bold">
                Digital Triumph Assurance
              </h1>
              <p className="pt-4 pb-4 text-base">
                How we get things done
                <br />
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }}
              className="absolute right-0 hidden bg-right bg-no-repeat bg-cover top-6 bottom-5 left-72 lg:block" // hide on small screens, show on large screens
              style={{ backgroundImage: "url('images/img/Group11.png')" }}
            ></motion.div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 px-5 py-4 md:gap-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">
        <div className="flex flex-col hidden md:flex-1 lg:w-1/4 md:block">
          <Accordion items={processContentSetOne} />
        </div>
        <div className="flex flex-col hidden md:flex-1 lg:w-1/4 md:block">
          <Accordion items={processContentSetTwo} />
        </div>
        <div className="flex flex-col md:flex-1 lg:w-1/4 md:hidden">
          <Accordion items={[...processContentSetOne, ...processContentSetTwo]} />
        </div>
      </div>
    </div>
  );
}
