

import { fadeIn } from "../../../shared/animation/variants";
import { motion } from "framer-motion";
import  Accordion  from "../../../shared/components/Accordion";
import { LinkButton } from "../../../shared/components/buttons/LinkButton";
import { ServicesModal } from "../../../lib/domains/services";
import { ServicesFeaturesModal } from "../../../lib/domains/serviceFeatures";


export default function ImageSecondServiceBlock(props: ServicesModal) {
  const {id,title,shortNote,featuredImagePath,serviceFeatures} = props;
  const features= serviceFeatures.filter((feature:ServicesFeaturesModal)=>feature.isFeatured===true)  
  
  return (
    <section className="px-5 container-fluid">
      <div className="flex flex-col items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-5">
        <motion.div  variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="order-2 w-full px-5 py-10 mt-5 md:order-1 lg:py-0 md:flex-1 lg:w-1/2 lg:w-1/4 lg:pe-20 xl:pe-36">
          <p className="pb-2 text-xs">OUR SERVICES</p>
          <h1 className="pb-2 text-3xl font-bold"> {title}</h1>
          <div dangerouslySetInnerHTML={{ __html: shortNote?.toString() || '' }} />
          <div className="mt-5">
            <Accordion items={features} />
          </div>
          <LinkButton href={`/service-detail/${id}`} size={'sm'} >Know more</LinkButton>
        </motion.div>
        <motion.div  variants={fadeIn("right", 0.1)} 
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"} 
              viewport={{ once: false, amount: 0.1 }}  className={`w-[100%] bg-no-repeat flex bg-cover h-[20rem] lg:w-1/2 lg:h-[40rem] order-1 md:order-2`}>
             <img className="lg:w-[100%] lg:h-[40rem] w-1\2 bg-no-repeat flex bg-cover h-[20rem] " src={`${import.meta.env.VITE_BASE_URL}/${featuredImagePath}`} alt="" /> 
        </motion.div>
      </div>
    </section>
  );
}
