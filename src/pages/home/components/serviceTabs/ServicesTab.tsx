import { Card, Progress } from "flowbite-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../../shared/animation/variants";
import { ServicesModal } from "../../../../lib/domains/services";
import { ServicesFeaturesModal } from "../../../../lib/domains/serviceFeatures";
import DynamicIcon from "../../../../shared/components/icon/Icon";

export default function ServicesTab(props: ServicesModal) {
    const {title,shortNote,featuredImagePath,serviceFeatures} = props;
    const colors = [
      'bg-purple-300',
      'bg-pink-300',
      'bg-cyan-300',
      'bg-indigo-300',
      'bg-teal-300',
      'bg-orange-300',
      'bg-lime-300',  
      'bg-red-300',
      'bg-blue-300',
      'bg-green-300',
      'bg-yellow-300'
         
    ];

  return (
    <div className="flex flex-col items-start flex-1 p-4 sm:flex-row">
      {/* Card */}
      <motion.div
        variants={fadeIn("right", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <Card
          className="max-w-sm shadow-none "
          imgAlt="img"
          imgSrc={`${import.meta.env.VITE_BASE_URL}/${featuredImagePath}`}
        >
          <div className="flex flex-col gap-2">

            <div className="text-xl font-bold dark:text-white">
              {title}
            </div>
            
            <Progress
              progress={45}
              size="sm"
              className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative"
            />
          </div>
          <p className="text-gray-700 text-md dark:text-gray-400">
            {shortNote?.toString() || ''}
          </p>
        </Card>
      </motion.div>
      {/* Right */}
      <div className="flex-1 mt-0 sm:ml-4">
        <div className="flex flex-col w-full px-2 gap- lg:justify-center">
        {serviceFeatures?.map((serviceFeature: ServicesFeaturesModal, index) => {
  return (
            serviceFeature.isFeatured && 
            <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.1 }}
                className="flex flex-col border-slate-600 md:flex-1 lg:w-full "
            >
              <span className={`flex items-center justify-center w-12 h-12 mt-5 rounded-full ${colors[index%10]}`}>
                <DynamicIcon iconName={serviceFeature?.icon  as string} size={28} className="text-white"/>
              </span>
            <h2 className="pt-2 font-bold text-md">
                {serviceFeature.title}
            </h2>
                <div className="pt-2 pb-3 text-sm" dangerouslySetInnerHTML={{ __html: serviceFeature.description }} />
        </motion.div>
        );
        })}
                      
        </div>
      </div>
    </div>
  );
}
