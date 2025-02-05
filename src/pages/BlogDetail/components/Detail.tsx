import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../../lib/queries/blog/useGetPostByIdQuery";
import { formatDate } from "../../../utils";
import { CategoryModel } from "../../../lib/domains/category";
import { CircleUser } from "lucide-react";

export default function Detail() {
  const { id: postId } = useParams();
//   const formattedDate = format(new Date(), 'MMMM dd, yyyy');

  const { data: postDetail } = useGetPostByIdQuery(postId as string, {
    enabled: !!postId,
  });
  const date = formatDate(postDetail?.publishedDate.toString() as string);

  console.log(postDetail);

  return (
    <section className="px-5 mx-auto bg-transparent md:container">
      <div key={postDetail?.id}>
        <div className="flex-col gap-4 px-0 my-auto h-4/5 lg:flex lg:flex-row" >
          <div className=" lg:w-[85%] sm:w-[90%] sm:px-0 justify-left">
            <div className="flex flex-col justify-end h-full pb-5 ">
              {postDetail?.categories?.map(
                (category: CategoryModel, index: number) => (
                  <p key={index} className="pt-4 text-base">
                    {category?.name}{" "}
                  </p>
                )
              )}

              <h1 className="pt-2 text-5xl font-bold lg:w-3/4 2xl:text-5xl lg:text-5xl xl:text-6xl md:text-4xl sm:text-4xl">
                {postDetail?.title}
              </h1>
              <p className="pt-4 pb-4 text-base">{postDetail?.shortNote}</p>
              <div className="flow-root">
                <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
                  <div className="flex items-center mb-8 space-x-4">
                    <div className="flex-shrink-0">
                      <span>
                        <CircleUser size={28} strokeWidth={2} color="black" />
                      </span>
                    </div>
                    <div className="flex sm:flex-col md:flex-col">
                      <div className="flex gap-4">
                        <div className="">
                          <p className="text-xs text-black ">
                            Posted by
                          </p>
                          <p className="text-xs font-medium text-black ">
                            {postDetail?.author?.name}
                          </p>
                        </div>
                        <div className="flex-2 sm:flex-1 md:flex-2">
                          <p className="text-xs text-black ">
                            Published
                          </p>
                          <p className="text-xs font-medium text-black ">
                            {date}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:h-[35rem] w-full ">
          <img
            className="flex justify-center"
            src={`${import.meta.env.VITE_BASE_URL}/${postDetail?.imagePath}`}
            alt=""
          />
        </div>

        <div className="px-0 pt-6">
          <div
            className="text-base"
            dangerouslySetInnerHTML={{
              __html: postDetail?.description as string,
            }}
          ></div>
        </div>
        <div className="flex flex-col px-0 pt-4 md:flex-row">
          <div className="flex gap-4 ">
            <div className="pb-2">
              <p className="text-base text-black">Tagged with:</p>
            </div>
            <div className="flex flex-wrap gap-2 ">
              {postDetail?.tags
                ?.split(/[ ,.!?]+/)
                .filter(Boolean)
                .map((tag) => (
                  <button className="h-6 px-2 text-base rounded text-slate-950 bg-slate-300 border-1">
                    {tag}
                  </button>
                ))}
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
}
