import React from "react";
import { motion } from "framer-motion";
import pic from "../assets/danadel.jpg";

type Props = {
  directionLeft: true;
  name: string;
  level: number;
  pic: string;
};
interface SkillProps {
  directionLeft: boolean;
  name: string;
  level: number;
  pic: string;
}

const Skill = ({ directionLeft, name, level, pic }: SkillProps) => {
  return (
    <div className="group relative flex curson-pointer">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        src={pic}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32 transition duration-300 ease-in filter group-hover:grayscale "
      />
      <div className="absolute flex items-center justify-center opacity-0 hover:opacity-80 z-0 transition rounded-full border border-gray-500 ease-out w-20 h-20 xl:w-32 xl:h-32 duration-300 group-hover:bg-white">
        <div className="flex items-center justify-center h-4">
          <p className="text-xl font-bold text-black opacity-100 ">{`${level}%`}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
