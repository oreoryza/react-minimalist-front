import React from "react";
import Logo from "../assets/Logo.svg";
import hand1 from "../assets/image4.png";
import hand2 from "../assets/image5.png";
import hand3 from "../assets/image6.png";

const Banner = () => {
  return (
    <div className="bg-dark-yellow w-full font-open-sans my-12">
      <div className="flex md:flex-row flex-col items-center xl:gap-28 lg:gap-20 md:gap-12">
        <object
          data={Logo}
          type="image/svg+xml"
          className="ml-[-3.5%] mt-[-5%] size-96"
        >
          <img src={Logo} alt="Logo" />
        </object>
        <div className="flex lg:flex-row flex-col lg:items-center gap-12 mt-[-5%] px-4 md:mb-0 mb-24">
          <h1 className="text-4xl font-bold">
            Grow Your Business.
            <br />
            Build Great Products.
          </h1>
          <a href="callto:+5555555" className="bg-black text-white font-bold px-8 py-4 max-h-fit z-10">
            Book a free call
          </a>
        </div>
      </div>
      <div className="flex justify-end mt-[-15.5%] bg-dark-yellow">
        <div className="flex">
          <img src={hand1} alt="hands" className="w-24" />
          <img src={hand2} alt="hands" className="w-24"/>
          <img src={hand3} alt="hands" className="w-24"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
