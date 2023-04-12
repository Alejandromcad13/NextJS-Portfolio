import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import fotoPortafolio from "../images/portfolioimage.png";
import { PageInfo } from "@/typings";
import { urlFor } from "@/sanity";


type Props = {
  pageInfo:PageInfo
};

function About({ pageInfo }: Props) {
  return (
    <>
      <div
        className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
      >
        <h3 className="relative md:mt-0 md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          about
        </h3>

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
          className='mt-28'
        >
          <Image
            width={500}
            height={500}
            src={urlFor(pageInfo?.profilePic).url()}
            className="-mb-20 drop-shadow-2xl md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            alt="Profile picture from me"
          />
        </motion.div>
        <div className="space-y-10 px-0 md:w-96 md:h-96 mt-24">
          <h2 className="text-4xl font-semibold">
            My {""}
            <span className="underline decoration-[#F7AB0A]"> Background </span>{""}
          </h2>
          <p className="text-md">
          {pageInfo.backgroundInformation}
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
