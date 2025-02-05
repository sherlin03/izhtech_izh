/* eslint-disable @typescript-eslint/no-explicit-any */
import { Footer } from "flowbite-react";
import { Button,  TextInput } from "flowbite-react";
import logo from "../../assets/Logo/Logo-white.png";
import { useGetSiteInfoListQuery } from "../../lib/queries/siteinfo/useGetAllSiteInfoListQuery";
import { useForm } from "react-hook-form";
import { useCreateContactMutationQuery } from "../../lib/queries/contact/useCreateContactMutationQuery";
// import {LinkButton} from '../../shared/components/buttons/LinkButton';

export default function CustomFooter() {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
const{mutateAsync:contactMutation ,isSuccess:isSuccessContact}=useCreateContactMutationQuery();

async function saveContact(payload: any) {
  try{
      contactMutation(payload);
  }
  catch(error){
  console.log(error);
  }
  finally{
      reset();
  }
}
  const { data: siteInfoList } = useGetSiteInfoListQuery();
  const siteInfo= siteInfoList??[];
  return (
    <footer className="py-10 bg-neutral-900">
      <div className="mx-auto md:container">
        <div className="grid w-full gap-8 p-4 py-8 lg:px-8 lg:grid-cols-4 md:px-6 md:grid-cols-4">
          <div >
     
  <img src={logo} className="h-16 mb-4" alt="Logo" />
  <div className="h-[1vw] flex justify-start">
    <h6 className="my-auto text-sm font-semibold text-white">
      Follow Us - 
      <a href="https://www.instagram.com/izh_tech?igsh=MWpuN3VvYW9mMmM0MA==">/Ig.</a>
      <a href="https://www.facebook.com/izhtech?mibextid=LQQJ4d">/Fb.</a>
      <a href="https://www.linkedin.com/company/izh-tech/">/In.</a>
    </h6>
  </div>
</div>

          <div className="text-stone-50 ">
            <h2 className="font-semibold">Address</h2>
            {siteInfo?.length > 0 && (
            <div className="pt-3 space-y-1 text-gray-300">
              <p> {siteInfo[0]?.address}</p>
            </div>
            )}
          </div>
          <div className="text-stone-50 ">
            <h2 className="font-semibold">Work Inquiries</h2>
            <div className="pt-3 space-y-1 text-gray-300">
              <p>Interested in working with us?</p>
              <p>hello@izhtech.com</p>
            </div>
                

                <div>
                <a
      href="./images/pdf/izhtech_profile.pdf"
      className="transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background flex items-center justify-center font-bold bg-indigo-950 border-1 h-11 px-3 py-6 w-60 text-sm text-white rounded mt-5 relative group"
      download="izhtech_profile.pdf"
      style={{
        background:
          "linear-gradient(326deg, rgb(88, 119, 248) 37.65%, rgb(255, 32, 178) 78.67%, rgb(255, 187, 3) 102.38%)",
      }}
    >
      
        Overview and Packages
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-arrow-right absolute w-4 h-4  duration-300 right-3 "
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
                </div>






            {/* <LinkButton
            href="./images/pdf/izhtech_profile.pdf"
            size={'lg'}
            className="px-9 py-6 w-48  text-sm text-white rounded mt-5 "
            style={{ background: 'linear-gradient(326deg, #5877F8 37.65%, #FF20B2 78.67%, #FFBB03 102.38%)' }}
             download="izhtech_profile.pdf"
            >
            Overview and Packages
          </LinkButton> */}


          </div>
          <div>
            <h2 className="font-semibold text-stone-50">
              Sign up for the newsletter
            </h2>
            <Footer.LinkGroup col>
              <form  onSubmit={handleSubmit(saveContact)}>
              <div className="max-w-md">
                <div className="flex gap-4 pt-3 fle-wrap">
                  <TextInput
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email address'
                      }
                  })}
                    className="text-slate-800"
                    id="email"
                    type="email"
                    style={{ backgroundColor: "#201f23", border: "none" }}
                    placeholder="you@admin.com"
                    required
                  />
                  <TextInput
                 {...register('message', {
                  required: 'Message is required',
                })}
                value="News Letter"
                    className="text-slate-800"
                    id="message"
                    type="hidden"
                    required
                  />

                  <Button type="submit" className="w-16 px-0 py-0 text-slate-800" style={{ backgroundColor: "#201f23", border: "none", color:"#FFFFFF" }} size="xs">
                    Sign up
                  </Button>
                  {errors['email'] && (
                  <p className="h-2 p-1 text-sm text-red-600">
                    {errors['email'].message as string}
                  </p>
                )}
                </div>


                <div className="flex flex-row gap-2 mt-4">

                </div>
              </div>
              {isSuccessContact&&<p className="text-green-500">Thank you for showing interest. </p>}
              </form>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="flex flex-col w-full p-4 py-6 bg-neutral-900 sm:flex-row lg:px-8 sm:px-4 sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="izhtech 2024. All rights reserved"
            className="text-stone-50"
          />
          <div className="flex justify-between mt-4 list-none sm:mt-0 text-stone-50 ">
            <Footer.Link className="text-xs text-gray-300 text-stone-50" href="./sitemap.xml">
              Sitemap
            </Footer.Link>
            <Footer.Link href="./about" className="text-xs text-gray-300 text-stone-50">
              About Us
            </Footer.Link>
            <Footer.Link href="./service " className="text-xs text-gray-300 text-stone-50">
              Our Service
            </Footer.Link>
            <Footer.Link href="./contact" className="text-xs text-gray-300 text-stone-50">
               Contact Us
            </Footer.Link>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
