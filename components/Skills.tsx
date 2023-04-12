import { motion } from "framer-motion";
import React from "react";
import SkillDetail from "./SkillDetail";
import { Skill } from "@/typings";

type Props = {
  skills: Skill[]
};

const Skills = ({ skills }: Props) => {
  return (
    <>
      <motion.div
        className="flex relative overflow-hidden text-center flex-col md:text-left 
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center mx-auto xl:space-y-0
        items-center"
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
      >
        <h3 className="md:mt-0 absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
          Skills
        </h3>
        <h3 className="md:mt-0 absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for proficiency</h3>

        <div className="grid grid-cols-4 gap-5">
            {skills.map((skill)=>(
              <SkillDetail key={skill._id} skill={skill}/>
            ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
