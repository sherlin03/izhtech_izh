import { useState, useEffect } from "react";
import { Button } from "flowbite-react";

const projectsData = [
  {
    id: 1,
    title: "Oasis Sportopia",
    subtitle: "oasis sports academy",
    description1: "Case Study, Perspectives",
    description2: "Branding, Logo creation",
    image: "./images/Aboutpage/project1.png",
    backgroundColor: "#F0F3FF",
  },
  {
    id: 2,
    title: "Urban Landscapes",
    subtitle: "modern architecture",
    description1: "Case Study, Innovation",
    description2: "Design, Urban Planning",
    image: "./images/Aboutpage/project2.png",
    backgroundColor: "#FFEBF0",
  },
  {
    id: 3,
    title: "Green Energy",
    subtitle: "sustainability projects",
    description1: "Case Study, Solutions",
    description2: "Renewables, Tech Integration",
    image: "./images/Aboutpage/project3.png",
    backgroundColor: "#E8F8E9",
  },
  {
    id: 4,
    title: "Tech Revolution",
    subtitle: "future technologies",
    description1: "Case Study, Research",
    description2: "Innovation, Automation",
    image: "./images/Aboutpage/project4.png",
    backgroundColor: "#FFEFEA",
  },
  {
    id: 5,
    title: "Art & Culture",
    subtitle: "heritage projects",
    description1: "Case Study, Exploration",
    description2: "Curation, Exhibition Design",
    image: "./images/Aboutpage/project5.png",
    backgroundColor: "#E9F3FF",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".project-section");
    const scrollPosition = window.scrollY;

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        // Check if the section is in the viewport, and set the active project based on scroll position
        if (scrollPosition >= sectionTop - 200 && scrollPosition < sectionTop + sectionHeight - 200) {
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
    <section>
      <div
        className="flex flex-col lg:flex-row justify-center px-10 py-10"
        style={{
          backgroundColor: projectsData[activeProject]?.backgroundColor,
        }}
      >
        {/* Left Side - Scrolling Content */}
        <div className="flex-1 pr-10 space-y-10">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`project-section transition-opacity duration-500 ${
                activeProject === index ? "opacity-100" : "opacity-50"
              }`}
            >
              <p className="text-[#738FFF] text-base">{project.subtitle}</p>
              <p className="text-lg font-bold mt-4">{project.title}</p>
              <p className="text-base mt-4 font-semibold">{project.description1}</p>
              <p className="text-base mt-4">{project.description2}</p>
              <Button outline className="mt-4">
                View More
              </Button>
            </div>
          ))}
        </div>

        {/* Right Side - Sticky Image that Changes One by One */}
        <div className="flex-1">
          <div className="sticky top-20">
            <img
              src={projectsData[activeProject].image}
              alt={projectsData[activeProject].title}
              className="w-full h-auto max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
