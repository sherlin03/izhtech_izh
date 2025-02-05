// import Lottie from "lottie-react";

import { useGetAllClientsListQuery } from "../../../lib/queries/client/useGetClientListQuery";

// import dots from "./dots.json"
export default function Partnercompany() {
  const { data: clientsList } = useGetAllClientsListQuery();
  return (
    <section>
      <div className="relative flex flex-col w-full py-8 md:flex-row md:py-8 lg:flex-row lg:flex-wrap lg:justify-center">
      {clientsList?.slice(0, 6).map((client) => (
        <div className="flex flex-col items-center py-2 md:flex-1 lg:w-1/4 filter grayscale ">
        <img src={`${import.meta.env.VITE_BASE_URL}/${client?.logo}`} alt="Image" className="w-auto h-16 mb-2 lg:h-20" />
      </div>
      ))}
       </div>
    </section>
  );
}