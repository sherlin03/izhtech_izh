import { useState, useEffect } from "react";
import Aboutus from "./components/Aboutus";
import Banner from "./components/Banner";
import Capabilities from "./components/Capabilities";
import Counts from "./components/Counts";
import Testimonials from "./components/Testimonials";
import Ourclients from "./components/Ourclients";
import { useGetSiteInfoListQuery } from "../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";
import { Button } from "flowbite-react";

const projectsData = [
  {
    id: 1,
    title: "Oasis Sportopia",
    subtitle: "Oasis Sports Academy",
    subtitleColor: "#738FFF",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project1.png",
    backgroundColor: "#F0F3FF",
    buttonOutlineColor: "#738FFF",
  },
  {
    id: 2,
    title: "Subha Dental Care",
    subtitle: "Subha Dental Care Clinic",
    subtitleColor: "#00AE4A",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project2.png",
    backgroundColor: "#CCE7D7",
    buttonOutlineColor: "#00AE4A",
  },
  {
    id: 3,
    title: "Digital Marketing",
    subtitle: "Digital Marketing",
    subtitleColor: "#FFC000",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project3.png",
    backgroundColor: "#F8EED0",
    buttonOutlineColor: "#FFC000",
  },
  {
    id: 4,
    title: "Ad Marketing",
    subtitle: "Ad Marketing",
    subtitleColor: "#FEA623",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project4.png",
    backgroundColor: "#F7E4C7",
    buttonOutlineColor: "#FEA623",
  },
  {
    id: 5,
    title: "ERP & CRM",
    subtitle: "ERP & CRM",
    subtitleColor: "#FF8F8F",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project5.png",
    backgroundColor: "#F7DEDE",
    buttonOutlineColor: "#FF8F8F",
  },
];

export default function About() {
  const { data: siteInfoList } = useGetSiteInfoListQuery() ?? [];
  const siteInfo = siteInfoList?.[0];

  const [activeProject, setActiveProject] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".project-section");
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop - 200 &&
          scrollPosition < sectionTop + sectionHeight - 200
        ) {
          setActiveProject(index);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="mx-auto container-fluid">
        <section className="px-5 mx-auto md:container">
          <Aboutus />
        </section>
        <section className="px-5 mx-auto">
          <Banner />
          <Capabilities />
        </section>
        <section className="px-5 mx-auto md:px-0 bg-slate-100">
          <Ourclients />
        </section>
        <section className="bg-black container-fluid">
          <Testimonials />
        </section>

        <section className="bg-black container-fluid">
          <section>
            <div className="mb-20">
              <p className="text-5xl font-extrabold">Our Projects</p>
              <p className="text-base mt-3">
                Leave us a little info, and we’ll be in touch.
              </p>
            </div>

            <div
              className="flex flex-col lg:flex-row justify-center px-10 py-10"
              style={{
                backgroundColor: projectsData[activeProject]?.backgroundColor,
              }}
            >
              {/* Left Side - Scrolling Content */}
              <div
                className="flex-1 pr-10 space-y-10"
                style={{ scrollBehavior: "smooth" }}
              >
                {projectsData.map((project, index) => (
                  <div
                    key={project.id}
                    className={`project-section transition-opacity duration-500 h-[70vh] ${
                      activeProject === index
                        ? "opacity-100"
                        : "opacity-50"
                    }`}
                  >
                    <p
                      className="text-base"
                      style={{
                        color:
                          activeProject === index
                            ? project.subtitleColor
                            : "#999",
                      }}
                    >
                      {project.subtitle}
                    </p>

                    <p className="text-lg font-bold mt-4">{project.title}</p>
                    <p className="text-base mt-4 font-semibold">
                      {project.description1}
                    </p>
                    <p className="text-base mt-4">{project.description2}</p>

                    {/* Dynamic Button Outline Color */}
                    <Button
                      outline
                      className={`mt-4 transition-all duration-500 ${
                        activeProject === index ? "border-2" : "border"
                      }`}
                      style={{
                        borderColor:
                          activeProject === index
                            ? project.buttonOutlineColor
                            : "",
                        color:
                          activeProject === index
                            ? project.buttonOutlineColor
                            : "",
                          backgroundColor:
                            activeProject === index
                              ? project.buttonOutlineColor
                              : "",
                      }}
                    >
                      View More
                    </Button>
                  </div>
                ))}
              </div>

              {/* Right Side - Sticky Image */}
              <div className="flex-1">
                <div className="sticky top-28 mb-20">
                <img
  src={projectsData[activeProject].image}
  alt={projectsData[activeProject].title}
  className="w-full h-auto max-w-md"
  decoding="async"
  loading="lazy"
  style={{
    animation: "slideFromBottom 3s ease-in-out forwards", // Updated animation
  }}
/>
                </div>
              </div>

            </div>
          </section>
        </section>

        <section className="mx-auto md:px-0">
          <Counts
            awards={siteInfo?.projectHandled}
            designers={siteInfo?.teamCount}
          />
        </section>
      </section>
    </>
  );
}
