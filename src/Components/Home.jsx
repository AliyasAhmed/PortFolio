import { React, useRef } from "react";
import InViewAnimation from "./InViewAnimation";
import LightSaver from "./Line";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-screen flex flex-col items-center md:text-2xl"
      >
        {/* GitHub Link */}
        <div className="fixed top-5 right-5 z-10">
          <a
            href="https://github.com/AliyasAhmed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="lg:hidden sm:hidden w-10">
              <img
                src="github-mark.svg"
                loading="lazy"
                alt="GitHub"
                className="w-full"
              />
            </div>
            <div className="hidden lg:block md:block">
              <lord-icon
                src="https://cdn.lordicon.com/lllcnxva.json"
                trigger="hover"
                colors="primary:#000,secondary:#000,tertiary:#fff"
                loading="lazy"
                alt="GitHub"
                style={{ width: "55px", height: "55px" }}
              ></lord-icon>
            </div>
          </a>
        </div>
        {/* Welcome Message */}
        <InViewAnimation className="flex items-center p-6 border border-border backdrop-blur-sm rounded-2xl lg:text-4xl md:text-4xl bg-bg ">
          <h1 className="typewriter">i am aliyas ahmed</h1>
        </InViewAnimation>
        {/* Decorative Line */}
        <LightSaver />
        {/* About Section */}
        <InViewAnimation className="flex justify-center items-justify border border-border rounded-2xl p-6 w-[90vw] bg-bg text-text overflow-hidden text-justify md:text-xl lg:text-2xl">
          A sound and software engineer! I’ve worked on numerous
          software and sound engineering projects. In sound engineering, I’ve
          created music for various labels and designed sounds. My music on Trap
          Party even reached one million views on YouTube! I started producing
          music in high school, then explored sound design and a bit of graphic
          design for five years. My passion for computers led me to programming,
          where I built an AI desktop assistant with Python. I then progressed
          to HTML, CSS, and JavaScript, followed by React, Tailwind CSS, and
          Next.js. While developing software, I also produced music for labels
          and made cinematic music videos. Additionally, I’ve dabbled in
          cybersecurity to enhance my skill set. Below, you can check out my
          software projects and creative work.
        </InViewAnimation>
        {/* Second Decorative Line */}
        <LightSaver />
      </section>
    </>
  );
};

export default Home;
