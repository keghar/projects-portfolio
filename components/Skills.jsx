import React from "react";
import Image from "next/image";
import GitHub from "../public/assets/github1.png";
import JavaScript from "../public/assets/javascript.png";
import CSS from "../public/assets/css.png";
import HTML from "../public/assets/html1.png";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 ">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest text-[#6ab7dd] ">Skills</p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2>HTML</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2>CSS</h2>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={JavaScript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2>JavaScript</h2>
              </div>
            </div>
          </div>

          {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/react.png"
                  width="64px"
                  height="64px"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2>React</h2>
              </div>
            </div>
          </div> */}

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={GitHub} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h2>GitHub</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
