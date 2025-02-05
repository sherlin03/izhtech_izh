export default function AwardsHonors() {
    return (
        <section className="flex justify-center px-10 py-10">
            <div className="container ">
                <div className="grid lg:grid-cols-3">
                    <div>
                        <p className="text-xs font-bold ">AWARDS & HONORS</p>
                        <h1 className="pt-4 pb-4 text-3xl font-bold ">
                            The awards won<br /> by our works.
                        </h1>
                    </div>
                    <div className="flex">
                        <p className="pb-6 text-xs">
                            When our team provides design and<br /> digital marketing. Applied
                            arts can<br /> include<b>industrial design, graphic<br /> design, fashion design,</b> and
                            the <br />decorative arts which traditionally<br /> includes craft objects.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div >
                            <img src="images/Aboutpage/img/Awards/img1.png" alt="Image1" className="w-8 h-8" />
                            <p className="pt-4 text-xs">5x Developer Award</p>
                        </div>
                        <div >
                            <img src="images/Aboutpage/img/Awards/img2.png" alt="Image1" className="w-8 h-8" />
                            <p className="pt-4 text-xs">3x Website of the Day</p>
                        </div>
                        <div >
                            <img src="images/Aboutpage/img/Awards/img3.png" alt="Image1" className="w-12 h-8" />
                            <p className="pt-4 text-xs">2x Best Website</p>
                        </div>
                        <div>
                            <img src="images/Aboutpage/img/Awards/img4.png" alt="Image1" className="w-12 h-8" />
                            <p className="pt-4 text-xs">2x Best Homepage</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
