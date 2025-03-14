import { React, useEffect } from "react";
import Music from "./Music";
import Projects from "./Projects";
import InViewAnimation from "./InViewAnimation";
import LightSaver from "./Line";

const About = () => {
  return (
    <>
      <div
        id="about"
        className=" min-h-screen flex flex-col items-center md:text-xl"
      >
        <InViewAnimation className=" flex items-center justify-start rounded-xl shadow-md border-border text-5xl w-[44vw] xl:w-[10rem] md:w-[20vw] h-[9vh] backdrop-blur-sm border p-5 overflow-hidden">
          <h1 className=" typewriter ">Hey!</h1>
        </InViewAnimation>
        <LightSaver />
        {/* technologies showcase */}

        <InViewAnimation className="z-[1] flex bg-[#ffffff]  justify-center items-center backdrop-blur-sm rounded-2xl p-6  h-[auto] overflow-hidden text-black shadow-lg shadow-white">
          <p className="transition-all animate-pulse">technologies i use</p>
        </InViewAnimation>
        <LightSaver/>

        {/* skillSet */}
        <InViewAnimation className=" w-[70vw] xl:w-[20rem] md:w-[35vw] h-[9vh] backdrop-blur-sm justify-center border border-border p-5 rounded-md bg-bg overflow-hidden">
          <div className="fromleft flex gap-[3rem] left-0">
            <img className="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img className="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img className="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img className="" width="35vw" src="python.svg" alt="Python Icon" />
            <img className="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img
              className=""
              width="35vw"
              src="tailwind.svg"
              alt="Tailwind Icon"
            />
            <img className="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img className="" width="35vw" src="react.svg" alt="React Icon" />
            <img className="" width="35vw" src="next.svg" alt="Next.js Icon" />

            <img className="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img className="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img className="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img className="" width="35vw" src="python.svg" alt="Python Icon" />
            <img
              className=""
              width="35vw"
              src="tailwind.svg"
              alt="Tailwind Icon"
            />
            <img className="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img className="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img className="" width="35vw" src="react.svg" alt="React Icon" />
            <img className="" width="35vw" src="next.svg" alt="Next.js Icon" />
          </div>
        </InViewAnimation>

        {/* Software Projects*/}
        <Projects />
        <LightSaver/>
        <Music />
      </div>
    </>
  );
};

export default About;
