import React from "react";
import musicPlayer from "../assets/Music_player.png";
import Netflix from "../assets/Netflix.png";
import Todo from "../assets/Todoapp.png";
import X from "../assets/X.png";
import Password from "../assets/PasswordManager.png";
import xgif from "../assets/gif/x.gif";
import LightSaver from "./Line";
import InViewAnimation from "./InViewAnimation";
import { motion } from "motion/react";
import speaker from "../assets/gif/musicplayer.gif";

const projects = [
  {
    title: "Music Player",
    image: musicPlayer,
    imageClass: "py-3 rounded-lg w-full h-auto  ",
    descriptions: [
      "This music player is basically a Spotify clone, which was entertaining, but I had to add some javascript to make it function. However, I wanted to add some music so that it would function as a regular music player, so I added a few songs from my library and added it to the server. This music player is completely functional and free. It can play music, change the volume, and add new songs, but that's all It can do. i used basic HTML, CSS and Javascript for this project it is responsive for any device",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://musicplayerclone.freewebhostmost.com/",
    buttonText: "Music Player",
    buttonimg: speaker,
    buttonClass: "w-[25vw] lg:w-[10vw] md:w-[15vw] flex justify-center",
    imgClass: "w-[8vw] lg:w-[2.4vw] sm:w-[5vw]",
  },
  {
    title: "Todo App",
    image: Todo,
    imageClass: "rounded-lg",
    descriptions: [
      "When I was studying React and Tailwind, I created this to-do app because I wanted to create a project that wasn't in HTML, CSS, or JS, and React was ideal for that. I created this using Tailwind and React. It can add, delete, and edit tasks, and it uses the browser's storage to save the most recent tasks so you don't lose any. It can do anything that other tasks can accomplish. it is responsive for any device.",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://what-to-do-gold.vercel.app/",
    buttonText: "WhatToDo",
  },
  {
    title: "Netflix Clone",
    image: Netflix,
    imageClass: "w-auto h-auto",
    descriptions: [
      "Although it shouldn't be on the list, I didn't include JS when I first started learning HTML and CSS because I wasn't sure what the That language's syntax was. My first HTML/CSS project, which took two hours to complete, was this one. This was, I suppose, my first web programming project. That is the rationale behind my inclusion of this.",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://netflix-clone-mu-rose.vercel.app/",
    buttonText: "NETFLIX",
    // buttonimg:NetBtn,
  },
  {
    title: "X Clone",
    image: X,
    imageClass: "rounded-lg w-auto h-auto ",
    descriptions: [
      "One of the smaller projects I worked on was this one as well. I only used HTML and Tailwind, and I mostly concentrated on responsive design, which is much simpler in Tailwind. I completed this project in five hours because I wanted to see how much of a difference it makes when we don't use CSS.",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://project-x-ruddy.vercel.app/",
    buttonText: "X",
    buttonClass:
      "w-[25vw] lg:w-[9vw] md:w-[10vw] sm:w-[9vw] flex justify-center",
    buttonimg: xgif,
    imgClass: "w-[6vw] lg:w-[2vw] sm:w-[4vw]",
  },
  {
    title: "Password Manager",
    image: Password,
    imageClass: "rounded-lg w-auto h-auto",
    descriptions: [
      "Using React and Tailwind, I created this fully working password manager. It also has a full-stack version, however that version is not ready for deployment because authentication is required. This version saves the passwords in your browser, preventing unauthorised access..",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://password-manager-6l7n.vercel.app/",
    buttonText: "PassWrd",
    buttonClass: "lg:w-[15rem] md:w-[18rem] w-[9rem]",
    // buttonimg:wings,
    // imgClass:"w-15 hover:text-black",
  },
];

export default function Projects() {
  return (
    <>
      <LightSaver />
      <InViewAnimation className="relative overflow-hidden hover:text-black flex justify-center items-center rounded-2xl p-6 text-white border border-border z-[1] backdrop-blur-sm">
        <p id="animbtn" className="cursor-pointer z-10">
          Software Projects
        </p>
      </InViewAnimation>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <LightSaver />

          <InViewAnimation className="rounded-2xl backdrop-blur-sm text-white h-auto lg:w-[65vw] md:w-[75vw] w-[85vw] md:text-2xl lg:text-xl overflow-hidden shadow-shadow shadow-lg z-[1]">
            <p className="p-2">{project.title}</p>
            <div className="overflow-hidden">
              <motion.img
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                animate={{
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeInOut" },
                }}
                className={project.imageClass}
                src={project.image}
                alt={project.title}
                loading="lazy"
              />
            </div>
            {project.descriptions.map((desc, index) => (
              <p key={index} className="p-3">
                {desc}
              </p>
            ))}
          </InViewAnimation>

          <LightSaver />
          <InViewAnimation>
            <a
              className={`overflow-hidden relative`}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                id="animbtn"
                className={`text-white overflow-hidden relative rounded-lg p-4 border border-border transition-all hover:text-black md:text-3xl z-[10] backdrop-blur-sm ${project.buttonClass} `}
              >
                {/* {project.buttonText} */}
                {project.buttonimg ? (
                  <img
                    id="animbtn"
                    className={project.imgClass}
                    src={project.buttonimg}
                    alt=""
                  />
                ) : (
                  <span id="animbtn">{project.buttonText}</span>
                )}
              </button>
            </a>
          </InViewAnimation>
        </React.Fragment>
      ))}
    </>
  );
}
