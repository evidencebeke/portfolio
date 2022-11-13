import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import css from "../assets/css.jpeg";
import html from "../assets/html.png";
import django from "../assets/django.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import vscode from "../assets/vscode.png";
import next from "../assets/next.png";

type Props = {};

const Skills = (props: Props) => {
  const skills = [
    { name: "css", level: 100, pic: css.src, directionLeft: false },
    { name: "tailwind", level: 85, pic: tailwind.src, directionLeft: true },
    { name: "bootstrap", level: 80, pic: bootstrap.src, directionLeft: false },
    { name: "react", level: 90, pic: react.src, directionLeft: true },
    { name: "next", level: 80, pic: next.src, directionLeft: true },
    { name: "django", level: 80, pic: django.src, directionLeft: false },
    { name: "html", level: 90, pic: html.src, directionLeft: false },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex justify-center flex-col text-center md:text-left xl:flex-row relative max-w-[2000px] items-center xl:px-10 min-h-screen  xl:space-y-0"
    >
      <h3 className="absolute top-10 uppercase text-gray-500 text-2xl tracking-[24px] ">
        Skills
      </h3>
      <h3 className="absolute top-20 uppercase text-gray-500 text-sm tracking-[3px] ">
        Hover over a skill to see current proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {skills.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
