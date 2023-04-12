import { motion } from "framer-motion";
import React from "react";
import ExperienceCard from "./ExperienceCard";
import { Experiences } from "@/typings";

type Props = {
  experience: Experiences[]
};

function Experience({experience}: Props) {
  return (
    <>
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        className="h-screen flex relative flex-col text-left 
         max-w-full justify-evenly mx-auto items-center"
      >
        <h3 className="relative md:mt-0 md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          Experience
        </h3>

        <div className="w-full flex h-full space-x-5 overflow-x-scroll scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin p-10 snap-x pt-40 snap-mandatory
        ">
          {experience.map(experience=>(
            <ExperienceCard key={experience._id} experience={experience} />
          ))}

        </div>
      </motion.div>
    </>
  );
}

export default Experience;
