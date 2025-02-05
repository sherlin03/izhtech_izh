import { Card } from "flowbite-react";
import { PostModel } from "../../../../lib/domains/post";
import { CategoryModel } from "../../../../lib/domains/category";
import { formatDate } from "../../../../utils";
import { CircleUser } from "lucide-react";
import { Link} from "react-router-dom";

export default function BlogCard({ item }: { item: PostModel }){
    const id=item.id;
    const date=formatDate(item?.publishedDate.toString())
    return (
        <a href={`/blog-detail/${id}`}>
    <Card className="max-w-lg mx-auto bg-[#F5F1F5] h-96">
       
    <div className="flow-root">
        <div className="py-3 border-gray-200 sm:py-4 dark:border-gray-700">
            <div className="flex items-center mb-8 space-x-4">
                <div className="flex-shrink-0">
                    <span
                    >
                        <CircleUser size={28} strokeWidth={2} color="black" />
                    </span>
                </div>
                <div className="flex-1">
                    <p className="text-xs text-black ">by</p>
                    <p className="text-xs font-bold text-black">{item.author?.name}</p>
                </div>
                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="13" y1="18" x2="19" y2="12" />
                    <line x1="13" y1="6" x2="19" y2="12" />
                </svg>

                <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <line x1="5" y1="12" x2="11" y2="18" />
                    <line x1="5" y1="12" x2="11" y2="6" />
                </svg>
            </div>
        </div>
    </div>
    <p className="mb-0 text-xs font-medium text-black">{date}</p>
    <Link to={`/blog-detail/${id}`}><p className="justify-center mb-1 text-base text-xl font-bold text-black">{item.title}</p></Link>
    
    <div className="flex flex-row flex-wrap gap-4">
        {item?.categories?.map((category: CategoryModel, index: number) => (
          <button
            key={index}
            className="items-center justify-center h-6 text-xs text-black bg-gray-200 rounded-lg w-28"
          >
            {category.name}
          </button>
        ))}
    </div>
    
</Card>
</a>)
}