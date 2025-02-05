import Lottie from "lottie-react";
import dotsanimation from "../dotsanimation.json"
import BlogCard from './BlogCard';
import { useGetPostQueryListQuery } from "../../../../lib/queries/blog/useGetPostListQuery";
import { PostModel } from "../../../../lib/domains/post";
import { Link} from "react-router-dom";

export default function BlogList() {
    const { data: blogList } = useGetPostQueryListQuery();
    return (

        <section className="relative overflow-hidden lg:mx-auto lg:container item-center">
{ blogList && blogList.length > 0 && (
            <><div className="relative z-10 flex flex-col flex-wrap justify-between gap-4 px-5 my-auto space-y-5 md:px-5 h-4/5 md:flex md:flex-row">
                    <div className="lg:w-[67%] xl:w-8/12 sm:w-[70%] ">
                        <div className="flex flex-col h-full text-left item-left justify-left">
                            <p className="text-sm">FROM THE BLOG</p>
                            <h1 className="text-5xl font-bold lg:text-7xl">
                                Quick and neat,
                                just like our work.
                            </h1>
                            <br />
                            <Link to="/blog"
                                className="inline-block w-32 text-sm font-bold text-center text-black bg-white border-2 border-black rounded "
                            >Read all</Link>


                            <Lottie animationData={dotsanimation} loop={true} className="absolute lg:right-[-24rem] lg:w-[20%] lg:left-[46.5rem] lg:bottom-[-140rem] hidden lg:block " />

                        </div>
                    </div>


                    {blogList?.map((item: PostModel) => (
                        <div className="h-full lg:w-[30%] xl:w-[31%] sm:w-full md:w-[48%] item-center">
                            <BlogCard key={item.id} item={item} />
                        </div>
                    ))}

                </div><div className="flex w-full gap-6 flex-col-3 md:flex-row md:py-6 lg:flex-row lg:flex-wrap lg:justify-center">

                    </div></>)}
                  
        </section>
    );
}
