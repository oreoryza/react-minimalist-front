import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../redux/async/fetchData";
import parse from "html-react-parser";

const BlogList = ({ slice, button = "hidden" }) => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogsSlice = blogs.slice(0, slice);

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {blogsSlice.map((blog, index) => (
          <>
          {loading ? (
            <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-72 bg-gray rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-8 bg-gray rounded col-span-2"></div>
                  </div>
                  <div class="h-2 bg-gray rounded"></div>
                  <div class="h-2 bg-gray rounded"></div>
                </div>
              </div>
            </div>
          </div>
          ) : (
          <div key={index} className="bg-white rounded-lg shadow-md p-4">
            <div className="h-72">
              <img
                src={blog.banner}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 py-4">
              <h2 className="text-2xl font-bold">{blog.title}</h2>
              <p className="text-black/[.5] line-clamp-2">
                {parse(blog.content)}
              </p>

              <Link
                to={`/blog-detail/${blog.slug}`}
                className="font-bold group"
              >
                READ MORE{" "}
                <i className="bi bi-arrow-right ml-2 group-hover:ml-1"></i>
              </Link>
            </div>
          </div>
        )}
        </>
        ))}
      </div>
      <div className={`${button} justify-center w-full mt-16`}>
        <button className="py-4 px-12 bg-black text-white font-bold">
          Load More
        </button>
      </div>
    </>
  );
};

export default BlogList;
