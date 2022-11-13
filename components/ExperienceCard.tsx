import React from "react";
import picture from "../assets/danadel.jpg";
import { motion } from "framer-motion";

type Props = {};
interface ExperienceProps {
  title: string;
  firm: string;
  started: string;
  ended: string;
  summary: string;
  pic: string;
}

const ExperienceCard = ({
  firm,
  started,
  ended,
  summary,
  title,
  pic,
}: ExperienceProps) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center p-10 bg-[#202020] top-40">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-28 xl:w-[200px] xl:h-[200px] h-28 object-center object-cover rounded-full"
        src={pic}
      />
      <div className="px-0 md:px-10 ">
        {" "}
        <h4 className="text-xl font-light">{title} </h4>
        <p className="font-bold text-sm mt-1">{firm}</p>
        {/* <div className="flex space-x-2 my-2">
          <img
            className="h-5 w-5 rounded-sm"
            src={picture.src}
            alt="tool name"
          />
        </div> */}
        <p className="uppercase py-2 text-gray-300">
          {started} - {ended}
        </p>
        <p>{summary}</p>
      </div>
    </article>
  );
};

export default ExperienceCard;
