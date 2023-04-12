import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Skill } from "@/typings";
import { urlFor } from "@/sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <div>
      <motion.div
        className="group relative flex cursor-pointer"
      >
        <Image
          width={500}
          height={500}
          className="rounded-full object-contain bg-[#F7AB0A]/80  border-gray-800 w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale
        transition duration-300 ease-in-out"
        src={urlFor(skill?.image).url()}
          alt={skill.title}
        />

        <div
          className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
        group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
            <p className="text-sm text-black opacity-100">{skill.title}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skill;
