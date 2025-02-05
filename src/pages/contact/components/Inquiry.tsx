/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { fadeIn } from "../../../shared/animation/variants";
import { useCreateContactMutationQuery } from "../../../lib/queries/contact/useCreateContactMutationQuery";
import { useForm } from 'react-hook-form';
import { useGetSiteInfoListQuery } from "../../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";

export default function Inquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const{mutateAsync:contactMutation ,isSuccess:isSuccessContact}=useCreateContactMutationQuery();
const { data: siteInfoList } = useGetSiteInfoListQuery();
const siteInfo= siteInfoList??[];
  

  async function saveContact(payload: any) {
    try{
        contactMutation(payload);
    }
    catch(error){
    console.log(error);
    }
    finally{
        reset();
    }
  }
  return (
    <>
    <section className="">
       
                       
      <div className="flex flex-col lg:flex-row md:flex-row lg:px-8 md:gap-1 xl:gap-6">
        <motion.div variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className=" lg:w-4/12 md:w-6/12">
          <h1 className="mb-3 text-xl font-black">Our Offices</h1>
          <p>Schedule your visit with us</p>
        </motion.div>
        <motion.div variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="">
          <h2 className="mb-3 font-black">Head Office</h2>
          {siteInfo[0]?.address
          }
          <p className="mb-5 font-black">Call us: {siteInfo[0]?.mobilePrimary}</p>
          <p>Monday-Friday</p>
        </motion.div>
      </div>
    </section>
    <section>
      <form  onSubmit={handleSubmit(saveContact)}>
        <div className="flex-none py-4 lg:px-8 md:px-4 lg:flex xl:gap-6 ">
          <motion.div  variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }} className="lg:w-4/12">
            <h2 className="font-bold">Work inquiries</h2>
            <p>
              Fill in this form or{" "}
              <span className="font-bold">send us an e-mail</span> with your
              inquiry.
            </p>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              exit={"hidden"}
              viewport={{ once: false, amount: 0.1 }}className="lg:w-[60%]">
                <div  className="flex flex-wrap w-full gap-2 pt-4 md:p-3 lg:pl-1">
            
              
              <div className="w-full mb-5 md:w-[48%] lg:w-[48%]">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone (optional)
                </label>
                <input
                {...register('mobileNumber')}
                  type="text"
                  id="base-input"
                  placeholder="Your actual number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            
            </div>
           
              <div className="w-full mb-5 md:w-[48%] lg:w-[48%]">
                <label
                  htmlFor="base-input"
                  placeholder="Your Company Name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Company (optional)
                </label>
                <input
                {...register('companyName')}
                  type="text"
                  id="base-input"
                  placeholder="Your Company Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
             
              <div className="w-full mb-5 md:w-[48%] lg:w-[48%]">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Subject (optional)
                </label>
                <input
                {...register('subject')}
                  type="text"
                  id="base-input"
                  placeholder="Your Company Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              </div>
          
              <div className="w-full mb-5 md:w-[48%] lg:w-[48%]">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email (required)
                </label>
                <input
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: 'Invalid email address'
                    }
                })}
                  type="text"
                  id="base-input"
                  placeholder="Your e-mail"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors['email'] && (
                  <p className="h-2 p-1 text-sm text-red-600">
                    {errors['email'].message as string}
                  </p>
                )}
              </div>
             
           
            <div className="w-full mb-5 md:w-[98%] lg:col-span-3 md:col-span-3">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message (required)
              </label>
              <textarea
              {...register('message', {
                required: 'Message is required',
              })}
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Brief project details"
              ></textarea>
              {errors['message'] && (
                  <p className="h-2 p-1 text-sm text-red-600">
                    {errors['message'].message as string}
                  </p>
                )}
              <div className="flex items-center mt-2 mb-4">
                {isSuccessContact&&<p className="text-green-500">Thank you for your inquiry. We will get back to you soon.</p>}
              </div>
            </div>
            </div>
            <button className="h-8 text-xs font-bold text-white rounded bg-indigo-950 w-28 border-1">
            Submit
          </button>
          </motion.div>
        </div>
        </form>
      </section></>
  );
}
