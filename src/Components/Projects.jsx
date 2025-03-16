import React from "react";
import musicPlayer from "../assets/Music_player.png";
import Netflix from "../assets/Netflix.png";
import Todo from "../assets/Todoapp.png";
import X from "../assets/X.png";
import Password from '../assets/PasswordManager.png'
import wings from '../assets/Wings.svg'
import LightSaver from "./Line";
import InViewAnimation from "./InViewAnimation";
import {motion} from 'motion/react'

const projects = [
  {
    title: "Music Player",
    image: musicPlayer,
    imageClass:
      "py-3 rounded-lg w-full h-auto hover:scale-[90%] transition-all",
    descriptions: [
      "This music player is basically a Spotify clone, which was entertaining, but I had to add some javascript to make it function. However, I wanted to add some music so that it would function as a regular music player, so I added a few songs from my library and added it to the server. This music player is completely functional and free. It can play music, change the volume, and add new songs, but that's all It can do. i used basic HTML, CSS and Javascript for this project it is responsive for any device",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://musicplayerclone.freewebhostmost.com/",
    buttonText: "Music Player",
  },
  {
    title: "Todo App",
    image: Todo,
    imageClass: "rounded-lg hover:scale-[90%] transition-all",
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
    imageClass: "w-auto h-auto hover:scale-[90%] transition-all",
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
    imageClass: "rounded-lg w-auto h-auto hover:scale-[90%] transition-all",
    descriptions: [
      "One of the smaller projects I worked on was this one as well. I only used HTML and Tailwind, and I mostly concentrated on responsive design, which is much simpler in Tailwind. I completed this project in five hours because I wanted to see how much of a difference it makes when we don't use CSS.",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://project-x-ruddy.vercel.app/",
    buttonText: "X",
    buttonClass: "w-[6rem]",
    // buttonimg:x,
  },
  {
    title: "Password Manager",
    image: Password,
    imageClass: "rounded-lg w-auto h-auto hover:scale-[90%] transition-all",
    descriptions: [
      "Using React and Tailwind, I created this fully working password manager. It also has a full-stack version, however that version is not ready for deployment because authentication is required. This version saves the passwords in your browser, preventing unauthorised access..",
      "Visit the link below to learn more about this initiative.",
    ],
    link: "https://password-manager-6l7n.vercel.app/",
    buttonText: "PassWrd",
    buttonClass: "lg:w-[15rem] w-[9rem]",
    // buttonimg:wings,
    // imgClass:"w-15 hover:text-black",
  },
];

const Projects = () => {
  return (
    <>
      <LightSaver />
      <InViewAnimation className="flex bg-[#ffffff] justify-center items-center rounded-2xl p-6 text-black shadow-lg shadow-white">
        <p className="transition-all animate-pulse">Software Projects</p>
      </InViewAnimation>

      {projects.map((project, index) => (
        <React.Fragment key={index}>
          <LightSaver />

          <InViewAnimation className="border border-border backdrop-blur-sm rounded-2xl bg-bg text-white h-auto lg:w-[65vw] w-[85vw] shadow-shadow shadow-lg md:text-2xl lg:text-xl ">
            <p className="p-2">{project.title}</p>
            <img
              className={project.imageClass}
              src={project.image}
              alt={project.title}
              loading="lazy"
            />
            {project.descriptions.map((desc, index) => (
              <p key={index} className="p-3">
                {desc}
              </p>
            ))}
          </InViewAnimation>

          <LightSaver />
          <InViewAnimation>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`text-white backdrop-blur-md rounded-lg p-4 shadow-lg shadow-shadow transition-all hover:bg-white hover:text-black hover:shadow-lg hover:shadow-white md:text-3xl ${project.buttonClass} `}
              >
                {/* {project.buttonText} */}
                {project.buttonimg?(<img className={project.imgClass} src={project.buttonimg} alt="" />): (<span>{project.buttonText}</span>)}
                
              </motion.button>
            </a>
          </InViewAnimation>
        </React.Fragment>
      ))}
    </>
  );
};

export default Projects;
