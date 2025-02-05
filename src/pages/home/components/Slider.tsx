import { Carousel } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { MoveLeft } from "lucide-react";
import { MoveRight } from "lucide-react";
import { useGetAllTestimonialsListQuery } from "../../../lib/queries/testimonials/useGetAllTestimonialsListQuery";
import CustomObject from "../../../shared/components/CustomObjects";

export default function Slider() {
  const { data: testimonialsList } = useGetAllTestimonialsListQuery();

  const customTheme: CustomFlowbiteTheme["carousel"] = {
    root: {
      base: "relative h-60 w-full",
      leftControl:
        "absolute top-0 lg:left-36 hidden lg:flex flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 lg:right-36 hidden lg:flex flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-white dark:bg-gray-800",
      },
      base: "h-3 w-3 rounded-full",
      wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
    },
    item: {
      base: "absolute top-1/2 left-1/2 block w-full  -translate-x-1/2 -translate-y-1/2",
      wrapper: {
        off: "w-full flex-shrink-0 transform cursor-default snap-center",
        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
      },
    },
    control: {
      base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none  group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
    },
    scrollContainer: {
      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
      snap: "snap-x",
    },
  };

  return (
    <section className="px-2 py-16 text-center bg-[#F5F1F5] md:px-0 mb-10 h-full relative">
      <div className="h-full">
        <h1 className="pt-6 font-bold text-center text-md lg:text-5xl md:text-4xl sm:text-4xl">
          Meet our customers.
        </h1>

        <div className="relative h-[100%] ">
          <Carousel
            theme={customTheme}
            leftControl={<MoveLeft />}
            rightControl={<MoveRight />}
            indicators={false}
          >
            {testimonialsList?.map((testimonial) => (
              <div className="flex items-center justify-center h-full dark:text-white">
                <div className="text-center ">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: testimonial?.testimonials,
                    }}
                  />

                  <div className="flex flex-col items-center mt-2">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}/${
                        testimonial?.imagePath
                      }`}
                      alt="Image"
                      className="w-auto h-12 mb-2 rounded-full"
                    />
                    <p className="pt-2 text-xs text-gray-500">
                      {" "}
                      {testimonial?.designation} &nbsp;
                      <b>{testimonial?.companyName}</b>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <br />
      <CustomObject
        variants="yellow-doted"
        className="absolute -bottom-[25%] -right-20 xl:h-[70%] h-[50%]"
      />
    </section>
  );
}
