import React from "react";
import Starbg from "./Starbg";
import Music from "./Music";
import Projects from "./Projects";

const About = () => {
  const scrollcallback = () => {
    const elements = document.querySelectorAll(".scrollAnim, .line"); // Select both scrollable and line elements
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Check if the element is visible in the viewport

        if (element.classList.contains("scrollAnim")) {
          element.classList.add("fromdown"); // Trigger "fromdown" animation for scrollAnim
        }
        if (element.classList.contains("line")) {
          element.classList.add("glowlight"); // Trigger "glowlight" animation for line
        }
      }
    });
  };

  window.addEventListener("scroll", scrollcallback);
  scrollcallback(); // Initial check in case the element is already in view

  return (
    <>
      {/* <Starbg  /> */}
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
        <div className="line h-[20vh]  bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>

        {/* skillSet */}
        <div class="scrollAnim w-[70vw] xl:w-[20rem] md:w-[35vw] h-[9vh] backdrop-blur-sm justify-center border border-border p-5 rounded-md bg-bg overflow-hidden">
          <div class="fromleft flex gap-[3rem] left-0">
            <img class="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img class="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img class="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img class="" width="35vw" src="python.svg" alt="Python Icon" />
            <img class="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img class="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img class="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img class="" width="35vw" src="react.svg" alt="React Icon" />
            <img class="" width="35vw" src="next.svg" alt="Next.js Icon" />

            <img class="" width="35vw" src="html.svg" alt="HTML Icon" />
            <img class="" width="35vw" src="css.svg" alt="CSS Icon" />
            <img class="" width="35vw" src="js.svg" alt="JavaScript Icon" />
            <img class="" width="35vw" src="python.svg" alt="Python Icon" />
            <img class="" width="35vw" src="tailwind.svg" alt="Tailwind Icon" />
            <img class="" width="35vw" src="node-js.svg" alt="nodejs" />
            <img class="" width="20vw" src="mongo.svg" alt="MongoDB Icon" />
            <img class="" width="35vw" src="react.svg" alt="React Icon" />
            <img class="" width="35vw" src="next.svg" alt="Next.js Icon" />
          </div>
        </div>

        {/* Software Projects*/}
        <Projects/>
        <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]"></div>
        <Music />
      </div>
    </>
  );
};

export default About;
