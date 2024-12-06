import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { detailBlogs } from "../redux/async/fetchData";
import parse from 'html-react-parser'

const BlogDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog, error } = useSelector((state) => state.fetch);

  useEffect(() => {
    dispatch(detailBlogs({ id }));
  }, [dispatch, id]);

  if (error) {
    return <div>Error fetching blog: {error.message}</div>;
  }

  return (
    <>
      <Header left={"opacity-0"} mousePosition={"bottom"} text={"We write articles with love."} />
      <div className="flex flex-col justify-center gap-4 lg:mx-28 mx-8 my-4">
        <img src={blog.banner} alt={`Image for ${blog.title}`} className="w-full h-96 object-cover" />
        <h1 className="lg:text-7xl text-5xl font-bold">{blog.title}</h1>
        <p className="mt-4">{parse(`${blog.content}`)}</p>
      </div>
    </>
  );
};

export default BlogDetail;