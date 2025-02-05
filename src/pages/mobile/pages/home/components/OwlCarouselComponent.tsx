
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const AppFeaturesCarousel = () => {
    const carouselOptions = {
        loop: true,
        margin: 20,
        nav: true,
        navText: [
            '<img src="/images/mobile/apparrow2.png" alt="left" class="w-6 h-6 hover:bg-transparent " />',
            '<img src="/images/mobile/apparrow1.png" alt="right" class="w-6 h-6 hover:bg-transparent " />'
        ],
        responsive: {
            0: {
                items: 1,  // 1 item visible on small screens
            },
            760: {
                items: 2,  // 2 items visible on medium screens
            },
            1024: {
                items: 4,  // 4 items visible on larger screens
            },
        },
        autoplay: false,  // Disable autoplay to allow manual navigation
        dots: false,      // Disable dots if you want only the left/right navigation arrows
    };

    return (
        <>

            {/* Carousel */}
            <OwlCarousel className="owl-theme" {...carouselOptions}>
                {/* First item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:bg-[rgba(191,255,196,0.76)]   boxwidth firefox-hover1  ">
                    <img src="/images/mobile/appround1.png" alt="Real-Time Court Availability" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3  crosa"  />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Real-Time Court Availability</p>
                    <p className="mt-5 text-base appmar">Instantly see which courts are available and manage bookings on the go.</p>
                </div>

                {/* Second item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover2  hover:shadow-2xl hover:bg-[#FFECF5]  ">
                    <img src="/images/mobile/pinkroundicon.png" alt="Comprehensive Calendar View" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Comprehensive Calendar View</p>
                    <p className="mt-5 text-base appmar">Easily view and manage daily, weekly, or monthly bookings with a user-friendly calendar interface.</p>
                </div>

                {/* Third item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover3  hover:shadow-2xl hover:bg-[rgba(115,138,255,0.41)]  ">
                    <img src="/images/mobile/appbell.png" alt="Automated Notifications" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Automated Notifications</p>
                    <p className="mt-5 text-base appmar">Send booking confirmations, reminders, and cancellation notices automatically to your clients.</p>
                </div>

                {/* Fourth item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover4  hover:shadow-2xl hover:bg-[rgba(255,214,109,0.6)] ">
                    <img src="/images/mobile/appbuild.png" alt="Flexible Payment Processing" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Flexible Payment Processing</p>
                    <p className="mt-5 text-base appmar">Accept payments securely and offer a variety of payment options including credit cards and mobile payments.</p>
                </div>

                {/* Fifth item */}
                <div className="relative px-2  py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover5  hover:shadow-2xl hover:bg-[rgba(137,255,235,0.76)]  ">
                    
                    <img src="/images/mobile/af5.png" alt="Customizable Pricing Models" className="absolute w-10 -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Customizable Pricing Models</p>
                    <p className="mt-5 text-base appmar">Set different rates for peak hours, member
                    discounts, or special events.</p>
                </div>

                {/* Sixth item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover6  hover:shadow-2xl hover:bg-[rgba(255,150,150,0.76)]  ">
                    <img src="/images/mobile/af7.png" alt="Member Management" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Member Management</p>
                    <p className="mt-5 text-base appmar">Track and manage member profiles, including booking
                    history, payment details, and preferences.</p>
                </div>

                {/* Seventh item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover7  hover:shadow-2xl hover:bg-[rgba(197,242,255,0.76)]  ">
                    <img src="/images/mobile/af6.png" alt="Detailed Analytics & Reporting" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Detailed Analytics & Reporting</p>
                    <p className="mt-5 text-base appmar"> Gain insights into court usage, revenue, and
                    customer trends to make informed decisions.</p>
                </div>

                {/* Eighth item */}
                <div className="relative px-2 py-6 rounded-3xl transition-all duration-300 boxwidth firefox-hover8  hover:shadow-2xl hover:bg-[rgba(255,210,150,0.76)]  ">
                    <img src="/images/mobile/af8.png" alt="Multi-Sport Functionality" className="absolute -top-2 -left-2  lg:top-5 lg:left-0 xl:top-0 mb-3 crosa" />
                    <p className="text-xl font-semibold mt-16 appmar headmar">Multi-Sport Functionality</p>
                    <p className="mt-5 text-base appmar">Whether it's badminton, tennis, squash, or any other
                    sport, manage all your courts in one place.
                    </p>
                </div>
            </OwlCarousel>
            </>
    );
};

export default AppFeaturesCarousel;
