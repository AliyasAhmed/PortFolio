import {React, useEffect} from "react";
import Music from "./Music";
import Projects from "./Projects";

const About = () => {
  useEffect(() => {
    const scrollcallback = () => {
      const elements = document.querySelectorAll(".scrollAnim, .line");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (element.classList.contains("scrollAnim")) {
            element.classList.add("fromdown");
          }
          if (element.classList.contains("line")) {
            element.classList.add("glowlight");
          }
        }
      });
    };

    window.addEventListener("scroll", scrollcallback);
    scrollcallback(); // Initial check in case elements are already in view

    return () => {
      window.removeEventListener("scroll", scrollcallback); // Cleanup
    };
  }, []);
  return (
    <>
      <div
        id="about"
        className=" min-h-screen flex flex-col items-center md:text-xl"
      >
        <div className=" flex justify-center items-center backdrop-blur-sm rounded-xl shadow-lg  border-border p-4 bg-bg ">
          <h1>
            <p className="z-[1] typewriter text-5xl">Hey!</p>
          </h1>
        </div>
        <div className=" glowlight h-[20vh] bg-[#f8f8f8] w-1 shadow-[0px_10px_20px_2px_aqua]"></div>

        {/* technologies showcase */}

        <div className="z-[1] scrollAnim flex bg-[#ffffff]  justify-center items-center backdrop-blur-sm rounded-2xl p-6  h-[auto] overflow-hidden text-black shadow-lg shadow-white">
          <p className="transition-all animate-pulse">technologies i use</p>
        </div>
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

        {/* skillSet */}
        <div className="scrollAnim w-[70vw] xl:w-[20rem] md:w-[35vw] h-[9vh] backdrop-blur-sm justify-center border border-border p-5 rounded-md bg-bg overflow-hidden">
          <div className="fromleft flex gap-[3rem] left-0">
            <img className="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img className="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img className="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img className="" width="35vw" src="python.svg" alt="Python Icon" />
            <img className="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img className="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img className="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img className="" width="35vw" src="react.svg" alt="React Icon" />
            <img className="" width="35vw" src="next.svg" alt="Next.js Icon" />

            <img className="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img className="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img className="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img className="" width="35vw" src="python.svg" alt="Python Icon" />
            <img className="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img className="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img className="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img className="" width="35vw" src="react.svg" alt="React Icon" />
            <img className="" width="35vw" src="next.svg" alt="Next.js Icon" />
          </div>
        </div>

        {/* Software Projects*/}
        <Projects />
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <Music />
      </div>
    </>
  );
};

export default About;
