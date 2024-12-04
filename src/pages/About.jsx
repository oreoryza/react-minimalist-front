import React from "react";
import Header from "../components/Header";
import Team from "../components/Team";
import Brands from "../components/Brands";

const About = () => {
  return (
    <>
      <Header mousePosition={"top"} text={"We specialize in problem solving."} />
      <div className="text-black mx-16 mt-24">
        <div className="flex flex-col gap-8">
          <h2 className="font-bold text-4xl">Featured Work</h2>
          <div className="flex justify-between items-center w-full">
            <p className="text-xl max-w-2xl">
              We love what we do and create partnerships with our clients to
              ensure their digital transformation is positioned for long-term
              success.We believe that the human dimensions essential to start
              any successful project and that this is where splendid emotional
              relationships between the company and people are born.
            </p>
            <h2 className="font-bold text-4xl opacity-50">EST. 2020</h2>
          </div>
        </div>
        <img
          src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
          className="my-12"
          alt=""
        />
        <div className="flex flex-col justify-center items-center w-full py-32">
          <h2 className="font-bold text-4xl">
            Meet the heroes behind the magic
          </h2>
          <div className="py-24 px-8">
            <Team />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center bg-black py-12 px-20">
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
      <div className="mx-36 py-12">
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

export default About;
