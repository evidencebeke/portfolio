import React from "react";
import img from "../assets/pp.png";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      className=" flex relative text-center flex-col md:flex-row justify-evenly mx-auto items-center h-screen  max-w-7xl px-10 md:px-24"
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
    >
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duratin: 1.5 }}
        className="space-y-10 px-0 md:px-10"
      >
        <p className="text-2xl text-slate-300 leading-10">
          I am Beke Evidence. I started web development about three years ago.
          Over this time, I have built a passion for writing beautiful code
          resulting in beautiful websites. I am currently working remotely, and
          am open to work from anywhere in the world.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
