import { PostModel } from "../../../lib/domains/post";
import { useGetPostQueryListQuery } from "../../../lib/queries/blog/useGetPostListQuery";
import BlogCard from "../../home/components/blog/BlogCard";

export  default function BlogsList(){
    const { data: blogList } = useGetPostQueryListQuery();

    return (
       <section className="container mx-auto">
        <div className="z-40 flex justify-start w-full gap-2 p-4 mx-auto">
                 
                  
                </div>
                {blogList && (
  <div className="flex flex-col justify-start w-full gap-6 px-2 md:flex-row md:flex-wrap md:gap-4 md:px-0">
    {blogList?.map((item: PostModel) => (
      <div key={item.id} className="w-[95%] pb-5  sm:w-8/12 md:w-[48%] lg:w-[31%]">
        <BlogCard item={item} />
      </div>
    ))}
  </div>
)}


        {blogList && (
          <div className="flex w-full gap-6 px-4 flex-col-3 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">
            {/* <p>No Blogs Found</p> */}
          </div>
         )}
       </section>
    )
}