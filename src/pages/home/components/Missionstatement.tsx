import {  motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import { LinkButton } from "../../../shared/components/buttons/LinkButton";
import { BarChartHorizontalBig, Network, Target } from "lucide-react";
import { useGetSiteInfoListQuery } from "../../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";

export default function MissionStatement() {
  // const time = useTime();
  // const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
  const { data: siteInfoList } = useGetSiteInfoListQuery();
const siteInfo= siteInfoList??[];
  

  return (
    <div>
     {siteInfo?.length > 0 && (
      <div  className="flex flex-col w-full gap-6 px-5 pt-8 md:flex-row lg:flex-row lg:flex-wrap lg:justify-center">
 <motion.div
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 exit={"hidden"}
 viewport={{ once: false, amount: 0.1 }}
 className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
>
 <div className="flex flex-col justify-center order-2 md:order-1">

   <span
     className="flex justify-center w-20 h-20 mt-5 bg-blue-100 rounded-full justify-item-center md:w-12 md:h-12">
       <Network className="w-1/2 mx-auto my-auto text-blue-400 h-1/2" /> 
       </span>
 </div>
 <div className="w-1/2 md:w-full md:order-2">
   <h2 className="pt-2 text-lg font-bold">Vision</h2>
   <p className="pt-2 pb-3 text-base">
    {siteInfo[0]?.vision}
   </p>
   <LinkButton
     href={"/about"}
     size={"xs"}
     className="w-32 px-2 text-white bg-black "
   >
     Explore More
   </LinkButton>
 </div>
</motion.div>
<motion.div
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 exit={"hidden"}
 viewport={{ once: false, amount: 0.1 }}
 className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
 >
   <div className="flex flex-col justify-center order-2 md:order-1">
   <span
     className="flex justify-center w-20 h-20 mt-5 bg-green-100 rounded-full justify-item-center md:w-12 md:h-12">
       
       <Target className="w-1/2 mx-auto my-auto text-green-400 h-1/2" /> </span>
 </div>
 <div className="order-1 w-1/2 md:w-full md:order-2">
 <h2 className="pt-2 text-lg font-bold">Mission</h2>
 <p className="pt-2 pb-3 text-base">
 {siteInfo[0]?.mission}
 </p>
 <LinkButton
   href={"/about"}
   size={"xs"}
   className="w-32 px-2 text-white bg-black "
 >
   Explore More
 </LinkButton>
 </div>
</motion.div>
<motion.div
 variants={fadeIn("up", 0.2)}
 initial="hidden"
 whileInView={"show"}
 exit={"hidden"}
 viewport={{ once: false, amount: 0.1 }}
 className="flex justify-around py-2 border-t md:flex-1 lg:w-1/4 border-slate-600 md:flex-col"
>
 <div className="flex flex-col justify-center order-2 md:order-1">
 <span
     className="flex justify-center w-20 h-20 mt-5 bg-orange-100 rounded-full justify-item-center md:w-12 md:h-12">
      
       <BarChartHorizontalBig className="w-1/2 mx-auto my-auto text-orange-400 h-1/2" /> </span>
 </div>
 <div className="order-1 w-1/2 md:w-full md:order-2">
   <h2 className="pt-2 text-lg font-bold">Values</h2>
   <p className="pt-2 pb-3 text-base">
   {siteInfo[0]?.values}
   </p>
   <LinkButton
     href={"/about"}
     size={"xs"}
     className="w-32 px-2 text-white bg-black "
   >
     Explore More
   </LinkButton>
 </div>
</motion.div>
</div>
      )}

     
    </div>
  );
}
