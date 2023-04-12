import Image from "next/image";
import React from "react";
import { Project } from "@/typings";
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
  project: Project[];
};

const Projects = ({ project }: Props) => {
  return (
    <div
      className="h-100 relative flex overflow-hidden flex-col text-center max-w-full
    justify-evenly mx-auto items-center z-0 space-y-5"
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl ">
        Projects
      </h3>

      {/*projects */}
      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80 scrollbar snap-x snap-mandatory z-20"
      >
        {project.map((proj, i) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-10
          md:p-44 h-screen"
            key={i}
          >
            <Image
              width={500}
              height={500}
              className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-md"
              src={urlFor(proj?.image).url()}
              alt={proj?.title}
            />

            <div className="flex space-x-10">
              {proj.technologies.map((tech)=>(
                <Image
                width={500}
                height={500}
                className="w-10 h-10 border border-gray-700 rounded-full object-contain"
                src={urlFor(tech?.image).url()}
                alt={tech?.title}
                key={tech?._id}
              />
              ))} 
            </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl text-center ">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50 ">
                  Case Study {i + 1} of {project.length}
                </span>{" "}
                - {proj.title}
              </h4>

              <p className="text-sm md:text-md md:text-left">{proj?.summary}</p>
              <div className="">
                <Link
                  target="_blank"
                  href={proj?.linkToBuild}
                  className="text-lg text-center underline"
                >
                  CLICK HERE TO CHECK THE BUILD&apos;S CODE
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
};

export default Projects;
