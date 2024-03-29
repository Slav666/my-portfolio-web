import React, { FC } from "react";
import { ProjectData } from "../../types";
import Image from "next/image";
import CustomLink from "../CustomLink";

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const liveAppHref = project.liveApp ? project.liveApp : undefined;

  return (
    <div className="sm:w-1/2 w-100 p-8">
      <div className="flex relative">
        <Image
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={project.image}
          width={100}
          height={100}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h2 className="title-font text-lg font-medium text-green-400 mb-1 text-center">
            {project.title}
          </h2>
          <CustomLink
            href={project.code}
            text="Code"
            textColor="text-blue-400"
          />
          {liveAppHref && (
            <CustomLink
              href={liveAppHref}
              textColor="text-pink-400"
              text="Live App"
            />
          )}
          <p>{project.description}</p>
          <p className="mb-8 text-yellow-200 text-center">Technologies used:</p>
          <div className="flex flex-row justify-evenly">
            {project.technologies.map((icon, index) => (
              <Image
                src={icon}
                key={index}
                alt="gallery"
                className="w-6 h-6"
                width={20}
                height={20}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
