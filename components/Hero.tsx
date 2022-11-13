import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgrundCircles from "./BackgrundCircles";
import pic from "../assets/evi.jpg";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi!",
      "Beke Evidence",
      " <React/>",
      "<JavaScript/>",
      "<TypeScript/>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <BackgrundCircles />
      <Image
        className="relative mb-2 rounded-full h-32 w-32 mx-auto"
        src={pic}
        alt="Beke Evidence"
      />
      <div className="z-20">
        <h2 className="text-small uppercase text-gray-500 pb-2  tracking-[15px] ">
          Web Developer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semi-bold">
          <span className="mr-3">
            {text} <Cursor cursorColor="yellow" />{" "}
          </span>
        </h1>
        <div className="pt-5">
          <Link href="#about">
            {" "}
            <button className="herobutton">About</button>
          </Link>
          <Link href="#experience">
            <button className="herobutton">Experience</button>
          </Link>
          <Link href="#skills">
            {" "}
            <button className="herobutton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="herobutton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
