import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-start sticky top-0 max-w-7xl mx-auto z-40 md:items-center">
      <motion.div
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
          duration: 1.5,
        }}
        className="flex items-center"
      >
        {/* social icons */}
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://github.com/evidencebeke"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://linkedin.com/in/evidence-beke-46b553a5"
        />
        <SocialIcon
          fgColor="grey"
          bgColor="transparent"
          url="https://github.com/evidencebeke"
        />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex items-center"
      >
        <SocialIcon
          network="email"
          className="cursor-pointer"
          fgColor="grey"
          bgColor="transparent"
          url="mailto:ijobra20@gmail.com"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
};

export default Header;
