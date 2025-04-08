import React from "react";
import Music from "./Music";
import Projects from "./Projects";
import InViewAnimation from "./InViewAnimation";
import LightSaver from "./Line";
import { motion } from "framer-motion";

export default function About() {
  const icons = [
    "html.svg",
    "css.svg",
    "js.svg",
    "python.svg",
    "node-js.svg",
    "tailwind.svg",
    "mongo.svg",
    "react.svg",
    "next.svg",
  ];

  return (
    <div id="about" className="min-h-screen flex flex-col items-center md:text-xl">
      {/* Welcome */}
      <InViewAnimation className="flex items-center justify-start rounded-xl bg-bg border-border text-2xl lg:text-5xl lg:w-[30vw] sm:w-[37vw] w-[75vw] sm:text-3xl border p-5 overflow-hidden">
        <h1 className="typewriter">Welcome aboard!</h1>
      </InViewAnimation>
      <LightSaver />

      {/* Technologies */}
      <InViewAnimation className="z-10 relative flex bg-bg justify-center items-center rounded-2xl p-6 overflow-hidden text-white cursor-pointer border border-border hover:text-black">
          <p id="animbtn" className="">technologies i use</p>
        </InViewAnimation>
      <LightSaver />

      {/* Skill Set Marquee */}
      <InViewAnimation className="relative w-[70vw] lg:w-[20rem] md:w-[35vw] h-20  backdrop-blur-sm border border-border p-5 rounded-md bg-bg overflow-hidden">
        <div className="w-full h-full overflow-hidden">
          <motion.div
            className="absolute flex gap-12 w-max fromleft"
            animate={{ x: ["0%", "-51.68%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          >
            {[...icons, ...icons].map((src, i) => (
              <img key={i} src={src} alt="" className="h-8" />
            ))}
          </motion.div>
        </div>
      </InViewAnimation>

      {/* Projects */}
      <Projects />
      <LightSaver />

      {/* Music */}
      <Music />
    </div>
  );
}
