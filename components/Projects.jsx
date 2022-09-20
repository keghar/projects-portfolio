import React from "react";
import Image from "next/image";
import propertyImg from "../public/assets/property.png";
import Link from "next/link";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#6ab7dd]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <p>Comming Soon</p>
          {/* <ProjectItem
            title="Property Finder"
            description="React App"
            backgroundImg={propertyImg}
            projectUrl="/project"
          />
          <ProjectItem
            title="Project2"
            description="HTML CSS JAVASCRIPT"
            backgroundImg={propertyImg}
            projectUrl="/project"
          />
          <ProjectItem
            title="Project3"
            backgroundImg={propertyImg}
            projectUrl="/project"
          />
          <ProjectItem
            title="Project 4"
            backgroundImg={propertyImg}
            projectUrl="/project"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
