"use client";

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineCancelPresentation } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:p-6 md:flex md:justify-between md:items-center relative lg:bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold  text-white p-10" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="100">
          Rimsha{" "}
          <span
            className="text-pink-800"
            style={{ textShadow: "0 0 10px rgba(250, 7, 108, 0.952)" }}
          >
            Sultan
          </span>
        </div>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row md:space-x-4 absolute top-16 left-0 w-full text-white md:static md:w-auto backdrop-blur-md z-10 lg:bg-transparent p-6 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-2 lg:gap-16">
            <li className="menuLink pb-5 md:pb-0 "  data-aos="fade-up" data-aos-duration="1100" data-aos-delay="100">
              <a href="#hero" className="text-white">
                Home
              </a>
            </li>
            <li className="menuLink pb-5 md:pb-0" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
              <a href="#about" className="text-white" >
                About
              </a>
            </li>
            <li className="menuLink pb-5 md:pb-0"  data-aos="fade-up" data-aos-duration="1300" data-aos-delay="300">
              <a href="#skills" className="text-white">
                Skills
              </a>
            </li>
            <li className="menuLink pb-5 md:pb-0" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="400">
              <a href="#project" className="text-white" >
                Projects
              </a>
            </li>
            <li className="menuLink pb-5 md:pb-0" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
              <a href="#contact" className="text-white" >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="md:hidden z-50">
          {isOpen ? (
            <MdOutlineCancelPresentation size={30} onClick={toggleMenu}  className="cancel"/>
          ) : (
            <AiOutlineMenu size={30} onClick={toggleMenu}   className="cancel"/>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;