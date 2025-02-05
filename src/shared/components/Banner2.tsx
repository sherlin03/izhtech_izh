type webProps={
    serviceName:string,
description:string
}
export default function Webapp(props:webProps) {
    return (
        <section className="flex flex-col gap-3 px-4 py-3 lg:px-20 sm:flex-col md:flex-col lg:flex-row xl:flex-row">
            <div className="w-full lg:pt-12 sm:w-full md:w-1/2 lg:w-1/2 sm:pt-2 md:pt-2">
                <p className="pb-2 ml-8 text-xs">OUR SERVICES</p>
                <h1 className="pb-2 ml-8 text-3xl font-bold">{props.serviceName}</h1>
                <p className="pb-6 ml-8 text-xs">Reduction in operating costs for the whole product team which creates <br />amazing UI/UX experiences, by crafting top-notch user experience of<br /> funny the century rather.</p>
                <div className="flex items-center">
                    <div className="relative w-40 h-40 ml-4">
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                            <circle
                                className="stroke-current text-amber-600 progress-ring__circle"
                                strokeWidth="2"
                                strokeLinecap="round"
                                cx="50"
                                cy="50"
                                r="40"
                                fill="transparent"
                                strokeDashoffset="calc(400 - (400 * 45) / 100)"
                            ></circle>
                            <text x="50" y="50" fontFamily="Verdana" fontSize="12" textAnchor="middle" className="font-bold" alignmentBaseline="middle">63%</text>
                        </svg>
                    </div>
                    <div className="ml-8">
                        <p className="text-xs font-bold">Increased by <br />
                            the last 2 years.</p>
                    </div>
                </div>
                <button className="h-8 mt-4 ml-8 text-xs text-white rounded bg-indigo-950 w-28 border-1">
                    Learn more {"->"}
                </button>
            </div>
            <div className="flex bg-transparent sm:w-1/2 md:w-full lg:w-1/2">
                <img src="images/servicepage/img2.png" alt="Example Image" className="w-full h-auto" />
            </div>
        </section>
    );
}