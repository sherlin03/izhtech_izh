
import { LinkButton } from "./buttons/LinkButton";

export default function Collaboration() {
    return (
        
            <><div className="flex flex-row justify-between w-full py-4 border-b-2 md:container align-item-center md:flex-col md:flex-row lg:flex-row border-neutral-800 ">
            <div className="mb-4 md:w-1/2 lg:w-full">
                <p className="pb-2 text-base text-white">LET'S COLLABORATE</p>
                <h1 className="pb-4 font-bold text-white text-md lg:text-6xl md:text-4xl sm:text-2xl">
                    Send us an email, <br />
                    to discuss a new project.
                </h1>

            </div>
            <div className="flex justify-end my-auto lg:flex-row lg:w-1/4">
          
          <LinkButton size={'sm'}  href="/contact" variant={'gradient'}>Contact Us</LinkButton>
          
            </div>
        </div><div className="md:container">
                <div>
                    <p className="pt-4 pb-2 text-base text-lg text-white">
                        We're a team of creatives who are excited about unique ideas and<br /> help digital and fin-tech companies to create amazing identity. </p>
                </div>
            </div></>
      
    );
}