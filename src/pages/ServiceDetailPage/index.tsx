
import Details from "./components/details";
import { useParams } from "react-router-dom";
import { usegetServiceByIdQuery } from "../../lib/queries/services/useGetServiceByIdQuery";
import ServiceFeatureList from "./components/ServiceFeatureList";
import ServiceHighlights from "./components/ServiceHighlights";
import ServiceHeader from "./components/serviceHeader";


export default function ServiceDetail() {
 
  const { id: serviceId } = useParams();
  
  const { data: serviceIdResponse } = usegetServiceByIdQuery(
      serviceId as string,{enabled: !!serviceId,});

  if(serviceIdResponse){
    return (
      <>

<section className="px-5 mx-auto md:container ">
        <ServiceHeader title={serviceIdResponse?.title as string} />
    </section>
    <section>
           <Details 
                izhtech="IZH-TECH"
                description={serviceIdResponse?.description || ""}
                featuredImagePath={`${import.meta.env.VITE_BASE_URL}/${serviceIdResponse?.featuredImagePath}`}
                header={""}        />
           <section className="w-full px-3 mx-auto bg-black ">
           <div className="grid items-center justify-center mx-auto text-white ">
           <ServiceFeatureList datas={ serviceIdResponse?.serviceFeatures } />
           
           
           </div>
           </section>
     </section>
     <section>
     <ServiceHighlights datas={serviceIdResponse?.serviceHighlights}/>
     </section>
       
     
      </>
   )
  }


}
  