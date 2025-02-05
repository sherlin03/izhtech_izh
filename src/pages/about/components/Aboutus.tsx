import { Link } from "react-router-dom";
import CustomObject from "../../../shared/components/CustomObjects";

export default function Aboutus() {
  return (
    <section className="relative py-5 bg-transparent lg:py-10 ">
      <div className="flex-col justify-center gap-4 my-auto h-4/5 lg:flex lg:flex-row">
        <div className="w-full mx-auto ">
          <div className="flex flex-col justify-end h-full ">
            <CustomObject className="absolute -z-10" variants="orange-disk" />
            <h1 className="pt-4 text-5xl font-bold lg:w-3/4 2xl:text-7xl lg:text-4xl md:text-4xl sm:text-4xl">
              About Us
            </h1>
            <p className="pt-4 pb-4 text-base">
              Leave us a little info, and we’ll be in touch.
            </p>
            <Link
              to={{
                pathname: "/contact",
              }}
            >
              <button className="w-24 px-2 py-1 text-xs font-bold text-white bg-black border border-black rounded">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
