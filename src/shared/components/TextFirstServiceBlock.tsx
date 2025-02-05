/* eslint-disable @typescript-eslint/no-explicit-any */
import { ServiceBlockProps } from "./types/services";
import { fadeIn } from "../animation/variants";
import { motion } from "framer-motion";
import Counter from "../animation/Counter";
import Accordion from "./Accordion";
import { LinkButton } from "./buttons/LinkButton";
import { useGetSiteInfoListQuery } from "../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";

export default function TextFirstServiceBlock(props: ServiceBlockProps) {
  const { data: siteInfoList  } = useGetSiteInfoListQuery() ?? [] ;
  const siteInfo=siteInfoList?.[0];

  return (
    <section className="container-fluid ">
      <div className="flex flex-col items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-5">
        <motion.div
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          exit={"hidden"}
          viewport={{ once: false, amount: 0.1 }}
          style={{ backgroundImage: `url('${props.imageSrc}')` }}
          className={`w-[100%] flex bg-center h-[20rem] lg:w-1/2 lg:h-[40rem] lg:order-2  `}
        >
          <div className="flex items-end self-end justify-end hidden">
            <div className="grid justify-center p-6 text-white bg-indigo-950 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon2.png"
                  alt="Example Image"
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl">
                  {siteInfo && (<>

<Counter value={siteInfo.teamCount as any} direction="up" />+
                  </>)}
                  
                </h1>
              </div>
              <p className="pt-2 text-xs">designers and developers</p>
            </div>
            <div className="grid justify-center p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pr-32">
              <div className="flex items-center ">
                <img
                  src="images/servicepage/Icon1.png"
                  alt="Example Image" 
                  className="w-8 h-8"
                />
                <h1 className="text-3xl font-bold lg:text-4xl">
                  <Counter value={siteInfo?.projectHandled as any} direction="up" />+
                </h1>
              </div>
              <p className="pt-2 text-xs"> digital innovations</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          exit={"hidden"}
          viewport={{ once: false, amount: 0.1 }}
          className="order-1 w-full px-5 py-10 lg:py-5 lg:order-1 md:flex-1 lg:w-1/2 lg:w-1/4 lg:ps-20 xl:ps-36"
        >
          <p className="pb-2 text-xs">OUR SERVICES</p>
          <h1 className="pb-2 text-3xl font-bold"> {props.serviceName}</h1>
          <p className="pb-6 text-xs">{props.description}</p>

          <Accordion items={props.listItem} />

          <LinkButton href={`${props.link}`} size={'sm'} >Know more</LinkButton>

        </motion.div>
      </div>
    </section>
  );
}
