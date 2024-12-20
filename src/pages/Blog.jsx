import React, { useEffect } from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import BlogList from "../components/BlogList";
import SeoComponent from "../components/SeoComponent";

const Blog = () => {
  return (
    <>
    <SeoComponent page="blog" />
      <Header
        left={"opacity-0"}
        mousePosition={"bottom"}
        text={"Read best articles from us."}
      />
      <div className="flex flex-col gap-8 lg:mx-36 mx-8 pt-12 pb-44">
        <h2 className="text-4xl font-bold">
          Check out our interesting articles
        </h2>
        <BlogList button={"flex"} />
      </div>
      <div className="flex flex-wrap justify-between items-center bg-black py-12 lg:px-20 gap-8 px-8">
        <div>
          <h2 className="text-4xl font-bold text-dark-yellow">350 +</h2>
          <p className="text-white">Clients Worldwide</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark-yellow">20 +</h2>
          <p className="text-white">Team Members</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark-yellow">100 +</h2>
          <p className="text-white">Projects Completed</p>
        </div>
        <div>
          <h2 className="text-4xl font-bold text-dark-yellow">85M +</h2>
          <p className="text-white">Revenue Generated</p>
        </div>
      </div>
      <div className="lg:mx-36 mx-8 py-12">
        <div className="flex flex-col items-center gap-16 pt-16 pb-44">
          <h2 className="font-bold text-4xl text-center max-w-2xl">
            We worked with the world’s biggest brands and the most innovative
            startups
          </h2>
          <Brands bg={"bg-white"} filter={"brightness-0"} />
        </div>
      </div>
    </>
  );
};

export default Blog;
