import { Button } from "flowbite-react";

export default function AdMarketing() {

    return (
        <>
        <section className="flex justify-center px-0 py-10 lg:px-10 lg:py-10 ">
        <div className="container ">
        {/* header start */}
            <div>
                <p className="text-xl text-start">
                    Our Projects
                </p>
                <p className="text-5xl md:text-7xl text-start mt-5 font-extrabold">
                Digital Marketing
                </p>
            </div>
        {/* header end  */}
        {/* block 1 start  */}
            <div className=" mt-10 lg:mt-20">
                <img src="./images/digital/digital1.png" alt="" className="w-full h-auto" />
            </div>
        {/* block 1 end */}

        {/* block 2 start  */}
            <div className="mt-10 lg:mt-20">
                <p className="text-start text-xl text-[rgba(22,21,25,0.43)] ">
                    Expectation
                </p>
                <p className="mt-10 text-3xl font-bold text-justify">
                Designing and developing a modern and minimal website, with multiple features, such as architectural virtual reality tours and animations, for a studio with high design expectations was a tremendously enjoyable experience for us.
                </p>
                <Button outline className="mt-10"> View More </Button>

                <div className="mt-10 lg:mt-20">
                    <img src="./images/digital/digital2.png" alt="" className="w-full h-auto" />
                </div>

            </div>
        {/* block 2 end */}
        {/* block 3 start */}
        <div className="mt-5  ">
            <p className="text-3xl  font-bold">
                Front-end development
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-20 h-auto sm:h-auto md:h-auto  lg:h-[450px] xl:h-[550px] 2xl:h-[650px] ">
                <div className="relative hidden lg:block" >
                    <img src="./images/digital/digital3.png" className="absolute top-20 xl:top-28 2xl:top-32 left-0 w-[85%] h-auto" alt="" />
                </div>
                <div className="relative hidden lg:block" >
                    <img src="./images/digital/digital4.png" className="absolute bottom-44 xl:bottom-52 2xl:bottom-44 right-0 w-[85%] h-auto" alt="" />
                </div>
                <div className="relative block lg:hidden " >
                    <img src="./images/digital/digital3.png" className="w-full h-auto" alt="" />
                </div>
                <div className="relative block lg:hidden" >
                    <img src="./images/digital/digital4.png" className="w-full mt-10 h-auto" alt="" />
                </div>

                
            </div>
        </div>
        {/* block 3 end */}

       

        </div>
        </section>
        </>
    )
}