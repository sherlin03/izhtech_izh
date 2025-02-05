import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Partnercompany from "./components/partnercompany";
import Banner from "./components/Banner";
import Ourservice from "./components/Ourservice";
import Process from "./components/Process";
import Slider from "./components/Slider";
import NewsLetter from "./components/NewsLetter";
import { fadeIn } from "../../shared/animation/variants";
import { motion } from "framer-motion";
import Platforminsights from "./components/Platforminsights";
import IzhtechScroll from "../../shared/components/IzhtechScroll";
import BlogList from "./components/blog/BlogList";
import CustomObject from "../../shared/components/CustomObjects";


export default function Home() {


  

  return (
    <>
        
     
        <section className=" pt-6 lg:h-[calc(80vh-70px)] relative ">
          <Hero />
          {/* <CustomObject
          className="absolute h-48 -right-5 lg:right-10 xl:right-60 xl:h-60 xl:-bottom-40 -bottom-28"
          variants="green-doted"
        /> */}
        </section>
       

        <section className="grid w-full bg-[#F3FEFD]">
          <Feature />
      </section>


        <section className="container grid hidden w-full mx-auto bg-white md:block">
          <Partnercompany />
        </section>

        <section className="mx-auto container-fluid xl:container">
          <Banner />
      </section>
     


        <section className="flex items-center justify-center py-4 bg-white">
          <IzhtechScroll />
        </section>
        
        {/* <section className="lg:px-10 pb-20 pt-28 bg-[#F5F7FF] rounded"> */}
        <section>
        <NewsLetter />
        </section>
        <section className="mx-auto container-fluid xl:container">
          <Platforminsights />
       </section>
       <section className="relative py-10 mx-auto bg-gray-50 container-fluid -z-10">
       <CustomObject
          className="absolute  max-w-screen-2xl md:h-[120%] xl:h-[130%] -top-40 -left-[40%]  xl:-left-[24%]"
          variants="text-rotate"
        />
        <BlogList />
       </section>
       
        {/* <section className='container px-20 py-8 mx-auto'>
       <BlogList />
       </section> */}

        <section className="mx-auto container-fluid xl:container">
        {/* <section className="mx-auto xl:px-20 container-fluid xl:container"> */}
          <Ourservice />
        </section>

        {/* <section className="mx-auto xl:px-20 container-fluid xl:container"> */}
        <section className="mx-auto xl:px-20 container-fluid xl:container">
          <Process />
        </section>

        {/* <section className="relative mx-auto mb-10 xl:px-20 container-fluid xl:container "> */}
        <section className="mx-auto overflow-hidden container-fluid xl:container">
        <Slider />
          <motion.span
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
          >
  
          </motion.span>
        </section>
       
      
    
    </>
  );
}
