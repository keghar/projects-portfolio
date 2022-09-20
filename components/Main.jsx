import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-f h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's Build something together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#6ab7dd]">Kegan</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%} m-auto">
            I am a full-stack developer with skills in HTML, CSS, JavaScript,
            Next.js. I am currently learning backend development.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a href="http://www.linkedin.com/in/keganharris">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a href="https://github.com/keghar">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <a href="https://keganharris-portfolio.netlify.app/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
