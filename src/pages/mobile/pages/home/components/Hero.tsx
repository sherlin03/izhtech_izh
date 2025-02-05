


export default function Hero() {
    return (
        <>
            <div className="bg-white relative w-full mx-auto mb-0 md:mb-24 ">
                <div className="relative container mx-auto px-4 sm:px-4 md:px-2 lg:px-4 "> {/* Adjust padding for smaller screens */}
                    <img src="/images/mobile/Ellipse_7809.png" className="w-4 md:w-4 lg:w-4" alt="" />
                    
                    <div className="w-full md:w-5/6 mx-auto">
                        <div className="grid grid-cols-12 gap-6 block">
                            {/* Left Text Section */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-7 herospace" data-aos="fade-right" data-aos-duration="1000">
                                <div>
                                    <p className="mt-6 text-base herocolor2">
                                        Simplify Your Court Booking Management <br className="hidden md:block"/> with our application
                                    </p>
                                    <p className="text-3xl md:text-5xl herocolor font-bold font-space lowercase z-10">
                                    manage court bookings <br /><span  className="text-3xl md:text-3xl">#mobile application</span>
                                        
                                    </p>
                                    <p className="text-sm herocolor2 mt-8 md:mt-12">
                                    You can handle all your <span className="text-black font-black">sports court booking </span> management needs and stay organized while maximizing your facility potential with our user-friendly solution.
                                    </p>

                                    <div className="mt-6 md:mt-8  flex justify-center md:justify-start  ">
                                        <input type="email" placeholder="you@domain.com" 
                                            className="px-4 py-2 bg-slate-200 border border-none rounded-l-lg " />
                                        <button className="px-6 py-2 text-sm text-white rounded-r-lg"
                                            style={{
                                                background: 'linear-gradient(326deg, #5877F8 37.65%, #FF20B2 78.67%, #FFBB03 102.38%)'
                                            }}>
                                            Get a Demo
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Image Section */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-5 flex justify-center md:justify-end">
                                <img src="/images/mobile/heroimg1.png" alt="heroimg" className="relative md:absolute -top-10 md:-top-20 right-0 md:-right-16  block " 
                                    style={{ height: 'auto', width: '100%', maxWidth: '650px' }} data-aos="fade-left" data-aos-duration="1000"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
