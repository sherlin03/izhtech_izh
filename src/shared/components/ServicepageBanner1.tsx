import { Accordion } from 'flowbite-react';
import { motion } from 'framer-motion';

export default function banner(props:{serviceName:string, description:string}) {
    return (
        <section className="py-4 ">
            <div className="flex flex-col items-center gap-4 sm:flex-col md:flex-col lg:flex-row xl:flex-row lg:gap-28">
                <div className="flex bg-center h-[20rem]  lg:h-[30rem] bg-no-repeat bg-[url('images/servicepage/img.png')]">
                    <div className="container flex items-end justify-center md:justify-end">
                        <div className="grid justify-center p-6 text-white bg-indigo-950 md:pr-32">
                            <div className="flex items-center ">
                                <img src="images/servicepage/Icon2.png" alt="Example Image" className="w-8 h-8" />
                                <h1 className="text-3xl font-bold lg:text-4xl">35+</h1>
                            </div>
                            <p className="pt-2 text-xs">
                                designers  and developers
                            </p>
                        </div>
                        <div className="grid justify-center p-6 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:pr-32">
                            <div className="flex items-center ">
                                <img src="images/servicepage/Icon1.png" alt="Example Image" className="w-8 h-8" />
                                <h1 className="text-3xl font-bold lg:text-4xl">28+</h1>
                            </div>
                            <p className="pt-2 text-xs">
                                awards for digital innovation
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-1 lg:w-1/4">
                    <p className="pb-2 text-xs">OUR SERVICES</p>
                    <h1 className="pb-2 text-3xl font-bold"> {props.serviceName}</h1>
                    <p className="pb-6 text-xs">Reduction in operating costs for the whole product team which creates <br />amazing UI/UX experiences, by crafting top-notch user experience of<br /> funny the century rather.</p>
                    <Accordion className="border-none outline-none">
                        <Accordion.Panel>
                            <Accordion.Title className="text-black ">
                                <span className="flex items-center">
                                    <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                                    Website & Mobile App Design
                                </span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <p className="text-xs text-black">
                                    We have created a full stack structure for our working workflow <br /> processes, were from the funny the century initial all the madness. </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className="text-black ">
                                <span className="flex items-center">
                                    <img src="/images/process/Vector.png" alt="image" className="w-4 h-4 mr-2" />
                                    Motion Graphics & Animation
                                </span>
                            </Accordion.Title>
                            <Accordion.Content>
                                <motion.div  key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
                                <p className="mb-2 text-black dark:text-black">
                                    content
                                </p>
                                </motion.div>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <button className="h-8 mt-4 text-xs font-bold text-white rounded bg-indigo-950 w-28 border-1">
                            Learn more {"->"}
                        </button>
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
