import Profile from "../assets/Profile Image.jpeg";
import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useState } from "react";

const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <section className="fixed w-full  flex justify-between items-center px-4 py-2 bg-[#a5b4fc] ">
        <img
          className="w-[70px] h-[70px] rounded-lg bg-[#a5b4fc]"
          src={Profile}
          alt="Name-Logo"
        />
        <ul className="hidden md:flex md:flex-row  md:gap-x-3 lg:gap-x-7">
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Home
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            About
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            Skills
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md">
            Projects
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Education
          </li>
          <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Contact
          </li>
        </ul>
        <article className="md:hidden z-10" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FaAlignJustify className="h-7 w-7 text-white " />
          ) : (
            <AiOutlineClose className="h-7 w-7 text-white font-extrabold" />
          )}
        </article>
        {!toggle && (
          <ul className="absolute left-0 top-0 bg-[#a5b4fc] w-full h-screen md:hidden flex flex-col gap-7 font-semibold text-4xl justify-center items-center">
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              Home
            </li>
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              About
            </li>
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              Skills
            </li>
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              Projects
            </li>
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              Education
            </li>
            <li className="text-white hover:border-[2px] hover:rounded-lg p-3">
              Contact
            </li>
          </ul>
        )}
        <ul className="fixed  top-[42%] left-0">
          <li className="mb-1">
            <a
              href="https://www.linkedin.com/in/syed-mohd-azam/"
              rel="noreferrer"
              target="_blank"
              className="flex flex-row items-center justify-center bg-[#a5b4fc] p-2 ml-[-92px] hover:ml-[-10px] w-fit"
            >
              <span className=" text-xl text-white font-semibold pl-2 pr-2">
                LinkedIn
              </span>{" "}
              <FaLinkedin className="w-6 h-6 text-white" />{" "}
            </a>
          </li>
          <li className="mb-1">
            <a
              href="https://github.com/Syed-Mohd-Azam"
              rel="noreferrer"
              target="_blank"
              className="flex flex-row  items-center justify-center bg-[#a5b4fc] p-2 w-fit ml-[-80px] hover:ml-[-10px]"
            >
              <span className=" text-xl text-white font-semibold pr-2 pl-2">
                GitHub
              </span>
              {"  "}
              <FaGithub className="w-6 h-6 text-white" />{" "}
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
export default NavBar;
