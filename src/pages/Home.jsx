import React from "react";
//import components
import Testimoni from "../components/Testimoni";
import Brands from "../components/Brands";
import BlogList from "../components/BlogList";
import MainHeader from "../components/MainHeader";
//icon svgs
import penTool from "../assets/pen-tool-2.svg";
import search from "../assets/search-normal.svg";
import briefcase from "../assets/briefcase.svg";
import scroll from "../assets/scroll.svg";
import Work from "../components/Work";
import handPhone from "../assets/handPhone.svg";


const Home = () => {
  return (
    <>
      <MainHeader />
      <div className="border-b-2 border-black/[.2]">
        <div className="flex justify-between items-center mx-28 my-20">
          <div className="flex flex-col items-center gap-8 px-4">
            <object data={penTool} type="image/svg+xml" className="w-8">
              <img src={penTool} alt="penTool" />
            </object>
            <p>EXCEPTIONAL DESIGN</p>
          </div>
          <div className="flex flex-col items-center gap-8 px-4">
            <object data={search} type="image/svg+xml" className="w-8">
              <img src={search} alt="search" />
            </object>
            <p>IN-DEPTH RESEARCH</p>
          </div>
          <div className="flex flex-col items-center gap-8 px-4">
            <object data={briefcase} type="image/svg+xml" className="w-8">
              <img src={briefcase} alt="briefcase" />
            </object>
            <p>PRODUCT MANAGEMENT</p>
          </div>
          <div className="flex flex-col items-center gap-8 px-4">
            <object data={scroll} type="image/svg+xml" className="w-8">
              <img src={scroll} alt="scroll" />
            </object>
            <p>NO-CODE DEVELOPMENT</p>
          </div>
        </div>
        <div className="flex justify-start mx-28 my-32 gap-24">
          <div className="flex items-end gap-12">
            <div className="flex">
              <h1 className="text-7xl text-yellow font-bold">hello</h1>
              <p className="text-8xl mt-[-30px] text-black">.</p>
            </div>
            <div>
              <h2 className=" font-bold text-end text-4xl max-w-96 leading-normal">
                Award winning agency specializing in creative design
              </h2>
            </div>
          </div>
          <div className="py-2">
            <div className="flex flex-col justify-between h-full max-w-80">
              <p>
                We help businesses grow, launch products and build enduring
                relationships with our communities.
              </p>
              <a href="" className="underline underline-offset-8 max-w-fit">
                OUR INFO
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center ml-52 mr-12 mt-32 mb-24">
          <h2 className=" font-bold text-4xl">Our Work So Far</h2>
          <ul className="flex gap-8">
            <li>
              <a href="">ALL</a>
            </li>
            <li>
              <a href="">BRANDING</a>
            </li>
            <li>
              <a href="">ILLUSTRATION</a>
            </li>
            <li>
              <a href="">PRODUCT DESIGN</a>
            </li>
          </ul>
        </div>
        <Work heightImg={"h-72"} layout={"grid grid-cols-4 gap-2"} />
      </div>
      <div className="flex flex-col justify-center items-center py-16 bg-gradient-to-b from-white to-gray">
        <div className="flex justify-evenly items-start w-full py-28">
          <div className="relative flex justify-center items-end">
            <h1 className="absolute text-dark-yellow  text-start text-[265px] font-bold ml-10 mb-16 leading-[.7]">
              des gnr.
            </h1>
            <object
              data={handPhone}
              type="image/svg+xml"
              className="max-w-sm z-10"
            >
              <img src={handPhone} alt="handPhone" />
            </object>
          </div>
          <div className="max-w-[375px]">
            <h2 className=" text-4xl font-bold leading-normal mb-8">
              A simple, yet effective three step process.
            </h2>
            <ul className="flex flex-col gap-8">
              <li className="flex justify-center items-start gap-4">
                <div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-md"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Idea Initiation</p>
                  <p>
                    For a start, we’ll uncover what makes you stand apart and
                    creatively position your brand and business.
                  </p>
                </div>
              </li>
              <li className="flex justify-center items-start gap-4">
                <div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-md"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Idea Initiation</p>
                  <p>
                    For a start, we’ll uncover what makes you stand apart and
                    creatively position your brand and business.
                  </p>
                </div>
              </li>
              <li className="flex justify-center items-start gap-4">
                <div>
                  <div className="w-16 h-16 rounded-full bg-white shadow-md"></div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="font-bold">Idea Initiation</p>
                  <p>
                    For a start, we’ll uncover what makes you stand apart and
                    creatively position your brand and business.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <p className="">
          Wherever you are in your journey, we’d love to hear from you.{" "}
          <a href="" className="underline underline-offset-4 font-bold">
            Book a free call
          </a>
        </p>
      </div>
      <div className="flex justify-between items-center ml-52 mr-12 mt-32 mb-24">
        <h2 className=" font-bold text-4xl">
          What our clients say about us
        </h2>
      </div>
      <div className="mx-16 mb-48">
        <Testimoni />
      </div>
      <div className="flex justify-center items-center py-44 px-36 bg-gray-30">
        <Brands bg={"bg-gray-30"} filter={"grayscale"} />
      </div>
      <div className="mb-32">
        <div className="flex justify-between items-center ml-52 mr-40 mt-32 mb-24">
          <h2 className=" font-bold text-4xl">Check out our interesting articles</h2>
          <a href="" className="underline underline-offset-4 font-bold">
            SEE ALL
          </a>
        </div>
        <div className="mx-36">
          <BlogList slice={3} />
        </div>
      </div>
    </>
  );
};

export default Home;
