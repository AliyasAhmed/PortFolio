import { React, useEffect, useCallback, useRef } from "react";
import Music from "./Music";
import Projects from "./Projects";

// Static list of icons to avoid duplication
const techIcons = [
  "html.svg", "css.svg", "js.svg", "python.svg",
  "node-js.svg", "tailwind.svg", "mongo.svg", 
  "react.svg", "next.svg"
];

const About = () => {
  const observerRef = useRef(null);

  // Memoized scroll handler using Intersection Observer
  const setupObservers = useCallback(() => {
    const elements = document.querySelectorAll(".scrollAnim, .line");
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("scrollAnim")) {
            entry.target.classList.add("fromdown");
          }
          if (entry.target.classList.contains("line")) {
            entry.target.classList.add("glowlight");
          }
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(element => observerRef.current.observe(element));
  }, []);

  useEffect(() => {
    setupObservers();
    return () => observerRef.current?.disconnect();
  }, [setupObservers]);

  return (
    <div id="about" className="min-h-screen flex flex-col items-center md:text-xl">
      {/* Header Section */}
      <div className="flex items-center backdrop-blur-sm rounded-xl shadow-lg border-border p-4 bg-bg text-5xl">
        <h1 className="typewriter">Hey!</h1>
      </div>
      
      <div className="scrollAnim glowlight h-[20vh] bg-[#f8f8f8] w-1 shadow-[0px_10px_20px_2px_aqua]" />

      {/* Technologies Showcase */}
      <div className="z-[1] scrollAnim flex bg-[#ffffff] justify-center items-center backdrop-blur-sm rounded-2xl p-6 h-auto overflow-hidden text-black shadow-lg shadow-white">
        <p className="animate-pulse">technologies i use</p>
      </div>
      
      <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]" />

      {/* Optimized Skillset */}
      <div className="scrollAnim w-[70vw] xl:w-[20rem] md:w-[35vw] h-[9vh] backdrop-blur-sm justify-center border border-border p-5 rounded-md bg-bg overflow-hidden">
        <div className="fromleft flex gap-[3rem] left-0 animate-scroll">
          {[...techIcons, ...techIcons].map((icon, index) => (
            <img 
              key={`${icon}-${index}`}
              width="35" 
              height="35"
              src={icon} 
              alt={icon.replace('.svg', '')} 
              loading="lazy"
              className="min-w-[35px]"
            />
          ))}
        </div>
      </div>

      {/* Projects & Music Sections */}
      <Projects />
      <div className="line h-[20vh] bg-white w-1 shadow-[0px_5px_22px_2px_aqua]" />
      <Music />
    </div>
  );
};

export default About;