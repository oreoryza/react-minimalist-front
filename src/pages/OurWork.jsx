import React from "react";
import Header from "../components/Header";
import Work from "../components/Work";
import Brands from "../components/Brands";
import SeoComponent from "../components/SeoComponent";

const OurWork = () => {
  return (
    <>
    <SeoComponent page="work" />
      <Header mousePosition={"top"} text={"The work we do, and the people we help."} />
      <div className="lg:mx-16 mx-8 mt-24">
        <h2 className="font-bold text-4xl">Featured Work</h2>
      </div>
      <div className="lg:mx-36 mx-8 my-8">
        <div className="flex justify-end items-center w-full">
          <p className="max-w-md text-2xl font-medium text-end">
            We are an award-winning creative & design agency committed to
            excellence since forever.
          </p>
        </div>
        <div className="my-32">
            <Work heightImg={"h-[28rem]"} layout={"grid lg:grid-cols-2 grid-cols-1 gap-10"} />
        </div>
        <div className="flex flex-col items-center gap-16 pt-16 pb-44">
            <h2 className="font-bold text-4xl text-center max-w-2xl">We worked with the world’s biggest brands and the most innovative startups</h2>
            <Brands bg={"bg-white"} filter={"brightness-0"}/>
        </div>
      </div>
    </>
  );
};

export default OurWork;
