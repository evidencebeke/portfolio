import React from "react";
import pic from "../assets/homesolutions.jpg";
import { motion } from "framer-motion";
import nomelegacy from "../assets/nomlegacy.png";
import uisu from "../assets/uisu.png";
import myowflix from "../assets/myowflix.png";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Website for Homesolutions",
      summary:
        "A real estate website where landowners and agents meet with buyers. Contains full authentication and CRUD operations.",
      pic: pic.src,
      link: "https://homesolutions.ng",
    },
    {
      title: "Website for Nom Legacy Limited",
      summary:
        "A website for an Abuja based HR firm. Includes a landing page and some other pages highlighting the firm's scope of business.",
      pic: nomelegacy.src,
      link: "https://nomlegacy.com.ng",
    },
    {
      title: "Unibadan Students' Union",
      summary: "A website for the Students' Union of the University of Ibadan.",
      pic: uisu.src,
      link: "https://myowflix.netlify.app",
    },
    {
      title: "Netflix homepage clone",
      summary: "A clone of the homepage of the popular movie platform netflix.",
      pic: myowflix.src,
      link: "https://myowflix.netlify.app",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex overflow-hidden flex-col text-center md:text-left  xl:flex-row relative items-center xl:px-10 min-h-screen md:flex-row justify-evenly mx-auto max-w-full xl:space-y-0 "
    >
      <h3 className="absolute top-12 tracking-[15px] text-gray-500 uppercase">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll  scrollbar-track-gray-400/10  scrollbar-thumb-red-600/40 overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin ">
        {projects.map((project, i) => (
          <div
            className="w-screen flex-shrink-0  flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-full snap-center"
            key={i}
          >
            <a href={project.link}>
              <motion.img
                initial={{ opacity: 0, y: -80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="max-h-56"
                src={project.pic}
                alt="Project picture"
              />
            </a>
            <div>
              <h4 className=" font-bold text-slate-300">{project.title}</h4>
              <p className="text-lg text-slate-300 text-center md:text-left">
                {project.summary}
              </p>
            </div>
          </div>
        ))}
        {/* all the projects */}
      </div>
      <div className="w-full absolute top-[30%] bg-red-600 opacity-[10%] h-72 -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
