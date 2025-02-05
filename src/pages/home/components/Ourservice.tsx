import { Tabs } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
// import BrandingService from "./branding/BrandingService";
// import WebDevelopmentService from "./webdevelopment/WebDevlopmentService";
// import MobileAppService from "./mobileapp/MobileAppService";
// import DigitalMarketingService from "./digitalmarketing/DigitalMarketingService";
import { useGetServicesListQuery } from "../../../lib/queries/services/useGetServicesListQuery";
import { ServicesModal } from "../../../lib/domains/services";
import ServicesTab from "./serviceTabs/ServicesTab";
export default function Ourservice() {
  
  const { data: servicesList} = useGetServicesListQuery();
  
  const customTheme: CustomFlowbiteTheme["tabs"] = {
    base: "flex flex-col ring-transparent align-start md:flex-col  lg:flex-row gap-2 md:gap-4 lg:gap-2 sm:justify-center md:justify-start",
    tablist: {
      base: "flex text-center mt-8 ring-transparent align-left lg:items-baseline lg:justify-start justify-center ",
      styles: {
        default:
          "flex-wrap border-b-0 border-r rounded-none ring-transparent border-transparent dark:border-gray-700 ",
        pills:
          "flex-wrap text-left lg:flex-col font-medium text-sm ring-transparent rounded-none text-gray-500 dark:text-gray-400 bg-gray border-transparent space-x-2 ",
      },
      tabitem: {
        
        styles: {
          
          pills: {
            
            base: "text-left bg-transparent rounded-none lg:w-full justify-start !focus:outline-none ring-transparent",
            active: {
              on: "text-black border-transparent border-[#FFD074] hover:bg-gray-50 bg-transparent ring-transparent !focus:outline-none border-b-2 lg:border-r-2 lg:border-b-0",
              off: "text-black border-transparent bg-transparent hover:bg-gray-50",
            }
          },
        },
      },
    },
    tabitemcontainer: {
      base: "",
      styles: {
        default: "",
        underline: "",
        pills: "",
        fullWidth: ""
      }
    },
    tabpanel: ""
  };

  return (
    <section className="lg:px-10 pb-18 pt-18 bg-[#F7F9FA] rounded">
    <div className="relative py-10">
      <div className="text-center ">
        <p className="pt-4 pb-2 text-base">#OUR SERVICE</p>
        <h1 className="pb-3 font-bold text-md lg:text-3xl md:text-3xl sm:text-3xl">
          What to expect? 
          
        </h1>
        
      </div>

      <div className="w-full lg:pl-10">
        <Tabs
          aria-label="Pills"
          style="pills"
          theme={customTheme}
          className="outline-none "
        >{servicesList?.map((serviceDetail:ServicesModal) => {
           
           return (
          <Tabs.Item active title={serviceDetail.title} className="outline-none">
            <ServicesTab key={serviceDetail.id} {...serviceDetail} />

          </Tabs.Item>
           )
           
         }) }
        </Tabs>
      </div>
    </div>  
    </section>
  );
}
