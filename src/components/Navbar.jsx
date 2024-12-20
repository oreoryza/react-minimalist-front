import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 700) {
      setBgColor("bg-dark-yellow");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const resetNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 ${bgColor} z-20 flex justify-between items-center py-6 lg:px-16 px-8 w-full`}>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center w-11 bg-white items-center px-2 py-4 gap-2"
      >
        <div className="h-1 w-full bg-black"></div>
        <div className="h-1 w-full bg-black"></div>
      </button>
      <div
        className={`fixed md:top-16 md:h-fit h-full max-md:left-0 top-0 lg:right-24 md:right-16 md:w-fit max-md:gap-4 w-full ${
          isOpen ? "flex" : "hidden"
        } flex-col items-center justify-center bg-white py-2 px-6`}
      >
        <Link to="/">
          <button onClick={resetNavbar} className="py-1 hover:scale-110 hover:font-semibold transition duration-200">
            HOME
          </button>
        </Link>
        <Link to="/about">
          <button onClick={resetNavbar} className="py-1 hover:scale-110 hover:font-semibold transition duration-200">
            ABOUT
          </button>
        </Link>
        <Link to="/contact">
          <button onClick={resetNavbar} className="py-1 hover:scale-110 hover:font-semibold transition duration-200">
            CONTACT
          </button>
        </Link>
        <Link to="/blog">
          <button onClick={resetNavbar} className="py-1 hover:scale-110 hover:font-semibold transition duration-200">
            BLOG
          </button>
        </Link>
        <button onClick={resetNavbar} className="absolute md:hidden block bottom-10">
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
