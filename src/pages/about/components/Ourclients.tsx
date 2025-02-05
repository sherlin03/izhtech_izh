import { useGetAllClientsListQuery } from "../../../lib/queries/client/useGetClientListQuery";
import { motion } from "framer-motion";
import CustomObject from "../../../shared/components/CustomObjects";
import { fadeIn } from "../../../shared/animation/variants";

export default function Ourclients() {
  const { data: clientsList } = useGetAllClientsListQuery();
  return (
    <div className="relative py-8 mx-auto md:container ">
      <div className="flex flex-col content-center pt-6 pb-6 text-black sm:flex-col md:flex-col lg:flex-row ">
        <div className="">
          <p className="text-base">
            CLIENTS WE WORK FOR
            <br />
          </p>
          <h1 className="text-5xl font-bold">Our clients.</h1>
        </div>
      </div>

      <div className="w-full">
        <ul className="flex flex-wrap w-full ">
          {clientsList?.map((client) => (
            <li className="p-2 pl-0 md:w-1/5 mr-9 ">
              <h1 className="font-bold text-md lg:text-lg">
                {client?.companyName}
              </h1>
              <p className="text-md lg:text-base">
                <a href="" className="text-black">
                  <div
                    dangerouslySetInnerHTML={{ __html: client?.description }}
                  />
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
      <motion.span
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
      >
        <CustomObject
          className="absolute bottom-0 right-0 transform -translate-x-[calc(30%-20px)] flex z-10 max-w-screen-xl h-[42vh] md:-right-20 lg:-right-28"
          variants="orange-half-circle-lines"
        />
      </motion.span>
    </div>
  );
}
