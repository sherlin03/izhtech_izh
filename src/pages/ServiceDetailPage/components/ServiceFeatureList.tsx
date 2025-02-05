import { motion } from "framer-motion"
import { ServicesFeaturesModal } from "../../../lib/domains/serviceFeatures";
import { fadeIn } from "../../../shared/animation/variants";
import DynamicIcon from "../../../shared/components/icon/Icon";
import CustomObject from "../../../shared/components/CustomObjects";


export default function ServiceFeatureList({ datas }:{datas:ServicesFeaturesModal[]}) {
  const replaceStrings = (str: string) => {
    let newStr = str;
    newStr = newStr.replace('background-color: rgb(0, 0, 0);','' ).replace('color','');
    // newStr = newStr.replace('color: rgb(255, 255, 255);','');
    console.log(newStr);
    return newStr;
  };
  return (
  <div className="container relative overflow-hidden">
    <ul className="grid lg:grid-cols-3 lg:gap-5 lg:p-13 py-[4rem]  p-8 gap-[3.3rem]">
      {datas.map((item:ServicesFeaturesModal) => {
        const description = replaceStrings(item?.description);
        console.log(item);
      return <motion.li key={item?.id} className="list-none " variants={fadeIn("up", 0.3)}
      initial="hidden"
      whileInView="show"
        exit="hidden">
        
         <div className="w-[50px] h-[50px] bg-neutral-600 flex text-important justify-center items-center rounded-full">
           <DynamicIcon iconName={item?.icon  as string} />
           
           </div>
          <h1 className="text-slate-50 font-bold text-[1.2rem] py-3">{item?.title}</h1>

          {<div className="!text-white services-description" dangerouslySetInnerHTML={{ __html: description }}/>}

      </motion.li>
      

  })}
  </ul>
  <motion.span
  variants={fadeIn("right", 0.5)}
  initial="hidden"
  whileInView={"show"}
  viewport={{ once: false, amount: 0.1 }}
  className="absolute right-0 bottom-80" // Move the element down
>
  <CustomObject
    className="absolute hidden lg:block right-0 max-w-screen-xl h-[60vw] lg:h-[40vh] opacity-25"
    variants="half-dash-yellow"
  />
</motion.span>

    </div>

  )

}