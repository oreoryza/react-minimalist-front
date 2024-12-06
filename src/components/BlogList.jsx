import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/async/fetchData";
import parse from "html-react-parser";

const BlogList = ({slice, button="hidden"}) => {
  const dispatch = useDispatch();
  const {blogs} = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogsSlice = blogs.slice(0, slice);

  return (
    <>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {blogsSlice.map((blog) => (
            <div key={blog.id} className="bg-white rounded-lg shadow-md p-4">
                <div className="h-72">
                    <img src={blog.banner} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-3 py-4">
                    <h2 className="text-2xl font-bold">{blog.title}</h2>
                    <p className="text-black/[.5] line-clamp-2">{parse(blog.content)}</p>
                    <Link to={`/blog-detail/${blog.slug}`}>
                    <a className="font-bold">READ MORE <i class="bi bi-arrow-right ml-2"></i></a>
                    </Link>
                </div>
            </div>
        ))}
    </div>
    <div className={`${button} justify-center w-full mt-16`}>
    <button className="py-4 px-12 bg-black text-white font-bold">Load More</button>
    </div>
    </>
  );
};

export default BlogList;
