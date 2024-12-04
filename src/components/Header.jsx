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
          <h1 className="text-7xl font-bold text-center max-w-2xl leading-tight my-8">
            {text}
          </h1>
          <object
            data={mouse}
            type="image/svg+xml"
            className={`${mouseTop} mt-[-1%] w-12`}
          >
            <img src={mouse} alt="mouse" />
          </object>
        </div>
        <div className="absolute bottom-0 flex items-end w-full px-28">
          <img src={hands1} alt="hands1" className={`${left} w-1/2`} />
          <img src={hands2} alt="hands2" className="w-1/2" />
        </div>
      </div>
      <div className={` ${mouseBottom} flex justify-center w-full py-6`}>
        <object data={mouse} type="image/svg+xml" className="w-12">
          <img src={mouse} alt="mouse" />
        </object>
      </div>
    </div>
  );
};

export default Header;
