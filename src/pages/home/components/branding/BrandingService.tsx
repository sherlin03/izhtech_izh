// import { Card, Progress } from "flowbite-react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../../../shared/animation/variants";

// export default function BrandingService() {
//   return (
//     <div className="flex flex-col items-start flex-1 p-4 sm:flex-row">
//       {/* Card */}
//       <motion.div
//         variants={fadeIn("right", 0.1)}
//         initial="hidden"
//         whileInView={"show"}
//         viewport={{ once: false, amount: 0.1 }}
//       >
//         <Card
//           className="hidden max-w-sm shadow-none sm:block "
//           imgAlt="img"
//           imgSrc="/images/Ourservice/Img.png"
//         >
//           <div className="flex flex-col gap-2">
//             <div className="text-base font-medium dark:text-white">
//               Branding
//             </div>
//             <Progress
//               progress={45}
//               size="sm"
//               className=" bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 h-2.5 rounded-full w-[50%] relative"
//             />
//           </div>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             Branding shapes a distinct identity for a business in the minds of
//             the target audience and the general population.
//           </p>
//         </Card>
//       </motion.div>
//       {/* Right */}
//       <div className="flex-1 mt-4 sm:ml-4">
//         <div className="flex flex-col w-full px-2 gap- lg:justify-center">
//           <motion.div
//             variants={fadeIn("right", 0.2)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.1 }}
//             className="flex flex-col border-slate-600 md:flex-1 lg:w-full "
//           >
//             <img
//               src="/images/Ourservice/icon1.png"
//               alt="Image"
//               className="w-12 h-12 mt-5"
//             />
//             <h2 className="pt-2 text-sm font-bold">
//               1. Creating Brand Identities
//             </h2>
//             <p className="pt-2 pb-3 text-xs">
//               Create powerful brand identities that connect with your audience{" "}
//             </p>
//           </motion.div>

//           <motion.div
//             variants={fadeIn("right", 0.4)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.1 }}
//             className="flex flex-col mt-4 md:flex-1 lg:w-full border-slate-600 sm:mt-0"
//           >
//             <img
//               src="/images/Ourservice/icon2.png"
//               alt="Image"
//               className="w-12 h-12 mt-5"
//             />
//             <h2 className="pt-2 text-sm font-bold">
//               2. Distinctive Spacing Design
//             </h2>
//             <p className="pt-2 pb-3 text-xs">
//               Develop a unique spacing strategy to guide people through an
//               enhanced brand experience{" "}
//             </p>
//           </motion.div>

//           <motion.div
//             variants={fadeIn("right", 0.6)}
//             initial="hidden"
//             whileInView={"show"}
//             viewport={{ once: false, amount: 0.1 }}
//             className="flex flex-col mt-4 md:flex-1 lg:w-full border-slate-600 sm:mt-0"
//           >
//             <img
//               src="/images/Ourservice/icon3.png"
//               alt="Image"
//               className="w-12 h-12 mt-5"
//             />
//             <h2 className="pt-2 text-sm font-bold">
//               3. Elevated Brand Journey
//             </h2>
//             <p className="pt-2 pb-3 text-xs">
//               {" "}
//               Lead individuals through a refined brand experience that leaves a
//               lasting impact
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
