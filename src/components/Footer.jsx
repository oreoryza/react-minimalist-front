import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import notif from "../assets/notif.svg";

import { FaTwitter, FaFacebookF, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="text-white bg-black lg:p-16 py-16 px-8">
      <div className="flex md:flex-row flex-col lg:gap-64 gap-24">
        <div className="flex flex-col gap-6 max-w-md">
          <object data={logo} type="image/svg+xml" className="max-w-24">
            <img src={logo} alt="Logo" />
          </object>
          <p>
            Dsgnr. is an award winning creative and design agency based in New
            York, USA.
          </p>
          <a href="mailto:info@dsgnr.com" className="flex gap-12 border-2 border-dark-yellow py-4 px-6 max-w-xs hover:bg-dark-yellow transition duration-300">
            <object data={notif} type="image/svg+xml" className="w-6">
              <img src={notif} alt="notification" />
            </object>
            <p>info@dsgnr.com</p>
          </a>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-4">
            <p className="font-bold">What We Do</p>
            <ul className="flex flex-col gap-1">
              <Link to="/">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Intro
                </li>
              </Link>
              <Link to="/">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Home
                </li>
              </Link>
              <Link to="/our-work">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Work
                </li>
              </Link>
              <Link to="/contact">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Pricing
                </li>
              </Link>
              <Link to="/contact">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-bold">Who We Are</p>
            <ul className="flex flex-col gap-1">
              <Link to="/about">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  About
                </li>
              </Link>
              <Link to="/blog">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  News
                </li>
              </Link>
              <Link to="/">
                <li className="active:underline lg:hover:underline underline-offset-1">
                  Testimonials
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-between mt-16 gap-4">
        <div className="flex gap-8">
          <a
            href=""
            className="active:underline lg:hover:underline underline-offset-1"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="active:underline lg:hover:underline underline-offset-1"
          >
            Terms
          </a>
        </div>
        <div className="flex gap-8 text-xl">
          <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <FaGooglePlusG className="scale-150" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
