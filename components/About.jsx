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
            // Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est,
            corrupti.
          </p>
          <p className="py-2 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
            libero nisi voluptatum eius omnis, in aliquid unde fugit! Assumenda
            reiciendis provident facilis id perferendis nostrum itaque optio.
            Quia nihil officia necessitatibus corrupti. Error reiciendis
            consequatur distinctio fuga aut mollitia harum.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
            inventore fuga aliquid veritatis accusantium doloribus dignissimos
            nobis dolores dolor voluptates, pariatur dolorem fugiat quisquam
            qui, commodi expedita veniam dolore minima porro cupiditate!
            Nesciunt id voluptates accusantium natus blanditiis, quas eius.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointers">
            Check out some of my projects
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 s">
          <img
            className="rounded-xl hidden md:block"
            src="/assets/headshot.png"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
