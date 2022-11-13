import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import danadel from "../assets/danadel.jpg";
import hng from "../assets/hng.png";
// import css from "../assets/css.jpeg";
// import html from "../assets/html.png";
// import django from "../assets/django.png";
// import tailwind from "../assets/tailwind.png";
// import react from "../assets/react.png";
// import bootstrap from "../assets/bootstrap.png";
// import vscode from "../assets/vscode.png";
// import next from "../assets/next.png";

type Props = {};

const WorkExperience = (props: Props) => {
  const experiences = [
    {
      title: "Web Developer",
      firm: "Danadel Solutions",
      started: "January 2022",
      ended: "date",
      summary:
        "In charge of the building and deployment of the company's web based resources. These resources include the company's main website as well as websites for the company's businesses",
      pic: danadel.src,
    },
    {
      title: "Frontend Developer Intern",
      firm: "Hotel NG",
      started: "August 2021",
      ended: "October 2021",
      summary:
        "At the internship, built the frontend of two parts of a company chat system called zuri chat. First joined in building a calendar plugin, and then a DM plugin, which was the main component of Zurichat (the software we built).",
      pic: hng.src,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" flex overflow-hidden flex-col md:flex-row relative h-screen items-center text-left max-w-full px-10 justify-evenly mx-auto"
    >
      <h3 className="tracking-[24px] uppercase text-center text-gray-500 absolute top-20">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll  p-10 snap-x snap-mandatory absolute top-24 scrollbar-thin scrollbar-track-gray-400/10  scrollbar-thumb-red-600/40">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} {...experience} />
        ))}
      </div>
    </motion.div>
  );
};

export default WorkExperience;
