import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import WorkExperience from "../components/WorkExperience";
import styles from "../styles/Home.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/10  scrollbar-thumb-red-600/40 z-0">
      <Head>
        <title>Beke Evidence</title>
        <meta name="description" content="Beke's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className="snap-center" id="hero">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <ToastContainer hideProgressBar />
    </div>
  );
}
