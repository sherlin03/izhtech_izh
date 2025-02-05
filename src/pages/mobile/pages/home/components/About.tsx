export default function About() {

    return (
        <>
        <section>
            <div className="w-10/12 mx-auto rounded-3xl appfeature ">
                {/* about  */}
            <div className=" rounded-3xl w-full mx-auto  mt-8 mb-8 aboutcolor aboutheight relative">
                <img src="/images/mobile/abouthalfcircle.png" alt="" className=" w-8  absolute top-7"/>
                
                <div className="w-5/6 mx-auto flex">
                <div className="w-1/4">
                    <p className="pt-10 text-white font-bold  text-xl ">ABOUT US</p>
                    <p className="pt-6 text-white text-sm">Managing court bookings has never been easier. Our app is designed to streamline the entire process, making it easier than ever to book courts for favorite sports and activities.</p>
                    <button className="aboutbutton py-1 px-2 rounded-md mt-7"><span className="text-white text-sm">Free Demo</span></button>
                </div>
                <div className="w-2/4 mx-auto relative">
                <img src="/images/mobile/aboutcircle.png" alt="" className="w-40 absolute top-20 left-48 " />
                <img src="/images/mobile/aboutmob.png" alt="" className="mob absolute -top-10 left-44 " />
                
                

                </div>

                </div>

             

            </div>
            {/* App Features  */}
            <div>
            <div className=" rounded-3xl w-full mx-auto h-80 mt-10 mb-8  relative applinerelative">
            <div className="w-5/6 mx-auto">
                <img src="/images/mobile/app_line.png" alt="underline" className="w-16 applineabs "/>
                <p className="mt-10 text-xl font-bold font-body">App Features</p>

                <div className="mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-cols-4 gap-4 pt-10">
                <div className="relative px-2 py-4 ">
                    <img src="/images/mobile/appround1.png" alt="" className="absolute top-0 left-0 mb-3 " />
                    <p className="text-xl font-semibold mt-9">Real-Time Court 
                    Availability</p>
                    <p className="mt-5 text-base">Instantly see which courts are available and manage bookings on the go.</p>
                </div>

                <div className="relative appbox  px-2 py-4 rounded-3xl shadow-2xl">
                    <img src="/images/mobile/pinkroundicon.png" alt="" className="absolute top-0 left-0 mb-3 " />
                    <p className="text-xl font-semibold mt-9 ">Comprehensive Calendar View</p>
                    <p className="mt-5 text-base">Easily view and manage daily, weekly, or monthly bookings with a user-friendly calendar interface.</p>
                </div>

                <div className="relative px-2 py-4 ">
                    <img src="/images/mobile/appbell.png" alt="" className="absolute top-0 left-0 mb-3 " />
                    <p className="text-xl font-semibold mt-9">Automated Notifications</p>
                    <p className="mt-5 text-base">Send booking confirmations, reminders, and cancellation notices automatically to your clients.</p>
                </div>

                <div className="relative px-2 py-4 ">
                    <img src="/images/mobile/appbuild.png" alt="" className="absolute top-0 left-0 mb-3 " />
                    <p className="text-xl font-semibold mt-9">Flexible Payment Processing</p>
                    <p className="mt-5 text-base">Accept payments securely and offer a variety of payment options including credit cards and mobile payments.</p>
                </div>
                </div>
            </div>
                <img src="/images/mobile/appdesign.png" alt=""  className="absolute bottom-52 right-0 w-8"/>
            </div>

            </div>

            </div>


        </section></>
    );
}