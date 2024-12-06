import React from "react";
import pattern from "../assets/pattern.svg";
import mouse from "../assets/mouse.svg";
import hands1 from "../assets/hands1.png";
import hands2 from "../assets/hands2.png";

const Header = ({ text, left, mousePosition }) => {
  const mouseTop = mousePosition === "bottom" ? "hidden" : "";
  const mouseBottom = mousePosition === "top" ? "hidden" : "";

  return (
    <div>
      <div className="relative flex justify-between items-center bg-yellow w-100 min-h-screen">
        <object
          data={pattern}
          type="image/svg+xml"
          className="max-w-full pr-[8%] pb-6"
          alt="pattern"
        >
          <img src={pattern} alt="pattern" />
        </object>
        <div className="absolute flex flex-col justify-center items-center w-full mb-12">
          <h1 className="lg:text-7xl text-5xl font-bold text-center max-w-2xl px-2 leading-tight my-8">
            {text}
          </h1>
          <div className={` ${mouseTop} flex`}>
          <object
            data={mouse}
            type="image/svg+xml"
            className="hidden md:block mt-[-1%] w-12"
          >
            <img src={mouse} alt="mouse" />
          </object>
          <div className="w-1 h-3 hidden md:block rounded bg-black scroll-down"></div>
          <div className="w-6 h-6 md:hidden block rounded-full bg-black/[.5] scroll-up"></div>
          </div>
        </div>
        <div className="absolute bottom-0 flex items-end w-full lg:px-28 px-2">
          <img src={hands1} alt="hands1" className={`${left} w-1/2`} />
          <img src={hands2} alt="hands2" className="w-1/2" />
        </div>
      </div>
      <div className={` ${mouseBottom} flex justify-center w-full py-6`}>
        <object data={mouse} type="image/svg+xml" className="hidden md:block w-12">
          <img src={mouse} alt="mouse" />
        </object>
        <div className="w-1 h-3 hidden md:block rounded bg-black scroll-down"></div>
        <div className="w-6 h-6 md:hidden block rounded-full bg-black/[.5] scroll-up"></div>
      </div>
    </div>
  );
};

export default Header;
