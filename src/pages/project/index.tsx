import { Button } from "flowbite-react";
import { Link} from "react-router-dom";

export default function Projects() {

    return (
        <>
        <section className="flex justify-center px-0 py-10 lg:px-10 lg:py-10 ">
        <div className="container ">
        {/* header start */}
            <div>
                <p className="text-5xl md:text-7xl text-start  font-extrabold">
                    Our Projects
                </p>
                <p className="text-xl mt-5 text-start">
                    Leave us a little info, and we’ll be in touch.
                </p>
                <div className="mt-5">
                    <Link to="/contact">
                        <Button className="bg-black">Contact Us</Button>
                    </Link>
                </div>
            </div>
        {/* header end  */}
        {/* block 1 start  */}
            <div className=" mt-16 lg:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    <div className="col-span-4" >
                        <img src="./images/project/p1.png" className="w-full h-auto" alt=""  />
                        <Link to="/subhadental">
                        <p className="text-lg font-bold mt-5">
                            Website Design
                        </p>
                        </Link>
                        <p className="text-base ">
                            Case Stydy, Perspectives
                        </p>
                    </div>
                    <div className="col-span-4 md:col-span-8" >
                        <img src="./images/project/p2.png" className=" w-full h-auto" alt=""  />
                        <Link to="/subhadental">
                        <p className="text-lg font-bold mt-5">
                            Digital Marketing
                        </p>
                        </Link>
                        <p className="text-base  ">
                            Case Stydy, Perspectives
                        </p>
                    </div>

                </div>

                <div className="grid mt-12 grid-cols-1 md:grid-cols-12 gap-10">

                    <div className="col-span-4" >
                        <img src="./images/project/p3.png" className="w-full h-auto" alt=""  />
                        <p className="text-lg font-bold mt-5">
                            Mobileapp Design
                        </p>
                        <p className="text-base ">
                            Case Stydy, Perspectives
                        </p>
                    </div>
                    <div className="col-span-4" >
                        <img src="./images/project/p4.png" className="w-full h-auto" alt=""  />
                        <p className="text-lg font-bold mt-5">
                            Ad Marketing
                        </p>
                        <p className="text-base  ">
                            Case Stydy, Perspectives
                        </p>
                    </div>
                    <div className="col-span-4" >
                        <img src="./images/project/p5.png" className="w-full h-auto" alt=""  />
                        <p className="text-lg font-bold mt-5">
                            ERP & CRM
                        </p>
                        <p className="text-base  ">
                            Case Stydy, Perspectives
                        </p>
                    </div>

                </div>

            </div>
        {/* block 1 end */}

        
        </div>
        </section>
        </>
    )
}