import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import fotoProyecto from "../images/portfolioimage.png";
import { Experiences } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  experience:Experiences;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[400px] md:w-[600px] xl:w-[900px] snap-center
    bg-[#262626] hover:opacity-100 opacity-40 cursor-pointer transition-opacity 
    duration-200 overflow-hidden overflow-y-scroll p-10 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin ">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 0.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
      >
        <Image
          width={500}
          height={500}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px]
          object-contain m-auto"
          src={urlFor(experience?.companyImage).url()}
          alt={experience?.company}
        />

        <div className="px-0 md:px-0">
          <h4 className="text-4xl font-light">{experience?.company}</h4>
          <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
          <div className="flex space-y-0 my-2">
            {/* techs used*/}
            {experience?.technologies.map((exp)=>(
              <Image
              width={250}
              height={250}
              className="w-16 h-16 rounded-full
              object-contain mx-1"
              //we use the helper function we created to convert the images to an string url we can use. By default the api returns a non string type
              src={urlFor(exp?.image).url()}
              alt={exp?.title}
              key={exp?._id}/>
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300">started to work at {experience?.dateStarted} - {experience?.dateEnded}</p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map((pts)=>(
              <li key={pts}>{pts}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </article>
  );
};

export default ExperienceCard;
