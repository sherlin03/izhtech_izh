import { useEffect, useRef, useState } from "react";
import Hero from "./components/Hero";
import TypingEffect from "./components/TypingEffect";
import AppFeaturesCarousel from "./components/OwlCarouselComponent";
import {LinkButton} from '../../../../shared/components/buttons/LinkButton';


export default function MobHome() {
 
  
  const [isVisible, setIsVisible] = useState(false);
  const typingRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 } 
    );

    if (typingRef.current) {
      observer.observe(typingRef.current);
    }

    return () => {
      if (typingRef.current) {
        observer.unobserve(typingRef.current);
      }
    };
  }, []);

  
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');

  // Function to toggle popup visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // You can handle the email submission logic here
    setEmail(''); // Clear the email input after submission
    togglePopup(); // Close the popup after submission
  };
 

    return (
        <>   
        <div className="bg-white" > 
        <section className=" pt-6  ">
          <Hero />
        </section>
        {/* about and App Features start */}
        <section>
    <div className="w-full mx-auto rounded-3xl appfeature">
        {/* About Section */}
        <div className="rounded-3xl w-full mx-auto mt-8 mb-8 aboutcolor  relative">
            <img src="/images/mobile/abouthalfcircle.png" alt="" className="w-8 absolute top-7" />

            <div className="container w-5/6 mx-auto ">
            <div className="grid grid-cols-12  gap-6 aboutheight">
                <div className=" col-span-12 lg:col-span-4 2xl:col-span-3" >
                    <p className="pt-10 text-white font-bold text-3xl text-center lg:text-left aboutspace" data-aos="fade-right" data-aos-duration="1000">ABOUT US</p>
                    <p className="pt-6 text-white text-base text-center lg:text-left aboutspace" data-aos="fade-right" data-aos-duration="1000">Managing court bookings has never been easier. Our app is designed to streamline the entire process, making it easier than ever to book courts for favorite sports and activities.</p>
                    <div className="flex justify-center lg:justify-start">
                    <button 
                    onClick={togglePopup} 
                    className="aboutbutton py-1 px-2 rounded-md mt-7 mb-5 transform transition-transform duration-300 hover:bounce">
                    <span className="text-white text-sm">Free Demo</span>
                    </button>

                     {/* Conditionally render the popup */}
      {isOpen && (
        <div className="popup-overlay fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="popup-content bg-white p-6 rounded-lg shadow-lg w-[500px] h-[250px] mt-10 popupspace">
            <h2 className="text-xl font-bold mb-4">Request for a Free Demo</h2>
            
            {/* Email form */}
            <form onSubmit={handleSubmit} className="flex flex-col">
              <label htmlFor="email" className="mb-2 text-sm font-medium">Email:</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border border-gray-300 p-2 rounded-md mb-4"
                placeholder="Enter your email"
              />
              <div className="flex justify-between">
              <button 
              onClick={togglePopup} 
              className="mt-4 py-2 px-4 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-300">
              Close
            </button>
              <button 
                type="submit" 
                className="mt-4 py-2 px-4 bg-blue-600 h-10  text-white rounded-md hover:bg-blue-700 transition-colors duration-300">
                Submit
              </button>
              
            </div>
            </form>

            {/* Close button */}
            
          </div>
        </div>
      )}

                    </div>
                </div>
                <div className="col-span-12 lg:col-span-8 2xl:col-span-9 relative" data-aos="zoom-out-down" data-aos-duration="1000">
    {/* First Image */}
    <img 
    src="/images/mobile/aboutcircle.png" 
    alt="" 
    className="
        absolute w-40 h-40 hidden lg:block 
        lg:left-1/2 lg:transform lg:-translate-x-1/2
        -top-28 md:-top-32 lg:top-8 xl:top-10 
        xl:right-[15%] xl:left-auto
        2xl:top-8 2xl:right-[15%] 2xl:left-auto
    "
/>
    {/* Second Image */}
    <img 
        src="/images/mobile/aboutmob.png" 
        alt="" 
        className="
        absolute 
        w-[340px] h-[250px] 
        md:w-[350px] md:h-[320px] 
        lg:w-[550px] lg:h-[400px] 
        -top-52 max-[390px]:-top-48  max-[490px]:-top-48 max-[590px]:-top-32 max-[632px]:-top-40 max-[767px]:right-[15%] sm:-top-40 md:-top-36 lg:-top-10
        right-[7%] max-[390px]:right-[7%]  max-[490px]:right-[7%] md:right-[25%] lg:-right-36 
    " 
    />
</div>
              </div>
            </div>
            
        </div>

        {/* App Features Section */}
        <div className="mt-20">
            <div className="rounded-3xl w-full mx-auto h-auto mt-10 mb-8 relative">
                <div className="container w-5/6 mx-auto relative">
                    <div className="flex justify-between items-center">
                        <div className="applinerelative" data-aos="fade-up-right" data-aos-duration="1000">
                            <img src="/images/mobile/app_line.png" alt="underline" className="w-28 applineabs" />
                            <p className="mt-10 text-3xl font-bold font-body">App Features</p>
                        </div>
                        {/* <div>
                            <span className="inline-flex">
                                <img src="/images/mobile/apparrow2.png" alt="left" className="w-6 h-6 me-5" />
                                <img src="/images/mobile/apparrow1.png" alt="Right" className="w-6 h-6" />
                            </span>
                        </div> */}
                    </div>
                    <AppFeaturesCarousel />
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10" data-aos="fade-up" data-aos-duration="1000">
    {/* <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:bg-[rgba(191,255,196,0.76)] hover:outline hover:outline-[rgba(75,255,137,0.5)] hover:transform hover:rotate-3 hover:scale-105">
        <img src="/images/mobile/appround1.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Real-Time Court Availability</p>
        <p className="mt-5 text-base">Instantly see which courts are available and manage bookings on the go.</p>
    </div>

    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300   hover:shadow-2xl hover:outline hover:outline-[#eecbdb] hover:transform hover:rotate-3 hover:scale-105 hover:bg-[#FFECF5]">
        <img src="/images/mobile/pinkroundicon.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Comprehensive Calendar View</p>
        <p className="mt-5 text-base">Easily view and manage daily, weekly, or monthly bookings with a user-friendly calendar interface. </p>
    </div>

    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:bg-[rgba(115,138,255,0.41)] hover:shadow-2xl hover:outline hover:outline-[rgba(80,80,255,0.6)] hover:transform hover:rotate-3 hover:scale-105">
        <img src="/images/mobile/appbell.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Automated Notifications</p>
        <p className="mt-5 text-base">Send booking confirmations, reminders, and cancellation notices automatically to your clients.</p>
    </div>

    <div className="relative px-2 py-4 rounded-3xl transition-all duration-300 hover:bg-[rgba(255,214,109,0.6)] hover:shadow-2xl hover:outline hover:outline-[rgba(255,189,85,0.6)] hover:transform hover:rotate-3 hover:scale-105">
        <img src="/images/mobile/appbuild.png" alt="" className="absolute top-0 left-0 mb-3" />
        <p className="text-xl font-semibold mt-9">Flexible Payment Processing</p>
        <p className="mt-5 text-base">Accept payments securely and offer a variety of payment options including credit cards and mobile payments.</p>
    </div> */}
</div>

                </div>

                <img src="/images/mobile/appdesign.png" alt="" className="absolute top-20 right-0 w-8" />
            </div>
        </div>
    </div>
</section>

        {/* about and App Features end  */}
        
        {/* Benefits starts */}
        <section className="relative ">
  <div className="w-full relative mx-auto  applinerelative">
    <img src="/images/mobile/ben2.png" alt="" className="absolute bottom-36 w-8 left-0" />

    <div className="container w-5/6 mx-auto relative">
      <img src="/images/mobile/ben8.svg" alt="" className="hidden lg:block absolute -top-36 left-80" />
      <img src="/images/mobile/ben1.png" alt="" className="hidden lg:block absolute -top-10 -left-12 " />

      <div className="relative text-center lg:text-left">
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <img src="/images/mobile/ben9.png" alt="underline" className="w-24 absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-5 lg:translate-x-0" />
        <p className="mt-8 text-3xl font-bold font-body">Benefits</p>
        </div>
        

        {/* Benefits Grid */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-4 pt-7">

          {/* Left Column (Responsive Alignments) */}
          <div className="md:text-right text-center mt-0 xl:mt-12 2xl:mt-24" data-aos="fade-right"
     data-aos-offset="250"
     data-aos-easing="ease-in-sine" >
            <div className="h-36 md:h-36 lg:h-40">
              <img src="/images/mobile/ben3.png" alt="" className="md:float-right mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-[-1rem] md:mt-4">Maximize Revenue</p>
              <p className="text-sm">Optimize court usage with dynamic pricing and promotional offers.</p>
            </div>
            <div className="pt-4 h-36 md:h-36 lg:h-40 benmobile">
              <img src="/images/mobile/ben4.png" alt="" className="mt-4 md:mt-0 md:float-right mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-[-1rem] md:mt-4 ">Reduce Administrative Work</p>
              <p className="text-sm">Save time and reduce errors with automated bookings, notifications, and payment processing.</p>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-span-2 flex justify-center items-center sm:my-10 benmobile" data-aos="fade-down"
     data-aos-duration="3000">
            <img src="images/mobile/ben7.png" alt="benefits" className="w-full mt-16 md:mt-10 lg:mt-0 xl:-mt-20   md:w-2/3 lg:w-full" />
          </div>

          {/* Right Column (Responsive Alignments) */}
          <div className="md:text-left text-center mt-0 xl:mt-12  2xl:mt-24 benmobile" data-aos="fade-left"
     data-aos-offset="200"
     data-aos-duration="500">
            <div className="h-36 md:h-40 lg:h-44 xl:h-44">
              <img src="/images/mobile/ben5.png" alt="" className="md:float-left mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-[-1rem] md:mt-4">Enhance Member Experience</p>
              <p className="text-sm">Provide a seamless booking experience that keeps your members satisfied and coming back.</p>
            </div>
            <div className="pt-7 h-36 md:h-36 lg:h-40 benmobile">
              <img src="/images/mobile/ben6.png" alt="" className="mt-7 md:mt-0 md:float-left mx-auto" /><br /><br />
              <p className="text-lg font-bold mt-[-1rem] md:mt-4">Increase Operational Efficiency</p>
              <p className="text-sm">Simplify your day-to-day operations with easy-to-use tools and real-time updates.</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</section>

         {/* Benefits End */}
         {/* Dashboard Start */}

         <section className="relative pt-10 mt-below-420 md:mt-0 mb-7">
  <div className="w-full relative mx-auto dashboardbg rounded-3xl dashboardmob">
    <div className="container w-5/6 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="relative" data-aos="fade-down-right" data-aos-duration="1500">
          
          <img src="/images/mobile/board1.png" alt="" className="absolute hidden lg:block top-3 left-0 mx-auto" />
          <div data-aos="fade-righ" data-aos-duration="1000" className="relative">
          <p className="pt-16 font-bold text-3xl text-center lg:text-left relativeboard relative ">Dashboard
              
          </p>
          <img src="images/mobile/board3.png" alt="" className="boardlinew absolute  absolute left-1/2 transform -translate-x-1/2 lg:left-5 lg:translate-x-0 top-24 " />
         
          </div>
          <p className="pt-7 text-base text-center lg:text-left" data-aos="fade-righ" data-aos-duration="1000">
            Managing court bookings has never been easier. Our app is designed to streamline the entire process, making it easier than ever to book courts for your favorite sports and activities.
          </p>
        


          <div className="flex justify-center lg:justify-start" data-aos="fade-righ" data-aos-duration="1500">
            <button className="bg-black rounded-lg py-2 px-6 mt-7"
            onClick={togglePopup} 
            >
              <span className="text-white text-sm">Free Demo</span>
            </button>
          </div>
        </div>
        <div className="col-span-2 flex justify-center lg:justify-end" data-aos="fade-left" data-aos-duration="1000">
          <img src="images/mobile/board2.png" alt="" className="h-72 md:h-96 mt-7 mb-7" />
        </div>
      </div>
    </div>
  </div>
</section>


{/* Dashboard End */}
{/* Workflow Start */}

<section className="relative pt-10 mb-7">
  <div className="w-full  relative mx-auto rounded-3xl mb-7">
    <div className="relative">
      <img src="images/mobile/work7.png" alt="" className="hidden lg:block  absolute -bottom-24 right-0 w-full h-[650px]" />
      <div className="container w-5/6 mx-auto relative screenrelative">
      {/* <img src="images/mobile/work3.png" alt="" className="workdot w-7" /> */}
      <div className="relative">
        <img src="images/mobile/work2.png" alt="" className="absolute hidden lg:block -top-20 left-1/2 transform -translate-x-1/2 lg:left-40 lg:translate-x-0" />
        <div data-aos="fade-down-right" data-aos-duration="1500">
        <img src="/images/mobile/work1.png" alt="underline" className="w-24 absolute top-8 left-1/2 transform -translate-x-1/2 lg:left-6 lg:translate-x-0" />
        <p className="mt-10 text-3xl font-bold text-center lg:text-left">Workflow</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-7" >

          <div className="w-60 mt-0 md:mt-10  shadow-[0px_0px_300px_0px_#44029A] mx-auto workalter" data-aos="fade-down-right" data-aos-duration="1500">
            <img src="images/mobile/work9.png" alt="" className="w-60 h-[450px] xl:h-[500px]   " />
          </div>

          <div className=" w-60  shadow-[0px_0px_300px_0px_#44029A] mx-auto sm:mt-10 mt-0 workalter" data-aos="fade-down-down" data-aos-duration="1500">
            <img src="images/mobile/work10.png" alt="" className="w-60 h-[450px] xl:h-[500px]   " />
          </div>

    <div className="w-60  shadow-[0px_0px_300px_0px_#44029A] mx-auto relative mt-0 md:mt-10 sm:mt-10 workalter" data-aos="fade-down-left" data-aos-duration="1500">
        <div className="relative" >
            <div className="relative">
            <img src="images/mobile/work3.png" alt="" className="absolute -top-3 -left-3 w-7 " />
            </div>
            <img src="images/mobile/work11.png" alt="" className="w-60 h-[450px] xl:h-[500px] relative z-10" />
        </div>

  {/* Main content */}
        {/* <img src="images/mobile/work11.png" alt="" className="w-60 h-96 relative z-10" /> */}
        <img src="images/mobile/work8.png" alt="" className="hidden lg:block absolute bottom-0 -right-16 w-3  " />
    </div>
        </div>

        <div className="flex justify-center lg:justify-end">
         
          <LinkButton
            href="/mobilescreen"
            size={'lg'}
            className="px-9 py-4 w-48 me-6 lg:me-8 xl:me-12 2xl:me-28 text-sm text-white rounded mt-10 z-10"
            style={{ background: 'linear-gradient(326deg, #5877F8 37.65%, #FF20B2 78.67%, #FFBB03 102.38%)' }}>
            See All Pages
          </LinkButton>
          

           
          
        </div>
      </div>
      </div>
    </div>
  </div>
</section>


        {/* workflow End */}
        {/* User Feedback Start */}

        <section className="relative mt-10 mb-7">
  <div className="w-full relative mx-auto userbg">
    <img src="images/mobile/user3.png" alt="" className="w-40 sm:w-60 md:w-80 absolute -top-16 md:-top-28 right-12 md:right-24 hidden md:block"  />

    <div className="container w-5/6 mx-auto relative">
      <div className="relative">
        <img src="images/mobile/user1.png" alt="" className="w-6  md:w-8 absolute top-3 md:top-0 -left-6 md:-left-7" />
        <img src="images/mobile/user4.png" alt="" className="absolute hidden lg:block bottom-20 md:bottom-30 right-0 w-4 " />

        <div className="relative">
          <div data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <img src="/images/mobile/user2.png" alt="underline" className="w-20 sm:w-24 md:w-28 absolute pt-1 top-[85px] left-20  lg:top-[90px] lg:left-28 md:top-[96px] md:left:24 " />
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-body ps-1 pt-16 lg:pt-14">User Feedback Start</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="flex justify-center">
              <img src="images/mobile/user5.png" alt="" className="mt-7 h-64  sm:h-72 md:h-80 blah" data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out"/>
            </div>
            <div className="flex items-center">
              {/* <p className="text-sm sm:text-base md:text-lg font-medium px-3 sm:px-6 mt-6 md:mt-16">
                "Managing bookings was a headache before we started using Oasis Mobile Application. Now, everything is automated and running smoothly." - Oasis Sportopia-Oman.
              </p> */}

<div ref={typingRef} className="my-10"  >
      {isVisible && (
        <TypingEffect
          text='"Managing bookings was a headache before we started using Oasis Mobile Application. Now, everything is automated and running smoothly." - Oasis Sportopia-Oman.'
          speed={100} // Adjust speed as needed
        />
      )}
    </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>

         {/* User Feedback End */}
        {/* service Start */}
        <section className="relative">
  <div className="w-full relative mx-auto">
    <div className="container relative w-5/6 mx-auto">
      <img src="images/mobile/service1.png" alt="" className="absolute top-10 left-0 md:-left-8 lg:-left-8: w-4 sm:w-4 md:w-4" />
      <img src="images/mobile/service2.png" alt="" className="absolute bottom-0 left-0 md:left-16 lg:left-64 w-64 md:2/3   serwidth" />

      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0">
          <div className="pb-10 md:pb-24 text-center md:text-left" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold pt-10">
              Get started with our service today.
            </p>
            <p className="text-xs pt-3">
              The app helps teams create, track, and deliver faster.
            </p>
          </div>

          <div className="md:col-span-2 text-center md:text-right" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="pt-6 md:pt-16 flex justify-center md:justify-end max-[640px]:mb-[50px] mb-[50px]">
              <span className="max-[386px]:bg-inherit  bg-slate-200 rounded-lg">
                <input
                  type="email"
                  placeholder="you@domain.com"
                  className="px-4 h-8 py-2 bg-slate-200 border-none max-[386px]:border-solid max-[386px]:rounded-lg  rounded-l-lg w-40 sm:w-40 md:w-40 text-xs"
                />
                <button className="px-4 md:px-6 h-8 text-xs text-white rounded-r-lg bg-black max-[386px]:rounded-lg max-[386px]:mt-5">
                  Get a Demo
                </button>
              </span>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </div>  
        </>
    );
}