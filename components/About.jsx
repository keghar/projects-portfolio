import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#6ab7dd]">
            About
          </p>
          <h2 className="py-2 text-gray-600">Who Am I</h2>
          <p className="py-2 text-gray-600">
            My name is Kegan Harris and I am from the Gulf Coast area of Alabama
          </p>
          <p className="py-2 text-gray-600">
            I've spent most of my life working with my hands. From being head of
            maintenance to becoming a technician, repairing appliances,
            developing the skill of problem-solving became one of the greatest
            skills I could learn in my life. Since 2020 I have been pursuing my
            desire to work in technology, where I could use my skill of
            problem-solving, by becoming a full-stack developer.
          </p>
          <p className="py-2 text-gray-600">
            I am available for hire for any type of project. I love to learn, so
            the more challenging the project the better. Contact me below
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointers">
            Check out some of my projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 s">
          <picture>
            <img
              className="rounded-xl hidden md:block"
              src="/assets/headshot.png"
              alt="/"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default About;
