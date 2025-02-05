import { motion } from "framer-motion";
import { ServicesHighlightsModal } from "../../../lib/domains/serviceHighlights";
import { fadeIn } from "../../../shared/animation/variants";

export default function ServiceHighlights({ datas }: {datas:ServicesHighlightsModal[]}) {
  console.log(datas);

  return (
    <section>
      {datas.map((item: ServicesHighlightsModal, index: number) => {
        console.log(item);
        if (index % 2 === 0) {
          return (
            <div className="container px-2 py-10 mx-auto lg:mx-auto lg:px-16">
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:gap-16 md:items-center lg:justify-center">
                <motion.img
                  src={`${import.meta.env.VITE_BASE_URL}/${item?.imagePath}`}
                  alt=""
                  className="w-full rounded-lg lg:w-1/2 h-40rem"
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                />
                <motion.div
                  className="w-full px-2 lg:w-1/2"
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  <p className="text-xs font-medium tracking-wide"></p>
                  <p className="xl:text-6xl text-4xl font-bold pb-2.5">
                    {item.name}
                  </p>
                  <p
                    className="text-sm leading-7 tracking-wider text-justify"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                </motion.div>
              </div>
            </div>
          );
        } else {
          return (
            <div className="container px-2 py-10 mx-auto lg:mx-auto lg:px-16 bg-teal-50">
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-8 xl:gap-16 md:items-center lg:justify-center">
                <motion.div
                  className="w-full px-2 lg:w-1/2"
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                >
                  <p className="text-xs font-medium tracking-wide"></p>
                  <p className="xl:text-6xl text-4xl font-bold pb-2.5">
                    {item.name}
                  </p>
                  <p
                    className="text-sm leading-7 tracking-wider text-justify"
                    dangerouslySetInnerHTML={{ __html: item?.description }}
                  ></p>
                </motion.div>
                <motion.img
                  src={`${import.meta.env.VITE_BASE_URL}/${item?.imagePath}`}
                  alt=""
                  className="w-full rounded-lg lg:w-1/2 h-40rem"
                  variants={fadeIn("left", 0.3)}
                  initial="hidden"
                  whileInView="show"
                  exit="hidden"
                />
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}
