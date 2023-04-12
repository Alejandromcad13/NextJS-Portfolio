import { Social } from "@/typings";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[]
};

function Header({ socials}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between p-5 mx-auto max-w-7xl z-20 xl:items-center">
      <motion.div
        className="flex flex-row items-center"
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
        }}
      >
        {/*SOCIAL ICONS*/}

        {socials.map((social)=>(
          <SocialIcon
          url={social.url}
          fgColor="gray"
          bgColor="transparent"
          target={"_blank"}
        />
        ))}
      </motion.div>

      <motion.div
        className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.8,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
      >
        <SocialIcon
          className="cursor pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          url="#contact"
        />
        <p className="uppercase hidden md:inline-flex">Get in Touch!</p>
      </motion.div>
    </header>
  );
}

export default Header;
