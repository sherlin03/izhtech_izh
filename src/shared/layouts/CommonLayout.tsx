import Collaboration from "../components/Collaboration";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import CustomFooter from "../components/CustomFooter";
import SocialMediaTag from "../components/SocialMediaTag";
import PageScroll from "../components/PageScroll";
import CustomObject from "../components/CustomObjects";


export default function  CommonLayout() {
  const location = useLocation();
  const currentPath = location.pathname || "/";

  return (
    <>
    <Header />
    <section className="relative mx-auto  container-fluid">
      
      <CustomObject
          className="absolute sm:-top-20 sm:h-[40vh] sm:-right-20  -top-40 lg:-top-40 -z-10 -right-40 lg:-right-40 -right-20 max-w-screen-xl h-[100vw] lg:h-[50vh]  lg:block"
          variants="circle-2"
        />
      <PageScroll />
      <section className="relative mx-auto  container-fluid">
        <Outlet />

        {currentPath !== "/contact" && (
          <section className="py-12 bg-black md:py-20">
            <div className="px-4 mx-auto md:container md:px-0">
              <Collaboration />
            </div>
          </section>
        )}
 <SocialMediaTag/>
        <CustomFooter />
      </section>
      </section>
    </>
  );
}
