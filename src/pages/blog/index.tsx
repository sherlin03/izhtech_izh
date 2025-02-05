import BlogsList from "./components/BlogsList";
import OurBlogs from "./components/OurBlogs";
export  default function Blog(){

    return (
        
    <section className="mx-auto overflow-hidden container-fluid ">
        <section className="px-5 mx-auto md:container ">
            <OurBlogs />
        </section>
            <BlogsList/>
    </section>       
    )
}