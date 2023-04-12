import { GetStaticProps } from "next";
import { Experiences, Skill, Social, Project } from "@/typings";
import { PageInfo } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProject } from "@/utils/fetchProjects";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import Image from "next/image";
import arrowUp from "../images/arrowup.png";

const inter = Inter({ subsets: ["latin"] });

//we specify the type we want the props to have importing the Typing files
type Props = {
  pageInfo: PageInfo;
  projects: Project[];
  experience: Experiences[];
  skill: Skill[];
  social: Social[];
};

const Home = ({pageInfo, projects, experience, skill, social}:Props) => {
  return (
    <div
      className="bg-[rgb(36,36,36)] text-white h-screen snap-mandatory overflow-scroll z-0
    overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>{pageInfo.name} Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* HEADER*/}
      <Header socials={social}/>
      {/* HERO*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo}/>
      </section>
      {/* ABOUT*/}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>
      {/* EXPERIENCE*/}
      <section id="experience" className="snap-center">
        <Experience experience={experience} />
      </section>
      {/* SKILLS*/}
      <section id="skills" className="snap-start">  
        <Skills skills={skill}/>
      </section>
      {/* PROJECTS*/}
      <section id="projects" className="snap-start">
        <Projects project={projects}/>
      </section>
      {/* CONTACT ME*/}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex items-center justify-center">
          <Link href="#hero">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={arrowUp}
              alt="Profile picture from me"
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Home;

//we use static prop generation ISR to make sure the page is regenerated from the backend any desired amount of time
export const getStaticProps: GetStaticProps<Props> = async () => {
  //we import the fetch utility functions we created that help us fetch data from the Backend and then we return that as props
  const projects: Project[] = await fetchProject();
  const experience: Experiences[] = await fetchExperience();
  const skill: Skill[] = await fetchSkills();
  const social: Social[] = await fetchSocials();
  const pageInfo: PageInfo = await fetchPageInfo();

  return {
    props: {
      pageInfo,
      experience,
      skill,
      social,
      projects,
    },
    //next js will try to regenerate the page every 1 minute - ISR Principles
    revalidate: 60
  };
};
