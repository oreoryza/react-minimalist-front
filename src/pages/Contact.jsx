import React from "react";
import Header from "../components/Header";
import Brands from "../components/Brands";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <Header
        left={"opacity-0"}
        mousePosition={"bottom"}
        text={"We would love to hear from you."}
      />
      <div className="flex gap-16 text-black px-28 py-8">
        <div className="h-[36rem]">
          <img
            src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-end w-full">
            <h2 className="text-4xl font-bold text-end max-w-sm">
              We'd love to hear from you
            </h2>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 px-28 py-32">
        <h2 className="text-4xl font-bold text-center">Come stop by our office sometime</h2>
        <div className="relative">
          <img
            src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white px-4 pt-16 pb-2">
            <h2 className="text-4xl font-bold pb-2">New York, USA</h2>
            <p>7626 W. 8th St. Massapequa, NY 11758</p>
            <div className="py-2">
              <a href="">info@dsgnr.com</a>
              <p>(543)890 98</p>
            </div>
            <div className="py-6">
              <a href="">
                GET DIRECTIONS <i className="bi bi-arrow-right"></i>
              </a>
            </div>
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

export default Contact;